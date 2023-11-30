<?php
    $server="localhost";
    $username="root";
    $password="qMpaHhJRE[KKebaS";
    $db="school";
    $connect= mysqli_connect($server,$username,$password,$db);
    if (!$connect) {
        echo "Error: Unable to connect";
    }else{
        echo "Connected";
    }
    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    

    if(isset($_POST['Submit'])){
        $sql = "INSERT INTO messages (Name, Email, Subject, Message)
        Values ('$name', '$email', '$subject', '$message')";
        $result=mysqli_query($connect,$sql);
    }

?>