function func() {
    let nameArr = ['Nodo', 'Gio', 'Shio', 'Nika', 'Petre', 'Luka', 'Davit', 'Tekla', 'Kaxi'];
    let numHumans = Math.floor(Math.random() * (18)) + 3;
    let humans = [];

    for (let i = 0; i < numHumans; i++) {
        humans.push({
            Age: Math.floor(Math.random() * 101),
            Height: Math.floor(Math.random() * 161) + 40,
            Name: nameArr[Math.floor(Math.random() * nameArr.length)]
        });
    }
    return humans;
}

console.log(func());