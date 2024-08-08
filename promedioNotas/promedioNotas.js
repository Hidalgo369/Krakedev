calcularPromedioNotas=function(){
    let nota1=recuperarFloat("caja1");
    let nota2=recuperarFloat("caja2");
    let nota3=recuperarFloat("caja3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let mostrarPromedio=promedio.toFixed(2);

    mostrarTexto("lblResultado",mostrarPromedio);

    if (promedio<5 && promedio>0){
        mostrarTexto("ar","Reprobado");
        mostrarImagen("img","./imagenes/fracaso.gif");
    }
    else if(promedio>=5 && promedio<=8){
        mostrarTexto("ar","Buen Trabajo!");
        mostrarImagen("img","./imagenes/good.gif");
    }
    else if(promedio>8 && promedio<=10){
        mostrarTexto("ar","Excelente!");
        mostrarImagen("img","./imagenes/exito.gif");
    }
    else{
        mostrarTexto("ar","Datos Incorrectos");
        mostrarImagen("img","./imagenes/incorrecto.gif");
    }
}