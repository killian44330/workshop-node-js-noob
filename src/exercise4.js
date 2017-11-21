exports.run = function(input) {
  console.log("Exercise #4");

  // YOUR CODE IS WELCOME HERE

	
function repeat (NbArepeter, str)
  {
    var str_final = str;
	var i = 1;
	  while (i < NbArepeter) {
		  str_final = str_final + ", " + str;
		  i++;
	  }
    return (str_final);
  }
	
	
  /** STRICTLY FORBIDDEN TO CHANGE THIS CODE */
  return input(3, "Beetlejuice", repeat);
  /** */
};
