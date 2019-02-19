<?php
session_start();

include "../Modelo/modelo.php";



if(isset($_POST['borra-usu'])){


    $borrar_usuario = mysqli_real_escape_string($conn, $_POST['txt_borrar']);

    if( $borrar_usuario != ""){

        if($borrar_usuario=="admin"){
            $mensaje="No se puede borrar al Admin";
        }

        else{
            $del = "DELETE FROM Login WHERE Nombre_Usuario='$borrar_usuario'";

            $result = mysqli_query($conn, $del);
        
            $mensaje="Usuario Borrado";
        }

    }

    else{
        $mensaje="Introduzca Usuario";
    }
   

}


?>