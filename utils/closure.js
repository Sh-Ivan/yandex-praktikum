'use strict';

const badResult = () => {
	for (var i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
};

const iifeSolution = () => {
	for (var i = 0; i < 10; i++) {
		(function (y) {
			return setTimeout(function () {
				console.log(y);
			}, 10);
		})(i);
	}
};

function es6Solution() {
	for (let i = 0; i < 10; i++) {
		setTimeout(function () {
			console.log(i);
		}, 10);
	}
}

const bindSolution = function () {
	for (var i = 0; i < 10; i++) {
		setTimeout(
			function (i) {
				console.log(i);
			}.bind(null, i),
			10
		);
	}
};

bindSolution();
