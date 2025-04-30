const btnEmpezarPartida = document.getElementById("empezar_partida");

const tablero = document.getElementById("tablero");

const table1 = document.getElementById("table1");

const header = document.getElementById("header");

btnEmpezarPartida.addEventListener('click', () => {

    const cronometro = document.getElementById("cronometro").textContent;
    const contador = document.getElementById("contador").textContent;
    const nombre = document.getElementById("nombre").value;
    const dificultad = document.getElementById("dificultad_partida").value;
    //const tema = document.getElementById("tema_partida").value;

    if(nombre === "") {
        alert("¡Nombre vacío! Necesitas un nombre para jugar.")
        return;
    }

    if(dificultad === "") {
        alert("Por favor, selecciona una dificultad para tu partida.")
        return;
    }
    
    if(nombre !== "" && dificultad !== ""){
        
    header.style.display = "none"; 

    table1.style.display = "none"; 

    tablero.style.display = "block"

    tablero.innerHTML = `
        <h2>${nombre}</h2>
        <h3>Cronómetro: ${cronometro}</h3>
        <h3>Intentos: ${contador}</h3>
    `;

    }
});


