	
	$(document).ready(function(){

		var num = prompt("Enter a number");
		
		// validate the input
		while(parseInt(num) <= 0 ) {
			var num = prompt("Please enter a valid number.");
		}
		
		num = num || 1;

		$('button').click(function() {
			var result = ''; 

			// Ask the user to choose two numbers that should be checked as multiples
			var input_x = $("#first_multiple").val();
			var input_y = $("#second_multiple").val();

			// ask the user to choose three words to replace
			var input_a = $("#fizz").val();
			var input_b = $("#buzz").val();
			var input_c = $("#fizzbuzz").val();

			for(num; num <= 100; num++) {

			    if((num % input_x == 0) && (num % input_y == 0)) { //Multiples of 3 & 5
					result += "<div class='box fizzbuzz'>"+ input_c + "</div>"; 
				} 
				else if(num % input_x == 0){ //Multiples of 3
					result += "<div class='box fizz'>" + input_a + "</div>";
				} 
				else if(num % input_y == 0) { //Multiples of 5
					result += "<div class='box buzz'>" + input_b + "</div>";
				}
				else 
				    result += "<div class='box number'>" + num + "</div>"; 
			}

			document.querySelector('#fizz-buzz').innerHTML =  result;
			$('#user_data').hide();

		}); 
			
	});