/* Progressions

Medium Problem
You're given an array of integers. You must return the number of 'arithmetic progressions' of size 3 that are possible from that list.

In each progression, the differences between the elements must be the same.

Example:
[1, 2, 3, 5, 7, 9] ==> 5
The above has 5 progressions, seen below:
[1, 2, 3], [1, 3, 5], [1, 5, 9], [3, 5, 7], and [5, 7, 9]

All array elements will be unique and the array will be sorted.

Test Cases
console.log(progressions([1, 2, 3, 5, 7, 9])); // 5
console.log(progressions([1, 2, 3, 4, 5]));    // 4
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])); // 10


06:05 start
06:20 solved

PROBLEM
- in: arr
- out: num (of 'arithmetic progs')

Rules:
- for the given arr, return the number of times num3 = num2 + (num2 - num1)
- All array elements will be unique and the array will be sorted.
- if length of input arr is less than 3, return 0
- numbers can be used multiple times

DATA
- arr
- count variable
- num (count)

ALGO
- if length of input arr is less than 3, return 0
- init count = 0
- outer loop through arr (idx)
  - inner loop through arr (jdx)
    - if arr includes arr[jdx] + (arr[jdx] - arr[idx]) count +=1
  return count

*/
function progressions(arr) {
  if (arr.length < 3) return 0;
  let count = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    for (let jdx = idx + 1; jdx <= arr.length; jdx++) {
      if (arr.includes(arr[jdx] + (arr[jdx] - arr[idx]))) count += 1;
    }
  }
  return count;
}

// Test Cases
console.log(progressions([]) === 0);
console.log(progressions([1, 2]) === 0);
console.log(progressions([1, 2, 3]) === 1);
console.log(progressions([1, 2, 4]) === 0);
console.log(progressions([1, 20, 21, 22]) === 1);
console.log(progressions([1, 10000001, 20000001]) === 1);
console.log(progressions([1, 2, 3, 4, 5]) === 4);
console.log(progressions([1, 2, 3, 5, 7, 9]) === 5);
console.log(progressions([1, 2, 3, 4, 5]) === 4);
console.log(progressions([0, 5, 8, 9, 11, 13, 14, 16, 17, 19]) === 10);

/* Decrypt

You'll be given a string of random characters (numbers, letters, and symbols).
To decode this string into the key we're searching for:
(1) count the number of occurrences of each ascii lowercase letter, and
(2) return an ordered string, 26 places long, corresponding to the number of
occurrences for each corresponding letter in the alphabet.

Example:
'$aaaa#bbb*cc^fff!z' gives '43200300000000000000000001'
^    ^   ^  ^  ^         ^^^  ^                   ^
[4]  [3] [2][3][1]        abc  f                   z

'z$aaa#ccc%eee1234567890' gives '30303000000000000000000001'
^  ^   ^   ^                    ^ ^ ^                    ^
[1][3] [3] [3]                   a c e                    z

The string returned should always be 26 characters long, and only count lowercase letters.
You can assume that each lowercase letter will appear a maximum of 9 times in the input str.

06:22 start
06:34 solved

PROBLEM
- in: str
- out: str (of 26 nums)

Rules:
- count number occurrences of each alphabetic lowercase char and return a str in which the ocurrences are concatenated

ALGO
- init alpha = abc...
- alpha = alpha split
- init obj = {}
- iterate through str
  - if obj[char], increment obj[char] by 1, otherwise create obj[char]
- map alpha arr into an arr where the alpha char are replaced 0 if they are not in obj or if they are, by their number of occurrences in the obj
-return mapped arr joined

*/

function decrypt (str) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  alpha = alpha.split('');
  let obj = {};
  
  for(let idx = 0; idx < str.length; idx++) {
    let char = str[idx];
    obj[char]? obj[char] += 1 : obj[char] = 1;
  }
  
  let result = alpha.map(char => {
    return obj[char]? obj[char] : 0;
  });
  
  return result.join('');
}

console.log(decrypt('$aaaa#bbb*ccfff!z') === '43200300000000000000000001');
console.log(decrypt('z$aaa#ccc%eee1234567890') === '30303000000000000000000001');
console.log(decrypt('the quick brown fox jumps over the lazy dog') === '11113112111111411212211111');

console.log(decrypt('a1b2c3D4dda') === '21120000000000000000000000');
console.log(decrypt('a1aba2aca3aDaa4dda') === '91120000000000000000000000');
console.log(decrypt('1203904942@$2') === '00000000000000000000000000');
console.log(decrypt('ABCJDK3ROKGMIS3949') === '00000000000000000000000000');
console.log(decrypt('') === '00000000000000000000000000');

/* Given an array of strings made only from lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.



6:36 start
6:56 solved

PROBLEM
- in: arr
- out: arr

Rules:
- return an arr comprised of all char that are in every element of the original arr
- if a char occurrs more than ince in the original, include it that many times in output arr
- if arr is empty or if any elements are empty strings, return an empty arr

DATA
- arr
- arr, str
- arr

ALGO
- input: arr
- if arr is empty or if any elements are empty strings, return an empty arr
- let original = arr[0]
- init result = []

- iterate through original
  - if every el of arr includes str[idx]
    - push to result
  - for each: replace original[idx] with empty str in 
- return result
*/

function commonChars (arr) {
  if (arr.length === 0 || arr.some(el => el.length === 0)) return [];
  let original = arr[0];
  let result = [];
  
  for (let idx = 0; idx < original.length; idx++) {
    if (arr.every(el => el.includes(original[idx]))) {
      result.push(original[idx]);
      
      for (let jdx = 0; jdx < arr.length; jdx++) {
        arr[jdx] = arr[jdx].replace(original[idx], '');
      }
    }
  }
  return result;
}


console.log(commonChars(['a', 'b'])); // []
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o']
console.log(
  commonChars(['aabbaaaa', 'ccddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])
); // []





