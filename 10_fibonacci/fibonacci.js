const fibonacci = function(term) { 
    let previous = 1;
    let secondPrevious = 1;
    
    if (Number(term) <= 0) {
        return "OOPS";
    } else if (Number(term) === 1) {
        return 1;
    } else if (Number(term) === 2) {
        return 1;
    } else {
        for (let i = 3; i <= Number(term); i++ ){
            sum = previous + secondPrevious;
            secondPrevious = previous;
            previous = sum;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
