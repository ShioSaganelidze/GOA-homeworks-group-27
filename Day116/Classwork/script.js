function capitalize(s, arr) {
  let chars = s.split('');
  for (let i of arr) {
    if (i >= 0 && i < chars.length) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join('');
}