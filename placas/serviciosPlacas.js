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
    let funcionImg = mostrarImagen("imgMapa","./imagenes/provincias/"+primerCaracter+".png");

    if (primerCaracter == "A") {
        provincia = "Azuay";
        funcionImg;
    } else if (primerCaracter == "B") {
        provincia = "Bolívar";
        funcionImg;
    } else if (primerCaracter == "C") {
        provincia = "Carchi";
        funcionImg;
    } else if (primerCaracter == "E") {
        provincia = "Esmeraldas";
        funcionImg;
    } else if (primerCaracter == "G") {
        provincia = "Guayas";
        funcionImg;
    } else if (primerCaracter == "H") {
        provincia = "Chimborazo";
        funcionImg;
    } else if (primerCaracter ==="I") {
        provincia = "Imbabura";
        funcionImg;
    } else if (primerCaracter == "J") {
        provincia = "Santo Domingo de los Tsáchilas";
        funcionImg;
    } else if (primerCaracter == "K") {
        provincia = "Sucumbíos";
        funcionImg;
    } else if (primerCaracter == "L") {
        provincia = "Loja";
        funcionImg;
    } else if (primerCaracter == "M") {
        provincia = "Manabí";
        funcionImg;
    } else if (primerCaracter == "N") {
        provincia = "Napo";
        funcionImg;
    } else if (primerCaracter == "O") {
        provincia = "El Oro";
        funcionImg;
    } else if (primerCaracter ==="P") {
        provincia = "Pichincha";
        funcionImg;
    } else if (primerCaracter == "Q") {
        provincia = "Orellana";
        funcionImg;
    } else if (primerCaracter == "R") {
        provincia = "Los Ríos";
        funcionImg;
    } else if (primerCaracter == "S") {
        provincia = "Pastaza";
        funcionImg;
    } else if (primerCaracter == "T") {
        provincia = "Tungurahua";
        funcionImg;
    } else if (primerCaracter == "U") {
        provincia = "Cañar";
        funcionImg;
    } else if (primerCaracter == "V") {
        provincia = "Morona Santiago";
        funcionImg;
    } else if (primerCaracter == "W") {
        provincia = "Galápagos";
        funcionImg;
    } else if (primerCaracter == "X") {
        provincia = "Cotopaxi";
        funcionImg;
    } else if (primerCaracter == "Y") {
        provincia = "Santa Elena";
        funcionImg;
    } else if (primerCaracter == "Z") {
        provincia = "Zamora Chinchipe";
        funcionImg;
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