document.getElementById('p1').textContent = 'Hello, Kocho!';
document.querySelector('button').style.color = 'blue';

const btn = document.getElementById('btn1');
const inp = document.querySelector('input');
const p1 = document.getElementById('p2');

btn.addEventListener('click', () => {
    p1.textContent = inp.value;
});