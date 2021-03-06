/* Count Letters in String - 6 kyu

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example:

letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, */

// function letterCount(string) {
//   //your code here
//   let result = {};

//   string.split('').forEach((char) => {
//     result[char] ? (result[char] += 1) : (result[char] = 1);
//   });

//   return result;
// }

function letterCount(string) {
  let result = {};

  string.split('').forEach((char) => {
    result[char] = result[char] + 1 || 1;
  });

  return result;
}

