let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado. Por favor, ingresa un nombre diferente.");
        return;
    }

    amigos.push(nombre);
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    inputAmigo.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dosd nombres para realizar el sorteo.");
        return;
    }
    
    const amigoSecretoIndex = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[amigoSecretoIndex];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSecreto} es el amigo secreto seleccionado.</li>`;
}
