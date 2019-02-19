<?php
include("modelo.php");

$IDTema = $_GET["ID_Tema"];

$consulta = "SELECT * FROM Palabras WHERE ID_Tema=".$IDTema." ORDER BY RAND() LIMIT 1";


$result = mysqli_query($conn, $consulta);


while ($fila= mysqli_fetch_array($result)) {
    echo $fila['Nombre_Palabra'];
    echo "-";
    echo $fila['ID_Palabra'];
   
}


mysqli_close($conn);


?>