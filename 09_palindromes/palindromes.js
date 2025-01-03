const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const string = str.toLowerCase().split("").filter(letter => alphanumerical.includes(letter)).join('');
    const reversed = string.split("").reverse().join("");

    console.log(string);
    console.log(reversed);

    return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
