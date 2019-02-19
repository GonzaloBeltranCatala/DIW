
<?php
include "../Modelo/registro.php";

?>


<body>
<div class="container">
    <form method="post" action="">

        <div id="div_login">
            <h1>Inicio de Sesion</h1>

            <div>
                <input type="text" class="textbox" id="txt_nombre" name="txt_nombre" placeholder="Usuario" />
            </div>

            <div>
                <input type="password" class="textbox" id="txt_contrasenia" name="txt_contrasenia" placeholder="Password"/>
            </div>

            <div>
                <input type="submit" value="Inicar Sesion" name="sesion" id="sesion" />
                <input type="submit" value="Crear Usuario" name="crear" id="crear" />
            </div>

            <div>
                <input type="text" name="error" id="error" value='<?php echo $mensaje ?>' disabled/>
            </div>
            
        </div>
    </form>
</div>
</body>
</html>

