let p1 = document.querySelector('p');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(cont => p1.textContent = JSON.stringify(cont))
    .catch(err => console.log(err));