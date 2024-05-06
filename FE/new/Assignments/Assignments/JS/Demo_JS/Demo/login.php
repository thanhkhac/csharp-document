<?php
$username = $_POST['username'];
$password = $_POST['password'];

if ($username === 'admin' && $password === 'password') {
    echo 'success';
} else {
    echo 'failure';
}
?>
