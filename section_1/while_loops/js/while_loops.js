	var n=0;
	console.log("I am called the Count... because I really love to count!");	

	while(n < 10) {
		console.log(n, "ha-ha-ha"); //Starts from 0,1......10
		n++;
	}
	console.log('fin!');
	
	//-------------------------------------------------
	// Exercise: Write a while loop that counts from 0 to 50 by twos
	//-------------------------------------------------

	var x = 0;
	while(x < 50 ) {
		console.log(x, x+1);
		x += 2;
	}
	console.log("End");

	//-------------------------------------------------
	//-------------------------------------------------

	var n = 100, song = "<ul class=lyrics>";

	while( n >= 0) {
		if(n!==0) {
			song = song + '<li>' + n + " bottle" + ( n === 1? '': 's') + " of beer on the wall!, chug, chug, chug </li>";
		} else {
			song += "<li> no bottles of beer! stumble, stumble, stumble...</li>";
		}
		n--;
	}
	song += "</ul>";

	document.querySelector("#lyrics").innerHTML = song;