<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursedchild";

$databasename = $_POST["databasename"];
$id = $_POST["id"];

if ($databasename == "disco"){
	$use = $_POST["use"];

	if ($use == "disco"){
		$name = $_POST["name"];
		$album = $_POST["album"];
	} else {
		$script = $_POST["script"];
		$role = $_POST["role"];
	}
} 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($databasename == "disco"){

	if ($use == "disco"){

		$sql = "UPDATE " . $databasename . " SET name=Null, album=Null WHERE id=" . $id . ";";

		if ($conn->query($sql) === !TRUE) {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	} else {
		
		$sql = "UPDATE " . $databasename . " SET script=Null, role=Null WHERE id=" . $id . ";";

		if ($conn->query($sql) === !TRUE) {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}

} else {

		$sql = "DELETE FROM "  . $databasename . " WHERE id=" . $id . ";";

		if ($conn->query($sql) === !TRUE) {
    		echo "Error: " . $sql . "<br>" . $conn->error;
		}
}

$conn->close();
?>