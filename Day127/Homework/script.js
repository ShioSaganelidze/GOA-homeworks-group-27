// 1:

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise failed');
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    resolve('Promise 2 succeeded');
});

const promise3 = new Promise((resolve, reject) => {
    resolve('Promise 3 succeeded');
});

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

// 2:

const promise4 = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) resolve('Promise 1 succeeded');
    else reject('Promise 1 failed');
});

const promise5 = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) resolve('Promise 2 succeeded');
    else reject('Promise 2 failed');
});

const promise6 = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) resolve('Promise 3 succeeded');
    else reject('Promise 3 failed');
});

Promise.all([promise4, promise5, promise6])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

// 3:

// ver gavige

// 4:

// Create three promises
const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise failed');
    }, 2000);
});

const promise8 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 succeeded');
    }, 1000);
});

const promise9 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3 succeeded');
    }, 1500);
});

Promise.race([promise6, promise7, promise9])
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// 5:

// ver gavige