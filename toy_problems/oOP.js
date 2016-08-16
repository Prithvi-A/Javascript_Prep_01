// Sony Pictures has contracted us, They're scouting haunted locations for their GhostBusters reboot sequel. Luckily for us we know this pretty nifty haunted house api that'll return an object with addresses that have reported eerie situations. ASSIGNMENT: Sony Pictures wants us to hand them a nested array with two array collections and a string. The first array collection will have addresses with eerie encounters, the other will have an array collection of non encounters. The string should encapsulate the total amount of encounters and non encounters. 

//collection eg: [{dogs: 2},{cats: 5},{parrots: 8}]


//first elem will be the encounters, second elem will be non-encounters, third elem will be a string.  
// [ [{"444-Jackson-Street": true}, ...],  [{"1222-Main-Avenue": false}, ...], 
//"We have (insert num) encounters and (insert num) non-encounters"] 




var hasGhosts = {
	"444-Jackson-Street": true, 
	"1222-Main-Avenue": false, 
	"555-5th-Road": true, 
	"1020-10th Avenue": true,
	"6543-Sheryl-Place": false,
	"888-Irving-Street": true,
	"5422-Sycamore-Drive": false,
	"2522-Plaza-Street": false,
	"8956-20th-Avenue": false
};

function GhostBusters(obj){
	var encounter=0;
	var non_encounters=0;
	var total = "";
	var array1 = [];
	var array2 = [];

	for(var key in obj) {
		if(obj[key] === true){
			encounter++;
			var obj1 = {};
			obj1[key] = obj[key];
			array1.push(obj1);
		} else {
			non_encounters++;
			var obj2 = {};
			obj2[key] = obj[key];
			array2.push(obj2);
		}
	}
	
	total = encounter + non_encounters;
	
	var newArr = [array1,array2, total];
	
	console.log("We have " + encounter +" encounters and "+ non_encounters +" non-encounters");
	console.log(newArr);
}

GhostBusters(hasGhosts);
