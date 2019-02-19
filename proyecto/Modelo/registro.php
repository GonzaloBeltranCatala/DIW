<?php
session_start();

include "../Modelo/modelo.php";


if(isset($_POST['sesion'])){

    $nombre = mysqli_real_escape_string($conn, $_POST['txt_nombre']);
    $contrasenia = mysqli_real_escape_string($conn, $_POST['txt_contrasenia']);
   
    if ($nombre != "" && $contrasenia != ""){

        $consulta = "select count(*) as cntUser from Login where Nombre_Usuario='".$nombre."' and Password='".$contrasenia."'";

        $result = mysqli_query($conn, $consulta);
       
        $row = mysqli_fetch_array($result);

        $count = $row['cntUser'];

        if($count > 0){
            $_SESSION['Nombre_Usuario'] = $nombre;

            if($nombre=="admin"){
                header('Location: ../Vista/admin-formulario.php');
            }
            else{
                header('Location: ../Vista/vista.php');
            }

           
    
            
        }else{
            $mensaje= "Nombre de Usuario o Password incorrectos";
        }

    }

    else{
        $mensaje= "Introduzca Usuario y Password";
    }



}

if(isset($_POST['crear'])){

    $crear_nombre = mysqli_real_escape_string($conn, $_POST['txt_nombre']);
    $crear_contrasenia = mysqli_real_escape_string($conn, $_POST['txt_contrasenia']);
   
    if ($crear_nombre != "" && $crear_contrasenia != ""){

        $comprobar="SELECT Nombre_Usuario FROM Login WHERE Nombre_Usuario='$crear_nombre'";

        $result = mysqli_query($conn, $comprobar);

        if(mysqli_num_rows($result)>=1){
             $mensaje="El Usuario ya existe";
        }


        else{
        $consulta = "INSERT INTO Login(Nombre_Usuario, Password) VALUES ('$crear_nombre', '$crear_contrasenia')";

        $result = mysqli_query($conn, $consulta);

        $mensaje= "Usuario Creado";
    }
     
    }

    else{
        $mensaje= "Rellene los campos Usuario y Password";
    }

}


?>