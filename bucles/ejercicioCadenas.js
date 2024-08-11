ejecutarPrueba1 = function () {
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}

ejecutarPrueba2 = function () {
    let mensaje = recuperarTexto("txtCadena");
    let cmpResultado = invertirCadena(mensaje);
    mostrarTexto("lblResultado", cmpResultado);
}

invertirCadena = function (cadena) {
    let letra;
    let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        letra = cadena.charAt(posicion);
        resultado += letra;
    }
    return resultado;
}

recorrerCadena = function (cadena) {
    //0123
    //Juan
    let caracter;

    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}