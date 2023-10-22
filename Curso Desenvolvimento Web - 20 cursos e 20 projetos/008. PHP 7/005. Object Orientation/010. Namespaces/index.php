<?php 

	require "./Library/Lib01.php";
	require "./Library/Lib02.php";

	use A\Cliente as Cli01;
	use B\Cliente as Cli02;

	$cliente = new Cli02();

	echo "<pre>";
	print_r (get_class_methods($cliente));
	echo "</pre>";

	echo '<hr>';
	echo $cliente -> remove();

?>