const { use } = require('chai');

console.log(
	intersection(
		[
			[8, 12],
			[17, 22],
		],
		[
			[5, 11],
			[14, 18],
			[20, 23],
		]
	)
); // [[8, 11], [17, 18], [20, 22]]

console.log(
	intersection(
		[
			[9, 15],
			[18, 21],
		],
		[
			[10, 14],
			[21, 22],
		]
	)
); // [[10, 14]]

function intersection(user1, user2) {
	let i = 0;
	let j = 0;
	const intersect = [];
	while (i < user1.length && j < user2.length) {
		const begin = Math.max(user1[i][0], user2[j][0]);
		const end = Math.min(user1[i][1], user2[j][1]);
		if (begin < end) {
			intersect.push([begin, end]);
		}

		user1[i][1] < user2[j][1] ? i++ : j++;
	}
	return intersect;
}
