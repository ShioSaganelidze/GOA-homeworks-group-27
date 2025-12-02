// 1:

const users = [
    {name: "Giga", age: 20, score: 50},
    {name: "Nino", age: 25, score: 80},
    {name: "Tiko", age: 22, score: 90},
    {name: "Shio", age: 14, score: 10000}
];

function topScorers(users, minScore) {
    const res = [];
    users.forEach(el => {
        if (el.score >= minScore) {
            res.push(`${el.name}, age ${el.age}, score: ${el.score}`);
        }
    });
    return res;
};

function mySort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].score < arr[j].score) {
                let original = arr[i]
                arr[i] = arr[j];
                arr[j] = original;
            }
        }
    }
    return arr;
};

const sortUser = mySort(users);
console.log(topScorers(sortUser, 70));

// 2:

const arr1 = [1, [2, [3, 4], 5], 6];
function flattenArray(arr) {
    return arr.flat(Infinity);
}

console.log(flattenArray(arr1));

// 3:

// let obj = [
//     {falsy: '19', name: 'falsy'},
//     {name: 'falsy', age: '21'},
//     {name: 'Andria', age: '30'}
// ];

// function removeFalsy(arr) {
//     arr.forEach(el => {
//         if(el.includes('falsy')) {
//             el == undefined;
//         } else if ()
//     });
// };

// ^^^^^^^^^^^^^
// not completed

// 4:

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function filterNumbers(arr) {
    const res = [];
    arr.forEach(el => {
        if(el % 2 == 0) {
            res.push(el);
        }
    })
    return res;
}

console.log(filterNumbers(arr5));

// 5:

let word1 = 'Hello world!';

function reverseWord(str) {
    return str.split(' ').reverse().join(' ');
}

console.log(reverseWord(word1));