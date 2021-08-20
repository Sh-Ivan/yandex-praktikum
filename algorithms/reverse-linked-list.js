/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * function ListNode(val, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function reverse(head) {
	let tail = head;
	if (!head.next) {
		return head;
	}
	let length = 1;
	while (tail.next !== null) {
		tail = tail.next;
		length++;
	}
	for (let i = 0; i < length - 1; i++) {
		let next = { value: head.value, next: tail.next };
		tail.next = next;
		head = head.next;
	}
	return head;
}

function reverse2(head) {
	let current = head;
	if (!current) {
		return current;
	}
	let curPre = head.next;
	current.next = null;
	while (curPre) {
		let tmp = curPre.next;
		console.log(tmp);
		curPre.next = current;
		console.log(current);
		current = curPre;
		curPre = tmp;
	}
	return current;
}

let list = {
	value: 0,
	next: {
		value: 1,
		next: {
			value: 2,
			next: {
				value: 3,
				next: { value: 4, next: null },
			},
		},
	},
};

console.log(list);
//const result = reverse(list);
//console.log(result.next.next);
console.log(reverse2(list));
