// kata 1:

// function solve(a,b){
//   let res = '';
//   for(let i = 0; i<a.length; i++) {
//     if (!b.includes(a[i])) {
//       res += a[i];
//     };
//   };
//   for (let j = 0; j<b.length; j++) {
//     if (!a.includes(b[j])) {
//       res += b[j];
//     };
//   };
//   return res;
// };

// kata 2:

// ver gavakete

// kata 3:

// function solve(a,b){
//   let res = '';
//   for(let i = 0; i<a.length; i++) {
//     if (!b.includes(a[i])) {
//       res += a[i];
//     };
//   };
//   for (let j = 0; j<b.length; j++) {
//     if (!a.includes(b[j])) {
//       res += b[j];
//     };
//   };
//   return res;
// };

// kata 4:

function height(n) {
  let x = 2000000;
  let c = 0;
  for (let i = 0; i < n; i++) {
    x /= 2.5;
    c += x;
  }
  c += 2000000;
  return (Math.round(c * 1000) / 1000).toFixed(3);
}

// kata 5:

// ver gavige piroba: https://www.codewars.com/kata/565b9d6f8139573819000056/train/python