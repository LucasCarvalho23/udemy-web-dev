<?php

    namespace App\Models;
    use MF\Model\Model;

    class Info extends Model {
        public function getProducts() {
            $query = "SELECT titulo, descricao FROM tb_info";
            return $this->db->query($query)->fetchAll();
        }
    }

?>