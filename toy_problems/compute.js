// Given an infinite number of quarters (25 cents), dimes (10 cents), nickels (5 cents), and pennies (1 cent), write code to calculate the number of ways of representing n cents.  Do not worry about duplicates.

// NOTE: The possible number of ways is high because there are duplicates such as 5 + 1 and then 1 + 5 but we are not going for optimization here, just the recursive process

// compute(15) --> 42
// compute(5) --> 2;
// compute(10) --> 9;
// compute(3) --> 1;
// compute(6) --> 3;
var compute = function(n) {
   // 1, 5, 10, 25
   var count = 0;
   var arr = [1,5,10,25];
   search(0);

   return count;

   function search(curr) {
   	if(curr === n) {
   		count++;
   		return;
   	} else if(curr > n) {
   		return;
   	}

   	// for(var i=0; i< arr.length; i++) {
   	// 	curr += arr[i];
   	// 	search(curr);
   	// 	curr -= arr[i]
   	// }

   	search(curr +1);
   }
};

compute(6);