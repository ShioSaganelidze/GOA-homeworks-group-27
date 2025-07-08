// task 1:

function users(users1) {
    let res = new Map();
    for(let i of users1) {
        res.set(i.name, i.age)
    }
    return [...res];
}

let test = [
    { name: 'Shio', age: 99 },
    { name: 'Gio', age: 200 },
    { name: 'Andria', age: 900 }
];

console.log(users(test));

// task 2:

function unique(arr) {
    let set = new Set();
    for (let i of arr) {
        set.add(i);
    }
    return [...set];
}

let arr = [1, 2, 3, 4, 6, 3, 6, 9, 7, 8, 1];
console.log(unique(arr));

// task 3:

// ver gavige piroba:
// დაწერე ფუნქცია, რომელიც იღებს წინადადებების მასივს და აბრუნებს Map-ს, სადაც key არის სიტყვა და value — რამდენჯერ მეორდება ის მასივში.

// task 4:

// ver gavige piroba gakvetilis shemdeg gavaketeb:
// შექმენი ფუნქცია, რომელიც იღებს ობიექტების მასივს (სადაც თითოეულ ობიექტს აქვს id) და აბრუნებს Set-ს უნიკალური id-ებით.

// task 5:

function words(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let result = new Set();

    for (let i of set1) {
        if (set2.has(i)) {
        result.add(i);
        }
    }

    return [...result];
}

let a = ["დედა", "მამა", "ბავშვი", "სახლი"];
let b = ["სახლი", "ბაღი", "დედა", "ავტო"];
console.log(words(a, b));