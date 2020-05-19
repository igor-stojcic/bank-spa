<?php 

require_once 'bootstrap.php';

if (!isset($_SESSION['privilege'])) {
	header('Location: index.php');
}

if (isset($_POST['registerSubBtn'])) {
	$user->registerUser();
}

require_once 'views/register.view.php';

 ?>