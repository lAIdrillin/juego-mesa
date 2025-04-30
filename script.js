const btnEmpezarPartida = document.getElementById("empezar_partida");

const tablero = document.getElementById("tablero");

const table1 = document.getElementById("table1");

const header = document.getElementById("header");

btnEmpezarPartida.addEventListener('click', () => {

    const cronometro = document.getElementById("cronometro").textContent;
    const contador = document.getElementById("contador").textContent;
    const nombre = document.getElementById("nombre").value;
    const dificultad = document.getElementById("dificultad_partida").value;
    var accederJuego = true;
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = numero1 * numero2;
    //const tema = document.getElementById("tema_partida").value;

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

    if (dificultad !== "") {
        document.getElementById("numero1").disabled = true;
        document.getElementById("numero2").disabled = true;
    }

    if (resultado % 2) {
        alert("Error, para el juego de las parejas las cartas tienen que ser pares.")
        accederJuego = false;
        return;
    }

    if (resultado > 64) {
        alert("Actualmente no disponemos de tantas cartas, el número máximo de cartas es 64.")
        accederJuego = false;
        return;
    }
    
    if(accederJuego){
        
    header.style.display = "none"; 

    table1.style.display = "none"; 

    tablero.style.display = "block"

    tablero.innerHTML = `
        <h2>${nombre}</h2>
        <h3>Cronómetro: ${cronometro}</h3>
        <h3>Intentos: ${contador}</h3>
    `;

    crearCartas();

    }
});

/*function crearCartas() {
    for(let i = 1; i <=10; i++) {
        const tablero = document.createElement('table')
        const carta = document.createElement('div')

        carta.classList.add("carta");
        carta.style.border = "Solid"
        carta.style.width = '100px';
        carta.style.height = '150px';
        carta.style.margin = '10px';
        carta.style.border = '2px solid black';
        document.tablero.appendChild(carta);
    }
}
*/
