<?php 

/*
    The user can to insert a query inside the password. Just end the password like that: 123456'; delete from tb_test where 'a' = 'a
    Like that it completed the query and delete the table in database.  

    O usuário pode inserir uma consulta dentro da tela de password. Basta ele terminar a senha dessa forma: 123456'; delete from tb_test where 'a' = 'a
    Dessa forma ele completa a consulta e deleta a tabela no banco.
*/

if (!empty($_POST['login']) && !empty($_POST['password'])) {
    $dsn = "mysql:host=localhost; dbname=db_ecommerce";
    $user = "root";
    $password = "";

    $conection = new PDO($dsn, $user, $password);

    $query = "select * from tb_tests where ";
    $query .= "name = '{$_POST['login']}' ";
    $query .= "AND password = '{$_POST['password']}' ";

    echo ($query);
    $stmt = $conection->query($query);
    $user = $stmt->fetch(PDO::FETCH_OBJ);

    
    echo ("<pre>");
    print_r ($user);
    echo ("</pre>");
    echo ("<hr>");
    
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Login</title>
</head>
</head>
<body>
    <form action="index.php" method="post" class = "p-5">
        <p><input type="text" name="login" placeholder="Insert your login" class="form-control-md"></p>
        <p><input type="password" name="password" placeholder="Insert your password" class="form-control-md"></p>
        <p><button class = "btn btn-outline-primary btn-sm" type="submit">Send</button></p>
    </form>
</body>
</html>