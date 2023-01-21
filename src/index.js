module.exports = function check(str, bracketsConfig) {
  let bracketsAcumulator = [];
	let openBrackets;

	if (str.length % 2 === 1) { return false }

	bracketsConfig = Object.fromEntries(bracketsConfig);
	openBrackets = Object.keys(bracketsConfig);
	str = str.split('');
	for (bracket of str) {
		let lastBracket = bracketsAcumulator[bracketsAcumulator.length - 1];
		if (bracketsConfig[lastBracket] == bracket) {
			bracketsAcumulator.pop();
			continue
		}
		if (openBrackets.includes(bracket)) {
			bracketsAcumulator.push(bracket);
			continue
					} else if (bracketsAcumulator.length == 0) { return false }

		
		
		if (bracketsConfig[lastBracket] == bracket) {
			bracketsAcumulator.pop();
		} 
	}
	
	return bracketsAcumulator.length == 0
}





// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];


// function check(str, bracketsConfig) {
// 	let bracketsAcumulator = [];
// 	let openBrackets;

// 	if (str.length % 2 === 1) { return false }

// 	bracketsConfig = Object.fromEntries(bracketsConfig);
// 	openBrackets = Object.keys(bracketsConfig);
// 	str = str.split('');
// 	for (bracket of str) {

// 		if (openBrackets.includes(bracket)) {
// 			bracketsAcumulator.push(bracket);
// 			continue
// 		} else if (bracketsAcumulator.length == 0) { return false }

// 		let lastBracket = bracketsAcumulator[bracketsAcumulator.length - 1];
		
// 		if (bracketsConfig[lastBracket] == bracket) {
// 			bracketsAcumulator.pop();
// 		} else { return false }
// 	}
	
// 	return bracketsAcumulator.length == 0
// }



// console.log(check('][[()]', config2));