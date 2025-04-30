const btnEmpezarPartida = document.getElementById("empezar_partida");

const tablero = document.getElementById("tablero")

const table1 = document.getElementById("table1")

const header = document.getElementById("header")

btnEmpezarPartida.addEventListener('click', () => {

<<<<<<< HEAD
    
=======
    const cronometro = document.getElementById("cronometro").textContent;
    const contador = document.getElementById("contador").textContent;

    header.style.display = "none"; 

    table1.style.display = "none"; 

    tablero.style.display = "block"

    tablero.innerHTML = `
    <h3>Cronómetro: ${cronometro}</h3>
    <h3>Intentos: ${contador}</h3>
`;
>>>>>>> 28100ec2024bc4867aee5f482eaff67af6519293
});