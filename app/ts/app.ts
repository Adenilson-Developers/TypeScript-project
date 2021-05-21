//  const negociacao = new Negociacao (new Date(), 1, 100);
//  console.log('aqui');


// adicionando JQuery
 const controller = new NegociacaoControler();
$('.form').submit(controller.adicionar.bind(controller));
// document
//     .querySelector('.form')      
//     .addEventListener('submit', controller.adicionar.bind(controller));

