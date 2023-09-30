<?php 

    session_start();

    $validationLogin = false;
    $userId = null;
    $userPerfil = null;

    $perfil = array(
        '1' => 'Administrativo', '2' => 'Usuário'
    );

    $FuncList = array(
        array('id' => 1, 'login' => 'adm@adm.com.br', 'senha' => '1234', 'perfil_id' => 1),
        array('id' => 2, 'login' => 'test@adm.com.br', 'senha' => '1234', 'perfil_id' => 1),
        array('id' => 3, 'login' => 'duda@adm.com.br', 'senha' => '1234', 'perfil_id' => 2),
        array('id' => 4, 'login' => 'lucas@adm.com.br', 'senha' => '1234', 'perfil_id' => 2)
    );

    foreach ($FuncList as $user) {

        if ($user['login'] == $_POST['login'] && $user['senha'] == $_POST['senha']) {
            $validationLogin = true;
            $userId = $user['id'];
            $userPerfil = $user['perfil_id'];
        }

    }

    if ($validationLogin) {
        echo ("Access allowed");
        $_SESSION['authenticated'] = 'SIM';
        $_SESSION['id'] = $userId;
        $_SESSION['perfil'] = $userPerfil;
        header('Location: home.php');
    } else {
        $_SESSION['authenticated'] = 'NÃO';
        header('Location: index.php?login=error');
    }


?>