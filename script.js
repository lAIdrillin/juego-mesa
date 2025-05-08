const btnEmpezarPartida = document.getElementById("empezar_partida");

const btnMenuPrincipal = document.querySelectorAll(".menu_principal");

const btnHistorial = document.querySelectorAll(".historial")

const btnLimpiarHistorial = document.getElementById("limpiar_historial")

const tablero = document.getElementById("tablero");

const table1 = document.getElementById("table1");

const header = document.getElementById("header");

const cartas = document.getElementById("cartas");

const selectDificultad = document.getElementById("dificultad_partida");

selectDificultad.addEventListener("change", function() {
    const personalizar_tablero = document.getElementById("personalizar_tablero")
    const dificultadSeleccionada = selectDificultad.value;
    if(dificultadSeleccionada === "Personalizado") {
            personalizar_tablero.style.display = "block";
        }
    else {
        personalizar_tablero.style.display = "none";
    }
    });
const imagenesAnimales = ["loro.jpg", "ardilla.jpg", "cebra.jpg", "elefante.jpg", "conejo.jpg",
"castor.jpg", "buho.jpg", "delfin.jpg", "mono.jpg", "perro.jpg", "leon.jpg", 
"gallina.jpg", "koala.jpg", "lobo.jpg", "rana.jpg", "tigre.jpg"
];

const imagenesComida = ["burritos.jpg","curry.jpg", "cebiche.jpg", "espaguetis.jpg", "pollo.jpg", 
"salmon.jpg", "sushi.jpg", "paella.jpg", "quiche.jpg", "tacos.jpg", "pizza.jpg", "lentejas.jpg", "lasaña.jpg",
"polenta.jpg", "sawarma.jpg", "risoto.jpg", "yogur.jpg", "croquetas.jpg"
];

const imagenesFutbol = ["realmadrid.png", "realsociedad.png", "espanyol.png", "celta.png", "atlmadrid.png", "sevilla.png", 
"barcelona.png", "athletic.png", "alaves.png", "deportivocoruna.png", "elche.png", "zaragoza.png", "realoviedo.png",
"sporting.png", "cordoba.png", "malaga.png", "villarreal.png", "valencia.png"];

let contadorPares = 0;
let cartasVolteadas= [];

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
    const tema = document.getElementById("tema_partida").value;



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

    if (tema === "") {
        alert("Por favor, selecciona el tema que más te guste para tu partida.")
        accederJuego = false;
        return;
    }

    if(accederJuego){

    header.style.display = "none"; 

    table1.style.display = "none"; 

    tablero.style.display = "block";

    let numero;

    switch (dificultad) {
        case "Fácil":
            numero = 16
            cartas.className = "grid-4x4";
            break;
        case "Medio":
            numero = 20;
            cartas.className = "grid-5x4";
            break;
        case "Difícil":
            numero = 36;
            cartas.className = "grid-6x6";
            break;
        default:
            numero = resultado;
    }

    crearCartas(numero, tema);


    }

    //

    cartas.style.display = "grid";
    cartas.style.gridTemplateColumns = `repeat(${columnas}, 1fr)`;
    cartas.style.gridTemplateRows = `repeat(${filas}, 1fr)`;
    cartas.style.gap = "10px";
    cartas.style.transform = "scaleX(-1)";

});

function crearCartas(numero, tema) {
    cartas.innerHTML = "";

    let totalImagenes = numero / 2;
    let imagenesSeleccionadas = [];

    switch (tema) {
        case "animales":
            while (imagenesSeleccionadas.length < totalImagenes) {
                let imagenAleatoria = imagenesAnimales[Math.floor(Math.random() * imagenesAnimales.length)];
                if (!imagenesSeleccionadas.includes(imagenAleatoria)) {
                    imagenesSeleccionadas.push(imagenAleatoria);

                }  
            }
            break;        
        case "comidas":
            while (imagenesSeleccionadas.length < totalImagenes) {
                let imagenAleatoria = imagenesComida[Math.floor(Math.random() * imagenesComida.length)];
                if (!imagenesSeleccionadas.includes(imagenAleatoria)) {
                    imagenesSeleccionadas.push(imagenAleatoria);

                }  
            }
            break;   
        case "futbol":
            while (imagenesSeleccionadas.length < totalImagenes) {
                let imagenAleatoria = imagenesFutbol[Math.floor(Math.random() * imagenesFutbol.length)];
                if (!imagenesSeleccionadas.includes(imagenAleatoria)) {
                    imagenesSeleccionadas.push(imagenAleatoria);

                }  
            }
            break;   
    }
    while (imagenesSeleccionadas.length < totalImagenes) {
        let imagenAleatoria = imagenesFutbol[Math.floor(Math.random() * imagenesFutbol.length)];
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
            iniciarCronometro();

            if (!primeraCarta) {
                primeraCarta = carta;
            } else {
                segundaCarta = carta;
                bloqueo = true;

                if (primeraCarta.dataset.imagen === segundaCarta.dataset.imagen) {

                    if (primeraCarta.dataset.imagen === "pollo.jpg") {
                        mostrarMensaje("🐣 ¡Has desbloqueado el pollo de la suerte!");
                    }
                
                    primeraCarta.classList.add("bloqueada");
                    segundaCarta.classList.add("bloqueada");
                    verificarFinDeJuego();
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
            contarPares()

        });
        cartas.appendChild(carta);

        function contarPares() {
            cartasVolteadas.push(this);

            if (cartasVolteadas.length === 2) {
                contadorPares++; 
                document.getElementById("contador").textContent = contadorPares;
                

                cartasVolteadas = []; 
            }
        }

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

btnMenuPrincipal.forEach(boton => {
    boton.addEventListener('click', () => {
        window.location.href = "index.html";
    });
});

btnHistorial.forEach(boton => {
    boton.addEventListener('click', () => {
        header.style.display = "none"; 

        table1.style.display = "none"; 
    
        final_partida.style.display = "none";

        historial_partidas.style.display = "block";

        mostrarHistorial()
    });
});

function verificarFinDeJuego() {
    const cartasBloqueadas = document.querySelectorAll(".carta.bloqueada");
    const cartasPartida = document.querySelectorAll(".carta").length;

    if (cartasBloqueadas.length === cartasPartida) {
        setTimeout(() => {
            tablero.style.display = "none"

            final_partida.style.display = "block"
        }, 500);
        guardarPartida();
    }
}

function guardarPartida() {

    const cronometro = document.getElementById("cronometro").textContent; 
    const contador = document.getElementById("contador").textContent;
    const nombre = document.getElementById("nombre").value;
    
    
    const dificultadPersonalizada = document.getElementById("dificultad_partida").value;  
    let dificultad;


    if (dificultadPersonalizada) {
        dificultad = dificultadPersonalizada;
        if(dificultad === "Personalizado") {
            const filas = document.getElementById("numero1").value;
        const columnas = document.getElementById("numero2").value;
        const resultado = filas * columnas;
        dificultad = resultado + " cartas (personalizada)";
        }
    } 

   
    const nuevaPartida = {
        nombreJugador: nombre,
        tiempo: cronometro,
        dificultad: dificultad, 
        intentos: parseInt(contador), 
        fecha: new Date().toISOString().split('T')[0], 
    };


    let historialPartidas = JSON.parse(localStorage.getItem("historialPartidas")) || [];

    historialPartidas.push(nuevaPartida);

    localStorage.setItem("historialPartidas", JSON.stringify(historialPartidas));
}



function mostrarHistorial() {
    const contenedorHistorial = document.getElementById("historial_partidas");

    const historialContenido = document.createElement('div');
    
    let historialPartidas = JSON.parse(localStorage.getItem("historialPartidas")) || [];

    const lista = document.createElement("ul");

    if (historialPartidas.length > 0) {
        historialPartidas.forEach((partida, index) => {
            const item = document.createElement("li");
            item.textContent = `Partida ${index + 1}: Jugador: ${partida.nombreJugador}, Fecha: ${partida.fecha}, Tiempo: ${partida.tiempo}, Dificultad: ${partida.dificultad}, Intentos: ${partida.intentos}`;
            lista.appendChild(item);
        });
    } else {
        lista.textContent = "No hay partidas guardadas.";
    }

    historialContenido.appendChild(lista);
    contenedorHistorial.appendChild(historialContenido);
}

btnLimpiarHistorial.addEventListener('click', () => {
    localStorage.clear();
});

function mostrarMensaje(texto) {
    const mensaje = document.getElementById("mensajeJuego");
    mensaje.textContent = texto;

     
       
    
    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
}
