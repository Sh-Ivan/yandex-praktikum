function isEmpty(value) {
	if (typeof value === 'number' || typeof value === 'boolean') return true;
	if (Array.isArray(value) && value.length === 0) return true;
	if (value instanceof Map || value instanceof Set) return !value.size;
	if (typeof value === 'object' && value !== null && Object.keys(value).length === 0) return true;
	return !value;
}

module.exports = isEmpty;
