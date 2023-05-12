document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("mi_formulario");
    const nombreInput = document.getElementById("name");
    const mensajeInput = document.getElementById("comment");
    const boton = document.getElementById("boton");
    const audio = document.getElementById("myAudio");
    const audio2 = document.getElementById("myAudio2");

    boton.addEventListener("mouseover", function() {
        boton.style.backgroundColor = "red";
        if (validarFormulario2()) {
            boton.style.backgroundColor = "green";
        }
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

    function validarFormulario2() {
        if (nombreInput.value.trim() === "") {
            return false;
        }

        if (mensajeInput.value.trim() === "") {
            return false;
        }

        return true;
    }

    boton.addEventListener("click", function (event) {
        event.preventDefault();

        if (validarFormulario()) {
            audio.play();
            formulario.reset();
        }
    });
});

