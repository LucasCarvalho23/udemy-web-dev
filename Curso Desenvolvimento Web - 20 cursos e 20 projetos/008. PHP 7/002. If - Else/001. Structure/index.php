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
        $haveCard = true;
        $valueTotal = 100;
        $haveCardValue = 'Não';
        $freight = 0;
        $total = 0;

        $haveCard === true && $valueTotal >= 100 ? $freight = 0 : $freight = $valueTotal / 10; 

        $haveCard === true ? $haveCardValue = 'Sim' : $haveCardValue = 'Não';

        $total = $freight + $valueTotal;

    ?>

    <h1>Dados do usuário:</h1>
    <p>Nome do Cliente: <?php echo $name ?></p>
    <p>Possui cartão da loja? <?php echo $haveCardValue ?></p>
    <p>Valor da compra: <?php echo $valueTotal ?>,00</p>
    <p>Valor do frete: <?php echo $freight ?>,00</p>
    <p>Valor total da compra: <?php echo $total ?>,00</p>

</body>
</html>