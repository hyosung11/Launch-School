/* 2. Non-repeating Substring

Get the longest substring in a string that does not contain any repeating characters.

Input: string
Output: string

Rules: case matters

EXAMPLES

DATA STRUCTURE

ALGORITHM
- declare a variable `longest` and assign to an empty string
- declare a variable `current` and assign to an empty string
- declare a variable `seen` and assign it an empty object { 'r': 2 }
- declare a variable `idx` and assign it to 0

- while idx is less than string's length
  - iterate over the string (char by char)
    - if the char is in `seen`,
      - reset current to empty string
      - reset `idx` to index of the seen char + 1
      - reset `seen`to an empty object

    - if it's not add the char to `current`
    - add the char to `seen` and set its value to its index

  - if length of `current is larger than length of longest, re-assign longest to current

  - increment idx by 1

return `longest`
*/

function nonRepeatingSubstring(string) {
  let longest = '';
  let current = '';
  let seen = {};
  let idx = 0;

  while (idx < string.length) {

    if (Object.keys(seen).includes(string[idx])) {
      current = '';
      idx = seen[string[idx]] + 1;
      seen = {};
    }

    current += string[idx];
    seen[string[idx]] = idx;

    if (current.length > longest.length) longest = current;

    idx += 1;
  }

  return longest;
}

console.log(nonRepeatingSubstring('aa')); // 'a'
console.log(nonRepeatingSubstring('aAa')); // 'aA'
console.log(nonRepeatingSubstring('abcdefabdhh')); // 'abcdef'
console.log(nonRepeatingSubstring('fgrjnr9e7g')); // 'jnr9e7g'
