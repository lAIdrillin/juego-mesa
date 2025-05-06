const btnEmpezarPartida = document.getElementById("empezar_partida");

const btnVolver = document.getElementById("volver");

const tablero = document.getElementById("tablero");

const table1 = document.getElementById("table1");

const header = document.getElementById("header");

const cartas = document.getElementById("cartas");


btnEmpezarPartida.addEventListener('click', () => {


    const cronometro = document.getElementById("cronometro").textContent;
    const contador = document.getElementById("contador").textContent;
    const nombre = document.getElementById("nombre").value;
    const nomJugador = document.getElementById("nomJugador")
    nomJugador.innerText = nombre;
    const dificultad = document.getElementById("dificultad_partida").value;
    const modo = document.get
    var accederJuego = true;
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = numero1 * numero2;
    //const tema = document.getElementById("tema_partida").value;


    //AÑADIR VALIDACIÓN PARA QUE SI HAY SELECCIONADA UNA DIFICULTAD, NO SE PUEDA PERSONALIZAR EL TABLERO Y VICEVERSA
    
    if(nombre === "") {
        alert("¡Nombre vacío! Necesitas un nombre para jugar.")
        accederJuego = false;
        return;
    }

    if (dificultad === "" && (numero1 === "" || numero2 === "")) {
        alert("Por favor, selecciona una dificultad o crea un tablero personalizado.");
        accederJuego = false;
        return;
    }

    if (resultado % 2) {
        alert("Error, para el juego de las parejas las cartas tienen que ser pares.")
        accederJuego = false;
        return;
    }

    if (resultado > 36) {
        alert("Actualmente no disponemos de tantas cartas, el número máximo de cartas es 36.")
        accederJuego = false;
        return;
    }
    
    if(accederJuego){

    header.style.display = "none"; 

    table1.style.display = "none"; 

    tablero.style.display = "block"

    let numero;

    switch (dificultad) {
        case "facil":
            numero = 16
            cartas.className = "grid-4x4";
            break;
        case "medio":
            numero = 20;
            cartas.className = "grid-5x4";
            break;
        case "dificil":
            numero = 36;
            cartas.className = "grid-6x6";
            break;
        default:
            numero = resultado;
    }

    crearCartas(numero);

    }
});

function crearCartas(numero) {

    cartas.innerHTML = "";

    for(let i = 1; i <=numero; i++) {
        const carta = document.createElement('div')
        carta.classList.add("carta"); 
        cartas.appendChild(carta);
        carta.addEventListener('click', () => { 
            carta.classList.toggle("volteada");
        });
    }
}

btnVolver.addEventListener('click', () => {
    window.location.href = "index.html";
});
