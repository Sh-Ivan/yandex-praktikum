// palindrome('racecar') === true
// palindrome('table') === false

const palindrome = (str) => {
	const strArr = str.toLowerCase().split('');
	let result = true;
	for (let i = 0; i < strArr.length / 2; i++) {
		if (strArr[i] !== strArr[strArr.length - i - 1]) {
			result = false;
		}
	}
	return result;
	/*
  str = str.toLowerCase();
  return str === str.split('').reverse().join('')
  */
};

console.log(palindrome('racecar'));
console.log(palindrome('table'));
console.log(palindrome('abccba'));
