/* Given 2 strings, your job is to find out if there is a substring that appears in both strings. You will return true if you find a substring that appears in both strings, or false if you do not. We only care about substrings that are longer than one letter long.

PROBLEM
- input: string1 and string2
- output: boolean

Rules
- find a substring that appears in both input strings
- valid substrings are more than one letter long
- substrings are case-insensitive
- substring chars can be letters or numbers

EXAMPLES

DATA STRUCTURE
- input: string1, string2
- intermediary: array of substrings
- output: boolean

ALGORITHM
- create two arrays of substrings from the input strings
  - initialize `substrings` helper function to return an array of substrings

- iterate through the shorter array
  - for each substring, determine if it exists in the longer array
*/

function substringTest(str1, str2) {
  let substrings1 = allSubstrings(str1);
  let substrings2 = allSubstrings(str2);

  let lastIndex = Math.min(substrings1.length, substrings2.length);

  for (let idx = 0; idx < lastIndex; idx += 1) {
    let char1 = substrings1[idx];
    let char2 = substrings2[idx];

    if (substrings2.includes(char1) || substrings1.includes(char2)) return true;
  }
  return false;
}

function leadingSubstrings(string) {
  string = string.toLowerCase();
  let substrings = [];
  string.split('').forEach((char, idx) => {
    substrings.push(string.slice(0, idx + 1));
  });
  return substrings;
}

function allSubstrings(string) {
  let substrings = [];
  string.split('').forEach((char, idx) => {
    let substring = string.slice(idx);
    substrings = substrings.concat(leadingSubstrings(substring));
  });
  return substrings.filter((substring) => substring.length > 1);
}

// console.log(allSubstrings('SungOh'));


console.log(substringTest('', '') === false); // true
console.log(substringTest('test', '111t') === false); // true
console.log(substringTest('', 'Something') === false); // true
console.log(substringTest('Something', '') === false); // true
console.log(substringTest('Something', 'Fun') === false); // true
console.log(substringTest('Something', 'Home') === true); // true
console.log(substringTest('Something', 'Fun') === false); // true
console.log(substringTest('BANANA', 'banana') === true); // true
console.log(substringTest('1234567', '541265') === true); // true
console.log(substringTest('supercalifragilisticexpialidocious', 'Sou dOfItIsAtrocious') === true); // true