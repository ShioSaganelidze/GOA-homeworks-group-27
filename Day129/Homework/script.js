// 1: JSON გამოიყენება სტრუქტურისთვის
// 2: Object-ის ფორმატით

// 3:

const p1 = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(res => res.json())
        .then(content => p1.textContent = JSON.stringify(content))
        .catch(err => console.log(err));
});

// 4:

const img1 = document.querySelector('img');
const btn1 = document.getElementById('btn2');

btn1.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(cont => img1.src = cont.message)
        .catch(err => console.log(err));
});