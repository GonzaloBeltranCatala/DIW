<?php
           $servidor = "localhost"; 
            $username = "root";
            $password = "root";
            $basedatos = "provincias";

          $idProvincia = $_GET["idProvincia"];
          
          
            $conn = mysqli_connect($servidor, $username, $password, $basedatos);

                  $consulta = "SELECT * FROM municipios WHERE idProvincia=".$idProvincia;

            $result = mysqli_query($conn, $consulta);
           
       
        header("Content-type: text/xml");
        
        echo "<provincia id='".$idProvincia."'>";
              
            
             while ($fila = mysqli_fetch_array($result)) {
         
            echo    "<municipio id='".$fila['idMunicipio']."'>".$fila["nombre"]."</municipio>";

             }
    echo "</provincia>";        

           
            mysqli_free_result($result);

           
            mysqli_close($conn);
 
        ?>
        
        

