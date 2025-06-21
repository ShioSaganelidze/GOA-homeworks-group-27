// task 1:

class Product {
    constructor(price) {
        this._price = 0;
        this.price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (value < 0) {
            console.log("ფასი ვერ იქნება უარყოფითი.");
        }
        this._price = value;
    }
}

const item = new Product(150);
console.log(item.price);

// task 2:

class Rectangle {
    constructor(width = 0, height = 0) {
        this._width = width;
        this._height = height;
    }

    get area() {
        return this._width * this._height;
    }

    set dimensions({ width, height }) {
        if (typeof width !== 'number' || typeof height !== 'number') {
            throw new Error("Both width and height must be numbers.");
        }
        this._width = width;
        this._height = height;
    }
}

const rect = new Rectangle();
rect.dimensions = { width: 5, height: 10 };
console.log(rect.area);

// task 3:

class User {
    constructor(firstName = '', lastName = '') {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }

    set fullName(name) {
        const parts = name.split(' ');
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}

const user = new User();
user.fullName = 'Shio Saganelidze';
console.log(user.fullName);

// task 4:

class MathHelper {
    constructor(a = 0, b = 0) {
        this._a = a;
        this._b = b;
    }
    add() {
        return this._a + this._b;
    }

    set check({num1, num2}) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Can only take numbers as an argument.');
        }
        this._a = num1;
        this._b = num2;
    }
}

const num = new MathHelper(12, 4);
console.log(num.add());

num.check = { num1: 5, num2: 7 };
console.log(num.add());

// task 5:

class Account {
    #balance = 0;
    constructor(init = 0) {
        this.#balance = init;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value) {
        if (typeof value !== 'number' || value < 0) {
            throw new Error('Balance must be a non-negative number.');
        }
        this.#balance = value;
    }
}