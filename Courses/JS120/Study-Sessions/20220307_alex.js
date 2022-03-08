/* =============================================

884. Uncommon Word from Two Sentences - Leetcode

A sentence is a string of single-space separated words where each word consists only of lowercase letters.

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

Constraints:

s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.


6:06 start
06:15 

PROBLEM
- in: str1, str2
- out: arrof words that occur once in str1 and str2 combine

Rules:
- return arr of all words that occur once in str1 and str2 combined
- words are seaparated by spaces
- everything is lowercase
- no punctuation

ALGO
- str = str 1 + ' ' + str 2
- init obj = {}
- split str by spaces

- iterate through; if obj[property]exists increment by 1; if not, create it

return Object keys filtered for those keys having a vaue of 1

*/
function uncommonFromSentences(str1, str2) {
  let str = str1 + ' ' + str2;
  let obj = {};

  str.split(' ').forEach((word) => {
    obj[word] ? (obj[word] += 1) : (obj[word] = 1);
  });

  return Object.keys(obj).filter((word) => obj[word] === 1);
}

console.log(uncommonFromSentences('apple apple', 'banana'));
// // Output: ["banana"]

console.log(uncommonFromSentences('this apple is sweet', 'this apple is sour'));
// // //  Output: ["sweet","sour"]

/* Reversing and Combining Text - 6 kyu

Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...
So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

06:21
06:32

PROBLEM
- in: str
- out: str

Rules:
- reverse and combine pairs of words until there is only one word left
- if length is 1, return str
- words are separate by spaces

DATA
- str
- arr
- str

ALGO
- init arr = split str

- while length of arr > 1:
  - reverse each element
  - concatenate each element to element at idx + 1 spliced
return arr[0]
*/

function reverseAndCombineText (str) {
  let arr = str.split(' ');
  
  while (arr.length > 1) {
    arr = arr.map(el => el.split('').reverse().join(''));
    
    for (let idx = 0; idx < arr.length; idx++) {
      arr[idx] = arr[idx].concat(arr.splice(idx + 1, 1));
    }
  }
  return arr[0];
}
console.log(reverseAndCombineText('dfghrtcbafed') === 'dfghrtcbafed');

console.log(reverseAndCombineText('abc def') === 'cbafed');

console.log(reverseAndCombineText('abc def ghi jkl') === 'defabcjklghi');

console.log(
  reverseAndCombineText('234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44') ===
    'trzwqfdstrteettr45hh4325543544hjhjh21lllll'
);

console.log(reverseAndCombineText('sdfsdf wee sdffg 342234 ftt') === 'gffds432243fdsfdseewttf'
);

/* Numbers in Strings - edabit Hard

Create a function that takes an array of strings and returns an array
with only the strings that have numbers in them.
If there are no strings containing numbers, return an empty array.

Examples

numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]

numInStr(["abc", "abc10"]) ➞ ["abc10"]

numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]

numInStr(["this is a test", "test1"]) ➞ ["test1"]

Notes

    The strings can contain white spaces or any type of characters.
    Bonus: Try solving this without RegEx.


06:35 start

ALGO
return arr filtered for those that containNums()

containNums (str)
return str split.some(char => '0123456789'.includes(char))


*/
function numInStr (arr) {
  return arr.filter(word => containsNum(word));
}

function containsNum (str) {
  return str.split('').some(char => '0123456789'.includes(char));
}

console.log(numInStr(['abc', 'abc10'])); // ['abc10'])
console.log(numInStr(['abc', 'ab10c',  'a10bc', 'bcd'])); // ['ab10c', 'a10bc'])
console.log(numInStr(['1', 'a' , ' ' ,'b'])); // ['1'])
console.log(numInStr(['rct', 'ABC', 'Test', 'xYz'])); // [])
console.log(numInStr(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz'])); // ['10xYZ', 'xy2K77', 'Z1K2W0'])
console.log(numInStr(['-/>', '10bc', 'abc '])); // ['10bc'])

/* Decipher This - 6 kyu

6:45 start

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

- the second and the last letter is switched (e.g. Hello becomes Holle)
- the character code is replaced by its letter (e.g. H becomes 72)

Note: there are no special characters used, only letters and spaces 

PROBLEM
- in: str
- out: str

Rules: 
- swap second and last letter
- translate num into first char

ALGO
return str split by spaces and mapped to decode(word) and joined by spaces

decode(str)
- init num = ''
- loop through str:
  - if '0123456789' includes char num += char
return String.fromCharCode(num) + str[str.length - 1] + str.slice(num.length + 1, str.length - 1) + str[num.length]'

*/
function decipherThis (str) {
  return str.split(' ').map(word => decode(word)).join(' ');
}

function decode(str) {
  let numStr = '';
  for (let idx = 0; idx < str.length; idx++) {
    if ('0123456789'.includes(str[idx])) numStr += str[idx];
  }
  return String.fromCharCode(numStr) + str[str.length - 1] + str.slice(numStr.length + 1, str.length - 1) + str[numStr.length];
}
console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); // 'Have a go at this and see how you do')