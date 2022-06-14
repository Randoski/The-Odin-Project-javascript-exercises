const add = function(...numbers) {
	return numbers.reduce((acc, number) => acc + number, 0);
};

const subtract = function(...numbers) {
  return numbers.reduce((acc, number) => acc - number, 0);
};

const sum = function(array) {
	return array.reduce((acc, number) => acc + number, 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((acc, number) => acc * number, 1);
};

const power = function(...numbers) {
	return Maths.pow(numbers[0], numbers[1]);
};

const factorial = function(number) {
	return number === 0 ? 1 : number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
