<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursedchild";

$tablename = $_POST["databasename"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM ". $tablename;

$result = $conn->query($sql);

if ($result->num_rows > 0) {

	$array = array();
    
    while($row = $result->fetch_assoc()) {

        $array[] = $row;

    }
    
    return json_encode($array);

} else {
    echo "0 results";
}

$conn->close();
?>