const convertToCelsius = function(temperature) {
  let FtoC = (5/9)*(temperature-32);

  return Number(FtoC.toFixed(1));
};

const convertToFahrenheit = function(temperature) {
  let CtoF = 1.8*temperature + 32

  return Number(CtoF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

