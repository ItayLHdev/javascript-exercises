const fibonacci = function(n) {
    let num;
    if (typeof n !== "number") {
        num = Number(n)
    } else {
        num = n
    }
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1) return 1;

    let prePreviousItem = 0;
    let previousItem = 1;
    let current;

    for (let i = 2; i <= num; i++) {
        current = prePreviousItem + previousItem;
        [prePreviousItem, previousItem] = [previousItem, current]
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
