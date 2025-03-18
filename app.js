let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); // Elimina espacios extra

    if (!nombreAmigo) {
        alert("Por favor, inserte un nombre");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus(); 
    // el cursor se coloca automáticamente dentro del campo de entrada (<input>), permitiendo al usuario escribir sin necesidad de hacer clic en el cuadro de texto.
    renderizarAmigos();
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizar

    amigos.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        // Generar un índice aleatorio basado en la cantidad de amigos
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado en el HTML
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `🎉 El ganador es: <strong>${amigoSorteado}</strong> 🎉`;

        // Limpiar la lista de amigos después del sorteo
        amigos = [];
        renderizarAmigos();
    }
}

// Agregar el evento al botón después de que el DOM se haya cargado
document.addEventListener("DOMContentLoaded", () => {
    let botonSortear = document.querySelector(".button-draw");
    if (botonSortear) {
        botonSortear.addEventListener("click", sortearAmigo);
    }
});
