function makeObj(keys, values) {
    let obj = {};

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }

    return obj;
}

let keys = ['name', 'age', 'city'];
let values = ['Alice', 25, 'Tbilisi'];

let result = makeObj(keys, values);
console.log(result);
