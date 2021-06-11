import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/negociacao';
import { domInject } from '../helpers/decorators/domInject';
// import { logarTempoDeExecucao } from '../helpers/decorators/index';

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject("#valor")
    private _inputValor: JQuery;
    
    // private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._negociacoesView.update(this._negociacoes);
    }

    // @logarTempoDeExecucao()
    adicionar(event: Event){
        
        //const t1 = performance.now();

        event.preventDefault();

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo) {
            this._mensagemView.update('Negociações apenas em dias da semana!')
            return
        }
        
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        this._negociacoes.adicionar(negociacao);

        this._negociacoesView.update(this._negociacoes);

        this._mensagemView.update('Negociação adicionada com sucesso!');

        const t2 = performance.now();

        //console.log(`O tempo de execução da adiciona é: ${ t2 - t1 } ms `);


        // this._negociacoes.paraArray().length = 0

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });
        
       
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

