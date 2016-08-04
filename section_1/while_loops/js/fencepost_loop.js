var n = 0;
var num = ''; 

while(n < 10) {

	if(n == 9) {
		num += "<p class=odd>" + n + "</p>";
		var html_text =  num ;
	}
	else {
		if(n%2 !== 0) {
			num += "<p class=odd>" + n + "</p>" + "<hr>";
		} else if(n%2 == 0) {
			num += "<p class=even>" + n + "</p>" + "<hr>";
		}
		var html_text =  num ;
	}
	n++;
}

document.querySelector("#target").innerHTML = html_text;