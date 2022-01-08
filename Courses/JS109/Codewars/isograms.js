/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// function isIsogram(string) {
//   string = string.toLowerCase();
//   let result = {};

//   string.split('').forEach(char => {
//     result[char] ? result[char] += 1 : result[char] = 1;
//   })

//   if (Object.values(result).every(count => count <= 1)) return true;
//   return false;
// }

// function isIsogram(string) {
//   let letters = [];

//   for (let idx = 0; idx < string.length; idx++) {
//     if (!letters.includes(string[idx].toLowerCase())) {
//       letters.push(string[idx]);
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// function isIsogram(str) {
//   let letters = str.toLowerCase().split('');
//   // The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
//   // 'aba' => ['a' = 0, 'b' = 1, 'a' = 2]
//   // ['a' = 0]
//   // ['a' = 2]
//   return letters.every((letter, idx) => letters.indexOf(letter) === idx);
// }

function isIsogram(string) {
  // 'aba'.length === 3
  // Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
  return (
    string.length ===
    new Set(string.split('').map((letter) => letter.toLowerCase())).size
  );
}

console.log(isIsogram('Dermatoglyphics') === true); // true
console.log(isIsogram('isogram') === true); // true
console.log(isIsogram('aba') === false); // 'same chars may not be adjacent'
console.log(isIsogram('moOse') === false); // 'same chars may not be same case';
console.log(isIsogram('isIsogram') === false);
console.log(isIsogram('') === true); // 'an empty string is a valid isogram');