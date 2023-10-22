<?php 

	interface InterfaceEquip {
		public function On();
		public function Off();
	}

	class Refrigerator implements InterfaceEquip {

		public function openDoor() {
			echo 'Door open';
		}

		public function On() {
			echo 'On';
		}
		public function Off() {
			echo 'Off';
		}

	}


	class TV implements InterfaceEquip {

		public function changeChannel() {
			echo 'Channel changed';
		}

		public function On() {
			echo 'On';
		}
		public function Off() {
			echo 'Off';
		}

	}


	$refrigerator = new Refrigerator();
	$tv = new TV();

	echo "<pre>";
	print_r (get_class_methods($refrigerator));
	echo "</pre>";
	echo "<hr>";
	echo "<pre>";
	print_r (get_class_methods($tv));
	echo "</pre>";

?>