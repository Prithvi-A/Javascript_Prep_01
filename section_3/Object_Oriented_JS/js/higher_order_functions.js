// Functions that operate on other functions by passing them as a argument or by returning them are called higher order functions.


// Example 1: Function returning a function.
function greaterThan(n) {
	return function(m) {
				return m > n;
			};
}
var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(20));

// Example 2: Function changing another function. 
function noisy(f) {
	return function(arg) {
		console.log("calling with", arg);
		var val = f(arg);
		console.log("called with", arg, "- got", val);
		return val;
	};
}
noisy(Boolean)(0);

// New types of control flow.
function unless(test, then) {
	if(!test)
	 then();
}
function repeat(times, body) {
	for(var i=0; i<times; i++) {
		body(i);
	}
}

repeat(3, function(n) {
	console.log(n);
	unless(n%2, function() {
		// console.log(n, "is even");
	});
});

// Filtering an Array

var data = [
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"}
];


function filter(array, test) {
	var passed =[];
	for(var i=0; i< array.length; i++) {
		console.log(test(array[i]));
		if(test(array[i]))
			passed.push(array[i]);
	}
	return passed;
}

console.log(filter(data, function(person) {
	return person.born > 1830 && person.born < 1835;
}));

console.log(filter(data, function(person) {
	return person.father == "Petrus de Milliano";
}));



// Write a function that defines filter()

function filter(array, test) {
	var newArr = [];
	for(var i=0; i< array.length; i++) {
		if(test(array[i]))
		newArr.push(array[i]);
	}
	return newArr;
}

var myArr = [2, 4, 6, 10, 12, 14, 16, 18, 20, 30];


var y = filter(myArr, function(x) {
	return x%3 == 0 ;	
});

console.log(y);

// Transforming with MAP

function map(array, transform) {
	var mapped = [];
	for(var i=0; i < array.length; i++) {
		mapped.push(transform(array[i]));
	}
	return mapped;
}


console.log(map(myArr, function(z) {
	return z%2 == 0;
}));

