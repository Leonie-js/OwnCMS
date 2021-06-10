<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
         <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <link rel="icon" href="icon.png">
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="script.js"></script>
        <title>Harry Potter and the Cursed Child</title>
    </head>
    <body>
        <header>
        	<div id="navigation">
        		<div id="menu">
                    <nav>
                        <div class="menuitem">
                            <a href="/"><img src="img/nav-logo.png" alt="logo"></a>
                        </div>
                        <div class="menuitem">
                            <a href="/aboutus.php"><h2>About us</h2></a>
                        </div>
            			<div class="menuitem">
            				<a href="/news.php"><h2>News</h2></a>
            			</div>
            			<div class="menuitem">
            				<a href="/dates.php"><h2>Dates</h2></a>
            			</div>
                        <div class="menuitem">
                            <a href="/discography.php"><h2>Discography/Script</h2></a>
                        </div>
                        <div class="menuitem">
                            <a href="/gallery.php"><h2>Gallery</h2></a>
                        </div>
                   </nav>
        		</div>
        		<div id="admin">
        			<a id="adminlogin"><img alt="login image" src="img/hpicon.png"></a>
                    <div id="login">
                        <form id="loginform" autocomplete="off">
                            <input class="logininput" type="text" name="username" placeholder="username"><br>
                            <input class="logininput" type="password" name="password" placeholder="password"><br>
                            <input id="submitlogin" type="submit" value="Login">
                        </form>
                    </div>
        		</div>
        	</div>
        </header>
    	<div id="main">
            <?php 
                $_POST["databasename"] = "home";
                $data = include("gethtml.php");

                $newdata = json_decode($data);

                $text;
                $filename;

                for ($i = 0; $i < count($newdata); $i++) {

                    $usingdata = $newdata[$i];

                    if($usingdata->text){
                        $text = $usingdata->text;
                    } else if($usingdata->filename){
                        $filename = $usingdata->filename;
                    }
                }
            ?>
    		<div id="intro">
    			<img id="header" alt="header image" src="img/<?php echo $filename ?>">
    		</div>
            <div id="newdates">
                <p>NEW DATES ADDED FOR PAISLEY!</p>
            </div>
            <div id="aboutus">
                <h1> Harry Potter and the Cursed Child </h1>
                <p>
                    <?php echo $text ?>
                 </p>           
            </div>            
    	</div>
    	<div id="footer">
            <img alt="Cursed Child footer" src="img/cc-footer.png">   
        </div>		
	</body>
    
</html>