<?php 

    class Father {

        private $name = 'Lukhaz';
        protected $lastName = 'Oak';
        public $humor = 'Sad';

        function __set($atribute, $value) {
            $this -> $atribute = $value;
        }

        function __get($atribute) {
            return $this -> $atribute;
        }

        private function runMania() {
            echo '<br>Whistle...';
        }

        protected function runAnswer() {
            echo '<br>Hi!';
        }

        public function runAction() {
            $this -> runMania();
            $this -> runAnswer();
            echo '<br>Play soccer';
        }

    }

    class Son extends Father {


    }


    $father = new Father();
    $son = new Son();

    echo "<pre>";
    print_r (get_class_methods($son));
    echo "</pre>";


?>