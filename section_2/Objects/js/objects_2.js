
	var complex_object = {
	  string: "I'm a string!",
	  number: 42,
	  array: ["all sorts of stuff", 10, true, undefined, {me: "an object", more: "find me in here!"}, function(){console.log('beepity-beep')}],
	  simple_object: {name: 'bob', location: 'basement'},
	  fn: function(){
	    console.log("fn has been invoked! Checking both kinds of invocation-time inputs...");
	    console.log("what is my calling context?", this);
	    console.log("what are my arguments?", arguments);
	  }
	};

	$('#primitive_data_types').append('<p>String : ' + complex_object.string +'</p>' + '<p> Number: ' + complex_object.number + '</p>');
	
	var results = "";

	var findingValues = function(obj) {
		for(var key in obj) {
			results = '<p>' + obj[key] + '<p>';
			$('#array_values').append(results);
		}
	};
	findingValues(complex_object);

	$('#name').text(complex_object.simple_object.name);
	$('#location').text(complex_object.simple_object.location);

	var runCodeBeep = complex_object.array[5];
	runCodeBeep();

	complex_object.fn("stuff", "more stuff", "even more stuff!");


	// Create your own complex object and try placing some of its properties on the page. How complex can you make it?
	// Give your object a property whose value is an array of other objects that themselves each have at least one function and one array property.

	//??

	var them_dogs = [{
	    name: 'Henry',
	    age: 0.5,
	    breed: 'Aussie',
	    food: 'kibble',
	    toys: ['tennis ball', 'chew toy'],
	    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
	}, {
	    name: 'Tilly',
	    age: 5,
	    breed: 'Mutt',
	    food: 'kibble',
	    toys: ['bone', 'kong', 'squeaky toy'],
	    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
	}, {
	    name: 'Apollo',
	    age: 10,
	    breed: 'Labrador',
	    food: 'absolutely anything',
	    toys: ['old sock', 'other old sock', 'more old socks'],
	    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
	}];

	var dogs = function() {
		for(var key in them_dogs) {
			var all_toys = [];						
			var total_toys = them_dogs[key].toys;
			
			all_toys.push(total_toys);
		}
			return all_toys;
	};	
	dogs();

	var playTime = function(arr, toy) {
		for(var key in arr) {
			var total =	arr[key].toys;
			for(var i in total) {
				if(total[i] == toy) {
					var name = arr[key].name;
					return name;
				}
			}	
		}	
	};
	playTime(them_dogs, 'tennis ball');

	var dogBook = function() {
		for(var key in them_dogs) {
			var profile_pic = them_dogs[key].picture;
			var name = them_dogs[key].name;
			$('#dogs').append('<span><img src="'+ profile_pic +'" alt="" width="100" height="100"><p>'+ name+'</p></span>');
		}
	};
	dogBook();
