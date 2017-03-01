var uniqueRandomArray = require('unique-random-array');
var mahabharataNames = require('./mahabharata-names.json');

module.exports = {
	all: mahabharataNames,
	random: uniqueRandomArray(mahabharataNames)
};