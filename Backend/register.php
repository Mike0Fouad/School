<?php
    $server="localhost";
    $username="root";
    $password="qMpaHhJRE[KKebaS";
    $db="school";
    $connect= mysqli_connect($server,$username,$password,$db)
        or die("Connection Failed:".mysqli_error());
    $firstname=$_POST['FirstName'];
    $lastname=$_POST['FirstName'];
    $gender=$_POST['gender'];
    $birthday=$_POST['birthday'];
    $gradesys=$_POST['gradeSys'];//GPA percentage

    if($gradesys=="GPA"){
        $gradesys='Grade_GPA';
    }else{
        $gradesys='Grade_Percentage';
    }
    $grade=$_POST['igrade'];
    $phone=$_POST['phone'];
    $email=$_POST['email'];
    $comments=$_POST['comment'];
    if(isset($_POST['submit'])){
        $sql = "INSERT INTO applications (ID, First_name, Last_name, Gender, Birthdate, $gradesys, Phone_number, Email, Comment)
        Values ('" . $lastname . substr($phone, -4) . "', '$firstname', '$lastname', '$gender', '$birthday', '$grade', '$phone', '$email', '$comments')";
        mysqli_query($connect,$sql);
    }



    




?>