const fibonacci = function(num) {
    const n = parseInt(num);
    if (n < 0) {
        return "OOPS";
    } 
    else if (n === 0) {
        return 0;
    }

    let prev2 = 0;
    let prev = 1;

    for (let i = 2; i <= n; i++) {
        let current = prev + prev2;
        prev2 = prev;
        prev = current; 
    }

    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
