/* Laurent is 44

/*
Given a string s, return true if a permutation of the string could form a palindrome.

PROBLEM
- input: string
- output: boolean

Rules
- return true if a permutation of the string forms a palindrome
  - changing the order of the letters in the string create a palindrome
  - e.g., 'aab' => 'aba' => true
  - e.g., 'code' => no possible palindrome => false
  - e.g., 'carerac' => 'racecar' => true

DATA STRUCTURE
- input string
- intermediary:
- output: boolean

ALGORITHM
- input: string
- initialize `result` to empty object
*/

function canPermutePalindrome(string) {
  let count = {};

  for (let index = 0; index < string.length; index += 1) {
    if (!count[string[index]]) count[string[index]] = 1;
    else count[string[index]] += 1;
  }

  let oddCount = 0;

  for (let char in count) {
    if (count[char] % 2 === 0) continue;
    else uniqueCount += 1;
  }

  if (oddCount > 1) return false;
  return true;
}

console.log(canPermutePalindrome("code")); // false
console.log(canPermutePalindrome("aab")); // true
console.log(canPermutePalindrome("carerac")); // true
console.log(canPermutePalindrome("aab")); // true

// Getting Permutations
const stringPermutations = (str) => {
  // 'ab'
  if (str.length === 1) return [str]; // base case 1
  if (str.length === 2) return [str, str[1] + str[0]]; // base case 2 ['ab', 'ba']

  return str // "abc"
    .split('') // ["a", "b", "c"]
    .reduce(
      (
        acc,
        letter,
        i // acc ["abc", "acb", "bac", "bca"]   letter = "c"   i = 2
      ) =>
        acc // ["abc", "acb", "bac", "bca", "cab", "cba"]
          .concat(
            stringPermutations(str.slice(0, i) + str.slice(i + 1)) // "ab" + undefined // "ab"
              .map((val) => letter + val)
          ), // ["cab", "cba"]
      []
    );
};

console.log(stringPermutations(''));
console.log(stringPermutations('a'));
console.log(stringPermutations('abc'));
console.log(stringPermutations('*$*'));

/*
first call ('abcd')
Iterate over 'abcd'
  - 'a' call ('bcd')
    Iterate over ('bcd')
    - 'b' call ('cd') => ['cd', 'dc'] => 'bcd', 'bdc'
    - 'c' call ('bd') => ['bd', 'db'] => 'cbd', 'cdb'
    - 'd' call ('bc') => ['bc', 'cb'] => 'dbc', 'dcb'
  - ['abcd', 'abdc', 'acbd', 'acdb', 'adbc', 'adcb']
  - 'b'
*/