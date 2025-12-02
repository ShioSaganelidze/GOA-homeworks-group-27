// 1:

function inviteMoreWomen(L) {
  let women = 0;
  let men = 0;
  for (let i = 0; i < L.length; i++) {
    if (L[i] === -1) {
      women += 1;
    } else if (L[i] === 1) {
      men += 1;
    }
  }
  return men > women;
}

// 2:

function minMinMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  const set = new Set(array);

  let minimumAbsent = min;
  while (set.has(minimumAbsent)) {
    minimumAbsent++;
  }

  return [min, minimumAbsent, max];
}