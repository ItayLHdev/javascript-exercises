const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear();
    const newArr = arr.map((item) => {
        if (!("yearOfDeath" in item)) {
            item.yearOfDeath = currentYear;
        }
        return item;
    })
    
    newArr.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))
    return newArr[0]
};

// Do not edit below this line
module.exports = findTheOldest;
