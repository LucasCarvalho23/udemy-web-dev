<?php 

	class Vehicle {

		public $plate = null;
		public $color = null;

		function speedUp() {
			echo 'accelerated';
		}

		function changeGear() {
			echo 'Change gear with hand';
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

		function changeGear() {
			echo 'Change gear with toes';
		}

	}



	$vehicle = new Vehicle();
	$car = new Car('KWY9999', 'White');
	$motorcycle = new Motorcycle('ABC9999', 'Red');

	echo $car -> changeGear();
	echo "<br>";
	echo $motorcycle -> changeGear();

?>