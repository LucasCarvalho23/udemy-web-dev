<?php 

	class Vehicle {

		public $plate = null;
		public $color = null;

		function speedUp() {
			echo 'accelerated';
		}
	}

	class Car extends Vehicle {
		
		public $sunroof = true;

		function __construct($valuePlate, $valueColor) {
			$this -> plate = $valuePlate;
			$this -> color = $valueColor;
		}

		function openSunroof() {
			if ($this -> sunroof) {
				echo "Has a sunroof";
			} else {
				echo "Hasn't a sunroof";
			}
		}

		function changeSteering() {
			echo 'change steering';
		}

	}


	class Motorcycle extends Vehicle {
				
		public $againstWeight = true;

		function __construct($valuePlate, $valueColor) {
			$this -> plate = $valuePlate;
			$this -> color = $valueColor;
		}

		function cram() {
			echo 'cram';
		}

	}



	$vehicle = new Vehicle();
	$car = new Car('KWY9999', 'White');
	$motorcycle = new Motorcycle('ABC9999', 'Red');

	echo "<pre>";
	print_r ($vehicle);
	echo "<hr>";
	print_r ($car);
	echo "<hr>";
	print_r ($motorcycle);
	echo "</pre>";

?>