// 1:

function noSpace(x){
  let res = '';
  for(let i of x) {
    if (i !== ' ') {
      res += i;
    }
  }
  return res;
}

// 2:

function abbrevName(name) {
  let res = '';
  let sp = name.split(' ');
  for (let word of sp) {
    res += word[0];
  }
  return res[0].toUpperCase() + '.' + res[1].toUpperCase();
}

// 3:

function doubleInteger(i) {
  return i*2;
}