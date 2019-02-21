
<?php
session_start();

include "../Modelo/modelo.php";

if(isset($_POST['new_palabra'])){

    $crear_pista = mysqli_real_escape_string($conn, $_POST['txt_pista']);

    $crear_palabra = mysqli_real_escape_string($conn, $_POST['txt_palabra']);


    if( $crear_pista != "" && $crear_palabra != ""){
   

    $consulta="SELECT ID_Palabra FROM Palabras WHERE Nombre_Palabra='$crear_palabra'";

    $aux = mysqli_query($conn,$consulta);

    

    while($row = mysqli_fetch_assoc($aux))
    {
        $palabra_id = $row['ID_Palabra'];
       
    }
    
   
    $add = "INSERT INTO Pistas (Descripcion,ID_Palabra) VALUES ('$crear_pista', '$palabra_id')";

     $result = mysqli_query($conn, $add);


     $mensajecrear= "Palabra Añadida";

    }

    else{
      $mensajecrear= "Rellene los campos";
    }


}
?>