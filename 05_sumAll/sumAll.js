const sumAll = function(start, end) {
    let first = start;
    let last = end;
    let sumList = [];
    let sum = 0;
    
    // initial check for number types and negatives for function parameters
    // if negatives or non-number types are found, the function will return "ERROR"
    if (typeof first != "number" || typeof last != "number" || first < 0 || last < 0){
        return "ERROR";
        // If all conditions are met, summation is done below
    } else {
        // Array for summation created here. IF loops determine which of the
        // WHILE loops to use, based on which function parameter is larger
        if (first < last){
            while (first <= last) {
                sumList.push(Number(first));
                ++first;
            }
        } else {
            while (first >= last) {
                sumList.push(Number(last));
                ++last;
            }
        }

        for (let i = 0; i < sumList.length; ++i) {
            sum += sumList[i];
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
