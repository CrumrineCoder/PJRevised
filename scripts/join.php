

<?php
$field_name = $_POST['name'];
$field_email = $_POST['email'];

$mail_to = 'crumrinecoding@gmail.com';
$subject = "Booking a Class";

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		console.log("Email sent!")
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to crumrinecoding@gmail.com');
	</script>
<?php
}
?>