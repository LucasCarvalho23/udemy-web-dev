<?php 
    if ($_SESSION['authenticated'] !== 'SIM' || !isset($_SESSION['authenticated'])) {
    header('Location: index.php?login=error-auth');
    }
?>