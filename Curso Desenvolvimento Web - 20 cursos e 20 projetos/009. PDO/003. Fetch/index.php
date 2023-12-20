<?php 

    $dsn = "mysql:host=localhost; dbname=db_ecommerce";
    $user = "root";
    $password = "";

    $conection = new PDO($dsn, $user, $password);

            
    $query = '
        select * from tb_tests where id = 1
    ';

    $stmt = $conection->query($query);
    $list = $stmt->fetch(PDO::FETCH_OBJ);

    echo ("<pre>");
    print_r ($list);
    echo ("</pre>");
    echo ("<hr>");

    echo $list->email;

?>