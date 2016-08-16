/*In an alternative universe a magical company that dominates search ventured off into a super successful eyewear program. The eyewear program has crazy features, augmented reality, cam live streaming, gps, all that good stuff. Their CEO previously suffered from dyslexia until he trained himself to read forward and backwards. He doesn't want others to go through his struggles. The Operating System running on the eyewear project has issues dealing with palindromes. The CEO is looking for an engineer to set up an algorithm that will return true if a string is a palindrome and false if it isn't. 
*/


/*

Given a string, return true if it’s a palindrome, and false otherwise. Only consider alphabet characters as part of the word.

(A palindrome is a word, phrase, or sentence that reads the same forward or backward.)

"Mr Owl ate my metal worm" // true
"rotator" // true 
"Hannah" // true
"May A Moody Baby Doom A Yam"//true
"level" // true
"hooli" // false
*/

function hooliDrome(str){
	console.log(str);
	console.log(/\S/.test(str));
	var arr = [];
	arr = str.toLowerCase().split("");
	arr = arr.filter(function(str) {
    	return /\S/.test(str);
	});

	var newArr = [];

	for(var i = arr.length-1; i>=0; i--) {
		newArr.push(arr[i].trim());
	}
	console.log(newArr);

	var res1 = arr.join("");
	console.log(res1);
	
	var res2 = newArr.join("");
	console.log(res2);
	
	if(res1 === res2) {
		return true;
	}
	else{ return false;}
}

hooliDrome("Mr Owl ate my metal worm");
// hooliDrome("rotator");
// hooliDrome("Hannah");
// hooliDrome("level");
// hooliDrome("hooli");