document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("mi_formulario");
    const nombreInput = document.getElementById("name");
    const mensajeInput = document.getElementById("comment");
    var boton = document.getElementById("boton");

    boton.addEventListener("mouseover", function() {
        boton.style.backgroundColor = "green";
    });

    boton.addEventListener("mouseout", function() {
        boton.style.backgroundColor = "white";
    });


    function validarFormulario() {
        if (nombreInput.value.trim() === "") {
            alert("Por favor ingrese su nombre");
            nombreInput.focus();
            return false;
        }

        if (mensajeInput.value.trim() === "") {
            alert("Por favor ingrese un mensaje");
            mensajeInput.focus();
            return false;
        }

        return true;
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validarFormulario()) {
            const solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // Si la solicitud ha sido exitosa, mostrar el mensaje de confirmación
                mensaje.innerHTML = "Tu comentario ha sido guardado correctamente.";
                formulario.reset(); // Reiniciar el formulario
                } else if (this.readyState === XMLHttpRequest.DONE) {
                // Si la solicitud ha fallado, mostrar un mensaje de error
                mensaje.innerHTML = "Ha ocurrido un error al guardar tu comentario.";
                }
            };
            solicitud.open("POST", "guardar.php", true);
            solicitud.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            solicitud.send("nombre=" + nombreInput + "&comentario=" + mensajeInput);
            // Recargar la página
            location.reload();
        }
    });
});

