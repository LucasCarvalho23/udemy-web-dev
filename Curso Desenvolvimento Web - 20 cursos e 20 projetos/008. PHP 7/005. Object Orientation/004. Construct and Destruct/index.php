<?php 

    class People {

        public $name = null;

        function __construct($value) {
            echo 'Started Object';
            echo '<hr>';
            $this -> name = $value;
        }

        function __destruct() {
            echo '<hr>';
            echo 'Removed Object';
        }

        function __get($atribute) {
            return $this -> $atribute;
        }

    }

    $people = new People('Vasco da Gama');
    echo $people -> __get('name');

?>