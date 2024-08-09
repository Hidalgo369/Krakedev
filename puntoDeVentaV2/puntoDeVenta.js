calcularValorTotal = function () {
    let nombreProducto = recuperarTexto("txtProducto");
    esProductoValido(nombreProducto, "lblError1");

    let cantidad = recuperarInt("txtCantidad");
    esCantidadValida(cantidad, "lblError2");

    let precioProducto = recuperarFloat("txtPrecio");
    esPrecioValido(precioProducto, "lblError3");

    if (esProductoValido(nombreProducto, "lblError1") & esCantidadValida(cantidad, "lblError2") & esPrecioValido(precioProducto, "lblError3")) {
        let valorSubtotal = calcularSubtotal(precioProducto, cantidad);
        let valorDescuento = calcularDescuentoPorVolumen(valorSubtotal, cantidad);
        let valorIVA = calcularIVA(valorSubtotal - valorDescuento);
        let valorTotal = calcularTotal(valorSubtotal, valorDescuento, valorIVA);
        
        mostrarTexto("lblSubtotal",valorSubtotal.toFixed(2));
        mostrarTexto("lblDescuento",valorDescuento.toFixed(2));
        mostrarTexto("lblValorIVA",valorIVA.toFixed(2));
        mostrarTexto("lblTotal",valorTotal.toFixed(2));   
    }
    else {
        limpiarLabel();
    }
}

esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false;

    if (producto == "") {
        mostrarTexto(idComponenteError, "Ingrese el nombre del producto");
        hayErrores = true;
    }
    if (producto.length > 10) {
        mostrarTexto(idComponenteError, "Máximo 10 caracteres");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "")
    }
    return !hayErrores;
}

esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;

    if (isNaN(cantidad)) {
        mostrarTexto(idComponenteError, "Por favor, ingrese un número");
        hayErrores = true;
    }
    if (cantidad < 1 || cantidad > 100) {
        mostrarTexto(idComponenteError, "Se admiten valores entre 1 y 100");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "")
    }
    return !hayErrores;
}

esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false;

    if (isNaN(precio)) {
        mostrarTexto(idComponenteError, "Por favor, ingrese un número");
        hayErrores = true;
    }
    if (precio < 1 || precio > 50) {
        mostrarTexto(idComponenteError, "Se admiten valores entre 1 y 50");
        hayErrores = true;
    }
    if (hayErrores == false) {
        mostrarTexto(idComponenteError, "")
    }
    return !hayErrores;
}

limpiarLabel=function(){
    mostrarTexto("lblSubtotal", "0.0");
    mostrarTexto("lblDescuento", "0.0");
    mostrarTexto("lblValorIVA", "0.0");
    mostrarTexto("lblTotal", "0.0");;
}

limpiar = function () {
    mostrarTextoEnCaja("txtProducto", "");
    mostrarTextoEnCaja("txtPrecio", "");
    mostrarTextoEnCaja("txtCantidad", "");

    limpiarLabel();

    mostrarTexto("lblError1","");
    mostrarTexto("lblError2","");
    mostrarTexto("lblError3","");
}