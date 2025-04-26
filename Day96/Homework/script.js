// kata 1:

// function oddCount(n){
//     return Math.floor(n / 2);
// }

// kata 2:

// function smallEnough(a, limit){
//     for(let i = 0; i<a.length; i++) {
//       if (a[i] > limit) {
//         return false;
//       }
//     }
//     return true;
// }

// kata 3:

// function openOrSenior(data){
//     let result = [];
//     for(let i = 0; i<data.length; i++) {
//       if (data[i][0] >= 55 && data[i][1] > 7) {
//         result.push('Senior');
//       } else {
//         result.push('Open');
//       }
//     }
//     return result;
// }

// kata 4:

// function printerError(s) {
//     let sum = 0;
//     let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
//     let splitS = s.split('');
//     for (let i = 0; i < splitS.length; i++) {
//       if (!letters.includes(splitS[i])) {
//         sum++;
//       }
//     }
//     return `${sum}/${splitS.length}`;
// }

// kata 5:

// function fakeBin(x) {
//     let res = '';
  
//     for(let i = 0; i < x.length; i++) {
//       x[i] < 5 ? res += '0' : res += '1';
//     }
  
//     return res;
// }