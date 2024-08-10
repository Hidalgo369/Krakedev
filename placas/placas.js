validarPlaca = function(){
    let valorUsuario = document.getElementById("txtPlaca");
    let placa = valorUsuario.value;
    let erroresEstructura = validarEstructura(placa);
    limpiar();

    if(erroresEstructura == null){
        let correcto = "✅ Estructura válida";
        let mostrar = document.getElementById("lblEstructura");
        mostrar.innerText = correcto;

        let cmpProvincia = document.getElementById("lblProvincia");
        let cmpVehiculo = document.getElementById("lblTipoVehiculo");

        let provincia = obtenerProvincia(placa);
        if(provincia != null){
            cmpProvincia.innerText = provincia;
        }else if(provincia == null){   
            cmpProvincia.innerText = "Provincia incorrecta";
        }

        let tipoVehiculo=obtenerTipoVehiculo(placa);
        if(tipoVehiculo != null){
            cmpVehiculo.innerText = tipoVehiculo;
        }else if(tipoVehiculo == null){
            cmpVehiculo.innerText = "Vehículo incorrecto";
        }
    }else{
        let mal = "❌ Estructura incorrecta";
        let mostrar = document.getElementById("lblEstructura");
        mostrar.innerHTML = mal;
        let mostrarErrores = document.getElementById("lblErrores");
        mostrarErrores.innerHTML = erroresEstructura;
    }
}

limpiar=function(){
    let limpiarErrores = document.getElementById("lblErrores");
    limpiarErrores.innerText = "";
    let resultadoProvincia = document.getElementById("lblProvincia");
    resultadoProvincia.innerText = "";
    let resultadoVehiculo = document.getElementById("lblTipoVehiculo");
    resultadoVehiculo.innerText = "";
    let resultadoPicoYPlaca = document.getElementById("lblPicoYPlaca");
    resultadoPicoYPlaca.innerText = "";
}