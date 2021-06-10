<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursedchild";

$usernameform = $_POST["username"];
$passwordform = $_POST["password"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT username, password FROM login WHERE username = '". $usernameform ."' AND  password = '" . $passwordform ."'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo 'true';
} else {
	echo 'false';
}

$conn->close();
?>