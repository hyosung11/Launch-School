/* JS101 - Small Problems > Medium 2 > Triangle Sides

Triangle Sides

A triangle is classified as follows:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'. 

PROBLEM
- input: 3 numbers
- output: string identifying type of triangle or whether side lengths are invalid

-rules:
-invalid if any side length is zero
-invalid if sum of 2 shortest sides is not greater than length of longest side
-eq if sides are all equal
-isos if two sides are equal
-scalene if all sides are of different lengths

DATA STRUCTURES:
input: 3 nums
intermediary: array (sort?)
output: string

ALGORITHM:
- input: 3 nums
- create array nums comprised of the 3 input nums
- sort in ascending order

- if any of elements = 0 return invalid
- if sum of first 2 is < third element return invalid
- if elements 2 and 3 === element 1, return equilateral
- if two elements equal each other return isosceles
- if elements are all different values return scalene */

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3].sort();

  if (sides.some((num) => num === 0)) return 'invalid';
  if (sides[0] + sides[1] < sides[2]) return 'invalid';
  if (sides[0] === sides[1] && sides[1] === sides[2]) return 'equilateral';
  if (sides[0] === sides[1] || sides[1] === sides[2]) return 'isosceles';
  return 'scalene';
}

function triangle(...args) {
  let [shortest, middle, longest] = [...args].sort((a, b) => a - b);

  if (shortest + middle < longest || shortest <= 0) return 'invalid';
  if (shortest === middle && middle === longest) return 'equilateral';
  if (shortest === middle || shortest === longest || middle === longest)
    return 'isosceles';
  return 'scalene';
}
console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"

/* Tri-Angles

A triangle is classified as follows:

    Right: One angle is a right angle (exactly 90 degrees).
    Acute: All three angles are less than 90 degrees.
    Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees. 

PROBLEM
- input: 3 numbers
- output: string

- rules:
 - invalid if any of the three angles === 0 or sum of 3 !== 180
 - rt if any angle === 90
 - acute if all are less than 90
 - obtuse if one is greater than 90
 - all are integers
 - all are in degrees

DATA STRUCTURES
- input: 3 numbers
- array (use some array method)
- output: string

ALGO
- create angles array comprised of three inputs

- if any value === 0 or if sum !== 180 return invalid
- if any value === 90 return right
- if any value > 90 return obtuse
- return acute  */

function triangle(angle1, angle2, angle3){
  let angles = [angle1, angle2, angle3];
  if (angles.some(value => value === 0)) return 'invalid';
  if (angles.reduce((sum, num) => (sum + num), 0) !== 180) return 'invalid';
  if (angles.some(value => value === 90)) return 'right';
  if (angles.some(value => value > 90)) return 'obtuse';
  return 'acute';
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"


// console.log(triangle(60, 70, 50));       // "acute"
// console.log(triangle(30, 90, 60));       // "right"
// console.log(triangle(120, 50, 10));      // "obtuse"
// console.log(triangle(0, 90, 90));        // "invalid"
// console.log(triangle(50, 50, 50));       // "invalid"