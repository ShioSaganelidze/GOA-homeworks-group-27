// hw 1:

let childBtn = document.querySelectorAll('.children');
let ind = prompt('Enter a number to make a btn red');
childBtn[ind - 1].style.backgroundColor = 'red';

let divs = document.querySelectorAll('div');
let index = prompt('Enter a number to check if a div has children');

// hw 2:

let selectedDiv = divs[index - 1];

if (selectedDiv.hasChildNodes()) {
    alert('This Div has child');
} else {
    alert('This Div is empty');
}

// hw 3:

let container = document.querySelector('.container');
let children = container.children;

for (let i = 0; i < children.length; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    children[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// hw 4:

document.getElementById('colorBtn').addEventListener('click', () => {
    document.querySelectorAll('.wrapper').forEach(wrapper => {
        wrapper.children[0].style.color = 'red';
    });
});