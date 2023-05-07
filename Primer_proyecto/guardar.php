<?php
$nombre = $_POST["nombre"];
$comentario = $_POST["mensaje"];

if (empty($nombre) || empty($comentario)) {
  // Si alguno de los campos está vacío, enviar un mensaje de error
    echo "Ha ocurrido un error al guardar tu comentario.";
} else {
  // Si los campos no están vacíos, guardar el comentario en un archivo de texto
    $archivo = fopen("comentarios.txt", "a");
    fwrite($archivo, $nombre . " dijo: " . $comentario . "\n");
    fclose($archivo);

  // Enviar un mensaje de confirmación
    echo "Tu comentario ha sido guardado correctamente.";
}
?>
















