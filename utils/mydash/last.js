function last(list) {
	if (Array.isArray(list)) {
		return list[list.length - 1];
	}
}

module.exports = last;
