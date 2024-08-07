calcularPromedioNotas=function(){
    let nota1=recuperarFloat("caja1");
    let nota2=recuperarFloat("caja2");
    let nota3=recuperarFloat("caja3");
    let promedio=calcularPromedio(nota1,nota2,nota3);
    let mostrarPromedio=promedio.toFixed(2);

    mostrarTexto("lblResultado",mostrarPromedio);

    if (promedio>7){
        mostrarImagen("img","./imagenes/exito.gif");
    }
    else{
        mostrarImagen("img","./imagenes/fracaso.gif");
    }
}