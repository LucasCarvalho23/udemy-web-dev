<?php 
  session_start();

  $called = array();
  $file = fopen("../../../app_help_desk/file.txt","r");

  while (!feof($file)) {
    $register = fgets($file);
    $called[] = $register;
  }

  fclose($file);

?>

<html>
  <head>
    <meta charset="utf-8" />
    <title>App Help Desk</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <style>
      .card-consultar-chamado {
        padding: 30px 0 0 0;
        width: 100%;
        margin: 0 auto;
      }
    </style>
  </head>

  <body>

    <?php 
        include 'navbar.php';
    ?>

    <div class="container">    
      <div class="row">

        <div class="card-consultar-chamado">
          <div class="card">
            <div class="card-header">
              Consulta de chamado
            </div>
            
            <div class="card-body">

            <?php 
              foreach($called as $calls) {
            ?>
              
              <?php 
                $calls_date = explode('#', $calls); 

                if ($_SESSION['perfil'] == 2) {
                  if ($calls_date[0] != $_SESSION['id']) {
                    continue;
                  }
                }

                if (count($calls_date) < 2) {
                  continue;
                }

              ?>

              <div class="card mb-3 bg-light">
                <div class="card-body">
                  <h5 class="card-title"><?= $calls_date[1] ?></h5>
                  <h6 class="card-subtitle mb-2 text-muted"><?= $calls_date[2] ?></h6>
                  <p class="card-text"><?= $calls_date[3] ?></p>
                </div>
              </div>

            <?php 
              }
            ?>

              <div class="row mt-5">
                <div class="col-6">
                  <a href = "home.php" class="btn btn-lg btn-warning btn-block">Voltar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>