function calculate(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(6, 2, add));
// use add, subtract or multiply