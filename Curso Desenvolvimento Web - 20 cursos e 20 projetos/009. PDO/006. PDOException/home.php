<?php 

    session_start();
    
    print_r($_SESSION);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Error</title>
</head>
<body style="background-color: black;">
    <div style="text-align: center;">
        <img src="./anonymous-gif.gif">
    </div>
    <p style="color: white; text-align: center;">
        Acesso temporariamente indisponível: 
        <p style="color: white; font-size: .8em; text-align: center;">
            <?php echo $_SESSION['error']; ?>
        </p>
    </p>
</body>
</html>