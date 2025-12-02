// 1:

// const plus = document.getElementById('btn1');
// const minus = document.getElementById('btn2');
// const num = document.querySelector('p');

// function plusNminus() {
//     plus.addEventListener('click', () => {
//         num.textContent = Number(num.textContent) + 1;
//     });

//     minus.addEventListener('click', () => {
//         num.textContent = Number(num.textContent) - 1;
//     });

//     return num;
// }

// plusNminus();

// 2:

// const inp = document.querySelector('input');
// const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     let result;
//     if (inp.value.toLowerCase() === 'hello') {
//         result = 'Welcome!';
//     } else {
//         result = 'Try again!';
//     }

//     alert(result);
// });

// 3:

const img1 = document.querySelector('img');
const btn = document.querySelector('button');
btn.style.position = 'absolute';
btn.style.top = '210px'
btn.style.left = '8px'

btn.addEventListener('click', () => {
    if (img1.style.display === 'none') {
        img1.style.display = 'block';
    } else {
        img1.style.display = 'none';
    }
});