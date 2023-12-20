<?php 

    $dsn = "mysql:host=localhost; dbname=db_ecommerce";
    $user = "root";
    $password = "";

    $conection = new PDO($dsn, $user, $password);

            
    $query = '
        select * from tb_tests
    ';

    foreach ($conection->query($query) as $key => $value) {
        echo($value['name']);
        echo ("<hr>");
    }

?>