/* JS100 - JavaScript Basics > Arrays > 5. Filter

Filter

Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];
*/

let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (let index = 0; index < scores.length; index += 1) {
  if (scores[index] >= 100) {
    count = count += 1;
  }
}

console.log(count);