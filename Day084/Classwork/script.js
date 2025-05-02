function similarity(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += b.includes(a[i]);
    }
    return sum / (a.length + b.length - sum); 
}