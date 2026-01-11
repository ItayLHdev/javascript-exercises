const palindromes = function (str) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const newString = str
        .toLowerCase()
        .split('')
        .filter((char) => characters.includes(char))
        .join('')
    const reversedPalindrome = newString.split('').reverse().join('')
    return newString === reversedPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
