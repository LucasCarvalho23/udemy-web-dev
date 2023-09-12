<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso de PHP</title>
</head>
<body>
    
    <?php 

        $name = 'Monkey D. Luffy';
        $wage = 3000.00;
        $aliquot = '';

        function irpfFunc($wage,$aliquot) {

            if ($wage <= 1903.98) {
                $aliquot = 'isento'; 
            } else if ($wage > 1903.99 && $wage < 2826.65) {
                $aliquot = '7.5%'; 
            } else if ($wage > 2826.66 && $wage < 3751.05) {
                $aliquot = '15%';
            } else if ($wage > 3751.06 && $wage < 4664.68) {
                $aliquot = '22.5%';
            } else {
                $aliquot = '27.5%';
            }

            echo $aliquot;
             
        }


    ?>

    <h1>Cálculo IRPF 2023</h1>
    <p>Olá, <?php echo $name ?>, tudo bem?</p>
    <p>No momento, sua alíquota é de <?php echo irpfFunc($wage,'','') ?>.</p>

</body>
</html>