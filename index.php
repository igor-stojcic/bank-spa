<?php 
require_once 'bootstrap.php';
require_once "validation/formvalidator.php";

if (isset($_SESSION['name'])) {
	header('Location: bank_app.php');
}

$error_username = '';
$error_password = '';
if (isset($_POST['loginSubBtn'])) {

	$validator = new FormValidator();
	$validator->addValidation("username","req","Obavezno polje");
    $validator->addValidation("username","alpha_s","Username može sadržati samo slova");
	$validator->addValidation("password","req","Obavezno polje");

	if($validator->ValidateForm()){

        $user->loginUser();

    }else{
	    $error_hash = $validator->GetErrors();
	    foreach($error_hash as $inpname => $inp_err)
	    {
	        if ($inpname == 'username') {
	        	$error_username = $inp_err;
	        }
	        if ($inpname == 'password') {
	        	$error_password = $inp_err;
	        }
	    }
	}

}

require_once 'views/index.view.php';

 ?>


  
  
