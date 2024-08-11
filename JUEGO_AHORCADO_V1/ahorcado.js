esMayuscula = function (caracter) {
    codigoAscci = caracter.charCodeAt(0);

    if (codigoAscci >= 65 && codigoAscci <= 90) {
        return true;
    }
    else {
        return false;
    }
}

guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    if (palabra.length == 5 && esMayuscula(palabra)) {
        alert("La palabra secreta ha sido guardada exitosamente!");
        palabraSecreta = palabra;
    } else {
        alert("Debe ingresar una palabra de 5 letras mayúsculas");
    }
}

mostrarLetra = function (letra, posicion) {
    let cmp = "div" + posicion;
    mostrarTexto(cmp, letra);
}

let palabraSecreta = "";

validar = function (letra) {
    let letrasEncontradas = 0;
    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta.charAt(i) == letra) {
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
}

ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        validar(letra);
    } else {
        alert("Solo se aceptan mayúsculas");
    }
}

//Extras:

recuperarTexto = function (idComponente) {
    let componente;
    let valorIngresado;
    componente = document.getElementById(idComponente);
    valorIngresado = componente.value;
    return valorIngresado;
}

mostrarTexto = function (idComponente, mensaje) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.innerText = mensaje;
}

