// Homework 1:

// document.querySelector('button').addEventListener('click', () => {
//     let element = document.createElement('p');
//     element.textContent = 'Hello world!'
//     document.body.append(element)
// });

// Homework 2:

let anima = document.querySelector('#ani1');
anima.addEventListener('click', () => {
    anima.style.transition = '2s';
    anima.style.borderRadius = '100%';

    anima.addEventListener('click', () => {
        anima.style.transition = '2s';
        anima.style.borderRadius = '0%';
    });
});