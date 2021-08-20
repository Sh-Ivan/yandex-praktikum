let d = {};

[ 'zebra', 'horse' ].forEach(function(k) {
	d[k] = undefined;
});

function add(x) {
  return y => x + y;
}

const addFive = add(5);
console.log(addFive(3));

console.log(d.hasOwnProperty('zebra1'));

var length = 10;
function fn() {
	console.log(this.length);
}

fn()