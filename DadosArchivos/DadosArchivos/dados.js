jugar=function(){
    let aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        cambiarTexto("lblTexto","ES MAYOR A 3");
    }else{
        cambiarTexto("lblTexto","ES MENOR A 3");
    }
}

//Crear una función llamada lanzarDado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6

lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*6;
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado=numeroEntero+1;
    return valorDado;
}