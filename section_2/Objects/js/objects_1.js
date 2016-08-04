$(document).ready(function() {
	// Exercise 1:
	var my_cat = {};

	my_cat.name = 'Poppy';
	my_cat.age = 40;
	my_cat.alive = true;
	my_cat.fav_toy = 'wollen ball';
	my_cat.napping_spot = 'cat pod';
	my_cat.color = 'black';

	console.log(my_cat);

	//Exercise 2:
	var my_dream_life = {};
	var property_key = "job";
	my_dream_life[property_key] = "Fullstack developer";

	var another_property_key = "salary";
	my_dream_life[another_property_key] = "150K";

	console.log(my_dream_life[property_key]); //Fullstack developer
	console.log(my_dream_life[another_property_key]); //150K
	console.log(my_dream_life["job"]); //Fullstack developer

	var next_property = "car";
	my_dream_life[next_property] = "Tesla";

	console.log(my_dream_life[next_property]); // Tesla
	console.log(my_dream_life["car"]); //Tesla

	var property_key_1 = "School";
	var property_key_2 = "State";
	var property_key_3 = "Company";

	my_dream_life[property_key_1] = "Berkeley";
	my_dream_life[property_key_2] = "CA";
	my_dream_life[property_key_3] = "Uber";

	console.log(my_dream_life[property_key_1]); //Berkeley
	console.log(my_dream_life[property_key_2]); //CA
	console.log(my_dream_life[property_key_3]); //Uber

	console.log(my_dream_life["School"]); //Berkeley
	console.log(my_dream_life["State"]); //CA
	console.log(my_dream_life["Company"]); //Uber


	// Exercise 3: 
	var car = {
	  make: "Toyota"
	};

	car["model"] = "Camry";
	car["model"];
	car.model;

	car.model = "Prius";
	car["model"];
	car.model;

	var prop = 'year';

	// We have use 
	car[prop] = 1992;

	car['nothing_here'] //undefined
	car.nothing_here //undefined

	var dream_car = {};
	dream_car.make = "Tesla";
	dream_car.model = "S Model";
	dream_car.color = "Black";
	dream_car.year = 2016;
	dream_car.registered = true;




	// ##########
	// Exercise 4: 
	// ##########

	var cat = {name: "Poppy", age: 40, alive: true, fav_toy: "wollen ball", napping_spot: "cat pod", color: "black"};
	var dream_car = {make: "Tesla", model: "S Model", color: "Black", year: 2016, registered: true};
	var dream_life = {job: "Fullstack developer", salary: "150K", car: "Tesla", School: "Berkeley", State: "CA"};
 	var obj = {greeting: 'howdy', direction: 'down', color: 'red', 'spaces-and-dashes can be used': ' but need to have quotes'};

	var iterateObjects = function() {

		for(var life in dream_life) {
			console.log(dream_life[life]);
		}

		for(var animal in cat) {
			console.log(cat[animal]);
		}

		for(var car in dream_car) {
			console.log(dream_car[car]);
		}

		for(var key in obj) {
			
			if(key == 'color') {
		    	console.log(obj[key]);
		    	$('#color').append(obj[key]);
			}
			
			if(obj[key] == 'down') {
				$('#color').append('<p>'+ key +'<p>');
			}
			
			var target_key = "greeting";
			if(key == target_key) {
				$('#color').append('<p>'+ obj[key] +'<p>');
			}
		}

	};
	iterateObjects();


	// ##########
	//Exercise 5: 
	// ##########
	var numbers = [2,4,5,37,0];
	var doubled_numbers = {};
	var i = 1;
		for(i in numbers) {
			key = numbers[i];
			doubled_numbers[key] = key + key;
			console.log(key);
		}

		console.log(doubled_numbers);



	// ##########
	// String Operations
	// ##########

	var greeting = "Hello and welcome";

	greeting[0];
	!!greeting.match("welcome");
	!!greeting.match("goodbye");

	var words = greeting.split(' '); 



	// ##########
	// Exercise 6: Loop through the famous array add only people whose names start with 'a' to your favorites
	// ##########

	var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt','ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis'];
	
	var findFirstChar = function(arr, letter) {
		var favorites = [];
		var len = arr.length;

		for(var i=0; i < len; i++) {
			if(arr[i].charAt(0) == letter) {
				var results = arr[i];
				favorites.push(results);
			}
		}
		return favorites;
	};	

	findFirstChar(famous, 'a'); 



	// ##########
	// Exercise 7:
	// Loop through the politicos object and add each person's name to the famous array.
	// Loop through the politicos object and add the names of jobs that people with Obama in their name hold to the obama_jobs array.
	// ##########

	var politicos = {
	    secretary_of_state: 'hillary clinton',
	    potus: 'barack obama',
	    flotus: 'michelle obama',
	    vice_prez: 'joe biden',
	    gov_of_california: 'jerry brown'
	};	


	var jobs = function(obj) {
		var obama_jobs = [];

		for (var key in obj) {
			obama_jobs.push(key);
		}
		return obama_jobs;
	};

	jobs(politicos);
	


	// ##########
	// Exercise 8:
	// Add any politico whose FN or LN starts with a b as property of the newly created object.
	// ##########

	var checkingFirstandLastName = function(obj) {
		var b_named_politicos = {};

		for(var key in obj) {

			var final_value = obj[key];
			var firstName = final_value.split(' ')[0];
			var lastName = final_value.split(' ')[1];
		
			if(firstName.charAt(0) == "b" || lastName.charAt(0) == "b") {

				// What is the property in b_named_politicos
				var newProperty = key;

				//  What is the value for the corresponding properties for the above
				var newValue = final_value;

				// Assign the key-value pairs to the new obj
				b_named_politicos[newProperty] = newValue;
			}
		}
		return b_named_politicos;
	};
	checkingFirstandLastName(politicos);



	// ##########
	// Create a reverse lookup table by iterating over the politicos object and adding each person to the reverse_politico_lookup object with their name as a key and their job title as the value.
	// ##########

	var reverseLookup = function(obj) {

		var reverse_politico_lookup = {};

		for(var key in obj) {
			var reverseProperty = obj[key]; //hillary
			var reverseValue = key; //secretary_of_state

			// Assigning key:value pairs for the new obj. 
			reverse_politico_lookup[reverseProperty] = reverseValue;			
		}

		return reverse_politico_lookup;
	};

	reverseLookup(politicos);


	// ##########
	// Exercise 9: Examine the unexpected behavior regarding arrays and objects...
	// ##########

	var type_tester = function(input) {
		var results = typeof input;
	    console.log(results);
	};

	type_tester(3);
	type_tester('hello');
	type_tester({});
	type_tester([]);

});
