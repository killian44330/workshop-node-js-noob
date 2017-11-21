exports.run = function(input) {
	console.log("Exercise #2");
	var big_numb = 0;
	var i = 0;
	var tab = input.split("");
	while (i < input.length) {
		if (Number(tab[i]) > big_numb) {
			big_numb = Number(tab[i]);
			}		
		i++;
		}
	return (big_numb);
};
