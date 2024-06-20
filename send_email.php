<?php 
if ($_SERVER ["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo "Invalid email format";
        exit;
    }

    $to = "codreanu_j@outlook.com";
    $subject = $name;
    $headers = "From: " .$email;
    $body = $message;

    if(mail($to,$subject,$body,$headers)){
        echo "Email sent successfully";
    }else {
        echo "Failed to send email";
    } 
} else {
    echo "Invalid request method";
}

?>
