let min = 1;
let max = 4;
let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let respuestahumana = prompt("Escoje entre piedra, papel o tijeras").toLowerCase();
    return respuestahumana;
}

function playGame() {


    for (let i = 0; i < 5; i++) {

        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();

        function playRound(humanSelection, computerSelection) {

            if (humanSelection === computerSelection) {
                alert("Es un empate");
                alert("Este es ahora el marcador de la computadora: " + computerScore);
                alert("Este es ahora tu marcador: " + humanScore);
            } else if (humanSelection === "tijeras" && computerSelection === "papel" || humanSelection === "papel" && computerSelection === "piedra" || humanSelection === "piedra" && computerSelection === "tijeras") {
                humanScore++;
                alert("Ganaste");
                alert("Este es ahora el marcador de la computadora: " + computerScore);
                alert("Este es ahora tu marcador: " + humanScore);
            } else {
                computerScore++;
                alert("Gano la computadora");
                alert("Este es ahora el marcador de la computadora: " + computerScore);
                alert("Este es ahora tu marcador: " + humanScore);
            }

        }

        playRound(computerSelection, humanSelection);
        console.log("Tu marcador: " + humanScore);
        console.log("Computadora: " + computerScore);

    }

    if (humanScore > computerScore) {
        alert("Ganaste eres genial")
    } else if (humanScore === computerScore) {
        alert('Es un empate')
    } else {
        alert('La computadora gano :(')
    }
}

playGame();

