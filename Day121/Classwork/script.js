// task 1:

function noSpace(x){
  let res = '';
  for(let i of x) {
    if (x[i] !== ' ') {
      res += x[i]
    }
  }
  return res;
}

// task 2:

function noSpace(x){
  let res = '';
  for(let i of x) {
    if (i !== ' ') {
      res += i;
    }
  }
  return res;
}