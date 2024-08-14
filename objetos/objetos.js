probarAtributos = function () {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No está vivo");
    } else {
        console.log("Está vivo");
    }
}

crearProducto = function () {
    let producto1 = {
        nombre: "Smart TV",
        precio: parseFloat(500.99),
        stock: parseInt(10)
    }
    let producto2 = {
        nombre: "PC",
        precio: parseFloat(300.99),
        stock: parseInt(3)
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log(producto1.nombre + " tiene mayor stock");
    } else if (producto1.stock < producto2.stock) {
        console.log(producto2.nombre + " tiene mayor stock");
    } else if (producto1.stock == producto2.stock) {
        console.log("Ambos productos tienen el mismo stock");
    }
}