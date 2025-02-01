function car(brand, model, year, engineVolume) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engineVolume = engineVolume;
    this.description = function() {
        (`This car's brand is ${brand}, it is a ${model}, it is released in the year ${year} and its engine volume is ${engineVolume}.`);
    };
};

function book(title, author, pages, year) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.time = function() {
        (`You will finish this book in ${pages/7}`);
    };
};

function sportsman(name, age, sport, trainingHours) {
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.trainingHours = trainingHours;
    this.training = function() {
        (`To get 20% better result you need to train for ${trainingHours*1.2}`);
    };
};