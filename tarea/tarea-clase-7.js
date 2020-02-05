/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */
function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Por favor, selecciona una ciudad"
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Por favor, introduce una descripción de regalo"
    }
    if (descripcionRegalo.length > 50) {
        return "La descripción no puede tener més de 50 caracteres"
    }
    if (!/^[a-z ,.?¡¿!]+$/i.test(descripcionRegalo)) {
        return "La descripción contiene caracteres inválidos"
    }

    return "";
}

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter"
    } if (nombre.length > 50) {
        return "Este campo debe tener menos de 50 caracteres"
    } if (!/^[a-z]+$/i.test(nombre)) {
        return "El nombre solo puede estar compuesto por letras"
    }
    return "";
}