<?php

    namespace App\Controllers;
    use App\Models\Product;
    use App\Models\Info;
    use MF\Controller\Action;
    use MF\Model\Container;

    class IndexController extends Action {

        public function index() {
            $product = Container::getModel('product');
            $products = $product->getProducts();
            $this->view->dados = $products;
            $this->render('index', 'layout1');
        }

        public function about_us() {
            $info = Container::getModel('info');
            $infos = $info->getProducts();
            $this->view->dados = $infos;
            $this->render('aboutUs', 'tema_pascoa');
        }

    }

?>