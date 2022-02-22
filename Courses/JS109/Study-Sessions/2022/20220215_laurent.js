/* 2. Non-Repeating Substring

Get the longest substring in a string that does not contain any repeating characters.

Algorithm
- declare `nonRepeatingSubstring` function with `string` parameter
- init `substrings` to []

- iterate outer loop through string
  - init `result` to first char of string
  
  - iterate inner loop over string
    - if `result` includes string at jdx
      - push `result` to `substrings
      - break out of inner loop
      
    - if jdx equals length of string (gotten to end of string)
      - push `result` to substrings
      - break out of loop
      
    - increment result with string at jdx
    
- sort substrings by longest to shortest and 
- return substrings[0]


function nonRepeatingSubstring (string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    let result = string[idx];

    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      if (result.includes(string[jdx])) {
        substrings.push(result);  
        break;
      }

      if (jdx === string.length) {
        substrings.push(result);
        break;
      }

      result = result + string[jdx];
    }
  }

  substrings.sort((a, b) => b.length - a.length)
  console.log(substrings)
  return substrings[0]
}




// function nonRepeatingSubstring(string) {
//   let longest = '';
//   let current = '';
//   let seen = {};
//   let idx = 0;

//   while (idx < string.length) {

//     if (Object.keys(seen).includes(string[idx])) {
//       current = '';
//       idx = seen[string[idx]] + 1;
//       seen = {};
//     }

//     current += string[idx];
//     seen[string[idx]] = idx;

//     if (current.length > longest.length) longest = current;

//     idx += 1;
//   }

//   return longest;
// }

*/
function nonRepeatingSubstring(string) {
  let substrings = getSubstrings(string);

  return substrings
    .map((substring) => substring.split(''))
    .filter((array) =>
      array.every((char, idx, array) => array.indexOf(char) === idx)
    )
    .sort((a, b) => b.length - a.length)[0]
    .join('');
}

function getSubstrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

// console.log(nonRepeatingSubstring("aa") === 'a'); // 'a'
// console.log(nonRepeatingSubstring("aAa") === 'aA'); // 'aA'
// console.log(nonRepeatingSubstring('abcdefabdhh') === 'abcdef'); // 'abcdef'
// console.log(nonRepeatingSubstring('fgrjnr9e7g') === 'jnr9e7g'); // 'jnr9e7g'

console.log(nonRepeatingSubstring('abcdaefghejklmj') === 'bcdaefgh'); //
