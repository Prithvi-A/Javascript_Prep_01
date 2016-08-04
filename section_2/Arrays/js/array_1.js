var countConsonants = function(string) {
  var count=0;
  for(var i=0; i< string.length; i++) {
    if((string[i] == 'a') || (string[i] == 'e')||(string[i] == 'i')||(string[i] == 'o')||(string[i] == 'u')) {
      console.log(string[i]);
      count = count +1;
      console.log(count);
    }
    var final_count = (string.length-1)-count;
  }
  return final_count;
};

countConsonants('San Francisco');

// Exercise
var word = "San Francisco";

word[0];
word[1];
word[4];
word[5];
