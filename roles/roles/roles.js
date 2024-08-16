let empleados = [
    { cedula: "1714616123", nombre: "JOHN", apellido: "CENA", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "LUISA", apellido: "GONZALEZ", sueldo: 900.0 },
    { cedula: "0987654321", nombre: "DANIEL", apellido: "PINTADO", sueldo: 5000.0 }
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
    deshabilitarCmpPrincipales();
}

let esNuevo = false;

ejecutarNuevo = function () {
    esNuevo = true;
    habilitarCmpPrincipales();
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
    limpiarErrores();
    let validaciones = 0;
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

    if (validaciones == 4) {
        if (esNuevo == true) {
            let objetoEmpleado = {};
            objetoEmpleado.cedula = valorCedula;
            objetoEmpleado.nombre = valorNombre;
            objetoEmpleado.apellido = valorApellido;
            objetoEmpleado.sueldo = valorSueldo;
            let nuevoEmpleado = agregarEmpleado(objetoEmpleado);
            if (nuevoEmpleado == true) {
                esNuevo = false;
                alert("Cliente agregado");
                mostrarEmpleados();
                deshabilitarCmpPrincipales();
            } else {
                alert("Ya existe el cliente con la cedula: " + objetoEmpleado.cedula);
            }
        } else {
            let cmpBuscar = recuperarTexto("txtBusquedaCedula");
            let busqueda = buscarEmpleado(cmpBuscar);
            busqueda.nombre = recuperarTexto("txtNombre");
            busqueda.apellido = recuperarTexto("txtApellido");
            busqueda.sueldo = recuperarTexto("txtSueldo");
            alert("Empleado modificado exitosamente");
            mostrarEmpleados();
            deshabilitarCmpPrincipales();
        }
    }
}

limpiarErrores = function () {
    mostrarTexto("lblErrorCedula", "");
    mostrarTexto("lblErrorNombre", "");
    mostrarTexto("lblErrorApellido", "");
    mostrarTexto("lblErrorSueldo", "");
}

deshabilitarCmpPrincipales = function () {
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

habilitarCmpPrincipales = function () {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

ejecutarBusqueda = function () {
    let cmpBuscar = recuperarTexto("txtBusquedaCedula");
    let busqueda = buscarEmpleado(cmpBuscar);
    if (busqueda == null) {
        alert("Empleado no existe");
    }
    else {
        mostrarTextoEnCaja("txtCedula", busqueda.cedula);
        mostrarTextoEnCaja("txtNombre", busqueda.nombre);
        mostrarTextoEnCaja("txtApellido", busqueda.apellido);
        mostrarTextoEnCaja("txtSueldo", busqueda.sueldo);
        habilitarCmpPrincipales();
    }
}

btnLimpiar = function () {
    mostrarTextoEnCaja("txtCedula", "");
    mostrarTextoEnCaja("txtNombre", "");
    mostrarTextoEnCaja("txtApellido", "");
    mostrarTextoEnCaja("txtSueldo", "");
    esNuevo = false;
    deshabilitarCmpPrincipales();
}