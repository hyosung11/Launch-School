/* Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long. */

// function substringTest(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   for (let idx = 0; idx < str1.length - 1; idx += 1) {
//     let twoChars = str1.slice(idx, idx + 2);
//     console.log(twoChars); // 'so', 'om'
//     if (str2.includes(twoChars)) return true;
//   }

//   return false;
// }

// console.log(substringTest('', ''));
// console.log(substringTest('test', '111t')); // true
// console.log(substringTest('', '') === false); // true
// console.log(substringTest('test', '111t') === false); // true
// console.log(substringTest('', 'Something') === false); // true
// console.log(substringTest('Something', '') === false); // true
// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('Something', 'Home') === true); // true
// console.log(substringTest('Something', 'Fun') === false); // true
// console.log(substringTest('BANANA', 'banana') === true); // true
// console.log(substringTest('1234567', '541265') === true); // true
// console.log(substringTest('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === true); // true

/* What is the longest common substring between 2 strings. The common substring should be at least 2 characters long.

Algorithm
Approach 1: slice and add
Declare a variable `longestCommon`
For each subset of 2 characters, test if it is included in the second one
  If it is, add a character and test if it is still included in the second one
    If it is longer than the current `longestCommon` replace it by this value

Approach 2: test all substrings
- getAllSubstrings helper function
  - initialize `substring` to empty array
  - iterate through input string
    - iterate through char
      - slice input string into substrings
      - push slices into `substring` array
  - return `substrings` array

- initialize `longestString` to empty string
- iterate through str1
  - initialize `testString` to slice of str1
  - if `substring2` includes `testString`
  - if `testString` is longer than `longestString` reassign `testString` to longestString

Return false */

function getAllSubstrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= string.length; jdx += 1) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings.filter(substring => substring.length > 1);
}

// console.log(getAllSubstrings('abc'))

function substringTest(str1, str2) {
  let substrings = getAllSubstrings(str1.toLowerCase());
  str2 = str2.toLowerCase();

  let longestString = '';

  for (let idx = 0; idx < substrings.length; idx += 1) {
    let testString = substrings[idx];

    if (str2.includes(testString) && testString.length > longestString.length) {
      longestString = testString;
    };
  }

  return longestString;
}

// Alternative Approach
// function substringTest(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   let longestString = '';

//   for (let idx = 0; idx < str1.length - 1; idx += 1) {
//     let testString = null;
//     let idx2 = idx + 2;

//     do {
//       testString = str1.slice(idx, idx2);
//       if (str2.includes(testString) && testString.length > longestString.length)
//         longestString = testString;
//       idx2 += 1;
//     } while (str2.includes(testString) && idx2 <= str1.length);
//   }

//   return longestString;
// }

console.log(substringTest('', '') === ''); // true
console.log(substringTest('test', '111t') === ''); // true
console.log(substringTest('', 'Something') === ''); // true
console.log(substringTest('Something', '') === ''); // true
console.log(substringTest('Something', 'Fun') === ''); // true
console.log(substringTest('Something', 'Home') === 'ome'); // true
console.log(substringTest('Something', 'Fun') === ''); // true
console.log(substringTest('BANANA', 'banana') === 'banana'); // true
console.log(substringTest('1234567', '541265') === '12'); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === 'ocious'); // true