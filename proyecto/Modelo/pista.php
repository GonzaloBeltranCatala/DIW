<?php
include("modelo.php");

$IDPalabra = $_GET["ID_Palabra"];

$consulta = "SELECT * FROM Pistas WHERE ID_Palabra=".$IDPalabra." ORDER BY RAND() LIMIT 1";


$result = mysqli_query($conn, $consulta);


while ($fila= mysqli_fetch_array($result)) {
    echo $fila['Descripcion'];
    
}


mysqli_close($conn);


?>