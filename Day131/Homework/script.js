// 1: localStorage გამოიყენება რომ data ლოკალურათ შევინახოთ თავიანთ კომპიუტერზე.
// 2: .setItem(key, value); .getItem(key); .removeItem(key); .clear(); .key(index).
// 3: .setItem(key, value) ამატებს key-ს და value-ს storage-ში; .getItem() იღებს key-ს; .removeItem(key) აშორებს key-ს; .clear() ასუფთავებს localStorage-ს; .key(index) უბრუნებს key-ს მითითებულ ინდექსზე.
// 4: .setItem(key, value)-ით.
// 5: .getItem(key)-ით.
// 6: Console გახსენი და დაწერე console.log(localStorage).
// 7: getItem(key)-ით

// 8:

localStorage.setItem(name, 'bob');
const res = localStorage.getItem(name);
console.log(res);

// 9:

const btn = document.querySelector('button');
const inp = document.getElementById('inp1');

btn.addEventListener('click', () => {
    localStorage.setItem('inputRes', inp.value);
});

// 10:

const arr = [1, 2, 3, 4, 5];
localStorage.setItem('numbers', JSON.stringify(arr));
const res1 = JSON.parse(localStorage.getItem('numbers'));
console.log(res1);