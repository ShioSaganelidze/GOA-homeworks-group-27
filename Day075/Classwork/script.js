// function bank(owner, cash) {
//     this.owner = owner;
//     this.cash = cash;
// }

// function deposit(num) {
//     this.cash += num;
//     console.log(`${num} GEL was deposited, ${owner} has ${cash} GEL`);
// }

// function withdraw(num) {
//     if(num > this.num) {
//         console.log('Insufficient funds, please deposit more money.');
//     }

//     else {
//         this.cash -= num;
//         console.log(`${num} was withdrawn from your account, ${owner} has ${cash} GEL.`);
//     }
// }

function animal(age, color, type) {
    this.age = age;
    this.color = color;
    this.type = type;
    this.description = function() {
        console.log(`It is ${age} years old, it is ${color} and it is a ${type}`)
    }
}

let animal1 = new animal(13, 'brown', 'lion')