class Negociacao {

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

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

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    // Esses methodos que permite acessar os valores.
}