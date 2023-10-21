<?php 


    class Example {

        public static $attr001 = " I'm the static attribute ";
        public $attr002 = " I'm the normal attribute ";

        public static function method01() {
            echo " I'm the static method ";
        }

        public function method02() {
            echo " I'm the normal method ";
        }

    }

    echo Example::$attr001;
    echo "<br>";
    Example::method01();



?>