    $(document).ready(function(){

    	// Exercise 1:
    	var firstExercise = function() {	
	    	$('body').css('background-color','red');
			$('img.firstImage').attr('src', 'http://i.imgur.com/nWGCwiE.gif');
			$('h2').text('hello');
			$('#notification').html('<div class="alert">Hold on!<b>an error</b> has occured!</div>');
			$('.container').append("<p>What's the difference between <i>.append()</i> and .html()?</p>");
    	};
    	firstExercise();


		// Exercise :  Testing Experssions
    	var testingExpressions = function() {
	    	$('h1').css('color', 'blue');
	    	$('body').css('background', 'red');
	    	$('#everything').css('font-size', '20px');
	    	$('.holder').css('border','1px solid black');
	    	$('ul>li').css('font-weight', 'bold');
	    	$('p:nth-child(2)').css('color', 'green');
	    	$('#secret').css('display','none');
	    	$('#secret').css('display','block');
	    	$('#change-me').append('End of text.');
	    	$('#change-me').html('<p>Paragraph 1 </p><p>Paragraph 2</p>');
	    	$('#change-me').append('<p>Adding a new Paragraph</p>');
	    	$('li').text('Adding a new sentence.');
	    	$('li').append('Appending a new sentence.');
	    	var content_appending_the_container = '<ol><li>Appending Item 1</li><li>Appending Item 2</li><li>Appending Item 3</li></ol>';

	    	$('#everything').append(content_appending_the_container);
		};
		testingExpressions();


		// Exercise : Theme Changer
		var themeChanger = function () {
			var input_color = "blue";

			//Validate the input from the user

			$('h1').text("You have selected the " + input_color + " theme!");     

			var light_color = "light" + input_color; // lightgreen
			var dark_color = "dark" + input_color; //darkgreen


			$('ol>li').css('color', input_color ); //green
			$('h1').css('background-color', light_color); // lightgreen
			$('#change-me').css('color', dark_color); //darkgreen

			if(input_color == 'blue') {
			$('img.inside').attr('src', 'http://i.imgur.com/iSyMl1p.jpg');
			} else if(input_color == 'red') {
			$('img.inside').attr('src', 'http://i.imgur.com/3U0soiK.png');
			} else if(input_color == 'green') {
			$('img.inside').attr('src', 'http://i.imgur.com/eucAMTA.jpg');
			}
		};
  		themeChanger();


  		// jQuery Effects 
  		var effectsJquery = function() {
  			$('h2.effects').show();
  			$('p#secret').hide();
  			$('ol li.effect').fadeIn(5000);
  			$('p .comments').fadeOut();
  			$('div#thing').slideDown();
  			$('#message').slideUp("slow");
  			$('.alert').slideToggle();
  		};
  		effectsJquery();
    });

  	var a = 4;
  	console.log(a);
