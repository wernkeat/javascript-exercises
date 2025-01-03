const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a * b, 1) : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num > 1) {
    for (let i = num - 1; i > 1; i--) {
      num *= i;
    }

    return num;
  }

  return 1;
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
