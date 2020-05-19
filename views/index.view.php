<!DOCTYPE html>
<html lang="en">
<head><meta charset="gb18030">
  	
  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="author" content="Igor Stojcic">
  	<title>Bank App</title>
  	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>
</head>
<body class="bg-dark">

<div class="w3-panel w3-yellow w3-round w3-display-topright w3-margin" style="z-index: 10;">
  <span onclick="this.parentElement.style.display='none'" class="w3-button w3-large w3-display-topright">&times;</span>
  <h3 class="text-center w3-text-teal">Bank Application</h3>
  <p class="text-center w3-text-teal">"SPA" <small>(single page application)</small> BankApp - JS, Ajax, PHP, MySQL"</p>
  <p class="w3-text-teal">Please log in and take a look:</p>
  <p>User Name: <span class="w3-text-red">test</span></p>
  <p>Password: <span class="w3-text-red">test</span></p>
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-12 text-center">
		<form action="index.php" id="form-login" class="form-group" method="post">
		    <img class="mb-0" src="logo/Wonder-Woman.svg" alt="logo" width="250" height="250">
		    <h1 class="h2 mb-3 text-secondary">Sign in</h1>

		      <small class="text-danger"><?php echo $error_username; ?></small>
		      <input type="text" name="username" id="inputUserName" class="controls form-control mb-2" placeholder="User Name" autofocus>

		      <small class="text-danger"><?php echo $error_password; ?></small>
		      <input type="password" name="password" id="inputPassword" class="controls form-control mb-2" placeholder="Password">
		    
		    <button type="submit" name="loginSubBtn" class="btn btn-lg btn-primary btn-block mb-5">Sign in</button>
		</form>

		
    </div>

  </div>
</div>
<p id="copyright" class="mt-5 text-muted text-center">&copy; 2019-<?php echo date('Y'); ?> Elf_côder | All Rights Reserved</p>
</body>
</html>