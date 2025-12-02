function arrlength(matrix) {
    let array = [];

    for (let i = 0; i < matrix.length; i++) {
        array.push(matrix[i].length);
    }

    return array;
}

let arr = [ [1, 2, 3, 4], [1, 2], [1, 2, 3] ];

let array = arrlength(arr);
console.log(array);