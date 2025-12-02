let cDiv = document.querySelector('.container');
document.querySelector('#Cbtn').addEventListener('click', () => {
    let age = document.querySelector('#page').value;
    if (age < 18) {
        cDiv.style.backgroundColor = 'red';
    } else if (age >= 18) {
        cDiv.style.backgroundColor = 'green';
    };    
});



let cDiv1 = document.querySelector('.container1');
document.querySelector('#Cbtn1').addEventListener('click', () => {
    let color = document.querySelector('#page1').value;
    cDiv1.style.backgroundColor = color;
});



document.querySelector('#theme').addEventListener('click', () => {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor == 'black' ? 'white' : 'black';
});



let res = document.querySelector('#result');
document.querySelector('#add').addEventListener('click', () => {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    res.textContent = `Result: ${num1 + num2}`;
});

document.querySelector('#subtract').addEventListener('click', () => {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    res.textContent = `Result: ${num1 - num2}`;
});

document.querySelector('#multiply').addEventListener('click', () => {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    res.textContent = `Result: ${num1 * num2}`;
});

document.querySelector('#divide').addEventListener('click', () => {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    res.textContent = `Result: ${num1 / num2}`;
});