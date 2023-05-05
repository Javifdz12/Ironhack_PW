<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $mensaje = $_POST["comment"];

    $archivo = fopen("formulario.csv", "w");
    fputcsv($archivo, [$nombre,$mensaje]);
    fclose($archivo);
}
?>