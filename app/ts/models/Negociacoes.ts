import { Negociacao } from './negociacao';

 export class Negociacoes {
    private _negociacoes: Array<Negociacao> = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao)
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao []).concat(this._negociacoes);
    }

    paraTexto(): void{
        console.log("Impressão")
        console.log(JSON.stringify(this._negociacoes));
    }
}

//  o array espera um tipo de dados, tipo de dados <Negociacao>