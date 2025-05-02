function car(brand, model, year, engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;
    this.description = function() {
        (`This car's brand is ${this.brand}, it is a ${this.model}, it is released in the year ${this.year} and its engine volume is ${this.engineVolume}.`);
    };
};

function book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.time = function() {
        (`You will finish this book in ${this.pages/7}`);
    };
};

function sportsman(name, age, sport, trainingHours) {
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.trainingHours = trainingHours;
    this.training = function() {
        (`To get 20% better result you need to train for ${this.trainingHours*1.2}`);
    };
};