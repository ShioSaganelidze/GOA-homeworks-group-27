function twoSum(numbers, target) {
    for(let i = 0; i<numbers.length; i++) {
      for(let j = i + 1; j<numbers.length; j++) {
        if (numbers[i] + numbers[j] == target) {
          let indexnumbers = [];
          indexnumbers.push(i);
          indexnumbers.push(j);
          return indexnumbers;
        }
      }
    }
}