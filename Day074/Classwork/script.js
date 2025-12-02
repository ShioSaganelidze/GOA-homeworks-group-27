// function human(name, age, height, id) {
//     this.name = name;
//     this.age = age;
//     this.height = height;
//     this.id = id;

//     let human1 = new human('gio', '25', '170', 1);
//     let human2 = new human('mari', '28', '150', 2);
//     let human3 = new human('akaki', '20', '165', 3);

//     console.log(human1);
//     console.log(human2);
//     console.log(human3);
// };

function Owner(name, age) {
      this.name = name,
      this.age = age
}

function Car(name, year, engine, horsepower, color, owner) {
        this.name = name,
        this.year = year,
        this.engine = engine,
        this.horsepower = horsepower,
        this.color = color,
        this.owner = owner
}

let owner1 = new Owner("nika", 30);
let owner2 = new Owner("gia", 21);
let owner3 = new Owner("dato", 20);

let car1 = new Car("Toyota Camry", 2020, "V6", 301, "შავი", owner1);
let car2 = new Car("Toyota Camry", 2020, "V6", 301, "შავი", owner2);
let car3 = new Car("Toyota Camry", 2020, "V6", 301, "შავი", owner3);

console.log(car1);
console.log(car2);
console.log(car3);