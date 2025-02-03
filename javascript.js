let min = 1;
let max = 4;
let contadorGeneral = 0;
let marcadorH = 0;
let marcadorC = 0;
let marcador = document.querySelector('.marcador');
let juegosJugados = document.createElement('span');
juegosJugados.textContent = `Juegos jugados: ${contadorGeneral}`;
juegosJugados.style.color = 'black';
marcador.appendChild(juegosJugados);
let spanHumano = document.createElement('span');
spanHumano.textContent = `Tu marcador: ${marcadorH}`;
spanHumano.style.color = 'black';
marcador.appendChild(spanHumano);
let spanComputadora = document.createElement('span');
spanComputadora.textContent = `Computadora: ${marcadorC}`;
spanComputadora.style.color = 'black';
marcador.appendChild(spanComputadora);


function getComputerChoice() {
    let resultado = Math.floor(Math.random() * (max - min) + min);
    if (resultado === 1) {
        return "piedra";
    } else if (resultado === 2) {
        return "papel";
    } else if (resultado === 3) {
        return "tijeras";
    }
}

function playRound(humanSelection, computerSelection) {

    if (humanSelection === computerSelection) {
        alert("Es un empate");
        contadorGeneral++;
    } else if (humanSelection === "tijeras" && computerSelection === "papel" || humanSelection === "papel" && computerSelection === "piedra" || humanSelection === "piedra" && computerSelection === "tijeras") {
        alert("Ganaste");
        marcadorH++;
        contadorGeneral++;
        spanHumano.textContent = `Tu marcador: ${marcadorH}`;
        spanComputadora.textContent = `Computadora: ${marcadorC}`;
    } else {
        alert("Gano la computadora");
        marcadorC++;
        contadorGeneral++;
        spanHumano.textContent = `Tu marcador: ${marcadorH}`;
        spanComputadora.textContent = `Computadora: ${marcadorC}`;
    }

    juegosJugados.textContent = `Juegos jugados: ${contadorGeneral}`;

    if (contadorGeneral === 5) {
        spanHumano.remove();
        spanComputadora.remove();
        juegosJugados.remove();
        document.removeEventListener('click', accionar);
        if (marcadorH > marcadorC) {
            let resultado = document.createElement('span');
            resultado.textContent = `Ganaste por ${marcadorH} a ${marcadorC} eres hermoso \u2764\uFE0F`;
            resultado.style.fontSize = '24px';
            marcador.appendChild(resultado);
            let jugarOtro = document.createElement('button');
            jugarOtro.textContent = 'Volver a jugar';
            jugarOtro.addEventListener('click', e => {
                location.reload();
            })
            marcador.appendChild(jugarOtro);
        } else if (marcadorC > marcadorH) {
            let resultado = document.createElement('span');
            resultado.textContent = `Perdiste por ${marcadorC} a ${marcadorH} pero igual eres hermoso \u2764\uFE0F`;
            resultado.style.fontSize = '24px';
            marcador.appendChild(resultado);
            let jugarOtro = document.createElement('button');
            jugarOtro.textContent = 'Volver a jugar';
            jugarOtro.addEventListener('click', e => {
                location.reload();
            })
            marcador.appendChild(jugarOtro);
        } else if (marcadorC === marcadorH) {
            let resultado = document.createElement('span');
            resultado.textContent = 'Buuu empate que aburrido, vuelve a intentar :)';
            resultado.style.fontSize = '24px';
            marcador.appendChild(resultado);
            let jugarOtro = document.createElement('button');
            jugarOtro.textContent = 'Volver a jugar';
            jugarOtro.addEventListener('click', e => {
                location.reload();
            })
            marcador.appendChild(jugarOtro);
        }
    }

}

function accionar(e) {
    if (e.target.matches('.piedra')) {
        let computerSelection = getComputerChoice();
        let humanSelection = 'piedra';
        playRound(humanSelection, computerSelection);
    } else if (e.target.matches('.papel')) {
        let computerSelection = getComputerChoice();
        let humanSelection = 'papel';
        playRound(humanSelection, computerSelection);
    } else if (e.target.matches('.tijeras')) {
        let computerSelection = getComputerChoice();
        let humanSelection = 'tijeras';
        playRound(humanSelection, computerSelection);
    }
}

document.addEventListener('click', accionar)






