<?php 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load composer's autoloader
require 'vendor/autoload.php';
$mail = new PHPMailer(true);   

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$origin = $_POST['origin'];
$destination = $_POST['destination'];
$month = $_POST['month'];

echo $name . $phone . $email . $origin . $destination . $month ;

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function


                           // Passing `true` enables exceptions
try {
    //Server settings
    $mail->SMTPDebug = 2;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'sg2plcpnl0102.prod.sin2.secureserver.net';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'test@parasvohra.com';                 // SMTP username
    $mail->Password = 'Parasvohra@966';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('test@parasvohra.com', 'Mailer');
    $mail->addAddress('pursharth01@gmail.com');     // Add a recipient          

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}