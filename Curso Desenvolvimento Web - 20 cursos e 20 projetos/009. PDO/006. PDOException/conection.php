<?php 

    session_start();

    $host = 'localhost';
    $dbname = 'xdb_ebtec';
    $user = 'root';
    $password = '';

    try {
            $conection = new PDO(
                "mysql:host=$host;dbname=$dbname", 
                "$user",
                "$password"
            );
            header('Location: ./end.php');    
    } 
    
    catch(PDOException $e) {
        $_SESSION['error'] = "Error: ". $e->getMessage();
        header('Location: ./home.php');
    }

?>