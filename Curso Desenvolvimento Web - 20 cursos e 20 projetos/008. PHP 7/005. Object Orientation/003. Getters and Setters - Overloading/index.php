<?php 

    class Funcionarios {

        public $name = null;
        public $tel = null;
        public $numFilhos = null;
        public $cargo = null;
        public $salario = null;

        
        function __set($atribute, $value) {
            $this -> $atribute = $value;
        }

        function __get($atribute) {
            return $this -> $atribute;
        }

        
        function resumirCardFunc() {
            if ($this -> numFilhos == 1 ) {
                return ($this -> __get('name') . ' possui ' . $this -> __get('numFilhos') . 'filho (a).');
            } else {
                return ($this -> __get('name') . ' possui ' . $this -> __get('numFilhos') . ' filhos (as).');
            }
        }

        function modificarNumFilhos($value) {
            if ($value == 1 ) {
            $this -> numFilhos = $value;
            echo ("<hr>");
            echo $this -> __get('name') . ' possui ' . $this -> __get('numFilhos') . ' filho (a).';
            } else {
                $this -> numFilhos = $value;
                echo ("<hr>");
                echo $this -> __get('name') . ' possui ' . $this -> __get('numFilhos') . ' filhos (as).';
            }
        }

    }

    $funcionarios = new Funcionarios();
    
    $funcionarios -> __set('name', 'Lucas');
    $funcionarios -> __set('numFilhos', 5);
    echo $funcionarios -> resumirCardFunc();

?>