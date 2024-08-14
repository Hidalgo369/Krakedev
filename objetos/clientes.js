let clientes = [
    { cedula: "123213", nombre: "Juan", edad: 20 },
    { cedula: "222222", nombre: "Mario", edad: 50 },
    { cedula: "333333", nombre: "Pepe", edad: 22 }
];

mostrarClientes=function(){
    let cmpTabla=document.getElementById("tablaClientes");
    let contenidoTabla="<table><tr>"+
    "<th>CEDULA>/th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;
    for(let i=0;i<clientes.length;i++){
        elementoCliente=clientes[i];
        contenidoTabla+=
        "<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>";

    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}