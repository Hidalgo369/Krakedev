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
    contarMayusculas(resultado);
    return resultado;
}

buscarLetra = function (cadena, letra) {
    let letraAlterada;
    let existeLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letraAlterada = cadena.charAt(i);
        if (letraAlterada == letra) {
            existeLetra = true;
        }
    }
    if (existeLetra == true) {
        console.log("existe");
    } else {
        console.log("no existe");
    }
}

contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas=0;
    for(let i=0;i<cadena.length;i++){
        letra=cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }
    }
    console.log(contadorMayusculas);
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