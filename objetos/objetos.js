probarIncrementoSaldo = function () {
    let cuenta = { numero: "23424", saldo: 34.0 }
    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}

probarDeterminarMayor = function () {
    let per1 = { nombre: "Daniel", edad: 45 };
    let per2 = { nombre: "Luisa", edad: 48 };
    let mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es: " + mayor.nombre);
    }
}

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

modificarAtributos = function () {
    let cuenta = {
        numero: "5323423423",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);
}

crearCliente = function () {
    let cliente = {
        cedula: "171231",
        nombre: "Juan"
    }
    let cliente1 = {};
    cliente1.nombre = "Romeo";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "123123";
}

incrementarSaldo = function (cuenta, monto) {
    cuenta.saldo += monto;
}

determinarMayor = function (persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}