calcularTasaInteres=function(ingresoAnual){
    let valorTasa;

    ingresoAnual=parseFloat(ingresoAnual);

    if(ingresoAnual<300000){
        valorTasa=16;
    }
    else if(ingresoAnual>=300000 && ingresoAnual<500000){
        valorTasa=15;
    } 
    else if(ingresoAnual>500000 && ingresoAnual<1000000){
        valorTasa=14;
    }
    else if(ingresoAnual>=1000000 && ingresoAnual<2000000){
        valorTasa=13;
    }
    else if(ingresoAnual>=2000000){
        valorTasa=12;
    }

    return valorTasa;
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let capacidadCuota;

    edad=parseInt(edad);
    ingresos=parseFloat(ingresos);
    egresos=parseFloat(egresos);

    resta=egresos-ingresos;

    if(edad>50){
        capacidadCuota=resta*0.3;
    }
    else if(edad<=50){
        capacidadCuota=resta*0.4;
    }

    return capacidadCuota;
}

calcularDescuento=function(precio,cantidad){
    let descuento;

    precio=parseFloat(precio);
    cantidad=parseInt(cantidad);

    if(cantidad<3){
        descuento=0;
    }
    else if(cantidad>=3 && cantidad<=5){
        descuento=2;
    }
    else if(cantidad>=6 && cantidad<=11){
        descuento=3;
    }
    else if(cantidad>=12){
        descuento=4;
    }

    pagar=precio-descuento;

    return pagar;
}

determinarColesterolILDL=function(nivelColesterol){
    let categoria;

    nivelColesterol=parseFloat(nivelColesterol);

    if (nivelColesterol<100){
        categoria="Óptimo (lo mejor para su salud)";
    }
    else if (nivelColesterol>=100 && nivelColesterol<=129){
        categoria="Casi óptimo";
    }
    else if (nivelColesterol>=130 && nivelColesterol<=159){
        categoria="Límite superior del rango normal";
    }
    else if (nivelColesterol>=160 && nivelColesterol<=189){
        categoria="Alto";
    }
    else if(nivelColesterol>=190){
        categoria="Muy alto";
    }

    mensaje="Su nivel de colesterol es: "+categoria;
    return mensaje;
}

validarClave=function(clave){
    if(clave.length>=8 && clave.length<=16){
        return true;
    }
    else{
        return false;
    }
}

esMayuscula=function(caracter){
    codigoAscci=caracter.charCodeAt(0);

    if(codigoAscci>=65 && codigoAscci<=90){
        return true;
    }
    else{
        return false;
    }
}

esMiniscula=function(caracter){
    codigoAscci=caracter.charCodeAt(0);

    if(codigoAscci>=87 && codigoAscci<=122){
        return true;
    }
    else{
        return false;
    }
}

esDigito=function(caracter){
    codigoAscci=caracter.charCodeAt(0);

    if(codigoAscci>=87 && codigoAscci<=122){
        return true;
    }
    else{
        return false;
    }
}

darPermiso=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=parseFloat(notaMatematica);
    notaFisica=parseFloat(notaMatematica);
    notaGeometria=parseFloat(notaGeometria);

    if(notaMatematica>90 || notaFisica>90 || notaGeometria>90){
        return true;
    }
    else{
        return false;
    }
}

otorgarPermiso=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=parseFloat(notaMatematica);
    notaFisica=parseFloat(notaMatematica);
    notaGeometria=parseFloat(notaGeometria);

    if((notaMatematica>90 || notaFisica>90) && (notaGeometria>80)){
        return true;
    }
    else{
        return false;
    }
}

dejarSalir=function(notaMatematica,notaFisica,notaGeometria){
    notaMatematica=parseFloat(notaMatematica);
    notaFisica=parseFloat(notaMatematica);
    notaGeometria=parseFloat(notaGeometria);

    if((notaMatematica>90 || notaFisica>90 || notaGeometria>80) && (notaFisica>notaMatematica)){
        return true;
    }
    else{
        return false;
    }
}