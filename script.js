const btnEmpezarPartida = document.getElementById("empezar_partida");

const tablero = document.getElementById("tablero")

const main = document.getElementById("main")

const header = document.getElementById("header")

btnEmpezarPartida.addEventListener('click', () => {
    
    tablero.style.display = "block";

    header.style.display = "none"; 

    main.style.display = "none"; 
    
});