<?php

$field_name = $_POST['name'];
$field_email = $_POST['email'];
$field_number = $_POST['number'];
$field_occasion = $_POST['occasion'];
$field_other = $_POST['other'];
$mail_to = 'crumrinecoding@gmail.com';
$subject = "Order";

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Number: '.$field_number."\n";
$body_message .= 'Occasion: '.$field_occasion."\n";
$body_message .= 'Other: '.$field_other;
$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$mail_status = mail($mail_to, $subject, $body_message, $headers);
header( "Location: http://pennyjanescookies.com/" );	
?>
 