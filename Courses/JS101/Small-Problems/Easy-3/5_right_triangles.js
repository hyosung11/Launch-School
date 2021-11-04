/* JS101 - Small Problems > Easy 3 > 5. Right Triangles

Right Triangles

Write a function that takes a positive integer, `n`, as an argument and logs a right triangle whose sides each have `n` stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right. */

function triangle(height) {
  let spaces = height - 1;
  let stars = 1;

  while (height > 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

// Examples
triangle(4);

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

/* Discussion

For this problem, there is an inverse relationship between the number of spaces and the number of stars included on each line. The first line includes `height - 1` spaces and `1` star. The second line includes `height - 2` spaces and `2` stars. The remaining lines all follow this pattern.

The solution follows this pattern by initially setting `stars` to `1`, and `spaces` to `height - 1`. On each iteration, it outputs a string that includes the appropriate number of spaces and stars. It then decrements the number of `spaces`, and increments the number of `stars`. This achieves the desired result.

Notice the use of the `String.prototype.repeat()` method. This method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together. */

// Elaine Vuong's Version
// function triangle(num) {
//   for (let count = 1; count <= num; count++) {
//     console.log(' '.repeat(num - count) + '*'.repeat(count));
//   }
// }