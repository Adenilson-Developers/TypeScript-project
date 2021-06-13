import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { Negociacoes } from '../models/Negociacoes';
import { Negociacao } from '../models/negociacao';
import { domInject } from '../helpers/decorators/domInject';
import { NegociacaoParcial } from '../models/NegociacaoParcial';
import { throttle } from '../helpers/decorators/throttle';
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
    @throttle()
    // @logarTempoDeExecucao()
    adicionar(){
        
        //const t1 = performance.now();

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

        // const t2 = performance.now();

        //console.log(`O tempo de execução da adiciona é: ${ t2 - t1 } ms `);


        // this._negociacoes.paraArray().length = 0

        this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        });

        
       
    }

    @throttle()
    importaDados(){
        function isOk(res: Response){
            if(res.ok){
                return res;
            }else{
                throw new Error(res.statusText);
            }

        }
        fetch('http://localhost:8080/dados')
        .then(res => isOk(res))
        .then(res => res.json())
        .then((dados: NegociacaoParcial[]) => {
        dados
            .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            .forEach(negociacao => this._negociacoes.adicionar(negociacao))

        this._negociacoesView.update(this._negociacoes);

        })
        .catch( err => console.log(err.message));
        
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

