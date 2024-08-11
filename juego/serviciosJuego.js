obtenerAleatorio = function () {
    let aleatorio = parseInt((Math.random()) * 3);
    aleatorio = aleatorio + 1;
    return aleatorio;
}

generarElemento = function () {
    let aleatorio = obtenerAleatorio();
    if (aleatorio == 1) {
        return "piedraMaquina";

    } else if (aleatorio == 2) {
        return "papelMaquina";

    } else if (aleatorio == 3) {
        return "tijeraMaquina";
    }
}

determinarGanador = function (eleccionJugador, eleccionMaquina) {
    if (eleccionJugador == "piedra" && eleccionMaquina == "piedraMaquina" || eleccionJugador == "papel" && eleccionMaquina == "papelMaquina"
        || eleccionJugador == "tijera" && eleccionMaquina == "tijeraMaquina") {
        return 0;
    } else if (eleccionJugador == "piedra" && eleccionMaquina == "tijeraMaquina" || eleccionJugador == "papel" && eleccionMaquina == "piedraMaquina"
        || eleccionJugador == "tijera" && eleccionMaquina == "papelMaquina") {
        return 1;
    } else {
        return 2;
    }
}

generarRuta = function (nombre) {
    let rutaImg = "./imagenes/" + nombre + ".png";
    return rutaImg;
}