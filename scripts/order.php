<?php
if (isset($_POST["submit"])) {
    $validate = validateInput($_POST["name"], $_POST["message"], $_POST["subject"]);
    if ($validate==FALSE) {
        $error_msg = "Please fill out all information";
        echo '<script type="text/javascript">
            alert("'.$error_msg.'");
                window.location= "Your-Form-File-Name.php"; **//This line added by me**
****
        </script>';
    } else {
        $mailcheck = spamcheck($_POST["email"]);
        if ($mailcheck==FALSE) {
            $error_msg = "Invalid email address";
            echo '<script type="text/javascript">
            alert("'.$error_msg.'");
                window.location= "Your-Form-File-Name.php"; ////This line added by me
**//Added above line**
        </script>';
        } else {
        $email = $_REQUEST['email'] ;
        $message = $_REQUEST['message'] ;
        $subject = $_REQUEST['subject'] ;

        mail( "crumrinecoding@gmail.com", $subject, $message, "From: $email" );
        header( "Location: http://www.thankyou.html" );
        }
    }
}
?>