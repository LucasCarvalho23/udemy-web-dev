<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PHP 7 - Challenge Arrays</title>
</head>
<body>

	<h1>Random numbers</h1>

	<?php

		$number1 = [];
		$numberValues = 5;

		for ($count = 0; $count <= $numberValues; $count++) {
			$number1[$count] = rand(1,99);

			foreach ($number1 as $value) {
				if ($number1[$count] == $value) {
					$number1[$count] = rand(1,99) + 1;
				}
			}

		}

		// EXIBITION
		echo ("The draw values are: <br><br>");
		foreach ($number1 as $value) {
			echo ("$value <br>");
		}


	?>

	
</body>
</html>