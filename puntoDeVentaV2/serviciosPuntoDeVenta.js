calcularSubtotal=function(precio,cantidad){
    let total=precio*cantidad;
    return total;
}

calcularDescuentoPorVolumen=function(subtotal,cantidad){
    let descuento;
    if(cantidad<3){
        descuento=0;
    }
    else if(cantidad>=3 && cantidad<=5){
        descuento=subtotal*0.03;
    }
    else if(cantidad>=6 && cantidad<=11){
        descuento=subtotal*0.04;
    }
    else if(cantidad>=12){
        descuento=subtotal*0.05;
    }
    return descuento;
}

calcularIVA=function(monto){
    let valorIva=monto*0.12;
    return valorIva;
}

calcularTotal=function(subtotal,descuento,iva){
    let totalPagar=(subtotal-descuento)+iva;
    return totalPagar;
}

