// ############ Code block 1 ############ 
var hero, bad_guy;

alert("Code Block 1");

hero = prompt("Is the hero strong or weak?");
bad_guy = prompt("Is the bad guy strong or weak?");

alert("Check out the console.");

if(hero === "strong") {
	 if(bad_guy === "weak") {
		console.log("Ah-ha, an easy victory!");
	 }
	console.log("Let us battle to the death!");
}	


// ############  Code block 2 ############ 
alert("Code Block 2");

var response, image_path, secret_saying = document.querySelector('#message').textContent;

if(secret_saying === "A Eagle Flies at Midnight") {
	response = "You may pass";
	image_path = "http://image.shutterstock.com/z/stock-photo-man-hand-open-door-knob-133893713.jpg";
} else {
	response = "Release the hounds!";
	image_path = "http://i.istockimg.com/file_thumbview_approve/15654074/2/stock-photo-15654074-release-the-hounds.jpg";
}	
document.querySelector('#result').textContent = response;
document.querySelector('img').src = image_path;


// ############  Code block 3 ############ 
alert("Code Block 3");

var user_input = document.querySelector('input#search').value;
var output_el  = document.querySelector('#output');

if (user_input !== "happiness"){
	if(!user_input) {
		document.querySelector('input').value = "hey you, type here: z";
	} else {
		output_el.textContent = "You're searching for the wrong thing";
	} 
} else {
	output_el.textContent = "ahh, the enlightened one!";
}

// ############  Code block 4 ############ 
var age = prompt("What is your age?");

if (age < 21) { //less than 21
	output_el.textContent  = "Sorry, son";
} else if (!(age > 35)) { // not greater than 35
	output_el.textContent = "ID please";
} 

var name = prompt("What is your name?");

if ((name === "Bob") && (age <= 35)){
	output_el.textContent = "You're banned, Bob!";
} else  {
	output_el.textContent = "Come on in!";
}
