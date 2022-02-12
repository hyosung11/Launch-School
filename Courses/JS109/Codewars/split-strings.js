/* Split Strings 6 kyu

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

PROBLEM
- input: string
- output: array of strings

Rules
- return an array of strings of pairs of two chars
- if string contains an odd number of char, replace the missing 2nd char with an underscore( '_')

- multiple strings?

EXAMPLES
- see below

DATA STRUCTURE
- input: string
- intermediary: array
- output: array

ALGORITHM
- input string
- initialize `result` array to empty array
- if string's length is odd add '_' to string
- iterate through string incrementing by two
  - push string at the index + string at the index + 1 to result
- return `result` array
*/

// function solution(string) {
//   let result = [];
//   let count = 0;

//   if (string.length % 2 !== 0) {
//     string += '_';
//   }

//   while (count < string.length) {
//     result.push(string[count] + string[count + 1])
//     count += 2;
//   }

//   return result;
// }

function solution(str) {
  let result = [];

  if (str.length % 2 === 1) {
    str = str + '_';
  }

  for (let idx = 0; idx < str.length; idx += 2) {
    result.push(str[idx] + str[idx + 1]);
  }

  return result;
}

console.log(solution('')); // []
console.log(solution('abc'));// should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']
console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"])
