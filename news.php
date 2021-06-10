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
    	<div id="main" >
            <div id="popup" style="display: none;">
                <p>
                    
                </p>
                <a id="close"><p>X</p></a>
            </div>
            <h1> News</h1>
            <img src="img/divider.png" alt="divider">
            <div class="mainnews">
                <?php 
                $_POST["databasename"] = "news";
                $data = include("gethtml.php");

                $_POST["databasename"] = "extra";
                $dataimg = include("gethtml.php");
                $imgdata = json_decode($dataimg);

                $imgsrc;

                for ($i = 0; $i < count($imgdata); $i++) {

                    $usingdata = $imgdata[$i];

                    $name = $usingdata->name;
                    $filename = $usingdata->filename;
                    

                    if ($name == "newsbackground"){

                        $imgsrc = $filename;
                        $alt = substr($imgsrc, 0, -4);
                    }
                }


                $newdata = json_decode($data);

                for ($i = 0; $i < count($newdata); $i++) {

                    $usingdata = $newdata[$i];

                    $title = $usingdata->title;
                    $text = $usingdata->text;

                    ?>
            
                    <div id="<?php echo $i ?>" class="news">
                        <img src="img/<?php echo $imgsrc ?>" alt="<?php echo $alt ?>">
                        <div class="newscontent">
                            <h2><?php echo $title ?></h2>
                            <div class="readmore">
                                <p>READ MORE</p>
                            </div>
                            <div class="text" style="display: none;">
                                <?php echo $text ?>
                            </div>
                        </div>
                    </div>

                    <?php 
                    
                }
                ?>
            </div>
        </div>
        <div id="footer">
            <img alt="Cursed Child footer" src="img/cc-footer.png">   
        </div>      
    </body>
</html>