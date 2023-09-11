<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de PHP</title>
</head>
<body>
    
<!-- 

Echo: 
Print: 

-->


<?php

    $name = 'Lucas Carvalho da Silva';
    $team = 'Vasco da Gama';
    $age = 33;
    define('USER', 'Lukhaz23')

?>

<h1>Form</h1>
<hr>
<p>Nome: <?php echo $name; ?></p>
<p>Team: <?php echo $team; ?></p>
<p>Age: <?php echo $age; ?></p>
<hr>
<p>
    Now, all in one line: 
    <?php
        print 'Hi, '.$name.'! Your '.$age.' and you are '.$team."'s Fan";
        echo '</br>';
        echo '</br>';
        echo "Test 02: Hi $name, your're $age and his team is $team";
    ?>
</p>
<p>
    <?php 
        echo USER ;
        echo '</br>';
        echo "User: ".USER;
    ?>
</p>
</body>
</html>