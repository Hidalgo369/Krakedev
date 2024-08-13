let notas = [];

agregarElementos = function () {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR);
    }
}

probarAgregar = function () {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
}

calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio;
    for (let x = 0; x < notas.length; x++) {
        sumaNotas += notas[x];
    }
    promedio = sumaNotas / notas.length;
    mostrarTexto("promedio", promedio);
}