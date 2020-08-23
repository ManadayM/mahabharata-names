const uniqueRandomArray = require('unique-random-array');
const mahabharataNames = require('./mahabharata-names.json');

module.exports = {
	all: mahabharataNames,
	random: uniqueRandomArray(mahabharataNames)
};
