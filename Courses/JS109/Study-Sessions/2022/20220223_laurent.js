/* 1470. Shuffle the Array

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7]
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].


Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]


Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]

9:08 start
09:26

Problem
- input array of nums
- output reordered array of nums

Rules
- return an array of nums of pattern x1, y1, x2, y2, xn, yn
- assume just integer inputs
- assume an even number of integers?


Examples
- [1, 1, 2, 2] => [1, 2, 1, 2]

Data Structure
- input an array
- inside an array
- output an array

Algorithm
- declare `shuffle()` with `array` parameter
- init `result` to `[]`
- init `middle` to Math.floor(array.lengh / 2)
- init `first` to array sliced from 0 to middle
- init `second` to array sliced from middle to end
- splice and push first at idx and second at idx to result array
- return result
*/

function shuffle(array) {
  let result = [];

  let middle = Math.floor(array.length / 2);
  let first = array.slice(0, middle);
  let second = array.slice(middle);

  while (result.length < array.length) {
    result.push(first.splice(0, 1), second.splice(0, 1));
  }

  return result.flat();
}

// Laurent's Version
function shuffle(array) {
  let result = [];
  let middle = array.length / 2;

  for (let idx = 0; idx < middle; idx += 1) {
    result.push(array[idx], array[middle + idx]);
  }

  return result;
}

// console.log(shuffle([1, 1, 2, 2])); //=>  [1, 2, 1, 2]
// console.log(shuffle([2, 5, 1, 3, 4, 7])); // =>  [2,3,5,4,1,7]
// console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1])); // => [1,4,2,3,3,2,4,1]

/* =========================================

1935. Maximum Number of Words You Can Type

There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.



Example 1:

Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.


Example 2:

Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.


Example 3:

Input: text = "leet code", brokenLetters = "e"
Output: 0
Explanation: We cannot type either word because the 'e' key is broken.
 

Constraints:
1 <= text.length <= 104
0 <= brokenLetters.length <= 26
text consists of words separated by a single space without any leading or trailing spaces.
Each word only consists of lowercase English letters.
brokenLetters consists of distinct lowercase English letters.

10:04 start
10:41 didn't solve

Problem
- input string called `text` and string `brokenLetters`
- output number

Rules
- return number of words from text that can be typed given broken letters
- only lowercase letters in either input

Examples
- 'leet code', 'e' => since both words in text require an 'e' no words can be typeed

Data Structure
- input `text` and `brokenLetters`
- inside 
- output number

Algorithm - incomplete
- declare `canBeTypedWords()` with `text` and `brokenLetters` parameters
- init `count` to 0
- iterate over each word of text
  - if text doest not include `brokenLetters` increment count
- return `count`

*/

// function canBeTypedWords (text, brokenLetters) {
//   let count = 0;
//   let words = text.split(' ');
  
//   // brokenLetters = brokenLetters.split('');
//   // console.log(brokenLetters)
  
//   for (let idx = 0; idx < words.length; idx += 1) { // 'leet' | 'code'
    
//     for (let jdx = 0; jdx < words[idx].length; jdx += 1) {

//       if (brokenLetters.includes(words[idx])) {
//         count = count + 1;
//         break;
//       }
//     }

//   }
//   console.log(count)
//   return words.length - count;

// }

/* Using `split` and `filter` */
const canBeTypedWords = function(text, brokenLetters) {
  const textSplit = text.split(' ');
  const brokenLetterSplit =  brokenLetters.split('');

  return textSplit.filter(word => {
    return brokenLetterSplit.every(broken => !word.includes(broken));
  }).length;
};

console.log(canBeTypedWords("leet code", "e") === 0);
console.log(canBeTypedWords("leet code", "lt") === 1);
console.log(canBeTypedWords("hello world", "ad") === 1);


const canBeTypedWords = (txt, broken) => {
  txt = txt.split(' ');
  let result = 0;
  for (let t of txt) {
    let count = 0;
    for (let j of broken) if (t.includes(j)) count++;
    if (count === 0) result++;
  }
  return result;
};
 /* */
var canBeTypedWords = function (text, brokenLetters) {
  let answer = 0;
  let arr = text.split(' ');

  for (let i = 0; i < arr.length; i++) {
    let countFlag = false;
    for (let j = 0; j < brokenLetters.length; j++) {
      if (arr[i].includes(brokenLetters[j])) {
        countFlag = true;
      }
    }
    if (!countFlag) {
      answer++;
    }
  }
  return answer;
};

const canBeTypedWords = function (text, brokenLetters) {
  const textSplit = text.split(' ');
  const brokenLetterSplit = brokenLetters.split('');

  return textSplit.filter((word) => {
    return brokenLetterSplit.every((broken) => !word.includes(broken));
  }).length;
};



var canBeTypedWords = function(text, brokenLetters) {
    const lettersArr = brokenLetters.split('') 
    const checker = word => !lettersArr.some(letter => word.includes(letter)); 
    return text.split(' ').filter(checker).length
};

/* Explanation

1. const lettersArr = brokenLetters.split('') split string of broken letters into an array of letters
2. const checker = word => !lettersArr.some(letter => word.includes(letter)); function to check if a word includes letters from the lettersArr
3. return text.split(' ').filter(checker).length; split string into array of words, filter it using the checker function, and return the length

*/

