validarEstructura = function (placa) {
    let errores = "";

    if (placa.length == 7 || placa.length == 8) { 

        let primerCaracter = esMayuscula(placa.charCodeAt(0)); 
        let segundoCaracter = esMayuscula(placa.charCodeAt(1)); 
        let tercerCaracter = esMayuscula(placa.charCodeAt(2)); 
        let cuartoCaracter = esGuion(placa.charCodeAt(3)); 
        let quintoCaracter = esDigito(placa.charCodeAt(4)); 
        let sextoCaracter = esDigito(placa.charCodeAt(5)); 
        let septimoCaracter = esDigito(placa.charCodeAt(6)); 

        if (primerCaracter == false) {
            errores += "• El primer caracter debe ser una letra mayúscula.<br>";
        }
        if (segundoCaracter == false) {
            errores += "• El segundo caracter debe ser una letra mayúscula.<br>";
        }
        if (tercerCaracter == false) {
            errores += "• El tercer caracter debe ser una letra mayúscula.<br>";
        }
        if (cuartoCaracter == false) {
            errores += "• El cuarto caracter debe ser un guión.<br>";
        }
        if (quintoCaracter == false) {
            errores += "• El quinto caracter debe ser un dígito.<br>";
        }
        if (sextoCaracter == false) {
            errores += "• El sexto caracter debe ser un dígito.<br>";
        }
        if (septimoCaracter == false) {
            errores += "• El séptimo caracter debe ser un dígito.<br>";
        }
        if (placa.length == 8) { 
            let octavoCaracter = esDigito(placa.charCodeAt(7)); 
            if (octavoCaracter == false) {
                errores += "• El octavo caracter debe ser un dígito.<br>";
            }
        }

        if (errores != "") {
            return errores;
        } else {
            return null;
        }

    } else if(placa == ""){
        return "• Por favor, llene el campo para validar su placa."
        }

    else {
        return "• La placa debe tener 7 u 8 caracteres.";
    }
}

obtenerProvincia=function(placa){
    let provincia;
    placa=placa.charAt(0);

    if (placa === "A") {
        provincia = "Azuay";
    } else if (placa === "B") {
        provincia = "Bolívar";
    } else if (placa === "C") {
        provincia = "Carchi";
    } else if (placa === "E") {
        provincia = "Esmeraldas";
    } else if (placa === "G") {
        provincia = "Guayas";
    } else if (placa === "H") {
        provincia = "Chimborazo";
    } else if (placa === "I") {
        provincia = "Imbabura";
    } else if (placa === "J") {
        provincia = "Loja";
    } else if (placa === "K") {
        provincia = "Santo Domingo de los Tsáchilas";
    } else if (placa === "L") {
        provincia = "Los Ríos";
    } else if (placa === "M") {
        provincia = "Manabí";
    } else if (placa === "N") {
        provincia = "Napo";
    } else if (placa === "O") {
        provincia = "El Oro";
    } else if (placa === "P") {
        provincia = "Pichincha";
    } else if (placa === "Q") {
        provincia = "Orellana";
    } else if (placa === "R") {
        provincia = "Cañar";
    } else if (placa === "S") {
        provincia = "Santa Elena";
    } else if (placa === "T") {
        provincia = "Tungurahua";
    } else if (placa === "U") {
        provincia = "Sucumbíos";
    } else if (placa === "V") {
        provincia = "Morona Santiago";
    } else if (placa === "W") {
        provincia = "Galápagos";
    } else if (placa === "X") {
        provincia = "Cotopaxi";
    } else if (placa === "Y") {
        provincia = "Pastaza";
    } else if (placa === "Z") {
        provincia = "Zamora Chinchipe";
    } else {
        provincia = null;
    }
    
    return provincia;
}