const reverseString = function(word) {
    let newstring = '';
    for (let i = word.length - 1; i >= 0; i--) {
        newstring += word.charAt(i);
    }

    return newstring;
};

// Do not edit below this line
module.exports = reverseString;
