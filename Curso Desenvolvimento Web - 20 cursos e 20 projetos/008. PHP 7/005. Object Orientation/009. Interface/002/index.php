<?php 

	interface ActionsMammal {
		public function breathe();
	}

	interface ActionTerrestrial {
		public function walk();
	}

	interface ActionAquatic {
		public function swim();
	}

	class Human implements ActionsMammal, ActionTerrestrial {

		public function talk() {
			echo 'Talk';
		}

		public function breathe() {
			echo 'Breathe';
		}

		public function walk() {
			echo 'Walk';
		}

	}


	class Whale implements ActionAquatic{

		public function squirt() {
			echo 'Squirt';
		}

		public function swim() {
			echo 'swim';
		}

	}


	$human = new Human();
	$whale = new Whale();

	echo $human -> talk();
	echo ("<hr>");
	echo $whale -> squirt();
	echo ("<hr>");
	echo $human -> breathe();

?>