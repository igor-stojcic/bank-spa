<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Igor Stojcic">
    <title>Bank App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js"></script>
</head>
<body class="bg-dark">

<div class="container-fluid">
  <div class="row">
    <div class="btn-group ml-auto m-2">
      <a href="bank_app.php" class="btn btn-sm btn-success">Bank</a>
      <a href="logout.php" class="btn btn-sm btn-danger">Logout</a>
    </div>
  </div>
</div>

<div class="container">
  <div class="row">
    <div class="col-md-6 offset-md-3 col-12 text-center">
      <form action="register.php" id="form-login" class="form-signin" method="post">
          <img class="mb-0" src="logo/Wonder-Woman.svg" alt="" width="250" height="250">
          <h1 class="h2 mb-3 text-secondary">Hello Admin</h1>
          <h3 class="h4 mb-3 text-secondary">Register New User</h3>

            <label for="inputUserName" class="sr-only">User Name</label>
            <input type="text" name="username" id="inputUserName" class="controls form-control mb-2" placeholder="User Name" required autofocus>

            <label for="inputPassword" id="password-label" class="sr-only">Password</label>
            <input type="password" name="password" id="inputPassword" class="controls form-control mb-2" placeholder="Password" required>
          
          <button type="submit" name="registerSubBtn" class="btn btn-lg btn-primary btn-block mb-5">Register User</button>
          <?php if($user->register_result): ?>
            <div class="alert alert-success text-center">Register new user success!</div>
          <?php endif; ?>

      </form>
    </div>
  </div>
</div>

<p id="copyright" class="mt-5 mb-3 text-muted text-center">&copy; 2019- Igor Stojcic | All Rights Reserved</p>

</body>
</html>