let sum = 0;
let numbers = [90, 44, 12, 1000];
numbers.forEach(sumF);

function sumF(item) {
    sum += item;
}

document.getElementById('output').innerHTML = sum;