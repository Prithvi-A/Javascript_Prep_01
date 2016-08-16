// Exercise 1:
var person = {};
person.name = "Jane Doe";
person.location = "New York";
person.hobbies = ['Singing', 'Dancing', 'Yoga', 'Painting'];
person.pet = "dog";
person.party = function() {
	console.log('dance, dance, dance!');
};

// console.log(person.party); //function
// console.log(person.party()); // dance, dance, dance!

// Exercise 2:
person.work = function() {
	console.log("Hello, my name is " + this.name + ". How are you doing?");
	console.log("Are you also from " + this.location + " ?");
};
// person.work();

person.workout = function() {
	console.log("I love " + this.hobbies[0] + "! You can find me in a " + this.hobbies[2] + " class in the evenings!");
	console.log("Do you have any hobbies? Like " + this.hobbies[3] + " ?");
};
// person.workout();

person.float_through_life_on_autopilot = function() {
	this.party();
	this.work();
	this.workout();
};
// person.float_through_life_on_autopilot();

/*
dance, dance, dance!
Hello, my name is Jane Doe. How are you doing?
Are you also from New York ?
I love Singing! You can find me in a Yoga class in the evenings!
Do you have any hobbies? Like Painting ?
*/

// Exercise 3:
var car = {
	type: "Honda Civic",
	position: 1,
	speed : 40,
	move: function() {
		var prev = this.position;
		this.position = this.position + this.speed;
		console.log(this.type + "is moving from " + prev + " to " + this.position );
	}
};
console.log(car.position);
car.move();
console.log(car.position);
car.move();
console.log(car.position);
car.move();
console.log(car.position);

// Exercise 4 

var dog = {};
dog.name = "Rufus";
dog.location = "Cupertino";
dog.fav_food = "Kibble";
dog.hungry = true;

var party_fn = function() {
	console.log(this.name + " dances wildly! ");
};
var eat_fn = function() {
	console.log(this.fav_food + " is his favorite food.");
	this.hungry = false;
};
var go_to_park_fn = function () {
	this.hungry = true;
	console.log("The location is " + this.location);
	console.log("The hungry property is reset to : " + this.hungry);
};

dog.party = party_fn;
dog.eat = eat_fn;
dog.go_to_park = go_to_park_fn;


dog.party();
dog.eat();
console.log(dog.hungry);
dog.go_to_park();

// Exercise 6: 

var dog2 = {
	name : "Spot",
	location : "San Francisco",
	fav_food : "Steak",
	hungry : true
};

dog2.party = party_fn;
dog2.eat = eat_fn;
dog2.go_to_park = go_to_park_fn;

var dog3 = {
	name : "Snooky",
	location : "Santa Clara",
	fav_food : "Bacon",
	hungry : true
};

dog3.party = party_fn;
dog3.eat = eat_fn;
dog3.go_to_park = go_to_park_fn;

// Car Object
var move_fn = function() {
  console.log("At Position " +  (this.position++) + " --> Speed is: " + this.speed++);
  console.log();
};

var car1 = {
  type: "Honda Civic",
  speed: 5,
  position: 1,
  move: move_fn
};


var car2 = {
  type: "Toyota Corolla",
  speed: 3,
  position: 6,
  move: move_fn
};

car1.move();
car1.move();
car2.move();
car2.move();



// Meow method 
var meow_fn = function() {
	console.log(this.name + " meowed");
};

var cat1 = {
	name: "Charlie",
	meow : meow_fn
};

var cat2 = {
	name: "Mr.Snuggles",
	meow : meow_fn
};

cat1.meow();
cat2.meow();


// Sampler 
var reverse_adder = function(car) {
	car.reverse = function() {
		this.position = this.position - this.speed;
		console.log(this.position);
	};
	console.log(car.reverse());
};

reverse_adder(car1);
reverse_adder(car2);

// Exercise 7:
var fetch_adder = function(dog) {
	dog.fetching = function() {
		console.log(this.name + " lives in " + this.location);
	};
	dog.fetching();
};

var nap_adder = function(cat) {
	cat.napping = function() {
		console.log(this.name + " is the name of the cat.");
	};
	cat.napping();
};

fetch_adder(dog2); //Spot lives in San Francisco
nap_adder(cat1); //Charlie is the name of the cat.


// Exercise 8: 
var warrior_factory = function(name, weapon) {
	var warrior = {};
	
	warrior.name = name;
	
	warrior.weapon = weapon;

	warrior.attack = function() {
		console.log( this.name + " attacks using this " + this.weapon);
	};

	warrior.adventure = function() {
		console.log("The adventure begins ");
		this.attack() + this.attack() + this.attack();
		console.log("You will be destroyed by " + this.name + "!");
	};
	return warrior;
};

var warrior1 = warrior_factory('Spartan', "club");
warrior1.attack();
warrior1.adventure();


// Exercise 9: 
var car_factory = function (type, speed) {
	return {
		position : 0,
		type : type,
		speed : speed,
		move : function () {
			this.position += this.speed;
		}	
	};
};

var new_toyota = car_factory('Toyota Hilux', 3);

console.log("Position: " + new_toyota.position);
console.log("Type: " + new_toyota.type);
console.log("Speed: " + new_toyota.speed);
console.log("Move: ");
new_toyota.move(); 


