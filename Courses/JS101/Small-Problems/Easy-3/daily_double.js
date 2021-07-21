/* JS101 - Small Problems > Easy 3 > 1. ddaaiillyy ddoouubbllee

ddaaiillyy ddoouubbllee

Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

ALGORITHM
1. Declare a function that takes a string argument
2. initialize empty string variable
3. Loop through each character of the string
  - if a char in the string is not duplicate of the preceding char ignore it
  - add char to the empty string
4. return new string
*/

function crunch (string) {
  let newStr = '';
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== string[index + 1]) {
      newStr += string[index];
    }
  }
  return newStr;
}

// LS solution
// function crunch(text) {
//   let index = 0;
//   let crunchText = '';

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }

// Examples

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""