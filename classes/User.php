<?php 

class User extends QueryBuilder {

	public $register_result = NULL;

	public function registerUser()
	{
		$username = $_POST['username'];
		$password = $_POST['password'];
		$privilege = 'u';

		$sql = "INSERT INTO users VALUES (NULL,?,?,?)";
		$query = $this->db->prepare($sql);
		$query->execute([$username,$password,$privilege]);

		if ($query) {
			$this->register_result = true;
		}
	}

	public function loginUser()
	{
		$username = $_POST['username'];
		$password = $_POST['password'];
	
		$sql = "SELECT * FROM users WHERE username = ? AND password = ?";

		$query = $this->db->prepare($sql);
		$query->execute([$username,$password]);

		$data = $query->fetch(PDO::FETCH_OBJ);

		if($data != NULL){
			if ($data->privilege == 'a') {
				$_SESSION['name'] = $data->username;
				$_SESSION['privilege'] = $data->privilege;
				header('Location: register.php');
			} else {
				$_SESSION['name'] = $data->username;
				header('Location: bank_app.php');
			}
		}else{
			header('Location: index.php');
		}
	}
}