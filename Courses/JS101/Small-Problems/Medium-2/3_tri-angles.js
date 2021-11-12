/* JS101 - Small Problems > Medium 2 > 3. Tri-Angles

Tri-Angles

A triangle is classified as follows:

- Right: One angle is a right angle (exactly 90 degrees).
- Acute: All three angles are less than 90 degrees.
- Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly `180` degrees, and every angle must be greater than `0`. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: `'right'`, `'acute'`, `'obtuse'`, or `'invalid'`.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

PROBLEM
- input: three numbers representing angles
- output: string of type of triangle

Identify rules
- valid triangle
  - sum of angles = 180
  - all angles > 0
- triangle classification based on angles in degrees
  - right: on 90 degree angle
  - acute: all three angles < 90
  - obtuse: one angle > 90
- integer values
- arguments in degrees

EXAMPLES / TEST CASES
* 60, 70, 50 => 'acute' because all angles < 90

DATA STRUCTURE
- input: three numbers representing angles
- intermediary:
- output: string

ALGORITHM
- input three numbers representing the angles of a triangle
- check if valid triangle
  - if sum of angles not equal to 180 degrees
    - return invalid
  - if any angle less than or equal to 0
    - return 'invalid'
- check for type of triangle
  - if one angle is 90 degrees
    - return 'right'
  - if one angle greater than 90
    - return 'obtuse'
  - if all three angles less than 90 degrees
    - return 'acute'

CODE
- test code while programming */

// my version
// function triangle(angle1, angle2, angle3) {
//   let [smallest, middle, longest] = [angle1, angle2, angle3].sort((a, b) => a - b);

//   if (smallest <= 0 || smallest + middle + longest !== 180) return 'invalid';
//   if (longest === 90) return 'right';
//   if (longest < 90) return 'acute';
//   if (longest > 90) return 'obtuse';
// }

// Launch School
function triangle(angle1, angle2, angle3) {
  const angles = [angle1, angle2, angle3];
  if (isValid(angles)) {
    return getTriangleType(angles);
  } else {
    return 'invalid';
  }
}

function isValid(angles) {
  const totalAngle = angles.reduce((total, angle) => total + angle);

  const allNonZero = angles.every(angle => angle > 0);

  return totalAngle === 180 && allNonZero;
}

function getTriangleType(angles) {
  if (angles.some(testRightAngle)) {
    return 'right';
  } else if (angles.every(testAcuteTriangle)) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function testRightAngle(angle) {
  return angle === 90;
}

function testAcuteTriangle(angle) {
  return angle < 90;
}

// Examples:
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

/* Discussion

Like the previous exercise, this one also classifies triangles but this time using angles instead of sides. This solution follows the same pattern as the previous. The difference, however, is in the implementation of the solution. This solution takes a more declarative route by using more of the list processing abstractions. If you followed the more imperative route, notice that the conditionals are not that long to type out. For instance, testing for a right triangle could be written as: `if (angle1 === 90 || angle2 === 90 || angle3 === 90)`.

This problem is not that big, and the conditionals are not that complicated, so going the declarative route might seem too verbose. That said, use the solution as a means of trying out the approach and as a means of comparison to a more imperative approach. It is essential to be able to determine when one approach is better than the other.

Note that we use the functions `testRightTriangle` and `testAcuteTriangle` as arguments to `some` and `every` rather than entering them inline as a function expression or arrow function. All we have to do here is use the function name. Note, in particular, that we do not use parentheses when passing the functions as arguments -- the `some` and `every` function will take care of invoking the functions. We just want to pass the functions in to them. */

// Laurent
// function triangle(angle1, angle2, angle3) {
//   let [small, medium, large] = [angle1, angle2, angle3].sort((a, b) => a - b);

//   if (small <= 0 || small + medium + large !== 180) return 'invalid';
//   if (large < 90) return 'acute';
//   if (large === 90) return 'right';
//   if (large > 90) return 'obtuse';
// }

// Elaine
// function triangle(...sides) {
//   sides.sort((a, b) => a - b);
//   if (sides.includes(0)) return 'invalid';
//   if (sides.reduce((total, angles) => total + angles, 0) !== 180)
//     return 'invalid';
//   if (sides.every((angle) => angle < 90)) return 'acute';
//   if (Math.max(...sides) > 90) return 'obtuse';
//   return 'right';
// }

// Edris
// function triangle(s1, s2, s3) {
//   let shape = [...arguments].sort((a, b) => a - b);
//   let greatest = shape[2];

//   if (Math.min(...shape) === 0 || s1 + s2 + s3 !== 180) return 'Invalid';

//   if (greatest > 90) return 'Obtuse';
//   else if (greatest < 90) return 'Acute';
//   else return 'Right';
// }

// Bob Rodes
// function triangle(a, b, c) {
//   if (a + b + c !== 180) return 'invalid';
//   if (Math.min(a, b, c) <= 0) return 'invalid';

//   if (Math.max(a, b, c) > 90) return 'obtuse';
//   if (Math.max(a, b, c) === 90) return 'right';

//   return 'acute';
// }

// Antonina
// function triangle(a, b, c) {
//   const angles = [a, b, c].sort((a, b) => a - b);
//   if (a + b + c !== 180 || angles[0] === 0) return 'invalid';
//   if (angles[2] > 90) return 'obtuse';
//   return angles[2] < 90 ? 'acute' : 'right';
// }