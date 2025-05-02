let div = document.createElement('div');
let width = 100;

div.style.width = `${width}px`;
div.style.height = `${width}px`;
div.style.background = 'yellow';

let superDiv = div;

for (let i = 0; i <= 10; i++) {
    width *= 2;
    div.style.width = `${width}px`;
    div.style.height = `${width}px`;
}

document.body.append(superDiv);