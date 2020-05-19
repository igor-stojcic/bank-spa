<?php 
require_once 'bootstrap.php';

if(!isset($_SESSION['name'])){
	header('Location: index.php');
}

require_once 'views/bank_app.view.php';

 ?>
