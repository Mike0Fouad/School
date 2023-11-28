<?php
    $server="localhost";
    $username="root";
    $password="qMpaHhJRE[KKebaS";
    $db="school";
    $connect= @mysqli_connect($server,$username,$password,$db)
        or die("Connection Failed:".mysql_error());

    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    if(isset($_POST['submit'])){
        $sql = "INSERT INTO messages (Name, Email, Subject, Message)
        Values ('$name', '$email', '$subject', '$message')";
        $result=mysql_query($sql,$connect);
    }

?>