<?php 

    if (!empty($_POST['login']) && !empty($_POST['password'])) {
        $dsn = "mysql:host=localhost; dbname=db_ecommerce";
        $user = "root";
        $password = "";

        $conection = new PDO($dsn, $user, $password);

        $query = "select * from tb_tests where ";
        $query .= "name = :nameUser ";
        $query .= "AND password = :passwordUser ";

        $stmt = $conection->prepare($query);
        $stmt->bindValue(':nameUser', $_POST['login']);    
        $stmt->bindValue(':passwordUser', $_POST['password'], PDO::PARAM_INT);
        $stmt->execute();

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