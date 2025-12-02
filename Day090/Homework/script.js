// kata 1:

// function openOrSenior(data){
//     let result = [];
//     for(let i = 0; i<data.length; i++) {
//       if (data[i][0] >= 55 && data[i][1] > 7) {
//         result.push('Senior')
//       } else {
//         result.push('Open')
//       }
//     }
//     return result
// }

// kata 2:

// function battle(x, y) {
//     let letters = {
//     A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10,
//     K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19,
//     T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
//     }
    
//     let group1Sum = 0
//     let group2Sum = 0
//     for(let i = 0; i<x.length; i++) {
//       group1Sum += letters[x[i]]
//     }
    
//     for(let i = 0; i<y.length; i++) {
//       group2Sum += letters[y[i]]
//     }
    
//     return group1Sum - group2Sum < 0 ? y : group1Sum - group2Sum > 0 ? x : 'Tie!';
// }

// kata 3:

// function calculator(a,b,sign){
//     if (sign == '+') {
//         return a + b
//     }
      
//     else if (sign === '-') {
//         return a - b
//     }
      
//     else if (sign === '*') {
//         return a * b
//     }
      
//     else if (sign === '/') {
//         return a / b
//     }
    
//     else {
//       return 'unknown value'
//     }
// }