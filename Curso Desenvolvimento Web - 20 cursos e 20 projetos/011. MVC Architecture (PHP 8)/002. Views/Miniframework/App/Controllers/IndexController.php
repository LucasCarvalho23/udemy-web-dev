<?php

    namespace App\Controllers;
    use MF\Controller\Action;

    class IndexController extends Action {

        public function index() {
            $this->view->dados = array("Vasco", "Botafogo", "Flamengo", "Fluminense");
            $this->render('index');
        }

        public function about_us() {
            $this->view->dados = array("Palmeiras", "Santos", "Corinthians", "São Paulo");
            $this->render('aboutUs');
        }

    }

?>