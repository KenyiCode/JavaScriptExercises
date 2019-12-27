function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum;
}

function multiply (arr) {
	let sum = 1;
	for (let i = 0; i < arr.length; i++){
		sum *= arr[i];
	}
	return sum;
}

function power(val, pow) {
	return Math.pow(val, pow);
}

function factorial(val) {
	if (val == 0)	return 1;
	let total = val;
	for (let i = 1; i < val; i ++){
		total *= i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}