
<?php
session_start();

include "../Modelo/modelo.php";

if(isset($_POST['new_palabra'])){

    $crear_pista = mysqli_real_escape_string($conn, $_POST['txt_pista']);
   
$consulta="SELECT MAX(ID_Palabra) FROM Palabras";

     $aux = mysqli_query($conn,$consulta);
     
     //print_r(mysqli_fetch_assoc($aux));
    
    
     while ($fila= mysqli_fetch_assoc($aux)) {
      
        print_r($fila);
       
     }



   // $add = "INSERT INTO Pistas (Descripcion,ID_Palabra) VALUES ('$crear_pista', '$palabra_id')";

     //$result = mysqli_query($conn, $add);


     $mensaje= "Palabra Añadida";


}
?>