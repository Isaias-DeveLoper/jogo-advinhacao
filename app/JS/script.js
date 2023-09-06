$(document).ready(function () {
    let numeroAleatorio = 0;
    let tentativas = 0;

    function GerarNumeroAleatorio() {
        numeroAleatorio = Math.round(Math.random() * 10);
    }

    GerarNumeroAleatorio();

    $('.screen2').hide();

    $('#enviar_numero').submit(function (event) {
        event.preventDefault();

        let numeroDigitado = $("#inputNumber").val();

            if (numeroDigitado == numeroAleatorio) {
                $('#mensagem_erro').text(``);
                $('#mensagem').text(`Você acertou em ${tentativas} tentativas!`);
                $('input').val('');
                $('.screen1').hide();
                $('.screen2').show();
                numeroAleatorio = 0;
                tentativas = 0;
            } else {
                tentativas += 1;
                $('#mensagem_erro').text(`Você errou! Tente novamente.`);
                $('input').val('');
            }
    })

    $('#btTry').click(function () {
        tentativas = 0;
        $('.screen2').hide();
        GerarNumeroAleatorio();
        $('.screen1').show();
    })
});
