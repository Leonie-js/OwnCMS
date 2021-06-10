window.addEventListener( "load", start, false );

function start()
{	
	var login = document.getElementById("adminlogin");
	var form = document.getElementById("login");

	if(login){
		login.addEventListener('click', event => {

			if (form.style.display == "block"){
				form.style.display = "none";
			} else {
				form.style.display = "block";
			}
			

			var button = document.getElementById("submitlogin");

			button.addEventListener('click', event => {
				sendlogin();
			});
			
		})
	}

	if($('input#character') || $('input#production')){
		if ($('input#character').is(":checked")){
			$('.production').css("display", "none");
			$('.character').css("display", "block");
		}else if ($('input#production').is(":checked")) {
			$('.production').css("display", "block");
			$('.character').css("display", "none");
		}
	}
	

	$('input').on( "click", function(){
		showPhotos();
	});	

	$('.readmore p').on( "click", function(){
		var text = $(this).parent('.readmore').next().html();
		$('#popup p:first').html(text);
		$('#popup').css('display', 'block');
	});	

	$('#close').on( "click", function(){
		$('#popup').css('display', 'none');
	});

	headerColor();

};

function headerColor(){

	$.ajax({
            type: "POST",
            url: 'getdata.php',
            data: "databasename=" + 'extra',
            dataType: 'text',
            success: function(data)
            {
                sqldata = data;

                showData(sqldata);
            }
        });

}

function showData(data){

	var dataparsed = JSON.parse(data);

        for (var i = 0; i < dataparsed.length; i++) {
            var usingdata = dataparsed[i];
            var name = usingdata["name"];
            var data = usingdata["filename"];

            if (name == "newsbackground"){

            } else if (name == "headerbackground"){

                $('#navigation').css('background-color', data);

            }
        }
}

function showPhotos()
{
	if ($('input#character').is(":checked")){
		$('.production').css("display", "none");
		$('.character').css("display", "block");
	}else if ($('input#production').is(":checked")) {
		$('.production').css("display", "block");
		$('.character').css("display", "none");
	}
}

function sendlogin(){
	var username = document.getElementsByName("username")[0].value;
	var password = document.getElementsByName("password")[0].value;

	if (username && password){
		
		var input = document.getElementsByClassName("logininput");
	    var formData = new FormData(); 
    
    	for(var i=0; i<input.length; i++){
    		    formData.append(input[i].name, input[i].value);
	    }
	
	    var xmlHttp = new XMLHttpRequest();
    
        xmlHttp.onreadystatechange = function(){

            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                if (xmlHttp.responseText == "false"){
                	alert("Your account details are not recognized.")
                }else {
                	window.location.href = "/admin.php";
            	}
            } 
        }
        xmlHttp.open("post", "login.php"); 
        xmlHttp.send(formData);

	} else {
		window.alert("please fill in all inputs");
		return false;
	}

	return false;
}