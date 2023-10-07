<?php 

    class Funcionarios {

        public $name = 'Lucas';
        public $tel = '31 5555-5555';
        public $numFilhos = 1;
        
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
    echo ($funcionarios -> resumirCardFunc());
    $funcionarios -> modificarNumFilhos(3);

?>