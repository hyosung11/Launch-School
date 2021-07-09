function sumOfMultiples(targetNumber, factors) {
  var multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach(function (factor) {
    var currentMultiple;
    for (
      currentMultiple = factor;
      currentMultiple < targetNumber;
      currentMultiple += factor
    ) {
      if (multiples.indexOf(currentMultiple) === -1) {
        multiples.push(currentMultiple);
      }
    }
  });

  return multiples.reduce(function (sum, value) {
    return sum + value;
  }, 0);
}

sumOfMultiples(20, [3, 5]); // returns 78
sumOfMultiples(20, [3]); // returns 63
sumOfMultiples(20, [5]); // returns 30
sumOfMultiples(20, []); // returns 78
sumOfMultiples(1, []); // returns 0
sumOfMultiples(20, [19]); // returns 19
console.log(sumOfMultiples(20, [3, 5]));