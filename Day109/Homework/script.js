// task 1:

let people = {
    Gio: { age: 25, lastname: 'Doe', height: 180 },
    Irakli: { age: 30, lastname: 'Smith', height: 170 },
    Nino: { age: 22, lastname: 'Brown', height: 175 }
};

// task 2:

// way 1:
let obj = {
  greet() {
    console.log("Hello!");
  }
};

// way 2:
let obj1 = {
  greet: function() {
    console.log("Hello!");
  }
};

// task 3:

// this დამოკიდებულია იმაზე, რასაც უთითებს: მაგალითად, მარტო this მიუთითებს მთლიან ობიექტზე, this.age კი მიუთითებს მხოლოდ age-ზე და ასე შემდეგ.