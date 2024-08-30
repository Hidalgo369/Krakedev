let personas = [
    { nombre: "Marcos", edad: 18 },
    { nombre: "Roberto", edad: 15 },
    { nombre: "Kate", edad: 25 },
    { nombre: "Diana", edad: 12 },
    { nombre: "Benja", edad: 2 },
]

agregarPersona = function () {
    let name = recuperarTexto("nombre");
    let nombrePersona;
    if (name.length < 3) {
        mostrarTexto("errorNombre", "Debe contener al menos 3 caracteres");
    } else {
        mostrarTexto("errorNombre", "");
        nombrePersona = true;
    }
    let age = recuperarInt("edad");
    let edadPersona;
    let mensaje = "El numero debe ser un entero entre 0 y 100";
    if (age !== null && age !== undefined && age !== "" && !isNaN(age)) {
        if (age < 0 || age > 100) {
            mostrarTexto("errorEdad", mensaje);
        } else {
            mostrarTexto("errorEdad", "");
            edadPersona = true;
        }
    } else {
        mostrarTexto("errorEdad", mensaje);
    }
    if (nombrePersona == true && edadPersona == true) {
        let nuevaPersona = {};
        nuevaPersona.nombre = name;
        nuevaPersona.edad = age;
        personas.push(nuevaPersona);
        alert("Persona agregada correctamente");
        mostrarTabla();
    }
}

mostrarTabla = function () {
    let cmpTabla = document.getElementById("tabla");
    let contenidoTabla = "<table><tr>" +
        "<th>EDAD</th>" +
        "<th>NOMBRE</th>" +
        "</tr>";
    let elementoPersona;
    for (let i = 0; i < personas.length; i++) {
        elementoPersona = personas[i];
        contenidoTabla +=
            "<tr><td>" + elementoPersona.edad + "</td>"
            + "<td>" + elementoPersona.nombre + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    ocultarComponente("mayor");
    ocultarComponente("menor");
}

determinarMayor = function () {
    let mayor = encontrarMayor();
    mostrarComponente("mayor");
    mostrarTexto("mayor", "La persona que tiene mayor edad es " + mayor.nombre + " con " + mayor.edad + " años.");
}

determinarMenor = function () {
    let menor = encontrarMenor();
    mostrarComponente("menor");
    mostrarTexto("menor", "La persona que tiene menor edad es " + menor.nombre + " con " + menor.edad + " años.");
}


encontrarMayor = function () {
    let personaMayor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i];
        if (elementoPersona.edad > personaMayor.edad) {
            personaMayor = elementoPersona;
        }
    }
    console.log(personaMayor.nombre, personaMayor.edad);
    return personaMayor;
}

encontrarMenor = function () {
    let personaMenor = personas[0];
    for (let i = 1; i < personas.length; i++) {
        let elementoPersona = personas[i];
        if (elementoPersona.edad < personaMenor.edad) {
            personaMenor = elementoPersona;
        }
    }
    console.log(personaMenor.nombre, personaMenor.edad);
    return personaMenor;
}