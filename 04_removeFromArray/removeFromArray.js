const removeFromArray = function(array, ...args) {
    let newArray = array;


    for (removal in args) {
        for (item in newArray) {
            if (args[removal]==newArray[item] && typeof args[removal]== typeof newArray[item]) {
                newArray.splice(item,1);
            }
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
