function tocarSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {

        console.log('Não existe essa fita');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');


for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (apertou) {
        if(apertou.code === "Enter" || apertou.code === "Space") {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}