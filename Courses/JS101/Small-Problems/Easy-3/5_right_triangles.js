/* JS101 - Small Problems > Easy 3 > 5. Right Triangles

Right Triangles

Write a function that takes a positive integer, `n`, as an argument and logs a right triangle whose sides each have `n` stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right. */



// Elaine Vuong's Version
function triangle(num) {
  for (let count = 1; count <= num; count++) {
    console.log(' '.repeat(num - count) + '*'.repeat(count));
  }
}
// Examples
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