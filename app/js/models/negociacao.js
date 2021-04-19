class Negociacao {
    //    private _data: Date;
    //    private _quantidade: number;
    //    private _valor: number;
    constructor(_data, _quantidade, _valor) {
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // Regras: uma negociação depois que criado não pode ter suas propriedades alteradas
    // o "_" indica uma conversão no javascript que diz que as essas propriedades não pode ser alterada
    // fora dos métodos da propria classe
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
