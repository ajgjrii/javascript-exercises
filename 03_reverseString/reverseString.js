const reverseString = function(text) {
    let counter = text.length-1;
    let reverse = '';

    while (counter>-1) {
        reverse = reverse + text.slice(counter,counter+1);
        --counter;
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
