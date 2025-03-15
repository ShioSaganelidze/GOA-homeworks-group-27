let sum = 0;
let numbers = [65, 44, 12, 4];
numbers.forEach(sumF);

function sumF(item) {
    sum += item;
}

document.getElementById('output').innerHTML = sum;