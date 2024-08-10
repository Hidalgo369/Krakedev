esMayuscula = function(caracter){
    codigoAscci = caracter;

    if(codigoAscci >= 65 && codigoAscci <= 90){
        return true;
    }
    else{
        return false;
    }
}

esDigito = function(caracter){
    codigoAscci = caracter;

    if(codigoAscci >= 48 && codigoAscci <= 57){
        return true;
    }
    else{
        return false;
    }
}

esGuion = function(caracter){
    codigoAscci = caracter;

    if(codigoAscci == 45){
        return true;
    }
    else{
        return false;
    }
}

mostrarImagen=function(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=rutaImagen;
}