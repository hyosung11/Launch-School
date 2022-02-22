/* 2. Non-Repeating Substring

Get the longest substring in a string that does not contain any repeating characters.

PROBLEM
- input string
- output new string

Rules
- return the longest substring in a string that does not contain any repeating chars
- input can be lower or uppercase, case matters

EXAMPLES
- 'aa' => 'a'
- 'aAa' => 'aA' capitalization matters

ALGO
- input string
- initialize `substrings` to empty array
- iterate through string outer loop
  - initialize `result` to char at the string index
  - iterate through string inner loop
    - if `result` includes the char at the jdx
      - push `result` to `substrings` array
      - break out of loop
    - if jdx equals the length of the string (nothing repeats to the end of th string)
      - push `result` to `substrings`
      - break out of loop
    - increment `result` with the string at the jdx
- sort the substrings array's elements by length from longest to shortest
- return the substring at the first index position [0]


- return longest nonrepeating substring
-initialize substrings to empty array
-iterate through string
  -intitialize result to current char
  -iterate through input string (idx + 1)
    -if result string includes current char
      -add result string to substrings array
      -break
    -result += current char
-sort substrings by longest
-return substrings[0]
*/

function nonRepeatingSubstring(string) {
  let substrings = [];
  // let result = '';

  for (let idx = 0; idx < string.length; idx++) {
    let result = string[idx];
    //console.log(result);

    for (let jdx = idx + 1; jdx <= string.length; jdx++) {
      // console.log(result); // jnr9e7g
      if (result.includes(string[jdx])) {
        // console.log(result)
        substrings.push(result);
        break;
      }
      if (jdx === string.length) {
        substrings.push(result);
        break;
      }
      result += string[jdx];
    }
  }
  // console.log(substrings);
  substrings.sort((a, b) => b.length - a.length);
  return substrings[0];
}

console.log(nonRepeatingSubstring("aa") === 'a'); // 'a'
console.log(nonRepeatingSubstring("aAa") === 'aA'); // 'aA'
console.log(nonRepeatingSubstring('abcdefabdhh') === 'abcdef'); // 'abcdef'
console.log(nonRepeatingSubstring('fgrjnr9e7g')) // === 'jnr9e7g'); // 'jnr9e7g'
