aleatorio = function () {
    let random = parseInt((Math.random() * 100) + 1);
    return random;
}

generarAleatorios = function () {
    let aleatorios = [];
    let cmpAleatorio = recuperarInt("txtAleatorio");
    if (cmpAleatorio >= 5 && cmpAleatorio <= 20) {
        for (let x = 0; x < cmpAleatorio; x++) {
            console.log(x);
            let valor = aleatorio();
            aleatorios.push(valor);
        }
        mostrarResultados(aleatorios);
    } else {
        alert("Por favor, ingrese un número en entre 5 y 20");
    }
}

mostrarResultados = function (arregloNumeros) {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>Aleatorios</th></tr>";
    let aleatorio;
    for (let i = 0; i < arregloNumeros.length; i++) {
        aleatorio = arregloNumeros[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += aleatorio;
        contenidoTabla += "</td></tr>"; 
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
