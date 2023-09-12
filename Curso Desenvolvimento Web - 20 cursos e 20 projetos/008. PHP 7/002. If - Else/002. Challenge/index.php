<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de PHP</title>
</head>
<body>
    
    <?php 
    
        $name = 'Lucas Carvalho';
        $age = 33;
        $weight = 68.4;
        $donateBlood = '';

        ($age > 16 && $age < 69) && ($weight > 50) ? $donateBlood = "Atende aos requisitos" : $donateBlood = "Não atende os requisitos";

    ?>

    <h1>Formulário Médico</h1>
    <p>Nome: <?php echo $name ?></p>
    <p>Idade: <?php echo $age ?> anos</p>
    <p>Peso: <?php echo $weight ?> Kg</p>
    <p>Pode doar sangue? <?php echo $donateBlood ?> </p>

</body>
</html>