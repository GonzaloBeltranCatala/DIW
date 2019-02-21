<?php
session_start();
include("../Vista/head.php");

if(isset($_SESSION['Nombre_Usuario'])) {
    $mensaje= "Bienvenido " . $_SESSION['Nombre_Usuario'];
  }


?>


<body>
<!--salir -->
<div id="salir">

        <form method='post' action="../Controlador/controlador.php">
            <input id="mensaje-welcome" type="text" value='<?php echo $mensaje ?>'disabled>
            <input type="submit" value="Salir del Juego" name="logout">
        </form>
</div>
<!--Menu del juego-->
    <div id="menu">

    <!--Categorias -->
        <h1>Seleccione una categoria:</h1>
        <select id="temas">
            <option id="esconder" value="0">Temas</option>
            <option value="1">Anime</option>
            <option value="2">Libros</option>
            <option value="3">Peliculas</option>
            <option value="4">Paises</option>
            <option value="5">Videojuegos</option>

        </select>

    <!-- Iniciar juego-->
        <button disabled id="iniciar" >Iniciar Juego</button>


    </div>


    <div id="juego" >

        <!--botones letras -->
        <div id="grupo1">
        <table>
            <tr>

                <td> <button class="boton" id="a">A</button> </td>
                <td> <button class="boton" id="b">B</button> </td>
                <td> <button class="boton" id="c">C</button> </td>
                <td> <button class="boton" id="d">D</button> </td>

            </tr>

            <tr>

                <td> <button class="boton" id="e">E</button> </td>
                <td> <button class="boton" id="f">F</button> </td>
                <td> <button class="boton" id="g">G</button> </td>
                <td> <button class="boton" id="h">H</button> </td>
            </tr>

            <tr>

                <td> <button class="boton" id="i">I</button> </td>
                <td> <button class="boton" id="j">J</button> </td>
                <td> <button class="boton" id="k">K</button> </td>
                <td> <button class="boton" id="l">L</button> </td>

            </tr>

            <tr>

                <td> <button class="boton" id="m">M</button> </td>
                <td> <button class="boton" id="n">N</button> </td>
                <td> <button class="boton" id="ñ">Ñ</button> </td>
                <td> <button class="boton" id="o">O</button> </td>
                

            </tr>

            <tr>
                <td> <button class="boton" id="p">P</button> </td>
                <td> <button class="boton" id="q">Q</button> </td>
                <td> <button class="boton" id="r">R</button> </td>
                <td> <button class="boton" id="s">S</button> </td>
                

            </tr>

            <tr>
                <td> <button class="boton" id="t">T</button> </td>
                <td> <button class="boton" id="u">U</button> </td>
                <td> <button class="boton" id="v">V</button> </td>
                <td> <button class="boton" id="w">W</button> </td>
                

            </tr>

            <tr>
                <td> <button class="boton" id="x">X</button> </td>
                <td> <button class="boton" id="y">Y</button> </td>
                <td> <button class="boton" id="z">Z</button> </td>
            </tr>

        </table>

        </div>

        <div id="grupo2">
        
        <!-- imagen horca-->
        <img id="horca" src="../img/falloCero.png">
        
        <!-- mostrar fallos-->
        <p>Numero de Fallos Restantes:
        <input type="text" id="fallos" disabled>
        </p>
        </div>

        <!-- mostrar palabra a resolver-->
        <div id="grupo3">
        <input type="text" id="pantalla" disabled>
        </div>
        
        <!-- pistas-->
        <div id="grupo4">

        <button id="boton-pista">Pista</button>
        <input type="text" id="texto-pista" disabled>
        </div>

      

        <input type="text" id="aciertos" hidden>
    
        <input type="text" id="solucion" hidden>

        

    
    </div>

</body>

</html>