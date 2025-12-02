function func(elem){
    let arr = []
    for(let i = 0; i < elem.length; i++) {
        let bool = true
        for(let j = 0; j < elem.length; j++) {
            if(elem[i] === elem[j] && i !== j) {
                bool = false
                break
            }
        }
        if(bool) {
            arr.push(elem[i])
        }
    }
    return arr
}

let elem1 = [1,1,2,3,4,3]
console.log(func(elem1))