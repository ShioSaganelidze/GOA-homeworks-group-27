// task 1:

let people = new Map([
    ['Ana', 25],
    ['Giorgi', 30],
    ['Nino', 22]
]);

people.set('Lasha', 28);
people.delete('Giorgi');

console.log([...people]);

// task 2:

let books = new Map();
books.set('ვეფხისტყაოსანი', 'შოთა რუსთაველი');
books.set('შერლოკ ჰოლმსი', 'არტურ კონან დოილი');

for (let i of books) {
    console.log(i[0] + ' - ' + i[1]);
}

// task 3:

class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
}

// ვერ მივხვდი ამ ნაწილს

// task 4:

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

let map = new Map([
    ['Butter', 6],
    ['Vegetable Oil', 5],
    ['Chips', 3]
])

// task 5:

let words = 'apple banana apple pineapple pineapple'.split(' ');
let res = new Map();

for (let i of words) {
    if (res.has(i)) {
        res.set(i, res.get(i) + 1);
    } else {
        res.set(i, 1);
    }
}

console.log(res);