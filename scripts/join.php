

<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];

$mail_to = 'crumrinecoding@gmail.com';
$subject = "Joining a Class";

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

header( "Location: http://mxmlln.com/PJC/PJRevised/index.html" );	
?>