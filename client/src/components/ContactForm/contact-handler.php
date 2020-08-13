<?php
$name = $_POST['name'];
$vistor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'sp.xciv@gmail.com';

$email_subject = 'New Form Submission';

$email_body = "Name: $first_name.\n".
                "Email: $visitor_email.\n".
                "Message: $message.\n";


$to = "spsingh94.ss@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.js");

?>