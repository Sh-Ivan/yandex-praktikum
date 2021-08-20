// fizzBuzz(6) => [0, 1, 2, fizz, 4, buzz, fizz]

const fizzBuzz = (num) => {
	const arr = [];
	for (let i = 0; i <= num; i++) {
		let str = '';
		if ((i % 3 !== 0 && i % 5 !== 0) || i === 0) {
			arr.push(i);
			continue;
		} else if (i % 3 === 0) {
			str = str + 'fizz';
		}
		if (i % 5 === 0) {
			str = str + 'buzz';
		}
		arr.push(str);
	}

	return arr;
};

console.log(fizzBuzz(6));

/*
const fizzBuzz = num => 
  [...Array(num + 1).keys()]
    .reduce((result, _, i) => {
      if (i === 0) return result.concat(0);
      if (i % 3 === 0 && i % 5 === 0) return result.concat('fizzbuzz');
      if (i % 3 === 0) return result.concat('fizz');
      if (i % 5 === 0) return result.concat('buzz');
      return result.concat(i);
    }, []);
*/
