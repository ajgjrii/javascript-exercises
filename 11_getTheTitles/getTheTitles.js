const getTheTitles = function(list) {
    let titles = []; 
    let books = list

    books.map((value) => {
        for (let property in value) {
            if (property == 'title') {
                titles.push(value[property])
            }
        }
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
