/* Sum of Multiples

Suppose you have an arbitrary natural number (the target) and a set of one or more additional natural numbers (the factors). Write a program that computes the sum of all numbers from 1 up to the target number that are also multiples of one of the factors.

For instance, if the target is 20, and the factors are 3 and 5, that gives us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these multiples is 78.

If no factors are given, use 3 and 5 as the default factors.


Second Mental Model
- Incrementally build a list of numbers that are multiples of a set of one or more factors. Add a multiple to the list only if it is not yet on the list. Finally, compute and return the sum of the numbers on the list.

1. Create an empty array called `multiples` that will contain the list of multiples
2. Check whether the list of factors is empty. If there are no factors, set the list to `[3, 5]`
3. For every `factor` in the `factors` list:
  1.  Set the `current_multiple` to `factor` to keep track of the multiples of `factor`.
  2. While `current_multiple` < `target`
    1. Is the `current_multiple` in `multiples` already?
      1.  Yes - do nothing
      2.  No - Append the `current_multiple` to `multiples`.
    2. Add `factor` to `current_multiple`.
4. Compute and return the sum of the numbers in `multiples`. */

function sumOfMultiples(target, factors) {
  let multiples = [];
  if (factors.length === 0) factors = [3, 5];

  factors.forEach((factor) => {
    for (
      let currentMultiple = factor;
      currentMultiple < target;
      currentMultiple += factor
    ) {
      if (!multiples.includes(currentMultiple)) {
        multiples.push(currentMultiple);
      }
    }
  });

  return multiples.reduce((sum, value) => sum + value, 0);
}

console.log(sumOfMultiples(1, [])); // returns 0
console.log(sumOfMultiples(20, [3, 5])); // returns 78
console.log(sumOfMultiples(20, [3])); // returns 63
console.log(sumOfMultiples(20, [5])); // returns 30
console.log(sumOfMultiples(20, [])); // returns 78
console.log(sumOfMultiples(20, [19])); // returns 19
