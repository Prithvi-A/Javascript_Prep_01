// Functions

// var state = "California";

// console.log("At 0th index: "+ state[0]); 
// console.log("At 2nd index: "+ state[2]); 
// console.log("At 4th index: "+ state[4]); 
// console.log("At 6th index: "+ state[6]); 
// console.log("At 8th index: "+ state[8]); 


// var index = 2;
// console.log("At 2nd index: " + state[index]); 



// var len = state.length;
// console.log("At 10th index: " + state[len]); 
// console.log("At 9th index: " + state[len-1]);

$(document).ready(function(){
	/******************
	* Exercise: Favorite Recipe
	*******************/

	var recipe = [];
	recipe[0] = "1cup of Sugar";
	recipe[1] = "2cups of Flour";
	recipe[2] = "1 1/4cup of butter";
	recipe[3] = "Bake it in the oven for 30mins at 375 degrees.";

	console.log("First step is: " + recipe[0]);

	var last_step = 3;

	console.log("Last step is: " + recipe[last_step]);

	/******************
	* Exercise: Bucket List
	******************/


	var bucket_list = ['Learn Angular', 'Learn Backbone'];

	bucket_list.push('Learn Grunt', 'Learn Gulp'); // Added to the end of the array
	bucket_list.unshift('Learn Javascript', 'Learn SASS'); //Added to the beginning of the array

	bucket_list.length; //6

	var dying_wish = bucket_list.pop(); //'Learn Gulp' is removed

	var do_it_now = bucket_list.shift(); //'Learn Angular' is removed

	bucket_list.length; //4


	/******************
	* Exercise: Using while loop and jquery in a function.
	******************/

	var recipe = ["1cup of Sugar", "2cups of Flour", "1 1/4cup of butter", "Bake it in the oven for 30mins at 375 degrees"];
	var bucket_list = ["Learn Javascript", "Learn SASS", "Learn Angular", "Learn Backbone", "Learn Grunt", "Learn Gulp"];
	
	var append_strings = function(arr, stringStyle) {
		var i = 0;
		var results = [];

		while(i < arr.length){
			results.push(arr[i] + ( i<(arr.length -1) ?', ':'.') );
			i++;
		}
		var new_div = $('<div></div>');
		new_div.attr('id', stringStyle).append(results);
		$('body').append(new_div);
	};

	append_strings(recipe, 'recipe_output');
	append_strings(bucket_list, 'bucketlist_output');

	/******************
	* Exercise: Use .split(' ') and .join methods
	******************/
	var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";
	var scrambled_array = scrambled_poem.split(' ');
	var unscrambled_array = [];

		scrambled_array.shift();
		scrambled_array.pop();
		unscrambled_array = scrambled_array.join(' ');


	/******************
	* Exercise: Write a function Reverser
	******************/
	var reverser = function(arr) {
		var reversed_array = [];
		for(var i = arr.length-1; i>=0 ; i--){
			reversed_array.push(arr[i]);
		}
		return reversed_array;
	};

	var word = ["h","e","l","l","o"];
	reverser(word);

});

