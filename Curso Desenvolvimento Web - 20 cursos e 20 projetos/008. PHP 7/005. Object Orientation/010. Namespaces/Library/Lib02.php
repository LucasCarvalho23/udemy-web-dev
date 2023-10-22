<?php 

    namespace B;

    class Cliente implements interfaceRegistration {

        public $name = 'Maria Eduarda';

        function __get($attribute) {
            return $this -> $attribute;
        }

        public function remove() {
            echo 'remove';
        }
    }

    interface interfaceRegistration {
        public function remove();
}

?>