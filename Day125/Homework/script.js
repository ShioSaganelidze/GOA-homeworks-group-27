// 1, 2:

const bool = true; // or false
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (bool === true) {
            resolve('Operation successful!');
        } else if (bool === false) {
            reject('Something went wrong!');
        }
    }, 2000)
});

promise
    .then(successMsg => {
        console.log('Success:', successMsg);
    })
    
    .catch(failMsg => {
        console.log('Failed:', failMsg);
    });

// 3:

const bool1 = true;
const promise1 = new Promise((resolve, reject) => {
    resolve('Step 1 done \n')
});

promise1
    .then(res => {
        return res + 'Step 2 done \n';
    })

    .then(res => {
        return res + 'Step 3 done \n';
    })

    .then(res => {
        console.log(res);
    })

// 4:

// ver mivxvdi

// 5:

// ver mivxvdi