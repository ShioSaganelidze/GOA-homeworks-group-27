// Task 1:

// function getTo2dArray(row, column){
//     let res = []
//     let currentNum = 1
//     for(let i = 0; i < row; i++){
//         let row1 = []
//         for(let j = 0; j < column; j++){
//             row1.push(currentNum)
//             currentNum++
//         }
//         res.push(row1)
//     }

//     return res
// }

// console.log(getTo2dArray(3,5))

// Task 2:

// function processMatrix(matrix) {
//     let n = matrix.length;

//     console.log("Rows:");
//     matrix.forEach(row => console.log(row));

//     console.log("Columns:");
//     for(let col = 0; col < n; col++) {
//         let column = [];
//         for(let row = 0; row < n; row++) {
//             column.push(matrix[row][col]);
//         }
//         console.log(column)
//     }

//     console.log("Diagonals:");
//     let mainDiagonal = [];
//     let secondaryDiagonal = [];
//     for(let i = 0; i < n; i++) {
//         mainDiagonal.push(matrix[i][i]);
//         secondaryDiagonal.push(matrix[i][n - i - 1]);
//     }
//     console.log("Main Diagonal:", mainDiagonal);
//     console.log("Secondary Diagonal:", secondaryDiagonal);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]