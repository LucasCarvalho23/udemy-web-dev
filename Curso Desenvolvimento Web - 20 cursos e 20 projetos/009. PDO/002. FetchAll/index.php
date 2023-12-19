

<?php 

    $dsn = "mysql:host=localhost; dbname=db_ecommerce";
    $user = "root";
    $password = "";

    $conection = new PDO($dsn, $user, $password);

            
    $query = '
        select * from tb_users
    ';

    $stmt = $conection->query($query);
    $list = $stmt->fetchAll();

    echo ("<pre>");
    print_r ($list);
    echo ("</pre>");

?>