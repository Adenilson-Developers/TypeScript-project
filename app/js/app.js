//  const negociacao = new Negociacao (new Date(), 1, 100);
//  console.log('aqui');
const controller = new NegociacaoControler();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adicionar.bind(controller));
