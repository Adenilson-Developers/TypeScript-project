// const negociacao = new Negociacao (new Date(), 1, 100);
// console.log(negociacao.quantidade);

const controller = new NegociacaoControler();

document
      .querySelector('.form')
      .addEventListener('submit', controller.adicionar.bind(controller));