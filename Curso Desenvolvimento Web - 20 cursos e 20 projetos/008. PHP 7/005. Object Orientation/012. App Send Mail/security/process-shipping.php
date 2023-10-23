<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

    class Message {

        private $toSend = null;
        private $subject = null;
        private $message = null;
        public $status = array(
            'status_code' => null,
            'status_desc' => ''
        );


        public function __get($attribute) {
            return $this -> $attribute;
        }

        public function __set($attribute, $value) {
            $this -> $attribute = $value;
        }

        public function validMessage() {
            if (empty($this->toSend) || empty($this->subject) || empty($this->message)) {
                return false;
            }

            return true;
        }

    }

    $message = new Message();

    $message -> __set('toSend', $_POST['to-send']);
    $message -> __set('subject', $_POST['subject']);
    $message -> __set('message', $_POST['message']);

    if (!$message -> validMessage()) {
        echo 'Invalid message';
        header('Location: index.php');
    } 

    $mail = new PHPMailer(true);

    try {
        //Server settings
        $mail->SMTPDebug = false;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'youremail@email.com';                     //SMTP username
        $mail->Password   = 'hispassword';                               //SMTP password
        $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('youremail@email.com', 'name');
        $mail->addAddress($message->__get('toSend'));     //Add a recipient
        //$mail->addReplyTo('info@example.com', 'Information');
        //$mail->addCC('cc@example.com');
        //$mail->addBCC('bcc@example.com');

        //Attachments
        //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = $message->__get('subject');
        $mail->Body    = $message->__get('message');
        //$mail->AltBody = 'Without a Client, the message will not have its full content.';

        $mail->send();
        $message -> status['status_code'] = 1;
        $message -> status['status_desc'] = 'Message has been sent';
    } catch (Exception $e) {
        $message -> status['status_code'] = 2;
        $message -> status['status_desc'] = 'Message could not be sent.' . $mail->ErrorInfo;
    }

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>App Mail Send</title>
   	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body>

    <div class = "container">
    
        <div class="py-3 text-center">
            <img class="d-block mx-auto mb-2" src="logo.png" alt="" width="72" height="72">
            <h2>Send Mail</h2>
            <p class="lead">Your private email sending app!</p>
        </div>

        <div class = "row">
            <div class = "col-md-12">

                <?php if ($message -> status['status_code'] == 1) { ?>
                    
                    <div class = "container">
                        <h1 class = "display-4 text-success">Success</h1>
                        <p>
                            <?php $message -> status['status_desc'] ?>
                        </p>
                        <a href="index.php"  class = "btn btn-success text-white btn-lg mt-5">Back</a>
                    </div>

                <?php } ?>

                <?php if ($message -> status['status_code'] == 2) { ?>

                    <div class = "container">
                        <h1 class = "display-4 text-danger">Failed.</h1>
                        <p>
                            <?php $message -> status['status_desc'] ?>
                        </p>
                        <a href="index.php"  class = "btn btn-danger text-white btn-lg mt-5">Back</a>
                    </div>

                <?php } ?>


            </div>
        </div>

    </div>

</body>
</html>