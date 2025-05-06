const btnEmpezarPartida = document.getElementById("empezar_partida");

const btnVolver = document.getElementById("volver");

const tablero = document.getElementById("tablero");

const table1 = document.getElementById("table1");

const header = document.getElementById("header");

const cartas = document.getElementById("cartas");

const imagenesAnimales = ["loro.jpg", "ardilla.jpg", "cebra.jpg", "elefante.jpg", "conejo.jpg",
"castor.jpg", "buho.jpg", "delfin.jpg", "mono.jpg", "perro.jpg", "leon.jpg", 
"gallina.jpg", "koala.jpg", "lobo.jpg", "rana.jpg", "tigre.jpg"
];

const imagenesComida = ["burritos.jpg","curry.jpg", "cebiche.jpg", "espaguetis.jpg","pollo.jpg", "salmon.jpg", "sushi.jpg"

];

const imagenesFutbol = [

];

btnEmpezarPartida.addEventListener('click', () => {


    const cronometro = document.getElementById("cronometro").textContent;
    const contador = document.getElementById("contador").textContent;
    const nombre = document.getElementById("nombre").value;
    const nomJugador = document.getElementById("nomJugador")
    nomJugador.innerText = nombre;
    const dificultad = document.getElementById("dificultad_partida").value;
    const modo = document.get
    var accederJuego = true;
    const filas = document.getElementById("numero1").value;
    const columnas = document.getElementById("numero2").value;
    const resultado = filas * columnas;
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

    cartas.style.display = "grid";
    cartas.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
    cartas.style.gridTemplateRows = `repeat(${filas}, 1fr)`;
    cartas.style.gap = "10px";

});

function crearCartas(numero) {
    cartas.innerHTML = "";

    let totalImagenes = numero / 2;
    let imagenesSeleccionadas = [];

    while (imagenesSeleccionadas.length < totalImagenes) {
        let imagenAleatoria = imagenesAnimales[Math.floor(Math.random() * imagenesAnimales.length)];
        if (!imagenesSeleccionadas.includes(imagenAleatoria)) {
            imagenesSeleccionadas.push(imagenAleatoria);
        }
    }

    imagenesSeleccionadas = [...imagenesSeleccionadas, ...imagenesSeleccionadas];
    imagenesSeleccionadas = imagenesSeleccionadas.sort(() => Math.random() - 0.5);

    let primeraCarta = null;
    let segundaCarta = null;
    let bloqueo = false;

    for (let i = 0; i < numero; i++) {
        const carta = document.createElement('div');
        carta.classList.add("carta");
        carta.style.backgroundImage = `url('/images/dorso_carta.jpg')`;
        carta.dataset.imagen = imagenesSeleccionadas[i];

        carta.addEventListener('click', () => {
            if (bloqueo || carta.classList.contains("volteada") || carta.classList.contains("bloqueada")) return;

            carta.classList.add("volteada");
            carta.style.backgroundImage = `url('/images/${carta.dataset.imagen}')`;


            if (!primeraCarta) {
                primeraCarta = carta;
            } else {
                segundaCarta = carta;
                bloqueo = true;

                if (primeraCarta.dataset.imagen === segundaCarta.dataset.imagen) {
                    primeraCarta.classList.add("bloqueada");
                    segundaCarta.classList.add("bloqueada");
                    resetTurno();
                } else {
                    setTimeout(() => {
                        primeraCarta.classList.remove("volteada");
                        primeraCarta.style.backgroundImage = `url('/images/dorso_carta.jpg')`;

                        segundaCarta.classList.remove("volteada");
                        segundaCarta.style.backgroundImage = `url('/images/dorso_carta.jpg')`;

                        resetTurno();
                    },500);
                }
            }
        });

        cartas.appendChild(carta);
    }

    function resetTurno() {
        primeraCarta = null;
        segundaCarta = null;
        bloqueo = false;
    }
}


let control;
let centesimas = 0;
let segundos = 0;
let minutos = 0;
let cronometroIniciado = false;

function cronometro() {
    centesimas++;
    if (centesimas >= 100) {
        centesimas = 0;
        segundos++;
    }
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }
    const formato = 
        (minutos < 10 ? "0" + minutos : minutos) + ":" +
        (segundos < 10 ? "0" + segundos : segundos) + ":" +
        (centesimas < 10 ? "0" + centesimas : centesimas);
    
    document.getElementById("cronometro").textContent = formato;
}

function iniciarCronometro() {
    if (!cronometroIniciado) {
        control = setInterval(cronometro, 10);
        cronometroIniciado = true;
    }
}

btnVolver.addEventListener('click', () => {
    window.location.href = "index.html";
});
