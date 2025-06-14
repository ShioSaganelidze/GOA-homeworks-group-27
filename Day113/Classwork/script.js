// classwork 1:

function isPangram(string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const low = string.toLowerCase();
  for (let i = 0; i<alphabet.length; i++) {
    if (!low.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

// classwork 2:

// check python.py