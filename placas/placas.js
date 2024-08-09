validarPlaca = function(){
    let valorUsuario = document.getElementById("txtPlaca");
    let placa = valorUsuario.value;
    let erroresEstructura = validarEstructura(placa);
    limpiar();

    if(erroresEstructura == null){
        let correcto = "✅ Estructura válida";
        let mostrar = document.getElementById("lblEstructura");
        mostrar.innerText = correcto;
        let provincia = obtenerProvincia(placa);
        if(provincia != null){
            let cmpProvincia = document.getElementById("lblProvincia");
            cmpProvincia.innerText = provincia;
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