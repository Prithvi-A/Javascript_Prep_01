var say_hi = function() {
	console.log('hi');
};

var greeter = say_hi;

say_hi(); 
greeter();

say_hi = function() {
	console.log('meh');
};

say_hi();
greeter();

var runner = function(fn) {
	console.log('Invoking a function now!');
	fn();
};

runner( function() { console.log('okay');});
runner(say_hi);
runner(greeter);




// ####################
// Exercise 1: Write a function answer_logger that takes a function as input, runs it, and places the return value from that function invocation into a div#answer
// ####################

var answer_logger = function(fn) {
	var result =  fn();
	// $('#answer').append(result);
};
answer_logger(function(){
  return "I should appear in div#answer!";
});



// ####################
// Write a function answer_collector that takes an array of functions as an input and runs each of them, in turn. Each time you run a function, collect its return value and add it to a results_array. Return the results array from answer_collector.
// ####################

var answer_collector = function(arr_of_input) {
	var results_array= [];
	arr_of_input.forEach(function(fn){
		results_array.push(fn());
	});
	console.log(results_array);
	return results_array;
};

var fn1 = function () {
  return "this should be the first value in results array";
};

answer_collector([fn1, function(){ return "this should be the second value in results array"; }]);


// ####################
// Sample: 
// ####################

var returns_a_func = function() {
	var a = function() { console.log('BOOP!'); };
	return a;
};


var booper = returns_a_func(); // [Function]
booper(); //BOOP!


// ####################
// Local & Global Scope
// ####################

var word = 'original';
var phrase = " is the word";

var word_changer = function (new_word) {
    var word = new_word;
    console.log(word + phrase);
};

console.log(word + phrase); // original is the word
// console.log(new_word + phrase); // new_word is not defined
word_changer('changed'); // changed is the word
console.log(word + phrase); // original is the word
// console.log(new_word + phrase); // new_word is not defined

// what's different here?
var leaky_word_changer = function (new_word) {
    word = new_word;
    console.log(word + phrase);
};

leaky_word_changer('changed'); // changed is the word
console.log(word + phrase); // changed in the word
// console.log(new_word + phrase); // new_word is not defined


// ####################
// Exercise 3:

// Write a function secret_keeper that defines a variable secret inside its code block.
// Try to access the secret variable from outside the function scope using your JS console. Make sure it's safe!
// Allow the user to invoke secret_keeper with two strings as arguments
// $().append() the two strings to the page with the secret word in between

// ####################

var secret_keeper = function(str1, str2) {
	var secret = "This is top secret";
	var newSecret = str1 + " " + secret + " " + str2;
	$('#secret').append(newSecret);
};

console.log(secret);
secret_keeper('Hello', 'World');


// ####################
// Clousures 
// ####################

var returns_a_func = function () {
  var number = 5;
  return function(){ console.log( "The number is: " + number); };
};

var number = 4;

var fn = returns_a_func();
fn(); // The number is: 5

var func_runner = function(func) {
  var number = 3;
  func();	//The number is: 5
};

func_runner(fn); // The number is 5 because it is refering to its local variable only.


// ####################
// Exercise 4: Write a function multiplies_by that takes a number as input and returns a function that, when invoked with a second number as an argument multiplies the two numbers together.
// We can test multiplies_by with this code, we should not need to change it at all.
// ####################

var multiples_by = function(num1) {
	var results = function(num2) {
		console.log( num1 * num2);
	};
	return results;
};

var times5 = multiples_by(5);
times5(4); //20

var times10 = multiples_by(10);
times10(32); //320







