// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
// Array donde guardaremos los nombres
let amigos = [];

// Función para añadir un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Validar que no se repita
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Limpiar input
    input.value = "";

    // Mostrar lista
    mostrarListaAmigos();
}

// Función para renderizar la lista en el HTML
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos antes de volver a pintar

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados previos

    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    // Elegir aleatoriamente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar resultado
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);
}

