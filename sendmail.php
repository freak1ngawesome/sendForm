<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer-6.1.8/src/Exception.php';
require './PHPMailer-6.1.8/src/PHPMailer.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','./PHPMailer-6.1.8/language');
$mail->IsHTML(true);




$mail->setFrom('ivanov.danilaf@gmail.com', 'Mailer');
$mail->addAddress('qwerty4985@mail.ru');
$mail->Subject = 'Here is the subject';


$gender = 'М';
if ($_POST['gender'] = 'Ж'){
  $gender = 'Ж';
}


$body = '<h1>Отклик от пользователя</h1>';
$body. = '<p><strong>Имя:</strong> '.$_POST['firstname'].'</p>';
$body. = '<p><strong>Фамилия:</strong> '.$_POST['secondname'].'</p>';
$body. = '<p><strong>Email:</strong> '.$_POST['email'].'</p>';
$body. = '<p><strong>Пол:</strong> '.$gender.'</p>';
$body. = '<p><strong>Комментарий:</strong> '.$_POST['text'].'</p>';


$mail->Body = $body;

if (!$mail->send()){
  $message = 'Ошибка';
} else {
  $message = 'Успех';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);