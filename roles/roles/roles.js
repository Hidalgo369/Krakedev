let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "0987654321", nombre: "Daniel", apellido: "Pintado", sueldo: 500.0 }
]

mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();
}

mostrarOpcionRol = function () {
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}

mostrarOpcionResumen = function () {
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}

mostrarEmpleados = function () {
    mostrarComponente("tablaEmpleados");
    let cmpTabla = document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>SUELDO</th>" +
        "</tr>";
    let elementoEmpleado;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        contenidoTabla +=
            "<tr><td>" + elementoEmpleado.cedula + "</td>"
            + "<td>" + elementoEmpleado.nombre + "</td>"
            + "<td>" + elementoEmpleado.apellido + "</td>"
            + "<td>" + elementoEmpleado.sueldo + "</td>"
            + "</tr>";

    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

let esNuevo = false;

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

buscarEmpleado = function (cedula) {
    let elementoEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula == cedula) {
            empleadoEncontrado = elementoEmpleado;
        }
    }
    return empleadoEncontrado;
}

agregarEmpleado = function (empleado) {
    let resultado = buscarEmpleado(empleado.cedula);
    if (resultado == null) {
        empleados.push(empleado);
        return true;
    } else {
        return false;
    }
}

guardar = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    limpiar();
    let validaciones=0;
    if (valorCedula.length == 10 && esDigito(valorCedula)) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorCedula", "Cédula no válida, debe contener 10 dígitos");
    }
    if (valorNombre.length >= 3 && esMayuscula(valorNombre)) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorNombre", "El nombre debe estar en mayúscula y al menos tener 3 caracteres");
    }
    if (valorApellido.length >= 3 && esMayuscula(valorApellido)) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorApellido", "El apellido debe estar en mayúscula y al menos tener 3 caracteres");
    }
    if (recuperarFloat("txtSueldo") && valorSueldo >= 400 && valorSueldo <= 5000) {
        validaciones++;
    } else {
        mostrarTexto("lblErrorSueldo", "Solo se admiten numeros decimales entre 400 y 5000");
    }

    if(validaciones==4){
        if (esNuevo == true) {
            let objetoEmpleado = {};
            objetoEmpleado.cedula = valorCedula;
            objetoEmpleado.nombre = valorNombre;
            objetoEmpleado.apellido = valorApellido;
            objetoEmpleado.sueldo = valorSueldo;
            let nuevoEmpleado = agregarEmpleado(objetoEmpleado);
            if (nuevoEmpleado == true) {
                alert("Cliente agregado");
                mostrarEmpleados();
            } else {
                alert("Ya existe el cliente con la cedula: " + objetoEmpleado.cedula);
            }
        }
    }
}

limpiar = function () {
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}
