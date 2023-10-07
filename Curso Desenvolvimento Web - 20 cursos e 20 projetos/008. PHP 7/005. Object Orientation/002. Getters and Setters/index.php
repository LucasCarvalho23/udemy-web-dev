<?php 

    class Funcionarios {

        public $name = null;
        public $tel = null;
        public $numFilhos = null;

        function setName($value) {
            $this -> name = $value;
        }

        function getName() {
            return $this -> name;
        }

        function setNumFilhos ($value) {
            $this -> numFilhos = $value;
        }

        function getNumFilhos() {
            return $this -> numFilhos;
        }
        
        function resumirCardFunc() {
            if ($this -> numFilhos == 1 ) {
                return ($this -> name . ' possui ' . $this -> numFilhos . 'filho (a).');
            } else {
                return ($this -> name . ' possui ' . $this -> numFilhos . ' filhos (as).');
            }
        }

        function modificarNumFilhos($value) {
            if ($value == 1 ) {
            $this -> numFilhos = $value;
            echo ("<hr>");
            echo $this -> name . ' possui ' . $this -> numFilhos . ' filho (a).';
            } else {
                $this -> numFilhos = $value;
                echo ("<hr>");
                echo $this -> name . ' possui ' . $this -> numFilhos . ' filhos (as).';
            }
        }

    }

    $funcionarios = new Funcionarios();
    
    $funcionarios -> setName('Vasco');
    $funcionarios -> setNumFilhos(3);

    echo $funcionarios -> resumirCardFunc();
    echo ("<hr>");
    echo $funcionarios -> getName();


?>