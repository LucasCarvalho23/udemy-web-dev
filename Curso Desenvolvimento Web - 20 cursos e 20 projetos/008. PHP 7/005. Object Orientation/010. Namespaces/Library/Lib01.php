<?php 

    namespace A;

    class Cliente implements interfaceRegistration {

        public $name = 'Lucas';

        function __get($attribute) {
            return $this -> $attribute;
        }

        public function save() {
            echo 'Save';
        }
    }

    interface interfaceRegistration {
        public function save();
    }

?>