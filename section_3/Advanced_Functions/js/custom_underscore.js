var products = [{
    name: "Go Set a Watchman",
    category: "books",
    selling_points: ["Controversial", "Publicity Bonanza", "Released by rapacious publishers against the wishes of senile author"],
    price: 25,
    picture_url:"https://upload.wikimedia.org/wikipedia/en/4/4e/US_cover_of_Go_Set_a_Watchman.jpg"
}, {
    name: "Twilight",
    category: "books",
    selling_points: ["Doesn't make you think to hard", "Reinforces traditional gender-roles", "Doesn't make you think to hard"],
    price: 9.99,
    picture_url: "http://image.slidesharecdn.com/book-1-twilight-1231022548425199-1/95/book-1-twilight-1-728.jpg"
}, {
    name: "How to Win Friends & Influence People",
    category: "books",
    selling_points: ["Timeless practical advice", "Actually useful and relevant to your life"],
    price: 8,
    picture_url: "http://htmlgiant.com/wp-content/uploads/2014/10/carousel-500x334.jpg"
}, {
    name: "Dark Side of the Moon",
    category: "music",
    selling_points: ["Collector's Edition", "Trippy", "Good for late night existential crises"],
    price: 100,
    picture_url: "http://i.kinja-img.com/gawker-media/image/upload/s--9N1Ijk1t--/c_fit,fl_progressive,q_80,w_636/1940ob66cyu2ljpg.jpg"
}, {
    name: "Thriller",
    category: "music",
    selling_points: ["Classic MJ", "The 80's greatest contribution to human progress"],
    price: 19,
    picture_url: "http://cps-static.rovicorp.com/3/JPG_400/MI0000/677/MI0000677650.jpg"
}, {
    name: "Ella & Luis",
    category: "music",
    selling_points: ["How could you not?", "Seriously, though..."],
    price: 110,
    picture_url: "http://ecx.images-amazon.com/images/I/51713fx1VdL._SY300_.jpg"
}];


// first: Pass _.first() the array of products and display the returned object in a "featured" section of your site.	
var first_product = _.first(products);
$('#featured').append(first_product.name);

// last: Pass _.last() the array of products and display the returned object in a "clearance" section of your site.
var last_product = _.last(products);
$('#clearance').append(last_product.name);

// filter: Use _.filter() to display only products that belong to the "books" category.
var filtered_by_books = _.filter(products, function(x) {
	return x.category == 'books';
});

filtered_by_books.forEach(function(x) {
    $('#books').append(x.name + " "); 
});


// reject: Use _.reject() to display only products that are priced below $20.
var low_priced = _.reject(products , function(x){
	return (x.price >= 20);
});
low_priced.forEach(function(x) {
    $('#below_twenty').append(x.name + " "); 
});


// uniq: Use _.uniq() to ensure that their are no duplicate selling points in any products before displaying them.
products.forEach(function(product) {
    product.selling_points = _.uniq(product.selling_points);
});
console.log(products);

// map: Use _.map() to grab the picture_url of all products for sale, assign each to the src property of a new <img> tag and return that DOM element. Pass the result of calling _.map() directly into a $('#container').append() expression to create a photo montage.
products = _.map(products, function(product) {
	product.picture_url = "<img src=\""  + product.picture_url + "\"/>";
    return product;
});
console.log(products);

products.forEach(function(product){
	$('#container').append(product.picture_url + "<hr>");
});


// pluck: Use _.pluck() to quickly retrieve a list of the names of all products for sale to list them in an index
var pluck = _.pluck(products, "name");
console.log(pluck);

pluck.forEach(function(x) {
    console.log($('#index'));
    $('#pluck').append(x);
});

// reduce: Pass a shopping cart (array of objects) to _.reduce() and use it to add up the total price of the order.
var invoiceTotal = _.reduce(products, function(total, item) {
    total = total + item.price;
    return total;
}, 0);

console.log(invoiceTotal);


// contains: Determine if the order _.contains() a copy of 'Twilight'. If so, display a drastic message to the user asking them to re-evaluate their life choices.

// var message = _.contains(products, "Twilight", ); 

var isTwilight = _.map(products, function(product) {
    return product.name == "Twilight"? true: false;
});
console.log(isTwilight);
if(_.contains(isTwilight, true)) {
    alert("Re-evaluate your choice!");
}


// every: Use _.every() to determine if every item in the order has a price tag less than $10. If so, call the user a cheapskate!
var priceTag = _.every(products, function(product) {
    return product.price < 10;
});
if( priceTag == false) {
    console.log("You're a cheapskate");
} ;


// some: Use _.some() to determine if any item in the order has a price tag of $100 or more. If so, chide the user for their profligacy!
var overPriced = _.some(products, function(product){
    return product.price >= 100;
});

if(overPriced == true) {
    console.log("You are spending too much on this product!");    
}

// extend: Use _.extend() to merge two objects together. What would this be good for?
var newObj = _.extend(products[0], products[1]); 

for(var key in newObj) {
    console.log(newObj[key]);

    $('#combine').append('<p>' + newObj[key] + '</p>');
}
// This will be good for updating object property values.


