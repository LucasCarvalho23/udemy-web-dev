<?php 

    session_start();

    $title = str_replace("#","-",$_POST['titulo']);
    $category = str_replace("#","-",$_POST['categoria']);
    $description = str_replace("#","-",$_POST['descricao']);

    $text = $_SESSION['id'] .'#'. $title .'#'. $category .'#'. $description . PHP_EOL;

    $file = fopen("file.txt","a");
    fwrite($file,$text);
    fclose($file);

    header('Location: abrir_chamado.php');

?>