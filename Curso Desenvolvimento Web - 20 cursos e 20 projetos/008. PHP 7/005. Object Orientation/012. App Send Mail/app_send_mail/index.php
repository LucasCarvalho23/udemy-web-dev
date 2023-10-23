<html>
	<head>
		<meta charset="utf-8" />
    	<title>App Mail Send</title>

    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

	</head>

	<body>

		<div class="container">  

			<div class="py-3 text-center">
				<img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
				<h2>Send Mail</h2>
				<p class="lead">Your private email sending app!</p>
			</div>

      		<div class="row">
      			<div class="col-md-12">
  				
					<div class="card-body font-weight-bold">
						<form action="process-shipping.php" method="post">
							<div class="form-group">
								<label for="para">To</label>
								<input type="text" class="form-control" id="para" name="to-send" placeholder="E-mail">
							</div>

							<div class="form-group">
								<label for="assunto">Subject</label>
								<input type="text" class="form-control" id="assunto" name="subject" placeholder="Subject of the email">
							</div>

							<div class="form-group">
								<label for="mensagem">Message</label>
								<textarea class="form-control" id="mensagem" name = "message"></textarea>
							</div>

							<button type="submit" class="btn btn-primary btn-lg">Send Message</button>
						</form>
					</div>
				</div>
      		</div>
      	</div>

	</body>
</html>