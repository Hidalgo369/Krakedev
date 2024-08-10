validarPlaca = function(){
    let valorUsuario = document.getElementById("txtPlaca");
    let placa = valorUsuario.value;
    let erroresEstructura = validarEstructura(placa);
    limpiarInfo();

    if(erroresEstructura == null){
        let correcto = "✅ Estructura válida";
        let mostrar = document.getElementById("lblEstructura");
        mostrar.innerText = correcto;

        let cmpProvincia = document.getElementById("lblProvincia");
        let provincia = obtenerProvincia(placa);
        let cmpVehiculo = document.getElementById("lblTipoVehiculo");
        let tipoVehiculo = obtenerTipoVehiculo(placa);
        let cmpPicoYPlaca = document.getElementById("lblPicoYPlaca");
        let PicoYPlaca = obtenerDiaPicoYPlaca(placa);

        if(provincia != null){
            cmpProvincia.innerText = provincia;
        }else if(provincia == null){   
            cmpProvincia.innerText = "Provincia incorrecta";
        }

        if(tipoVehiculo != null){
            cmpVehiculo.innerText = tipoVehiculo;
        }else if(tipoVehiculo == null){
            cmpVehiculo.innerText = "Vehículo incorrecto";
        }

        if(PicoYPlaca != null){
            cmpPicoYPlaca.innerText = PicoYPlaca;
        }

    }else{
        let mal = "❌ Estructura incorrecta";
        let mostrar = document.getElementById("lblEstructura");
        mostrar.innerHTML = mal;
        let mostrarErrores = document.getElementById("lblErrores");
        mostrarErrores.innerHTML = erroresEstructura;
    }
}

limpiarInfo=function(){
    let limpiarErrores = document.getElementById("lblErrores");
    limpiarErrores.innerText = "";
    let resultadoProvincia = document.getElementById("lblProvincia");
    resultadoProvincia.innerText = "";
    let resultadoVehiculo = document.getElementById("lblTipoVehiculo");
    resultadoVehiculo.innerText = "";
    let resultadoPicoYPlaca = document.getElementById("lblPicoYPlaca");
    resultadoPicoYPlaca.innerText = "";
}