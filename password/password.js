validarPassword = function (password) {
    let longitud = password.length;

    if (longitud >= 8 && longitud <= 16) {
        let letra;
        let contadorMayusculas = 0;
        let contadorDigitos = 0;
        let contadorCaracterEspecial = 0;
        let errores = "";

        for (let i = 0; i < longitud; i++) {
            letra = password.charAt(i);
            if (esMayuscula(letra)) {
                contadorMayusculas++;
            }
            if (esDigito(letra)) {
                contadorDigitos++;
            }
            if (esCaracterEspecial (letra)) {
                contadorCaracterEspecial++;
            }
        }
        if (contadorMayusculas == 0) {
            errores += "• Requiere al menos una letra mayúscula.\n";
        }
        if (contadorDigitos == 0) {
            errores += "• Incluye al menos un dígito.\n";
        }
        if (contadorCaracterEspecial == 0) {
            errores += "• Se necesita al menos un carácter especial, como: asterisco( * ), guión medio ( - ) o guión bajo( _ ).\n";
        }
        if (errores != "") {
            return errores;
        } else {
            return null;
        }
    }
    else {
        return "• Debe contener entre 8 y 16 caracteres.\n";
    }
}

ejecutarValidacion = function () {
    let cmpPassword = recuperarTexto("txtClave");
    let password = validarPassword(cmpPassword);
    if (password == null) {
        mostrarTexto("lblResultado", "✅ Password Correcto");
    } else {
        mostrarTexto("lblResultado", password);
    }
}