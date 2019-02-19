
<?php

// logout
if(isset($_POST['logout'])){
    session_destroy();
    header('Location: ../Vista/login.php');
}

?>