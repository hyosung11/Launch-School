/* Take a Ten Minute Walk - 6 kyu

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

PROBLEM
- input: array of letters representing direction of walk
- output: boolean

Rules
- return true if walk takes exactly ten minutes and walk returns you to starting point
- each direction takes one minute
- direction letters are 'n', 's', 'e' 'w' and given in an array format
- no empty input arrays
- if array length is not exactly 10 return false
- if 'n' is greater or less than 's' return false
- if 'e' is greater or less than 'w' return false

EXAMPLES
- see below

DATA STRUCTURE
- input: array of string directions
- intermediary: capture values in an object
- output: boolean

ALGORITHM
- input array
- if array length is not exactly 10 return false
- initialize `result` to empty object
- iterate through array
  - add element to object
  - or increment element's value in object
- iterate through object's values
  - if 'n' is not equal to 's' and if 'e' is not equal to 'w' return false
- return true
*/

// function isValidWalk(directions) {
//   if (directions.length !== 10) return false;

//   let result = {};

//   directions.forEach((direction) => {
//     result[direction] = result[direction] + 1 || 1;
//   });

//   return result['n'] === result['s'] && result['e'] === result['w'];
// }

// console.log(isValidWalk(['w']) == false); // true
// console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']) == false); // true
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']) == true)
// console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']) == false);
// console.log(isValidWalk(['e','n','e','w','n','s','n','s','n','s']) == false);

/* cadet93
Notes:
- input is an array of n, s , w , e's
- output is a boolean based on the rules
  - input array length === 10
  - count of n === count of s
  - count of w === count of e

Examples:
isValidWalk(['n', 'n', 'n', 'n', 's', 's','s','s', 'w', 'e']) // true

Algorithm:
- check length of the array if over 10 return false
- count blocks in each direction
- if both n === s && w === e blocks return true
*/
// function countBlocks(array) {
//   let result = {};
//   array.forEach(direction => {
//     result[direction] = result[direction] + 1 || 1;
//   })
//   return result;
// }

// function isValidWalk(walk) {
//   if (walk.length !== 10) return false;
//   let blocksInDirectionOf = countBlocks(walk);
//   return blocksInDirectionOf['n'] === blocksInDirectionOf['s'] &&
//       blocksInDirectionOf['w'] === blocksInDirectionOf['e'];
// }

// function isValidWalk(directions) {
//   let northSouth = 0;
//   let eastWest = 0;

//   if (directions.length !== 10) return false;
//   else if (directions.length === 10) {
//     directions.forEach(direction => {
//       switch (direction) {
//         case 'n': return northSouth += 1;
//         case 's': return northSouth -= 1;
//         case 'e': return eastWest += 1;
//         case 'w': return eastWest -= 1;
//       }
//     })
//   }

//   return northSouth === 0 && eastWest === 0;
// }

// function isValidWalk(directions) {
//   let northSouth = 0;
//   let eastWest = 0;

//   if (directions.length !== 10) return false;
//   else {
//     directions.forEach((direction) => {
//       switch (direction) {
//         case 'n': return (northSouth += 1);
//         case 's': return (northSouth -= 1);
//         case 'e': return (eastWest += 1);
//         case 'w': return (eastWest -= 1);
//       }
//     });
//   }

//   return northSouth === 0 && eastWest === 0;
// }

/* David Alejandro

Input
Array of strings
Don't validate input

Output
Boolean

Mental Model
The walk should take exactly 10 minutes, and 1 direction takes 1 minute
That means that the array of directions should be equal to 10
If the array length is not 10, return false
Then, go over the array and for each direction
Sum 1 if the direction is north
Sustract 1 if the direction is south
Sum 1 if the direction is west
Sustract 1 if the direction is east
The result should be 0, if not, return false

Algorithm
Return false if the array length is not 10
Map over the array
Replace 'n' with 1, 's' with -1, 'w' with 1, 'e' with -1
Sum the array
If the array is 0, return true, false otherwise */

function isValidWalk(directions) {
  if (directions.length !== 10) return false;

  let result = directions.map(direction => {
    if (direction === 'n' || direction === 'e') return 1;
    if (direction === 's' || direction === 'w') return -1;
  }).reduce((sum, num) => sum + num, 0);

  return result === 0;
}

console.log(isValidWalk(['w']) == false); // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']) == false); // true
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']) == true)
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']) == false);
console.log(isValidWalk(['e','n','e','w','n','s','n','s','n','s']) == false);