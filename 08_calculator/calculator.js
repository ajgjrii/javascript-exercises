const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(array) {
	summation = 0;

  for (number in array) {
    summation += array[number];
  }
  return summation;
};

const multiply = function(list) {
  let product = 1;

  for (let i = 0; i < list.length; i++ ){
    product *= list[i];
  }

  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let product = 1;

  if (a == 0) {
    product = 1;
  } else {
    for (let i = 1; i <= a; i++){
      product *= i;
    }
  }
  console.log(product);
  return product;
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
