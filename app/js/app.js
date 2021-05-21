const controller = new NegociacaoControler();
$('.form').submit(controller.adicionar.bind(controller));
