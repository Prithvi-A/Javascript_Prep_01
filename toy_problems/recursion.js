// Using recursion and a closure function write a function that sums up an a number  
// Example:  sumBelow(10);  // 45
// sumBelow(7); // 21

function sumBelow(n) {
	var sum = 0;
	if(n===0) { //stop when n=0
		return 0;
	}
	sum = (n-1) + sumBelow(n-1); //reduce n by 1 and concatenate the value the recursion function.
	return sum;
}

console.log(sumBelow(7));