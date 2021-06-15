import { Igualavel } from "./Igualavel";
import { Imprimivel } from "./Imprimivel";

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {

//    private _data: Date;
//    private _quantidade: number;
//    private _valor: number;
    
    constructor( private _data: Date, private _quantidade: number, private _valor: number){
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
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

    paraTexto(): void{
        console.log("Impressão")
        console.log(
            `Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            volume: ${this.volume}
            `
        );
    }

    ehIgual(negociacao: Negociacao): boolean{

        return this.data.getDate() == negociacao.data.getDate()
            && this.data.getMonth() == negociacao.data.getMonth()
            && this.data.getFullYear() == negociacao.data.getFullYear();
    }
}


