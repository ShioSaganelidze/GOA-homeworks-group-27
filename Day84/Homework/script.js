// kata 1:

// function findMultiples(integer, limit) {
//     let arr = [];
//     let n = 1;
    
//     while (integer * n <= limit) {
//         arr.push(integer * n);
//         n++;
//     }
//     return arr
// }

// kata 2:

// function countPositivesSumNegatives(input) {
//     if (!Array.isArray(input) || input.length === 0) {
//       return [];
//     }
//     let count = 0;
//     let sum = 0;
//     for (let i = 0; i < input.length; i++) {
//       if (input[i] < 0) {
//         sum += input[i];
//       } else if (input[i] > 0) {
//         count++;
//       }
//     }
//     return [count, sum];
// }

// kata 3:

// function startingMark(bodyHeight) {
//     let x = (10.67 - 9.45) / (1.83 - 1.52);
//     let defMark = 9.45 - x * 1.52;
//     return Math.round((x * bodyHeight + defMark) * 100) / 100;
// }

// kata 4:

// function sameCase(a, b) {
//     if (!((a >= 'a' && a <= 'z') || (a >= 'A' && a <= 'Z')) || 
//         !((b >= 'a' && b <= 'z') || (b >= 'A' && b <= 'Z'))) {
//       return -1;
//     }
//     else if ((a >= 'A' && a <= 'Z' && b >= 'A' && b <= 'Z') || 
//         (a >= 'a' && a <= 'z' && b >= 'a' && b <= 'z')) {
//       return 1;
//     } else {
//       return 0
//     }
// }

// 5 aris python.py file-shi