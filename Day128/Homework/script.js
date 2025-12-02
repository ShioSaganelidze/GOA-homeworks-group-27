// 1:

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// 2:

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    const names = users.map((user, i) => `${i + 1}. ${user.name}`)
    console.log(names);
  })
  .catch(err => console.log(err));


// 3:

fetch('https://jsonplaceholder.typicode.com/users/5')
  .then(res => res.json())
  .then(users => {
    const email = users.email;
    console.log(email)
  })
  .catch(err => console.log(err));

// 4:

const p1 = document.querySelector('p');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    p1.textContent = JSON.stringify(users);
  })
  .catch(err => console.error(err));

// 5:

let img = document.querySelector('img');
let btn = document.querySelector('button');

btn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
      img.src = data.message;
    })
    .catch(err => console.error(err));
});