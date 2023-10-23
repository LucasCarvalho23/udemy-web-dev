<!-- Try, Catch, Finally and Throw -->

<?php 

	try {
		echo 'Try';

		$sql = "select * from clientes";
		mysql_query($sql);

	} 

	catch(Error $e) {
		echo '<br>Catch';
	}
	
	finally {
		echo "<br>Finally";
	}

?>