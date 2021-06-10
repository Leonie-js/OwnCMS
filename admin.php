<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
         <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
         <script src="https://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>
        <link rel="icon" href="icon.png">
        <link rel="stylesheet" type="text/css" href="adminstyle.css">
        <script src="adminscript.js"></script>
        <title>Harry Potter and the Cursed Child</title>
    </head>
    <body id="adminbody">
    	<h1>You're a wizard, Harry!</h1>
		<h2>Here you can update the content of the awesome website that I made!</h2>


		<div class="adminnavigation">
			<p>Choose the page:</p>
			<select id="pages">
				<option value="home">Homepage</option>
				<option value="aboutus" >About us</option>
				<option value="news" >News</option>
				<option value="dates" >Dates</option>
				<option value="disco" >Discography/Script</option>
				<option value="gallery" >Gallery</option>
			</select>
		</div>

		<h2> You have selected <span id="selected"> homepage </span></h2>

		<div id="home">
			<div id="homeleft" class="left">
				<form id="homeform" autocomplete="off">
	                <h3 id="uploaded"> Banner: </h3>
	                <input type="file" name="fileToUpload" id="fileToUploadhome">
	                <h3> Intro text:</h3>
	                <textarea class="homeinput" id="home1" name="text"></textarea><br>

	                <button id="homesubmitlogin" type="submit" name="submit"> Change Banner/Text</button>
	            </form>
			</div>
			<div class="right">
				<form id="backgroundheaderform" autocomplete="off">
   					<h3>Select color as background for header:</h3><br>
   					<input style="display: none;" name="name" value="headerbackground">
    				<input type="color" name="backgroundcolor" id="backgroundcolor"><br><br>
    				<button type="submit" name="submit">Change Color</button>
				</form>
			</div>
		</div>

		<div id="aboutus">
			<form id="aboutusform" autocomplete="off">
                <h3> About us (section1): </h3>
                <textarea class="aboutusinput" id="aboutus1" name="aboutus1" ></textarea><br>
                <h3> About us (section2): </h3>
                <textarea class="aboutusinput" id="aboutus3" name="aboutus3" ></textarea><br>
                <h3 id="uploadedaboutus"> Image between section: </h3>
	            <input type="file" name="fileToUpload" id="fileToUploadaboutus"><br>

                <button id="aboutussubmitlogin" type="submit" name="submit">Change About Us page</button>
            </form>
		</div>

		<div id="news">
			<div id="newsleft" class="left">
			</div>
			<div id="newsright" class="right">
				<form id="backgroundimgnewsform" autocomplete="off">
   					<h3 id="uploadednews">Select image to upload as news item background:</h3><br>
   					<input style="display: none;" name="name" value="newsbackground">
    				<input type="file" name="fileToUpload" id="fileToUpload"><br><br>
    				<button type="submit" name="submit">Change Image</button>
				</form>
			</div>			
		</div>

		<div id="dates">
			
		</div>

		<div id="disco">
			<div id="discography" class="left">
				
				
	        </div>
	        <div id="script" class="right">
	        	

	        </div>
		</div>

		<div id="gallery">

		</div>

	</body>
    
</html>
