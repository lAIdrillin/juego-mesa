const btnEmpezarPartida = document.getElementById("empezar_partida");

const tablero = document.getElementById("tablero")

const table1 = document.getElementById("table1")

const header = document.getElementById("header")

btnEmpezarPartida.addEventListener('click', () => {

    const cronometro = document.getElementById("cronometro").value;
    const contador = document.getElementById("contador").value;

    header.style.display = "none"; 

    table1.style.display = "none"; 

    tablero.style.display = "block"

    tablero.innerHTML = `
    <h2>Cronómetro${cronometro}</h2>
    <h4>Intentos: ${contador}</h4>
`;
});