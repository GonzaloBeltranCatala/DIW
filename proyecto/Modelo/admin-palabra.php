<?php
session_start();

include "../Modelo/modelo.php";



if(isset($_POST['new_palabra'])){


    $crear_palabra = mysqli_real_escape_string($conn, $_POST['txt_palabra']);

   
    $tema_id= isset($_POST['txt_temas']) ? $_POST['txt_temas'] : '';

    
    $add = "INSERT INTO Palabras (Nombre_Palabra,ID_Tema) VALUES ('$crear_palabra', '$tema_id')";

    
    $result = mysqli_query($conn, $add);
 

}


?>