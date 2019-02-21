<?php
session_start();
include("../Vista/head.php");
include("../Modelo/admin-palabra.php");
include("../Modelo/admin-pista.php");
include("../Modelo/borra-usuario.php");
?>


<body>
<div class="container">

    <form method="post" action="">

        <div id="crearpalabras">

        <h1>Crear Palabra</h1>

        <select id="txt_temas" name="txt_temas">
            <option value="1">Anime</option>
            <option value="2">Libros</option>
            <option value="3">Peliculas</option>
            <option value="4">Paises</option>
            <option value="5">Videojuegos</option>

        </select>

            <div>
                <input type="text" class="textbox" id="txt_palabra" name="txt_palabra" placeholder="Palabra"/>
            </div>

            <div>
                <input type="text" class="textbox" id="txt_pista" name="txt_pista" placeholder="Pista"/>
            </div>

            <div>
                <input type="submit" value="Crear Palabra" name="new_palabra" id="new_palabra" />
            </div>

            <div>
                <input type="text" class="mensajes" name="mensaje-crear" id="mensaje-crear" value='<?php echo $mensajecrear ?>' disabled/>
            </div>


        </div>

        <div id="borra-usuario">
        <h1>Borrar Usuario</h1>

            <div>
                <input type="text" class="textbox" id="txt_borrar" name="txt_borrar" placeholder="Usuario"/>
            </div>

            <div>
                <input type="submit" value="Borrar Usuario" name="borra-usu" id="borra-usu" />
            </div>

            <div>
                <input type="text" class="mensajes" name="mensaje-borra" id="mensaje-borra" value='<?php echo $mensaje ?>' disabled/>

            </div>
        
        </div>
    </form>

<div id="saliradmin">

<form method='post' action="../Controlador/controlador.php">
            <input   type="submit" value="Salir de Admin" name="logout">
</form> 

</div>
   

</div>
</body>
</html>
