const btnEmpezarPartida = document.getElementById("empezar_partida");

const tablero = document.getElementById("tablero")

const table1 = document.getElementById("table1")

const header = document.getElementById("header")

btnEmpezarPartida.addEventListener('click', () => {
    
    tablero.style.display = "block";

    header.style.display = "none"; 

    table1.style.display = "none"; 
    
});