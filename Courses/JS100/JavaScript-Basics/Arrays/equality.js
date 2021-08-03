/* JS100 - JavaScript Basics Arrays > 7. Equality

Equality

Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2);
*/

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false

// Discussion
// The two variables point to different locations in memory, thus they are not strictly equal.
