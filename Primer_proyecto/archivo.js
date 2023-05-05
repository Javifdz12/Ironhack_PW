document.addEventListener("DOMContentLoaded", function() {
    // Obtener el formulario y los campos de entrada
    const formulario = document.getElementById("mi_formulario");
    const nombreInput = document.getElementById("name");
    const mensajeInput = document.getElementById("comment");

    // Función para validar el formulario
    function validarFormulario() {
    // Validar que se haya ingresado un nombre
    if (nombreInput.value.trim() === "") {
        alert("Por favor ingrese su nombre");
        nombreInput.focus();
        return false;
    }


    // Validar que se haya ingresado un mensaje
    if (mensajeInput.value.trim() === "") {
        alert("Por favor ingrese un mensaje");
        mensajeInput.focus();
        return false;
    }

    // Si se han validado todos los campos, enviar el formulario
    return true;
    }

    // Manejar el evento submit del formulario
    formulario.addEventListener("submit", function (event) {
    // Prevenir el comportamiento predeterminado del formulario
    event.preventDefault();

    // Validar el formulario
    if (validarFormulario()) {
        // Si el formulario es válido, enviarlo
        formulario.submit();
    }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("mi_formulario");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const datos = new FormData(formulario);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "guardar.php", true);
        xhr.send(datos);
        });
});
