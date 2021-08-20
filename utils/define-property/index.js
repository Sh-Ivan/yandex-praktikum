'use strict';

var text = document.getElementById('text');
var input = document.getElementById('input');
if (!text || !input) {
	throw new Error('нет полей');
}
var data = {
	title: '',
};
var innerValue = data.title;
Object.defineProperty(data, 'title', {
	get: function () {
		return innerValue;
	},
	set: function (value) {
		innerValue = value;
		text.innerHTML = innerValue;
	},
});
input.addEventListener('keyup', function (e) {
	var target = e.target;
	data.title = target.value;
});
