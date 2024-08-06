calcularValorTotal = function () {
    //variables para recuperar los valores de las cajas de texto
    let cmpNombreProducto=document.getElementById("txtProducto");
    let cmpPrecioProducto=document.getElementById("txtPrecio");
    let cmpCantidad=document.getElementById("txtCantidad"); 
    let cmpPorcentajeDescuento=document.getElementById("txtPorcentajeDescuento");

    //1. Recuperar el nombre del producto como String
    let nombreProducto=cmpNombreProducto.value;
    //2. Recuperar el precio como float
    let precioProducto=parseFloat(cmpPrecioProducto.value); // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    //3. Recuperar cantidad como int
    let cantidad=parseInt(cmpCantidad.value); // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
    //4. Recuperar el porcentaje de descuento como int
    let porcentajeDescuento=parseInt(cmpPorcentajeDescuento.value);

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal=calcularSubtotal(precioProducto,cantidad); // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien los parametros cuando invoca la funcion.

    //5. Mostrar valorSubtotal en el componente lblSubtotal
    let cmpSubtotal;
    cmpSubtotal=document.getElementById("lblSubtotal");
    cmpSubtotal.innerText=valorSubtotal;
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */

    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento=calcularValorDescuento(valorSubtotal,porcentajeDescuento);

    //7. Mostrar el resultado en el componente lblDescuento
    let cmpDescuento;
    cmpDescuento=document.getElementById("lblDescuento");
    cmpDescuento.innerText=valorDescuento;
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */

    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA=calcularIVA(valorSubtotal-valorDescuento);// El IVA debe calcularse sobre el valor del subtotal menos el descuento

    //9. Mostrar el resultado en el componente lblValorIVA    
    let cmpIVA;
    cmpIVA=document.getElementById("lblValorIVA");
    cmpIVA.innerText=valorIVA;
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
            
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */

}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
}
/* SI TODO FUNCIONA, HACER UN PUSH */