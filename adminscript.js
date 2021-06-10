var selectedvalue;
var sqldata;

$(document).ready(function(){

	showInputs();
    getData(selectedvalue);

	$('#pages').on( "change", function(){
		showInputs();
        getData(selectedvalue);
	});

    $('button[type="submit"]').on("click", function(e){

        e.preventDefault();

        var form = $(this).parents('form:first')[0];

        if ($(this).parents('form:first').valid()){
            uploadimg(form);
        }

        return false;
    });    

});

function uploadimg(form){

    var formdata = new FormData(form);

    if(selectedvalue == "home"){

        formdata.append('databasename', 'home');

        if ($(form).find('input[name="fileToUpload"]').val()){

            $.ajax({
                type: "POST",
                url: 'upload.php',
                data: formdata,contentType: false, 
                processData: false,
                success: function(success)
                {
                    if(success){

                        alert(success); 

                    } else {

                        alert("form updated");
                        getData(selectedvalue);
                    }
                }
            });

        } else {

            if ($(form).find('.imgnow').attr('src')){
                var imgnow = $(form).find('.imgnow').attr('src').slice(4);
                formdata.append('filename', imgnow);

                $.ajax({
                    type: "POST",
                    url: 'updatedata.php',
                    data: formdata,contentType: false, 
                    processData: false,
                    success: function(success)
                    {
                        if(success){

                            alert(success); 

                        } else {

                            alert("form updated");
                        }
                    }
                });
            } else {

                formdata.set('databasename', 'extra');

                $.ajax({
                    type: "POST",
                    url: 'updatedata.php',
                    data: formdata,contentType: false, 
                    processData: false,
                    success: function(success)
                    {
                        if(success){

                            alert(success); 

                        } else {

                            alert("form updated");
                        }
                    }
                });
                }
            
        }

    } else if (selectedvalue == "aboutus"){

        formdata.append('databasename', 'aboutus');

        if ($(form).find('input[name="fileToUpload"]').val()){

            $.ajax({
                type: "POST",
                url: 'upload.php',
                data: formdata,contentType: false, 
                processData: false,
                success: function(success)
                {
                    if(success){

                        alert(success); 

                    } else {

                        alert("form updated");
                        getData(selectedvalue);
                    }
                }
            });

        } else {
            var imgnow = $(form).find('.imgnow').attr('src').slice(4);
            formdata.append('filename', imgnow);

            $.ajax({
                type: "POST",
                url: 'updatedata.php',
                data: formdata,contentType: false, 
                processData: false,
                success: function(success)
                {
                    if(success){

                        alert(success); 

                    } else {

                        alert("form updated");
                    }
                }
            });
        }

    } else if (selectedvalue == "gallery"){

        formdata.append('databasename', 'gallery');

        if ($(form).find('input[name="fileToUpload"]').val()){

            $.ajax({
                type: "POST",
                url: 'upload.php',
                data: formdata,contentType: false, 
                processData: false,
                success: function(success)
                {
                    if(success){

                        alert(success); 

                    } else {

                        alert("form updated");
                        getData(selectedvalue);
                    }
                }
            });

        } else {
            var imgnow = $(form).find('.imgnow').attr('src').slice(4);
            formdata.append('filename', imgnow);

            $.ajax({
                type: "POST",
                url: 'updatedata.php',
                data: formdata,contentType: false, 
                processData: false,
                success: function(success)
                {
                    if(success){

                        alert(success); 

                    } else {

                        alert("form updated");
                    }
                }
            });
        }

    } else {

        formdata.append('databasename', 'extra');

        if ($(form).find('input[name="fileToUpload"]').val()){

            $.ajax({
                type: "POST",
                url: 'upload.php',
                data: formdata,contentType: false, 
                processData: false,
                success: function(success)
                {
                    if(success){

                        alert(success); 

                    } else {

                        alert("form updated");
                        getData(selectedvalue);
                    }
                }
            });

        } else if ($(form).find('input[type="color"]').val()){

            

        }

        

    }
 
}

function showInputs()
{
	var selected;

	$('#pages option').each(function() {
    	if(this.selected){
    		var divname = $(this).val();

    		$(`#${divname}`).css("display", "block");

    		selected = $(this).text();
            selectedvalue = $(this).val();

    	} else{
    		var divname = $(this).val();

    		$(`#${divname}`).css("display", "none");
    	}
    });

    $('#selected').html(selected);
}

function getData(databasename){

    $.ajax({
        type: "POST",
        url: 'getdata.php',
        data: "databasename=" + databasename,
        dataType: 'text',
        success: function(data)
        {
            sqldata = data;

            showData(selectedvalue, sqldata);
        }
    });
}

function updateData(databasename, form){

    var formdata = new Array();

    formdata = form.serialize() + '&databasename=' + databasename;

    $.ajax({
        type: "POST",
        url: 'updatedata.php',
        data: formdata,
        success: function(success)
        {
            if(success){
                console.log(success);
            }

            alert("form updated");
        }
    });
}

function sendData(databasename, form){

    var formdata = new Array();

    formdata = form.serialize() + '&databasename=' + databasename;

    $.ajax({
        type: "POST",
        url: 'senddata.php',
        data: formdata,
        success: function(success)
        {
            form.remove();
        }
    });
}

function showData(page, data){

    if (page == "home"){

        var dataparsed = JSON.parse(data);

        for (var i = 0; i < dataparsed.length; i++) {

            var usingdata = dataparsed[i];

            var value;

            if (usingdata["text"] === null){
                value = usingdata["filename"];

                var alt = value.substring(0, value.length -4);

                if($('#homeappend')){
                    $('#homeappend').next().remove();
                    $('#homeappend').remove();
                }

                $('#uploaded').after(`<p id="homeappend"> Image now: </p><img class="imgnow" src="img/` + value + `" alt="`+ alt +`"><br>`);
            } else {
                value = usingdata["text"];
                $('#home1').val(value);
            }
                
        }

        $("#homeform").validate({
            rules: {
                text: "required"
            },
            messages: {
                text: "Please do not leave the intro text empty."
            }
        });

        $.ajax({
            type: "POST",
            url: 'getdata.php',
            data: "databasename=" + 'extra',
            dataType: 'text',
            success: function(data)
            {
                sqldata = data;

                showData('extra', sqldata);
            }
        });

    } else if (page == "aboutus"){

        var dataparsed = JSON.parse(data);

        var item = 1;

        for (var i = 0; i < dataparsed.length; i++) {

            var usingdata = dataparsed[i];

            var value;

            if (usingdata["text"] === null){
                value = usingdata["filename"];
                var alt = value.substring(0, value.length -4);

                if($('#aboutusappend')){
                    $('#aboutusappend').next().remove();
                    $('#aboutusappend').remove();
                }

                $('#uploadedaboutus').after(`<p id="aboutusappend"> Image now: </p><img class="imgnow" src="img/` + value + `" alt="`+ alt +`"><br>`);
            } else {
                value = usingdata["text"];
                $('#aboutus'+item).val(value);
            }

            item +=1;
            
        }

        $("#aboutusform").validate({
            rules: {
                aboutus1: "required",
                aboutus3: "required"
            },
            messages: {
                aboutus1: "Please do not leave section 1 empty.",
                aboutus3: "Please do not leave section 2 empty."
            }
        });

    } else if (page == "news"){

        var dataparsed = JSON.parse(data);

        var news = $('#newsleft');

        if (news.find('.add')){
            news.empty();
        }

        news.append(`<div class="add">
                        <button id="addnews"> Add news </button>
                     </div>`)

        
        for (var i = 0; i < dataparsed.length; i++) {

            var usingdata = dataparsed[i];
            var item = usingdata["id"];
            var title = usingdata["title"];
            var text = usingdata["text"];


            news.append(`<hr>
                        <form id="newsform` + item + `" autocomplete="off">
                            <input style="display: none;" name="id" value="` + item + `">
                            <h3>News item ` + item + `</h3>
                            <p> Title </p>
                            <input class="newsinput" id="news` + item + i + `" type="text" name="title" value="` + title + `"><br>
                            <p> Text </p>
                            <textarea class="newsinput" id="news` + i + item +`" name="text">` + text + `</textarea><br>
                            <input type="submit" class="submitbutton" id="newssubmit` + item + `" value="Change news item">
                            <button class="removenews"> Remove news </button>
                        </form><br>`);

            $('#newsform' + item).validate({
                rules: {
                    title: {
                        required: true,
                        maxlength: 50
                    },
                    text: "required"
                },
                debug: true,
                messages: {
                    title: {
                        required: "Please do not leave the title empty.",
                        maxlength: "Max length is 50 characters."
                    },
                    text: "Please do not leave the text empty."
                }
            });
            
        }

        $('#addnews').on("click", function(){

            var i = parseInt($('#newsleft form:last').attr('id').slice(-1));

            var item = i + 1;

            news.append(`<hr>
                        <form id="newsform` + item + `" autocomplete="off">
                            <input style="display: none;" name="id" value="` + item + `">
                            <h3>News item ` + item + `</h3>
                            <p> Title </p>
                            <input class="newsinput" id="news` + item + i + `" type="text" name="title"><br>
                            <p> Text </p>
                            <textarea class="newsinput" id="news` + i + item +`" name="text"></textarea><br>
                            <input type="submit" class="submitbutton" id="newssubmit` + item + `" value="Change news item">
                            <button class="removenews"> Remove news </button>
                        </form><br>`);

            $('#newsform' + item).validate({
                rules: {
                    title: {
                        required: true,
                        maxlength: 50
                    },
                    text: "required"
                },
                debug: true,
                messages: {
                    title: {
                        required: "Please do not leave the title empty.",
                        maxlength: "Max length is 50 characters."
                    },
                    text: "Please do not leave the text empty."
                }
            });

            $('.removenews').on("click", function(e){

                e.preventDefault();

                var formnews = $(this).parents('form:first');

                sendData(selectedvalue, formnews);

                return false;

            });

            button  = $('#news').find('.submitbutton');

            button.on("click", function(e){

                e.preventDefault();

                var form = $(this).parents('form:first');

                if(form.valid()){
                    updateData(selectedvalue, form);   
                }

                return false;
            });
        });

        $('.removenews').on("click", function(e){

            e.preventDefault();

            var formnews = $(this).parents('form:first');

            sendData(selectedvalue, formnews);

            return false;

        });

        var button  = $('#news').find('.submitbutton');

        button.on("click", function(e){

            e.preventDefault();

            var form = $(this).parents('form:first');

            if(form.valid()){
                updateData(selectedvalue, form);   
            }

            return false;
        });

        $('#backgroundimgnewsform').validate({
            rules: {
                "fileToUpload": 'required'
            },
            debug:true,
            messages: {
                "fileToUpload": "Please don't leave the image empty."
            }
        });

        $.ajax({
        type: "POST",
        url: 'getdata.php',
        data: "databasename=" + 'extra',
        dataType: 'text',
        success: function(data)
        {
            sqldata = data;

            showData('extra', sqldata);
        }
    });

    } else if (page == "dates"){

        var dataparsed = JSON.parse(data);

        var news = $('#dates');

        if (news.find('.add')){
            news.empty();
        }

        news.append(`<div class="add">
                        <button id="adddates"> Add date </button>
                     </div>`)

        for (var i = 0; i < dataparsed.length; i++) {

            var usingdata = dataparsed[i];
            var id = usingdata["id"];
            var date = usingdata["date"];
            var place = usingdata["place"];
            var time = usingdata["time"];


            news.append(`<hr>
                        <form id="datesform` + id + `" autocomplete="off">
                            <input style="display: none;" name="id" value="` + id + `">
                            <h3> Date ` + id + `</h3>
                            <p> Date </p>
                            <input class="datesinput" id="dates` + id + i + `" type="date" name="date" value="` + date + `"><br>
                            <p> Time </p>
                            <input class="datesinput" id="dates` + id + i + i +`" type="time" name="time" value="` + time + `"><br>
                            <p> Place </p>
                            <input class="datesinput" id="dates` + i + id + `" type="text" name="place" value="` + place + `"><br><br>

                            <input class="submitbutton" id="datessubmit` + id + `" type="submit" value="Change date item">
                            <button class="removedates"> Remove date </button>
                        </form><br>`);

            $('#datesform' + id).validate({
                rules: {
                    date: "required",
                    place: {
                        required: true,
                        maxlength: 20
                    },
                    time: "required"
                },
                debug: true,
                messages: {
                    date: "Please do not leave the date empty.",
                    place: {
                        required: "Please do not leave the date empty.",
                        maxlength: "Max length is 20 characters"
                    },
                    time: "Please do not leave the time empty."
                }
            });
            
        }

        $('#adddates').on("click", function(){

            var i = parseInt($('#dates form:last').attr('id').slice(-1));

            var id = i + 1;

            news.append(`<hr>
                        <form id="datesform` + id + `" autocomplete="off">
                            <input style="display: none;" name="id" value="` + id + `">
                            <h3> Date ` + id + `</h3>
                            <p> Date </p>
                            <input class="datesinput" id="dates` + id + i + `" type="text" name="date"><br>
                            <p> Time </p>
                            <input class="datesinput" id="dates` + id + i + i +`" type="time" name="time"><br>
                            <p> Place </p>
                            <input class="datesinput" id="dates` + i + id + `" type="text" name="place"><br><br>

                            <input class="submitbutton" id="datessubmit` + id + `" type="submit" value="Change date item">
                            <button class="removedates"> Remove date </button>
                        </form><br>`);

            $('#datesform' + id).validate({
                rules: {
                    date: "required",
                    place: {
                        required: true,
                        maxlength: 20
                    },
                    time: "required"
                },
                debug: true,
                messages: {
                    date: "Please do not leave the date empty.",
                    place: {
                        required: "Please do not leave the date empty.",
                        maxlength: "Max length is 20 characters"
                    },
                    time: "Please do not leave the time empty."
                }
            });

            $('.removedates').on("click", function(e){

                e.preventDefault();

                var formnews = $(this).parents('form:first');

                sendData(selectedvalue, formnews);

                return false;

            });

            button  = $('#dates').find('.submitbutton');

            button.on("click", function(e){

                e.preventDefault();

                var form = $(this).parents('form:first');

                if(form.valid()){
                    updateData(selectedvalue, form);   
                }

                return false;
            });
        });

        $('.removedates').on("click", function(e){

            e.preventDefault();

            var formnews = $(this).parents('form:first');

            sendData(selectedvalue, formnews);

            return false;

        });

        var button  = $('#dates').find('.submitbutton');

        button.on("click", function(e){

            e.preventDefault();

            var form = $(this).parents('form:first');

            if(form.valid()){
                updateData(selectedvalue, form);   
            }

            return false;
        });

    } else if (page == "disco"){

        var dataparsed = JSON.parse(data);

        var disco = $('#discography');

        if(disco.find('.add')){
            disco.empty();
        }

        disco.append(`<h1>Discography items</h1>
                    <div class="add">
                        <button id="adddisco"> Add music </button>
                     </div>`)

        for (var i = 0; i < dataparsed.length; i++) {

            var usingdata = dataparsed[i];
            var id = usingdata["id"];
            var name = usingdata["name"];
            var album = usingdata["album"];

            if(name){
                disco.append(`<hr>
                            <form id="discoform` + id + `" autocomplete="off">
                                <input style="display: none;" name="id" value="` + id + `">
                                <input style="display: none;" name="use" value="disco">
                                <h3> Discography item ` + id + `</h3>
                                <p> Title </p>
                                <input class="discoinput" id="disco` + id + i + `" type="text" name="name" value="` + name + `"><br>
                                <p> Album </p>
                                <input class="discoinput" id="disco` + i + id + `" type="text" name="album" value="` + album + `"><br><br>

                                <input class="submitbutton" id="discosubmit` + id + `" type="submit" value="Change music item">
                                <button class="removedisco"> Remove music </button>
                            </form><br>`);

                $('#discoform' + id).validate({
                    rules: {
                        name: {
                            required: true,
                            maxlength: 20
                        },
                        album: {
                            maxlength: 20
                        }
                    },
                    debug: true,
                    messages: {
                        name: {
                            required: "Please do not leave the name empty.",
                            maxlength: "Max length is 20 characters"
                        },
                        album: "Max length is 20 characters"
                    }
                });
            }
            
        }
        $('#adddisco').on("click", function(){

            var i = parseInt($('#discography form:last').attr('id').slice(-1));

            var id = i + 1;

            disco.append(`<hr>
                            <form id="discoform` + id + `" autocomplete="off">
                                <input style="display: none;" name="id" value="` + id + `">
                                <input style="display: none;" name="use" value="disco">
                                <h3> Discography item ` + id + `</h3>
                                <p> Title </p>
                                <input class="discoinput" id="disco` + id + i + `" type="text" name="name" ><br>
                                <p> Album </p>
                                <input class="discoinput" id="disco` + i + id + `" type="text" name="album"><br><br>

                                <input class="submitbutton" id="discosubmit` + id + `" type="submit" value="Change music item">
                                <button class="removedisco"> Remove music </button>
                            </form><br>`);

            $('#discoform' + id).validate({
                rules: {
                    name: {
                        required: true,
                        maxlength: 20
                    },
                    album: {
                        maxlength: 20
                    }
                },
                debug: true,
                messages: {
                    name: {
                        required: "Please do not leave the name empty.",
                        maxlength: "Max length is 20 characters"
                    },
                    album: "Max length is 20 characters"
                }
            });

            $('.removedisco').on("click", function(e){

                e.preventDefault();

                var formnews = $(this).parents('form:first');

                sendData(selectedvalue, formnews);

                return false;

            });

            button  = $('#disco').find('.submitbutton');

            button.on("click", function(e){

                e.preventDefault();

                var form = $(this).parents('form:first');

                if(form.valid()){
                    updateData(selectedvalue, form);   
                }

                return false;
            });
        });

        var script = $('#script');

        if (script.find('.add')){
            script.empty();
        }

        script.append(`<h1>Script items</h1>
                    <div class="add">
                        <button id="addscript"> Add script </button>
                     </div>`);

        for (var i = 0; i < dataparsed.length; i++) {

            var usingdata = dataparsed[i];
            var id = usingdata["id"];
            var line = usingdata["script"];
            var role = usingdata["role"];

            if(line){
                script.append(`<hr>
                                <form id="scriptform` + id + `" autocomplete="off">
                                    <input style="display: none;" name="id" value="` + id + `">
                                    <input style="display: none;" name="use" value="script">
                                    <h3> Script item ` + id + `</h3>
                                    <p> Qoute </p>
                                    <input class="scriptinput" id="script` + id + i + `" type="text" name="script" value="` + line + `"><br>
                                    <p> Character </p>
                                    <input class="scriptinput" id="script` + i + id + `" type="text" name="role" value="` + role + `"><br><br>

                                    <input class="submitbutton" id="scriptsubmit` + id + `" type="submit" value="Change script item">
                                    <button class="removedisco"> Remove script </button>
                                </form>`);

                $('#scriptform' + id).validate({
                    rules: {
                        script: {
                            required: true,
                            maxlength: 200
                        },
                        role: {
                            maxlength: 20
                        }
                    },
                    debug: true,
                    messages: {
                        script: {
                            required: "Please do not leave the quote empty.",
                            maxlength: "Max length is 200 characters"
                        },
                        role: "Max length is 20 characters"
                    }
                });
            }
            
        }

        $('#addscript').on("click", function(){

            var i = parseInt($('#script form:last').attr('id').slice(-1));

            var id = i + 1;

            script.append(`<hr>
                            <form id="scriptform` + id + `" autocomplete="off">
                                <input style="display: none;" name="id" value="` + id + `">
                                <input style="display: none;" name="use" value="script">
                                <h3> Script item ` + i + `</h3>
                                <p> Qoute </p>
                                <input class="scriptinput" id="script` + id + i + `" type="text" name="script"><br>
                                <p> Character </p>
                                <input class="scriptinput" id="script` + i + id + `" type="text" name="role"><br><br>

                                <input class="submitbutton" id="scriptsubmit` + id + `" type="submit" value="Change script item">
                                <button class="removedisco"> Remove script </button>
                            </form><br>`);

            $('#scriptform' + id).validate({
                rules: {
                    script: {
                        required: true,
                        maxlength: 200
                    },
                    role: {
                        maxlength: 20
                    }
                },
                debug: true,
                messages: {
                    script: {
                        required: "Please do not leave the quote empty.",
                        maxlength: "Max length is 200 characters"
                    },
                    role: "Max length is 20 characters"
                }
            });

            $('.removedisco').on("click", function(e){

                e.preventDefault();

                var formnews = $(this).parents('form:first');

                sendData(selectedvalue, formnews);

                return false;

            });

            button  = $('#disco').find('.submitbutton');

            button.on("click", function(e){

                e.preventDefault();

                var form = $(this).parents('form:first');

                if(form.valid()){
                    updateData(selectedvalue, form);   
                }

                return false;
            });
        });

        $('.removedisco').on("click", function(e){

            e.preventDefault();

            var formnews = $(this).parents('form:first');

            sendData(selectedvalue, formnews);

            return false;

        });

        var button  = $('#disco').find('.submitbutton');

        button.on("click", function(e){

            e.preventDefault();

            var form = $(this).parents('form:first');

            if(form.valid()){
                updateData(selectedvalue, form);   
            }

            return false;
        });

    } else if (page == "gallery"){

        var dataparsed = JSON.parse(data);

        var form = $('#gallery');

        if (form.find('.add')){
            form.empty();
        }

        form.append(`<div class="add">
                        <button id="addimg"> Add image to gallery </button>
                     </div>`);

        for (var i = 0; i < dataparsed.length; i++) {
            var usingdata = dataparsed[i];
            var id = usingdata["id"];
            var category = usingdata["category"];
            var filename = usingdata["filename"];
            var alt = filename.substring(0, filename.length -4);

            if (category == "portret"){
                form.append(`<hr>
                            <form id="imgform` + id + `" autocomplete="off">
                                <input style="display: none;" name="id" value="` + id + `">
                                <h3> Image ` + id + `</h3>
                                <p> Category: </p>
                                <input type="radio" id="production` + id + `" name="category" value="production">
                                <label for="production` + id + `">Production</label><br>
                                <input type="radio" id="portret` + id + `" name="category" value="portret" checked>
                                <label for="portret` + id + `">Portret</label><br>
                                <p> Image now: </p>
                                <img class="imgnow" src="img/` + filename + `" alt="`+alt+`"><br>
                                <p> New image: </p>
                                <input type="file" name="fileToUpload" id="fileToUploadgallery` + id + `"><br><br>
                                <button type="submit" name="submit" class="submitupload">Change image</button>
                                
                                <button class="removeimg"> Remove image </button>
                            </form><br>`);
            } else if (category == "production"){
                form.append(`<hr>
                            <form id="imgform` + id + `" autocomplete="off">
                                <input style="display: none;" name="id" value="` + id + `">
                                <h3> Image ` + id + `</h3>
                                <p> Category: </p>
                                <input type="radio" id="production` + id + `" name="category" value="production" checked="checked">
                                <label for="production` + id + `">Production</label><br>
                                <input type="radio" id="portret` + id + `" name="category" value="portret">
                                <label for="portret` + id + `">Portret</label><br>
                                <p> Image now: </p>
                                <img class="imgnow" src="img/` + filename + `" alt="`+alt+`"><br>
                                <p> New image: </p>
                                <input type="file" name="fileToUpload" id="fileToUploadgallery` + id + `"><br><br>
                                <button type="submit" name="submit" class="submitupload">Change image</button>
                                
                                <button class="removeimg"> Remove image </button>
                            </form><br>`);
            }
        }

        $('#addimg').on("click", function(){

            var i = parseInt($('#gallery form:last').attr('id').slice(-1));

            var id = i + 1;

            form.append(`<hr>
                            <form id="imgform` + id + `" autocomplete="off">
                                <input style="display: none;" name="id" value="` + id + `">
                                <h3> Image ` + id + `</h3>
                                <p> Category: </p>
                                <input type="radio" id="production` + id + `" name="category" value="production">
                                <label for="production` + id + `">Production</label><br>
                                <input type="radio" id="portret` + id + `" name="category" value="portret">
                                <label for="portret` + id + `">Portret</label><br>
                                <p> New image: </p>
                                <input type="file" name="fileToUpload" id="fileToUploadgallery` + id + `"><br><br>
                                <button id="uploadimg" type="submit" name="submitupload">Upload image</button>
                            </form><br>`);

            $('#uploadimg').on("click", function(e){

                e.preventDefault();

                var form = $(this).parents('form:first')[0];

                uploadimg(form);
            });
        });

        $('.removeimg').on("click", function(e){

            e.preventDefault();

            var formnews = $(this).parents('form:first');

            sendData(selectedvalue, formnews);

            return false;

        });

        var button  = $('#gallery').find('.submitupload');

        button.on("click", function(e){

            e.preventDefault();

            var form = $(this).parents('form:first')[0];

            uploadimg(form);
        });


    } else if (page == "extra"){

        var dataparsed = JSON.parse(data);

        for (var i = 0; i < dataparsed.length; i++) {
            var usingdata = dataparsed[i];
            var name = usingdata["name"];
            var data = usingdata["filename"];
            var alt = data.substring(0, data.length -4);

            if (name == "newsbackground" && selectedvalue == "news"){

                if('#newsappend'){
                    $('#newsappend').next().remove();
                    $('#newsappend').remove();
                }

                $('#uploadednews').after(`<p id="newsappend"> Image now: </p><img src="img/` + data + `" alt="`+ alt +`"><br>`);

            } else if (name == "headerbackground"){

                $('#backgroundcolor').val(data);

            }
        }

    } else {
        console.log("not working yet");
    }
}