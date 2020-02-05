


function validarFormulario(event) {
    const $form = document.querySelector('#carta-a-santa');
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo,
    };

    const esExito = manejarErrores(errores) === 0

    if (esExito) {
        document.querySelector("#exito").className = "";
        $form.className = "oculto"
        setTimeout(redirigirWishlist, 5000)
    }

    event.preventDefault();
}



function manejarErrores(errores) {

    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores")
    let acumuladorErrores = 0

    while ($errores.firstChild) {
        $errores.removeChild($errores.firstChild)
    }

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            $form[key].className = "error"
            acumuladorErrores++

            const $nuevoError = document.createElement("li");
            $nuevoError.innerText = error;
            $errores.appendChild($nuevoError)

        } else {
            $form[key].className = ""
        }
    });
    return acumuladorErrores;
}

function redirigirWishlist() {
    window.location.href = "wishlist.html"
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario





