<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $mensaje = $_POST["mensaje"];
    // Abrir el archivo de comentarios en modo de escritura y agregar
    $archivo_comentarios = fopen("datos.txt", "a");
    fwrite($archivo_comentarios, $nombre . ": " . $mensaje . "\n");
    fclose($archivo_comentarios);
    echo "Los datos se han recibido correctamente: nombre = " . $nombre . ", mensaje = " . $mensaje;
}
?>








