<?php

  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $mobileno = $_POST['phoneNo'];
  $occupation = $_POST['occupation'];
  $message = $_POST['description'];

 
$to = 'sinhaabhishek79@gmail.com';
$subject = 'This is subject';
$message = 'This is body of email';
$from = "From: FirstName LastName <sinhaabhishek79@gmail.com>";
mail($to,$subject,$message,$from);
  
 /*  $to = "sinhaabhishek79@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$name,$mobileno,$occupation,$message); */

 ?>