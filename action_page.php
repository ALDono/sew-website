<?php

    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $email = $_POST["email"];
    $subject = "Message from  SEW.co.uk";
    $message = $_POST["subject"];

    require "vendor/autoload.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    $mail = new PHPMailer(true);

    // $mail->SMTPDebug = SMTP::DEBUG_SERVER;

    $mail->isSMTP();
    $mail->SMTPAuth = true;

    $mail->Host = "smtp.example.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->Username = "you@example.com";
    $mail->Password = "password";

    $mail->setFrom($email, $name);
    $mail->addAddress("dave@example.com", "Dave");

    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();

    header("Location: sent.html");

?>
