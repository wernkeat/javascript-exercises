const removeFromArray = function(array, ...toRemove) {
    for (let i of toRemove) {
        while (array.indexOf(i) != -1) {
            array.splice(array.indexOf(i), 1)
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
