	
// var newSet = [];

// products.forEach(function(x) {
// 	newSet.push(x);
// });
// console.log(newSet);

// first: Pass _.first() the array of products and display the returned object in a "featured" section of your site.	
var first_product = _.first(products);
$('#featured').append(first_product.name);

// last: Pass _.last() the array of products and display the returned object in a "clearance" section of your site.
var last_product = _.last(products);
$('#clearance').append(last_product.name);

// filter: Use _.filter() to display only products that belong to the "books" category.
var newSet  = [];
var filtered_by_books = _.filter(products, function(x) {
	if(x.category == "books"){
		newSet.push(x.name + "  ");
	} 
	return newSet;
});

$('#books').append(newSet); 

// reject: Use _.reject() to display only products that are priced below $20.
var discounted = [];

var low_priced = _.reject(products , function(x){
	return (x.price >= 20);
});
low_priced.forEach(function(x) {
	var name = x.name  + " ";
	discounted.push(name);
});
$('#below_twenty').append(discounted); 


// uniq: Use _.uniq() to ensure that their are no duplicate selling points in any products before displaying them.
var unique = _.uniq(products, function(x) {
	return x.selling_points;
});


// map: Use _.map() to grab the picture_url of all products for sale, assign each to the src property of a new <img> tag and return that DOM element. Pass the result of calling _.map() directly into a $('#container').append() expression to create a photo montage.
var mapping = _.map(products, function(x){
	return x.picture_url;
});
// console.log(mapping);

var results = mapping.forEach(function(i){
	console.log(i);
	$('#container').append("<img src=" + i + " />");
});


// pluck: Use _.pluck() to quickly retrieve a list of the names of all products for sale to list them in an index

var pluck = _.pluck(products, "name");
console.log(pluck);
$('#index').append(pluck);

/*
reduce: Pass a shopping cart (array of objects) to _.reduce() and use it to add up the total price of the order.

contains: Determine if the order _.contains() a copy of 'Twilight'. If so, display a drastic message to the user asking them to re-evaluate their life choices.

every: Use _.every() to determine if every item in the order has a price tag less than $10. If so, call the user a cheapskate!

some: Use _.some() to determine if any item in the order has a price tag of $100 or more. If so, chide the user for their profligacy!

extend: Use _.extend() to merge two objects together. What would this be good for?
*/