let puntosUsuario = 0;
let puntosComputador = 0;

jugar = function (seleccionado) {
    deshabilitarClicks();

    document.getElementById("jugadorHumano").classList.add("animar");
    document.getElementById("maquina").classList.add("animar");

    mostrarImagen("jugadorHumano", "./imagenes/piedra.png");
    mostrarImagen("maquina", "./imagenes/piedraMaquina.png");

    setTimeout(() => {
        let seleccionadoMaquina = generarElemento();
        let imgMaquina = generarRuta(seleccionadoMaquina);
        let imgJugador = generarRuta(seleccionado);

        document.getElementById("jugadorHumano").classList.remove("animar");
        document.getElementById("maquina").classList.remove("animar");

        mostrarImagen("jugadorHumano", imgJugador);
        mostrarImagen("maquina", imgMaquina);

        let ganador = determinarGanador(seleccionado, seleccionadoMaquina);

        if (ganador == 0) {
            mostrarTexto("lblGanador", "Empate");
        } else if (ganador == 1) {
            mostrarTexto("lblGanador", "¡Ganaste!");
            puntosUsuario += 1;
        } else if (ganador == 2) {
            mostrarTexto("lblGanador", "¡Perdiste!");
            puntosComputador += 1;
        }

        if (puntosUsuario == 5) {
            let mensaje = "🏆\n¡Has ganado el juego!";
            mostrarTexto("gameOver", mensaje)
            fin();
        } else if (puntosComputador == 5) {
            let mensaje = "☹️\n¡El computador te ha vencido!";
            mostrarTexto("gameOver", mensaje)
            fin();
        }
        mostrarTexto("puntosUsuario", puntosUsuario);
        mostrarTexto("puntosComputador", puntosComputador);

        habilitarClicks()
    }, 1500);
}

function deshabilitarClicks() {
    document.querySelectorAll('.ppt img').forEach(img => {
        img.style.pointerEvents = 'none';
    });
}

function habilitarClicks() {
    document.querySelectorAll('.ppt img').forEach(img => {
        img.style.pointerEvents = 'auto';
    });
}

limpiar = function () {
    mostrarTexto("info", "");
    mostrarTexto("info2", "");
    mostrarTexto("lblGanador", "");
}

nuevo = function () {
    const botonNuevo = document.querySelector(".contentNew .new");
    botonNuevo.style.visibility = "hidden";

    const imagenes = document.querySelectorAll(".ppt img");
    imagenes.forEach(img => {
        img.style.display = "inline-block";
    });

    puntosUsuario = 0;
    puntosComputador = 0;

    mostrarTexto("puntosUsuario", puntosUsuario);
    mostrarTexto("puntosComputador", puntosComputador);
    mostrarTexto("info", "JUGADOR");
    mostrarTexto("info2", "CPU");
    mostrarTexto("lblGanador", "VS")
    mostrarTexto("gameOver", "");
}

fin = function () {
    puntosUsuario = "";
    puntosComputador = "";

    limpiar();

    const imagenes = document.querySelectorAll(".ppt img");
    imagenes.forEach(img => {
        img.style.display = "none";
    });

    const botonNuevo = document.querySelector(".contentNew .new");
    botonNuevo.style.visibility = "visible";
}