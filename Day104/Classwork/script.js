// kata 1:

// function solve(a,b){
//   let res = '';
//   for(let i = 0; i<a.length; i++) {
//     if (!b.includes(a[i])) {
//       res += a[i];
//     };
//   };
//   for (let j = 0; j<b.length; j++) {
//     if (!a.includes(b[j])) {
//       res += b[j];
//     };
//   };
//   return res;
// };

// kata 2:

function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

// kata 3:

// ver gavige piroba: https://www.codewars.com/kata/56d55dcdc87df58c81000605/train/javascript