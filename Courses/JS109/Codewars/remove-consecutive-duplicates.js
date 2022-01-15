/* Remove Consecutive Duplicates - 7 kyu

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
--> "alpha beta gamma delta alpha beta gamma delta"

Algo
- input string
- initialize `result` to empty array
- split string into words at space
- iterate by word
  - if word at index is not equal to word at index plus one
    - push the word into the `result` array
- join the `result` array
- return `result` */

// function removeConsecutiveDuplicates(string) {
//   let result = [];
//   let words = string.split(' ');

//   for (let idx = 0; idx < words.length; idx++) {
//     if (words[idx] !== words[idx + 1]) result.push(words[idx])
//   }

//   return result.join(' ');
// }

// This is such a concise and clear solution!
function removeConsecutiveDuplicates(string) {
  return string
    .split(' ')
    .filter((word, idx, array) => word !== array[idx + 1]) // ['alpha', 'beta', 'beta', 'gamma', 'gamma']
    .join(' '); // ['alpha', 'beta', 'gamma', 'delta', 'alpha', 'beta', 'gamma', 'delta']
}

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); //=== 'alpha beta gamma delta alpha beta gamma delta');

console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') === 'alpha beta gamma delta alpha beta gamma delta');