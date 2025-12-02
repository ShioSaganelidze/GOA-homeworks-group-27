// human = {
//     Age: 15,
//     Name: "Lex",
//     height: 170,
//     looks: "9/10",
//     fame: 0
// }

// console.log(human.Name)

// obj = {
//     rigi_0: [2, 4, 6, 8, 10],
//     rigi_1: [1, 3, 5, 7, 9]
// }

// for (let i = 0; i < obj.rigi_0.length && i < obj.rigi_1.length; i++) {
//     console.log(obj.rigi_0[i], obj.rigi_1[i]);
// }

function arr(obj) {
    let quantity = obj.quantity
    let element = obj.element
    
    let res = []
    for (let i = 0; i < quantity; i++) {
        res.push(element)
    }
    
    return res
}

let inp = {
    quantity: 5,
    element: "apple"
}

console.log(arr(inp))