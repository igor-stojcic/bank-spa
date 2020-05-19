<?php 

class QueryBuilder {

	protected $db;

	public function __construct($db)
	{
		$this->db = $db;
	}

	public function selectAll($table)
	{
		$sql = "SELECT * FROM {$table}";
		$query = $this->db->prepare($sql);
		$query->execute();
		return $query->fetchAll(PDO::FETCH_ASSOC);
	}

	public function save($data)
	{
		$sql = "INSERT INTO accounts VALUES(NULL,?,?,?,?,?,?,?,?,?,?)";
		$query = $this->db->prepare($sql);
		$query->execute([$data->firstName,$data->lastName,$data->deposit,$data->creditCard,$data->address,$data->country,$data->city,$data->zip,$data->email,$data->phone]);

		if ($query) {
			return "addNew success";
		}else{
			return "error";
		}
	}

	public function saveEdited($data)
	{
		$sql = "UPDATE accounts SET firstName='$data->firstName', lastName='$data->lastName', deposit=$data->deposit, creditCard='$data->creditCard', address='$data->address', country='$data->country', city='$data->city', zip=$data->zip, email='$data->email', phone='$data->phone' WHERE id = $data->id";
		$query = $this->db->prepare($sql);
		$query->execute();

		if ($query) {
			return "save/edit success";
		}else{
			return "error";
		}
	}

	public function delete($data)
	{
		$sql = "DELETE FROM accounts WHERE id = $data";
		$query = $this->db->prepare($sql);
		$query->execute();

		if ($query) {
			return "delete success";
		}else{
			return "error";
		}
	}

	public function selectUser($table,$data)
	{
		$sql = "SELECT * FROM {$table} WHERE firstName='$data->firstName' OR lastName='$data->lastName'";
		$query = $this->db->prepare($sql);
		$query->execute();
		return $query->fetchAll(PDO::FETCH_ASSOC);
	}

}

