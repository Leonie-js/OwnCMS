<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursedchild";

$databasename = $_POST["databasename"];

if ($databasename == "home"){
	$data = $_POST["text"];
	$filename = $_POST["filename"];
} else if ($databasename == "aboutus"){
	$data = array($_POST["aboutus1"], $_POST["filename"], $_POST["aboutus3"]);
} else if ($databasename == "news"){
	$id = $_POST["id"];
	$title = $_POST["title"];
	$text = $_POST["text"];
} else if ($databasename == "dates"){
	$id = $_POST["id"];
	$date = $_POST["date"];
	$place = $_POST["place"];
	$time = $_POST["time"];
} else if ($databasename == "disco"){
	$use = $_POST["use"];
	$id = $_POST["id"];

	if ($use == "disco"){
		$name = $_POST["name"];
		$album = $_POST["album"];
	} else {
		$script = $_POST["script"];
		$role = $_POST["role"];
	}
} else if ($databasename == "gallery"){
	$id = $_POST["id"];
	$category = $_POST["category"];
	$filename = $_POST["filename"];
} else if ($databasename == "extra"){
	
	$name = $_POST["name"];

	if ($name == "newsbackground"){

		$data = $_POST["filename"];

	} else if ($name == "headerbackground"){

		$data = $_POST["backgroundcolor"];

	}
}


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($databasename == "home"){

	$sql = "UPDATE " . $databasename . " SET text='" . $data . "' WHERE id=1";

	if ($conn->query($sql) === !TRUE) {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$sql = "UPDATE " . $databasename . " SET filename='" . $filename . "' WHERE id=2";

	if ($conn->query($sql) === !TRUE) {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

} else if ($databasename == "aboutus"){

	$item = 1;
	for ($i=0; $i < 3 ; $i++) { 

		if ($item != 2){
			$sql = "UPDATE " . $databasename . " SET text='" . $data[$i] . "' WHERE id=" . $item;
		} else {
			$sql = "UPDATE " . $databasename . " SET filename='" . $data[$i] . "' WHERE id=" . $item;
		}		

		if ($conn->query($sql) === !TRUE) {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}

		$item++;
	}
	
} else if ($databasename == "news"){

	$sql = "INSERT INTO "  . $databasename . "(id, title, text) VALUES (" . $id . ",'" . $title . "','"  . $text . "') ON DUPLICATE KEY UPDATE title='" . $title . "', text='" . $text . "';";

	if ($conn->query($sql) === !TRUE) {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
} else if ($databasename == "dates"){

	$sql = "INSERT INTO "  . $databasename . "(id, date, place, time) VALUES (" . $id . ",'" . $date . "','"  . $place . "','"  . $time . "') ON DUPLICATE KEY UPDATE date='" . $date . "', place='" . $place . "', time='" . $time . "';";

	if ($conn->query($sql) === !TRUE) {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
} else if ($databasename == "disco"){

	if ($use == "disco"){

		$sql = "INSERT INTO "  . $databasename . "(id, name, album) VALUES (" . $id . ",'" . $name . "','"  . $album . "') ON DUPLICATE KEY UPDATE name='" . $name . "', album='" . $album . "';";

		if ($conn->query($sql) === !TRUE) {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	} else {
		
		$sql = "INSERT INTO "  . $databasename . "(id, script, role) VALUES (" . $id . ",'" . $script . "','"  . $role . "') ON DUPLICATE KEY UPDATE script='" . $script . "', role='" . $role . "';";

		if ($conn->query($sql) === !TRUE) {
		    echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
} else if ($databasename == "gallery"){

	$sql = "INSERT INTO "  . $databasename . "(id, category, filename) VALUES (" . $id . ",'" . $category . "','"  . $filename . "') ON DUPLICATE KEY UPDATE category='" . $category . "', filename='" . $filename . "';";

	if ($conn->query($sql) === !TRUE) {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

} else if ($databasename == "extra"){

	$sql = "UPDATE " . $databasename . " SET filename='" . $data . "' WHERE name='" . $name . "'";

	if ($conn->query($sql) === !TRUE) {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}



$conn->close();
?>