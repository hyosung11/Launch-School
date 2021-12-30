/* GrabScrab

Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as an array, and output a list of words that the pirate might have meant.

Return matches in the same order as in the array. Return an empty array if there are no matches.

Problem
input: string and an array of strings
output: array

rules:
- include in the returned array any words from the original array that contain all of the same letters as the input string, in any order
- if there are no matches, return an empty array

Data Structures:
- input: string, array of strings
- intermediary: empty array that we can populate; separate original string into an array so that we can iterate
output: array

ALGO:
- initialize `result` array
- initialize `sortedString` and assign it to the input string split into an array, sorted alphabetically, and joined back into a string
-iterate through input array
  - if length of the element is not equal to the length of the sortedString, continue.
  - initialize `sortedElement` and assign to array element split, sorted alphabetically, and joined
  - if sortedElement equals sortedString, then add original element to the results array
- return results array

For example: */

// function grabscrab(string, array) {
//   let result = [];
//   let sortedString = string.split('').sort().join('');

//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (array[idx].length !== sortedString.length) continue;

//     let sortedElement = array[idx].split('').sort().join('');
//     if (sortedString === sortedElement) {
//       result.push(array[idx]);
//     }
//   }

//   return result;
// }

// function grabscrab(string, array) {
//   let result = [];
//   let sortedString = string.split('').sort().join('');

//   for (let idx = 0; idx < array.length; idx += 1) {
//     if (sortedString.length !== array[idx].length) continue;

//     let sortedElement = array[idx].split('').sort().join('');
//     if (sortedString === sortedElement) {
//       result.push(array[idx]);
//     }
//   }

//   return result;
// }

// function grabscrab(string, array) {
//   string = string.split('').sort().join('');
//   return array.filter(word => word.split('').sort().join('') === string);
// }

// function grabscrab(string, array) {
//   string = string.split('').sort().join('');
//   let result = [];

//   array.forEach(word => {
//     let sortedWord = word.split('').sort().join('');
//     if (sortedWord === string) result.push(word);
//   });

//   return result;
// }

function grabscrab(string, array) {
  return array.filter(word => {
    return word.split('').sort().join('') === string.split('').sort().join('');
  });
}

console.log(grabscrab('oob', ['bob', 'baobab'])); // []);
console.log(grabscrab('ourf', ['one', 'two', 'three'])); // []);
console.log(grabscrab('trisf', ['first'])); // ["first"]);
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // Should return ["sport", "ports"].

console.log(grabscrab('ainstuomn', ['mountains', 'hills', 'mesa'])); // ["mountains"]);

console.log(grabscrab('oolp', ['donkey', 'pool', 'horse', 'loop'])); // ["pool", "loop"]));
console.log(grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])); // ["sport", "ports"]);

