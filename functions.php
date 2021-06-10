<?php
	function DBConnection() {
		$servername = "localhost";
		$username = "root";
		$password = "";
		$dbname = "hoogvliegers";

		// Create connection
		$conn = new mysqli($servername, $username, $password, $dbname);
		// Check connection
		if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		}
	}

	function InsertDB($table, $arguments){
		$sql = "SELECT * WHERE $arguments FROM $tables";

		return $result = $conn->query($sql);
	}

	function SelectDB($table, $data){
		$sql = "INSERT INTO $table VALUES $data ";

		return $result = $conn->query($sql);
	}
?>