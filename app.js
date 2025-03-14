// Array para almacenar los nombres de amigos.
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() { // Cambiado a "agregarAmigo" (sin "s")
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert(`El nombre ${nombre} ya está en la lista`);
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Limpiar el input
    inputAmigo.value = "";

    // Actualizar la lista en HTML
    actualizarLista();
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Recorrer el array y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}