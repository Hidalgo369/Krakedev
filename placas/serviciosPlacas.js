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
    let primerCaracter = placa.charAt(0);

    if (primerCaracter == "A") {
        provincia = "Azuay";
    } else if (primerCaracter== "B") {
        provincia = "Bolívar";
    } else if (primerCaracter == "C") {
        provincia = "Carchi";
    } else if (primerCaracter == "E") {
        provincia = "Esmeraldas";
    } else if (primerCaracter == "G") {
        provincia = "Guayas";
    } else if (primerCaracter == "H") {
        provincia = "Chimborazo";
    } else if (primerCaracter ==="I") {
        provincia = "Imbabura";
    } else if (primerCaracter == "J") {
        provincia = "Santo Domingo de los Tsáchilas";
    } else if (primerCaracter == "K") {
        provincia = "Sucumbíos";
    } else if (primerCaracter == "L") {
        provincia = "Loja";
    } else if (primerCaracter == "M") {
        provincia = "Manabí";
    } else if (primerCaracter == "N") {
        provincia = "Napo";
    } else if (primerCaracter == "O") {
        provincia = "El Oro";
    } else if (primerCaracter ==="P") {
        provincia = "Pichincha";
    } else if (primerCaracter == "Q") {
        provincia = "Orellana";
    } else if (primerCaracter == "R") {
        provincia = "Los Ríos";
    } else if (primerCaracter == "S") {
        provincia = "Pastaza";
    } else if (primerCaracter == "T") {
        provincia = "Tungurahua";
    } else if (primerCaracter == "U") {
        provincia = "Cañar";
    } else if (primerCaracter == "V") {
        provincia = "Morona Santiago";
    } else if (primerCaracter == "W") {
        provincia = "Galápagos";
    } else if (primerCaracter == "X") {
        provincia = "Cotopaxi";
    } else if (primerCaracter == "Y") {
        provincia = "Santa Elena";
    } else if (primerCaracter == "Z") {
        provincia = "Zamora Chinchipe";
    } else {
        provincia = null;
    }

    return provincia;
}

obtenerTipoVehiculo=function(placa){
    let tipoVehiculo;
    let segundoCaracter = placa.charAt(1);

    if(segundoCaracter == "A" || segundoCaracter == "U" || segundoCaracter == "Z"){
        tipoVehiculo = "Vehículo comercial";
    }else if(segundoCaracter == "E"){
        tipoVehiculo = "Vehículo gubernamental";
    }else if(segundoCaracter == "X"){
        tipoVehiculo = "Vehículo de uso oficial";
    }else if(segundoCaracter == "M"){
        tipoVehiculo = "Vehículo de los gobiernos autónomos";
    }else if(segundoCaracter == "B" || segundoCaracter == "C" || segundoCaracter == "D" || segundoCaracter == "F" || segundoCaracter== "G"
        || segundoCaracter == "H"|| segundoCaracter == "I"|| segundoCaracter== "J" || segundoCaracter == "K" || segundoCaracter == "L" 
        || segundoCaracter == "N" || segundoCaracter == "O" || segundoCaracter == "P" || segundoCaracter == "Q" || segundoCaracter == "R" 
        || segundoCaracter == "S" || segundoCaracter == "T" || segundoCaracter == "V" || segundoCaracter == "W" || segundoCaracter == "Y"){
        tipoVehiculo = "Vehículo particular";
    }else{
        return null;
    }

    return tipoVehiculo;
}

obtenerDiaPicoYPlaca=function(placa){
    let longitud = placa.length - 1;
    let ultimoCaracter = placa.charAt(longitud);
    let dias;

    if(ultimoCaracter == 1 || ultimoCaracter == 2){
        dias = "Lunes";
    }else if(ultimoCaracter == 3 || ultimoCaracter == 4){
        dias = "Martes";
    }else if(ultimoCaracter == 5 || ultimoCaracter == 6){
        dias = "Miércoles";
    }else if(ultimoCaracter == 7 || ultimoCaracter == 8){
        dias = "Jueves";
    }else if(ultimoCaracter == 9 || ultimoCaracter == 0){
        dias = "Viernes";
    }else{
        return null;
    }

    return dias;

}