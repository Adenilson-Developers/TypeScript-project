import { Igualavel } from './Igualavel';
import { Imprimivel } from './Imprimivel';
import { Negociacao } from './negociacao';

 export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {
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

    ehIgual(negociacoes: Negociacoes): boolean{

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray());
    }
}

//  o array espera um tipo de dados, tipo de dados <Negociacao>