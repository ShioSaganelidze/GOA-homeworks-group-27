// task 1:

// const img = document.querySelector('img');

// let imgArr = ["./1.jpg", "./2.jpg", "./3.jpg"];

// let index = 0

// function nextSlide() {
//     index = (index + 1) % imgArr.length;
//     img.src = imgArr[index];
// }
// function prevSlide() {
//     index = (index - 1 + imgArr.length) % 1;
//     console.log(index - 1 + imgArr.length);
//     img.src = imgArr[index]
// }

// task 1 & 2:
const img = document.querySelector('img');

let imgArr = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];
let index = 0;

function nextSlide() {
    if (index < imgArr.length - 1) {
        index++;
    } else {
        index = 0;
    }
    img.src = imgArr[index];
}

function prevSlide() {
    if (index > 0) {
        index--;
    } else {
        index = imgArr.length - 1;
    }
    img.src = imgArr[index];
}