/* 1180. Count Substrings with Only One Distinct Letter

Given a string s, return the number of substrings comprised of only one distinct letter.

6:11 start
06:39

'aab' => 'a', 'aa',  | 'a' | 'b' 

PROBLEM
- in: string
- out: number
Rules
- return all substrings that are comprised on one letter (repeating or not)
- lowercase letters only

EXAMPLES
thats enough of that

DATA STRUCTURES
- in: string
- between: arr (of substrings, then filter)
- out: num (length of filtered arr)

ALGO
- in: string
- init substrings arr = getSubstrings helper function
- init distinctSubstrings = filter substrings => distinct(substring)
- return lenght of distinctSubstrings

getSubstrings(str)
-init arr = []
-loop through str (idx)
  loop through str (jdx = idx + 1)
   push slices from idx to jdx into arr
return arr

distinctSubstrings (str)
if length is 1 reurn true
split into arr 
if every char === arr[0] return true

*/

function countLetters(str) {
  let substrings = getSubstrings(str);
  let distinctSubstrings = substrings.filter((substring) =>
    distinct(substring)
  );
  return distinctSubstrings.length;
}

function getSubstrings(str) {
  let arr = [];
  for (let idx = 0; idx < str.length; idx++) {
    for (let jdx = idx + 1; jdx <= str.length; jdx++) {
      arr.push(str.slice(idx, jdx));
    }
  }
  return arr;
}

function distinct(str) {
  if (str.length === 1) return true;
  let arr = str.split('');
  return arr.every((char) => char === arr[0]);
}

console.log(countLetters('aab')); // 4
console.log(countLetters('aaaba')); // 8

console.log(countLetters('')); // 0
console.log(countLetters('a')); // 1   1
console.log(countLetters('ab')); // 2
console.log(countLetters('aa')); // 3   1 + 2
console.log(countLetters('aaa')); // 6    1 + 2 + 3
console.log(countLetters('aaaa')); // 10    1 + 2 + 3 + 4
console.log(countLetters('aaaba')); // 8
console.log(countLetters('aaaaaaaaaa')); // 55

/* 58. Length of Last Word - Easy

Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

06:40 start
*/
function lengthOfLastWord (str) {
  let arr = str.trim().split(' ');
  // arr = arr.filter(word => word !== '');
  return arr[arr.length - 1].length;
} 


console.log(lengthOfLastWord('Hello World') === 5);
console.log(lengthOfLastWord('   fly me   to   the moon  ') === 4);
console.log(lengthOfLastWord('luffy is still joyboy') === 6);

/* Given a string, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.

All the English letters (lowercase or uppercase) should be reversed.
Return the string after reversing it.

6:48 start
7:05 solved 
PROBLEM
- in: str
- out: str

Rules:
- upper or lowercase letters should be reversed in order
- all other char stay in original position 

DATA STRUCTURES
- in: str
- between: arr
- out: str

ALGO
- if length of str is less than 2, return str
init result str = ''
init alpha = ABC etc
- split and filter str for a resulting a array that is only comprised of alphabetic letter, both uppercase and lowercase
- reverse resulting arr
- iterate over original str
  - if alphabetic char,
    - result += arr[0]
    - delete first element of array
  - else
    - result =+ str[idx]
- return result
*/

// function reverseOnlyLetters (str) {
//   if (str.length < 2) return str;
//   let result = '';
//   let alpha= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let arr = str.split('').filter(char => alpha.includes(char)).reverse();

//   for (let idx = 0; idx < str.length; idx++) {
//     if (alpha.includes(str[idx])) {
//       result += arr[0];
//       arr.shift();
//     } else {
//       result += str[idx];
//     }
//   }
//   return result;
// }

console.log(reverseOnlyLetters('ab-c'));// === 'cb-a'); // "cb-a"
console.log(reverseOnlyLetters('ab-cd'));// === 'dc-ba'); // "dc-ba"
console.log(reverseOnlyLetters('a-bC-dEf-ghIj'));// === 'j-Ih-gfE-dCba'); // "j-Ih-gfE-dCba"
console.log(
  reverseOnlyLetters('Test1ng-Leet=code-Q!'));// === 'Qedo1ct-eeLg=ntse-T!'
//); // "Qedo1ct-eeLg=ntse-T!"



function reverseOnlyLetters(string) {
  let result = [];
  let letters = string.match(/[a-zA-Z]/g) || [];

  for (let idx = 0; idx < string.length; idx++) {
    let char = string[idx];
    if (/[a-zA-Z]/.test(char))
      result.push(letters.pop());
    else result.push(char);
  }

  return result.join('');
}