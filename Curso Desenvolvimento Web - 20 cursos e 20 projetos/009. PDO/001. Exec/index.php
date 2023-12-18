<?php 

    $dsn = "mysql:host=localhost; dbname=db_ecommerce";
    $user = "root";
    $password = "";

    $conection = new PDO($dsn, $user, $password);

    $query = '
        insert into tb_tests(
            name, email, password
        ) values (
            "Vasco","vasco@vasco.com.br","123456"
        )
    ';

    $return = $conection->exec($query);
    echo ($return);

?>