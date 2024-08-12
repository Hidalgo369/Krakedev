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
            coincidencias++;
            mostrarLetra(letra, i);
            letrasEncontradas++;
        }
    }
    if (letrasEncontradas == 0) {
        alert("La letra no es parte de la palabra");
        errores++;
        mostrarAhorcado();
    }
}

ingresarLetra = function () {
    intentos++;
    let letra = recuperarTexto("txtLetra");
    if (esMayuscula(letra)) {
        validar(letra);
        if (coincidencias == 5) {
            mostrarImagen("ahorcadoImagen", "ganador.gif");
        }
        if (intentos == 10) {
            mostrarImagen("ahorcadoImagen", "gameOver.gif");
        }
    } else {
        alert("Solo se aceptan mayúsculas");
    }
}

let intentos = 0;
let coincidencias = 0;
let errores = 0;

mostrarAhorcado = function () {
    mostrarImagen("ahorcadoImagen", "Ahorcado_0" + errores + ".png");

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

mostrarImagen = function (idComponente, rutaImagen) {
    let componente;
    componente = document.getElementById(idComponente);
    componente.src = rutaImagen;
}