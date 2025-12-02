// 1:

const arr1 = [2, 43, 5, 2];
localStorage.setItem('array', JSON.stringify(arr1));
const res1 = JSON.parse(localStorage.getItem('array'));

// 2:

let btn = document.querySelector('button');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');

btn.addEventListener('click', () => {
    localStorage.setItem('input1', inp1.value);
    localStorage.setItem('input2', inp2.value);
    localStorage.setItem('input3', inp3.value);
});

console.log(localStorage);