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

    formulario.addEventListener("click", function (event) {
        event.preventDefault();

        if (validarFormulario()) {
            var nombre = document.getElementById("name").value;
            var mensaje = document.getElementById("comment").value;
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "guardar.php", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
                }
            };
            xhr.send("nombre=" + encodeURIComponent(nombre) + "&mensaje=" + encodeURIComponent(mensaje));

            location.reload();
        }
    });
});

