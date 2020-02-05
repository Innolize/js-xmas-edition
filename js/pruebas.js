function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'validarNombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre("12334234") === "El nombre solo puede estar compuesto por letras",
        "validarNombre no valida que solo pueda contener letras" 
    );
    console.assert(
        validarNombre("Felipe") === "",
        "validarNombre no valido nombre correcto"
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Por favor, selecciona una ciudad',
        'validarCiudad no valido que el nombre no sea vacio'
    );

    console.assert(
        validarCiudad("Buenos Aires") === "",
        "validarCiudad no funcionó con un nombre válido"
    )
}


function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 
            "La descripción no puede tener més de 50 caracteres",
            "validarDescripcionRegalo no validó que la descripción tenga menos de 50 caracteres"
        );

    console.assert(
        validarDescripcionRegalo("") === "Por favor, introduce una descripción de regalo",
        "validarDescripcionRegalo no valido que este vacia"
        );
    console.assert(
        validarDescripcionRegalo("Regalo del tio!") === "",
        "La funcion validarDescripcionRegalo no funciono con descripcion correcta"
    );
    console.assert(
        validarDescripcionRegalo("$%$%") === "La descripción contiene caracteres inválidos",
        "La funcion validarDescripcionRegalo no valido caracteres invalidos"
    )
}





probarValidarDescripcionRegalo();

probarValidarNombre();

probarValidarCiudad();
