const palindromes = function (text) {
    let newText = text.replace(/\W/g, '');
    let lower = newText.toLowerCase();

    let reverse = '';

    for (let i=lower.length; i>0; i--) {
        reverse += lower[i-1];
    }

    if (lower === reverse) {
        return true;
    } else {
        return false;
    }

    
};

// Do not edit below this line
module.exports = palindromes;
