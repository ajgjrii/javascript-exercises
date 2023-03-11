const leapYears = function(year) {

    // first there is a check for increment of 400 (true)
    if (year % 400 == 0) {
        return true;
    // if not divisible by 400, then the next check eliminates factors of 100
    } else {
        if (year % 100 == 0) {
            return false;
        // once factors of 100 are eliminated, final check is for divisibility by 4
        } else {
            if (year % 4 == 0) {
                return true;
            } else {
                return false;
            }
        }
 
    };
}

// Do not edit below this line
module.exports = leapYears;
