/* JS101 - Small Problems > Medium 2 > 2. Triangle Sides

Triangle Sides

A triangle is classified as follows:

- Equilateral: All three sides are of equal length.
- Isosceles: Two sides are of equal length, while the third is different.
- Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: `'equilateral'`, `'isosceles'`, `'scalene'`, or `'invalid'`.

P - understand problem
  Input: three arguments of numbers
  Output: string of triangle's classification

  Rules: see above

E - Examples and tests

D - Data Structure
- numbers
- string

A - Algorithm
- input 3 numbers representing different lengths of triangle
  - check if any number is 0, return invalid
  - check if all numbers are same, return equilateral
  - check if two sides are equal and third side isn't
  - check if all three numbers different
return string answer

C - Code with Intent */

// function triangle(side1, side2, side3) {
//   let perimeter = side1 + side2 + side3;
//   let longest = Math.max(side1, side2, side3)
//   let shortest = Math.min(side1, side2, side3);
//   let middle = perimeter - longest - shortest;

//   if (isValid(shortest, middle, longest)) {
//     return getTriangleTypes(side1, side2, side3)
//   } else {
//     return 'invalid';
//   }
// }

// function isValid(shortest, middle, longest) {
//   return shortest > 0 && shortest + middle > longest;
// }

// function getTriangleTypes(side1, side2, side3) {
//   if (side1 === side2 && side2 === side3) {
//     return 'equilateral';
//   } else if (side1 === side2 || side1 === side3 || side2 === side3) {
//     return 'isosceles';
//   } else {
//     return 'scalene';
//   }
// }

// Examples
console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"

/* Hint: Valid Triangle

Valid triangles must have the following two characteristics:

1. All sides must have lengths greater than zero — i.e., the shortest side is greater than zero (`shortest > 0`).
2. The sum of the two shortest sides must be greater than the longest side (`shortest + middle > longest`).

Discussion

The tricky part of this problem is determining whether a triangle is valid. To check for a valid triangle, the solution identifies the longest and the two shortest sides. It gets the `longest` and `shortest` using `Math.max` and `Math.min` respectively. The other shortest, or `middle` side, is the length left over after the `longest` and `shortest` are subtracted from the `perimeter`, which is the sum of all the sides.

The `getTriangleType` helper function implements the classification of a triangle. The first condition checks if all sides are equal (`'equilateral'`). All sides are equal if `side1 === side2 === side3` — i.e., `side1 === side2 && side2 === side3`. The second condition checks if two sides are equal (`'isosceles'`). The series of `||` operations evaluates as true if any of the three comparisons are `true`. Finally, since the triangle is valid, if it is not either of the first two classifications, then it must be the third (`'scalene'`). */

// David Pocsai
// function triangle(side1, side2, side3) {
//   [side1, side2, side3] = [side1, side2, side3].sort();
//   if (side1 <= 0 || side1 + side2 <= side3) {
//     return 'invalid';
//   } else if (side1 === side2 && side2 === side3) {
//     return 'equilateral';
//   } else if (side1 === side2 || side2 === side3) {
//     return 'isosceles';
//   } else {
//     return 'scalene'
//   }
// }

// Laurent
function triangle(number1, number2, number3) {
  let [small, medium, long] = [number1, number2, number3].sort((a, b) => a - b);

  if (small <= 0) return 'invalid';
  if (small + medium <= long) return 'invalid';
  if (small === medium && medium === long) return 'equilateral';
  if (small === medium || medium === long) return 'isosceles';

  return 'scalene';
}