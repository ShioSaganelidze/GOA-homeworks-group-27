// N1:

// let divContainers = document.getElementsByClassName('container');

// for (let i = 0; i < 10; i++) { 
//     let rVal = Math.round(Math.random() * 255);
//     let gVal = Math.round(Math.random() * 255);
//     let bVal = Math.round(Math.random() * 255);

//     let newDiv = document.createElement('div');
//     newDiv.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
//     newDiv.style.width = '100px';
//     newDiv.style.height = '100px';
//     newDiv.style.margin = '5px';

//     for (let j = 0; j < divContainers.length; j++) {
//         let container = divContainers[j];
//         if (i % 2 === 0) {
//             container.prepend(newDiv);
//         } else {
//             container.appendChild(newDiv);
//         }
//     }
// }

// 2:

// let divContainers = document.getElementsByClassName('container');
// let btn = document.createElement('button');
// btn.textContent = 'Press this button';
// document.body.appendChild(btn);

// btn.addEventListener('click', () => {
//     for (let i = 0; i < divContainers.length; i++) {
//         let inp = prompt('');
        
//         let newDiv = document.createElement('div');
//         newDiv.textContent = inp;

            
//         divContainers[i].prepend(newDiv);
//     }
// });

// N3:

// let divContainers = document.getElementsByClassName('container');
// let inp = Number(prompt());

// for (let i = 0; i < divContainers.length; i++) {
//     let newDiv = document.createElement('div');
    
//     if (inp < 20) {
//         newDiv.textContent = inp;
//         divContainers[i].prepend(newDiv);
//     } else {
//         newDiv.textContent = inp;
//         divContainers[i].append(newDiv);
//     }
// }

// N4:

// let inp = prompt();
// let divContainers = document.getElementsByClassName('container');
// let newDiv = document.createElement('div');
// newDiv.style.width = '100px';
// newDiv.style.height = '100px';
// newDiv.style.margin = '5px';

// if (inp.endsWith('1')) {
//     newDiv.style.backgroundColor = 'rgb(255, 0, 0)';
// } else if (inp.endsWith('2')) {
//     newDiv.style.backgroundColor = 'rgb(0, 255, 0)';
// } else if (inp.endsWith('3')) {
//     newDiv.style.backgroundColor = 'rgb(0, 0, 255)';
// }

// for (let i = 0; i < divContainers.length; i++) {
//     divContainers[i].append(newDiv);
// }

// N5:

// let divContainers = document.getElementsByClassName('container');
// let inp = Number(prompt());

// for (let i = 0; i < divContainers.length; i++) {
//     let newDiv = document.createElement('div');
//     newDiv.style.width = '100px';
//     newDiv.style.height = '100px';
//     newDiv.style.margin = '5px';

//     if (inp % 2 === 0) {
//         newDiv.style.backgroundColor = 'rgb(0, 0, 255)';
//         newDiv.style.borderRadius = '50%';
//         divContainers[i].append(newDiv);
//     } else {
//         newDiv.style.backgroundColor = 'rgb(255, 0, 0)';
//         divContainers[i].prepend(newDiv);
//     }
// }