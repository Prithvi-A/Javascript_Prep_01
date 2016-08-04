$(document).ready(function(){
	//------------------------
	// Exercise: Random Date generator.
	//------------------------
	console.log("----- Exercise: Random Date generator.----- ");
	var getnewDate = function() {
		var time = new Date();
		console.log("The time is " + time + '.');
		$('#output').append("This is the current time at this place.");
	};
	getnewDate();
	getnewDate();
	getnewDate();


	//------------------------
	// Exercise: Random sentence generator.
	//------------------------
	console.log("----- Exercise: Random sentence generator. ------");
	var get_sentence = function() {
		var sentences = ["Lorem ipsum dolor set amet.", "It's a beautiful day.", "Hello", "How are you doing?"];		
			var hello = sentences[Math.floor(Math.random() * sentences.length)];
			$('p.new_sentence').append(hello);
	};
	
	var i=0;
	while(i<=10) {
		get_sentence();
		i++;
	}

	//------------------ 
	// Exercise: Create a function that console.logs all of its inputs and then returns them from the function invocation.
	//------------------
	console.log('----- Exercise: Create a function that console.logs all of its inputs and then returns them from the function invocation. -----')
	var log_and_return = function() {
		console.log(arguments);
		return arguments;
	};

	var returned_values = log_and_return(); //[]
	log_and_return("Hello", "World", 5); // ["Hello", "World", 5] 
	log_and_return(returned_values); //[]


	//------------------------
	// Exercise: Simple Math.
	//------------------------
	console.log('----- Exercise: Simple Math. -----');
	var tripler = function(num) {
		return num*num*num;
	};

	var multiply = function(x, y) {
		return x*y;
	}; 

	var divide = function(a, b) {
		return a/b;
	};

	var remainder = function(c, d) {
		return c%d;
	};

	var results = remainder(divide(multiply(tripler(5),12),2),3);
	var results1 = remainder(divide(multiply(tripler(3),2),5),2);
	var results2 = remainder(divide(multiply(tripler(4),3),6),10);

	console.log(results);
	console.log(results1);
	console.log(results2);

	//------------------------
	// Exercise: Constructing sentences.
	//------------------------
	console.log('----- Exercise: Constructing sentences. -----');

	var string_printer = function(args) {
		return arguments;
		$('#output').text(arguments);
	};

	string_printer('peter');
	string_printer('alicia');
	string_printer('Eli ');

	var nounsArray = ['Peter', 'Alicia', 'Eli', 'Jacky', 'Grace'];
	var adjsArray = ["commendable", "ethical", "magnaminous", "judicious", "gleaming"];
	var verbsArray = ["accept", "adopt", "analyze", "appreciate", "articulate"];
	var adverbsArray = ["aboard", "afterwards", "anyhow", "anywhere", "appropriately"];


	var funny_sentence = function(noun, adj, verb, adverb) {
	
		noun = nounsArray[Math.floor(Math.random() * (nounsArray.length-1))];

		adj = adjsArray[Math.floor(Math.random() * (adjsArray.length-1))];

		verb = verbsArray[Math.floor(Math.random() * (verbsArray.length-1))];

		adverb = adverbsArray[Math.floor(Math.random() * (adverbsArray.length-1))];

		var new_sentence = ' <span class="noun">' + noun + '</span>' + " is very " + '<span class="adj">' + adj + '</span>' + ". He likes to " + '<span class="verb">' + verb + '</span>. ' + "Do you like to meet him " + '<span class="adverb">' + adverb + '</span>.';
		$('#output').append(new_sentence);
	};

	funny_sentence();
	funny_sentence();
	funny_sentence();
	funny_sentence();
	funny_sentence();
	
	//------------------------
	// Exercise: Factorial
	//------------------------

	console.log('----- Exercise: Factorial -----');

	var factoral_of_n = function(n) { 
		var results = 1;

		while(n>=1) {
			results *= n; 
			n--; 
		}
		return results;
	};

	factoral_of_n(5);

	var count_by_n = function(count_by, count_up_to) {
		var final_result = 0;

		while(final_result <= count_up_to) { 
			console.log(final_result);
			final_result += count_by; 
		}
	};
	count_by_n(5, 20);

	//------------------------
	// Exercise: Fizzbuzz revenge
	//------------------------
	console.log('----- Exercise: Fizzbuzz revenge -----');

	var num = 1;
	var game_over;
	var newArray = [];
	
	var this_that = function(count_up_to, fizz_num, buzz_num, word1, word2) {
		while(num <= count_up_to) {
			if((num % fizz_num == 0) && (num % buzz_num == 0)) {
				game_over = word1+word2;
			} else if(num % fizz_num ==0) {
				game_over = word1;
			} else if(num % buzz_num == 0 ) {
				game_over = word2;
			}  else {
			 	game_over = num;
			}
			$('#output').append('<div>'+ game_over+ '</div>');
			num++; 
		}
	};
	this_that(100, 3, 5, "fizzy", "buzzy");

	//------------------------
	// Exercise: Fibonacci 
	//------------------------
	console.log('----- Exercise: Fibonacci -----');


	var fibonacci = function(num) {
		var arr = [0, 1];

		for(var i=1; i<=num; i++) {
			var results = arr[i] + arr[i-1]; //1 + 0 = 1
			var push = arr.push(results);
		     console.log(i + ":"+ arr[i] );
		}
			console.log(arr[num-1]);

	};
	fibonacci(10);
});