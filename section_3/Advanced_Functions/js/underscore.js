	
var newSet = [];

products.forEach(function(x){
	newSet.push(x.name);
});
console.log(newSet);
	
var first_product = _.first(products);
$('#featured').append(first_product);
