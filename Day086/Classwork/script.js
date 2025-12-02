document.body.innerHTML = `
  <div><p>Para 1</p></div>
  <div><p>Para 2</p></div>
  <div><p>Para 3</p></div>
  <div><p>Para 4</p></div>
  <div><p>Para 5</p></div>
  <div><p>Para 6</p></div>
  <div><p>Para 7</p></div>
  <div><p>Para 8</p></div>
  <div><p>Para 9</p></div>
  <div><p>Para 10</p></div>
`;

let pTags = document.querySelectorAll('div p');
for (let i = 0; i < pTags.length; i++) {
  pTags[i].style.fontSize = '3px';
}