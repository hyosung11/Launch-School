/* ===================================================

1. Pete, the Baker - 5 kyu

Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in math. Can you help him to find out, how many cakes he could bake considering his recipes?

Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

09:52 start
09:57 algo done
10:01 end

Problem
- input `recipe` object and `available` object`
- output number of cakes that can be made

Algo
- declare `cakes` function with `recipe` object and `available` object
- init `result` to empty array
- if `available` does not include item required in `recipe` return 0
- iterate through `recipe` object
  - divide available item value by the recipe item value
    - push the lowest integer value to `result`
- return the minimum value from the `result` array */

// function cakes(recipe, available) {
//   let result = [];

//   for (let item in recipe) {
//     if (available.hasOwnProperty(item) === false) return 0;
//     else result.push(Math.floor(available[item] / recipe[item]));
//   }

//   return Math.min(...result);
// }

// // Examples
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// ); // must return 2

// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// ); // must return 0

/* =======================================================

2. Triple Double

Write a function that takes two integer numbers and returns whether `num1` has consecutive triple digits of any number, and whether `num2` has consecutive double digits of that same number.

10:15 start
10:19 algo
10:27 got stuck because can't use `match` on an array
10:30 peeked at answer and then changed my code to run correctly


Problem
- input num1 and num2
- output boolean

Algo
- declare `tripleDouble` function with parameters `num1` and `num2`
- reassign num1 to string of numbers
- reassign num2 to string of numbers
- iterate through num1 as a string
  - if num1 matches num1 at idx and num1 at idx and num1 at idx &&
    num2 matches num1 at idx and num1 at idx
      - return true
- return false

*/

function tripleDouble(num1, num2) {
  num1 = String(num1)
  num2 = String(num2)

  for (let idx = 0; idx < num1.length; idx += 1) {

    if (num1.match(num1[idx] + num1[idx] + num1[idx]) &&
       num2.match(num1[idx] + num1[idx])) {
        return true;
    }
  }

  return false;
}

// console.log(tripleDouble(451999277, 41177722899) === true);
// console.log(tripleDouble(444555, 544) === true);
// console.log(tripleDouble(12555, 544) === false);
// console.log(tripleDouble(12345, 12345) === false);
// console.log(tripleDouble(10000, 10000) === true);

/* Triple Double

Write a function that takes two integer numbers and returns whether `num1` has consecutive triple digits of any number, and whether `num2` has consecutive double digits of that same number.

10:36 start again
10:38 algo done
10:42 solved

Problem
- input num1 and num2
- output boolean

Algo
- declare `tripleDouble` with `num1` and `num2` as parameters
- convert `num1` to string
- convert `num2` to string
- iterate through `num1`
  - if `num1` matches num1 at idx 3 times && num2 matches num1 at idx 2 times
    - return true
- return false
*/

function tripleDouble(num1, num2) {
  num1 = String(num1);
  num2 = String(num2);

  for (let idx = 0; idx < num1.length; idx += 1) {

    if (num1.match(num1[idx] + num1[idx] + num1[idx]) &&
      num2.match(num1[idx] + num1[idx])) return true;
  }

  return false;
}

// console.log(tripleDouble(451999277, 41177722899) === true);
// console.log(tripleDouble(444555, 544) === true);
// console.log(tripleDouble(12555, 544) === false);
// console.log(tripleDouble(12345, 12345) === false);
// console.log(tripleDouble(10000, 10000) === true);

/* ===================================================================

3. Clean String

Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

"abc#d##c"      ==>  "ac"

'abc#d##c' --> ac

"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

11:02 start
11:05 algo done
11:07 solved

problem
- input string
- output new string

algo
- declare `cleanString` with `string` parameter
- init `result` to empty array
- iterate through string
  - if char is not a '#' push to `result`
  - else pop char from `result`
- join and return `result`

*/

function cleanString(string) {
  let result = [];

  for (let idx = 0; idx < string.length; idx += 1) {

    if (string[idx] !== '#') result.push(string[idx]);
    else result.pop();
  }

  return result.join('');
}

console.log(cleanString('abc#d##c')); //"ac"
console.log(cleanString('abc####d##c#')); //''

/* =======================================================

4. Increment String

Write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number, the number 1 should be appended to the new string.
If the number has leading zeros the amount of digits should be considered.

11:24 start
11:29 algo
11:36 solved in 12 minutes

problem
- input string
- output new string

Algo
- declare `incrementString` with `string` parameter
- if string length is 0, return '1'
- init `letters` to empty string
- init `numbers` to empty string

- iterate through input string
  - if char is a letter
    - increment `letters`
  - else increment `numbers`

- init `digits` to String of Number of `numbers` plus 1

- while digits length is less than numbers length
  - increment digits with leading '0' and digit

- return letters plus digits

*/

function incrementString(string) {
  if (string.length === 0) return '1';

  let letters = '';
  let numbers = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx].match(/[a-z]/)) letters = letters + string[idx];
    else numbers = numbers + string[idx];
  }

  let digits = String(Number(numbers) + 1);

  while (digits.length < numbers.length) {
    digits = '0' + digits;
  }

  return letters + digits;
}

// console.log(incrementString('') === '1');
// console.log(incrementString('foo') === "foo1");
// console.log(incrementString('foobar000')  === "foobar001");
// console.log(incrementString('foobar001') === 'foobar002');
// console.log(incrementString('foobar99') === 'foobar100');
// console.log(incrementString('foobar099') === 'foobar100');

/* ========================================================

5. Reversing and Combining Text - 6 kyu

Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...

So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on... (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

13:25 start
13:29 algo done
13:36 done, but had to peek because I didn't understand why `splice` was not a function

problem
- input string of words
- output string of length 1

algorithm
- declare `reverseAndCombineText` with `string` parameter

- init `words` to split of string into an array of words

- while words length is greater than 1
  - transform each word
    - split by char
    - reverse char
    - join char

  iterate through words
    - take word at idx and concat with words spliced at idx + 1, with one element

- return the first word in `words` otherwise it will be an array element rather than a string

*/

function reverseAndCombineText(string) {

  let words = string.split(' ');

  while (words.length > 1) {

    words = words.map(word => word.split('').reverse().join(''));

    for (let idx = 0; idx < words.length; idx += 1) {

      words[idx] = words[idx].concat(words.splice(idx + 1, 1))

    }
  }

  return words[0]
}

// console.log(reverseAndCombineText('dfghrtcbafed') === 'dfghrtcbafed');

// console.log(reverseAndCombineText('abc def') === 'cbafed');

// console.log(reverseAndCombineText('abc def ghi jkl') === 'defabcjklghi');

// console.log(
//   reverseAndCombineText('234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44') ===
//     'trzwqfdstrteettr45hh4325543544hjhjh21lllll'
// );

// console.log(reverseAndCombineText('sdfsdf wee sdffg 342234 ftt') === 'gffds432243fdsfdseewttf'
// );

/* =======================================================

6. Common Chars

Given an array of strings made only form lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

14:18 start
14:21 algo done
14:27 done - remembered it well and had no issues writing the code

problem
- input array of words
- output array of letters that are inc common to all words of input array

algo
- declare `commonChars` with `array` parameter
- init `result` to empty array

- iterate through first element in array
  - if every element of the array includes the char of the first array element
    - push char to `result` array

    - iterate from second element in the array
      - replace the char at jdx in subsequent elements with an empty string

- return `result`*/

function commonChars(array) {

  let result = [];

  for (let idx = 0; idx < array[0].length; idx += 1) {
    if (array.every(element => element.includes(array[0][idx]))) {
      result.push(array[0][idx])
    }

    for (let jdx = 1; jdx < array.length; jdx += 1) {
      array[jdx] = array[jdx].replace(array[0][idx], '');
    }
  }

  return result;
}

// console.log(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
// console.log(commonChars(['a', 'b'])) // []
// console.log(commonChars(['ab', 'bc'])) // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])) // ['e','l','l']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])) // [o]
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrr', 'yyyzzz'])) // []

/* =================================================

7. 1180. Count Substrings with Only One Distinct Letter

Given a string s, return the number of substrings that have only one distinct letter.

EXAMPLES
- 'aaaba' => 8

Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8

16:42 start
16:48 algo (data structure?)
16:57 solved and able to debug my code

problem
- input string
- output number

algo
- declare `countLetters` with `string` parameter
- init `substring` to getSubstrings() helper function
- iterate through substrings
  - return length of the array of filtering and finding every substring whose letters are all the same
  - `every` element, idx, array

`getSubstrings`
- input string
- init `substring` to empty array
- iterate through string by char
  - iterate from string at char + 1
    - slice string from idx, jdx and push to `substrings`
- return `substrings`

*/

function countLetters(string) {
  let substrings = getSubstrings(string);

  return substrings.filter(substring => substring.split('').every((char, _, array) => char === array[0])).length;
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

// console.log(countLetters('')); // 0
// console.log(countLetters('a')); // 1   1
// console.log(countLetters('ab')); // 2
// console.log(countLetters('aa')); // 3   1 + 2
// console.log(countLetters('aaa')); // 6    1 + 2 + 3
// console.log(countLetters('aab')); // 4
// console.log(countLetters('aaaa')); // 10    1 + 2 + 3 + 4
// console.log(countLetters('aaaba')); // 8
// console.log(countLetters('aaaaaaaaaa')); // 55

/* ===================================================

8. Substring Instance Count

Return the number of times a search-string is found within the given searchable string.
Assume that both inputs will only be strings.
Assume that all characters are important.
Assume the searchable string will always be provided as an argument.
Return `-1` if the search-string is empty or missing.
Solve without using Regex.

17:09 start
17:13 algo done
17:17 solved with `split`

problem
- input `fullText` and `searchText`
- output number

algo
- declare `countSubstring` with `fullText` and `searchText` as parameters
- if `fullText` is sn empty string return 0
- if `searchText` is empty or undefined return -1

- return the length minus one of splitting the `fullText` by the `searchText`

*/

function countSubstring(fullText, searchText) {
  if (!fullText) return 0;
  if (!searchText) return -1;

  return fullText.split(searchText).length - 1;
}

/* Another Version

Algo
- declare `countSubstring` with `string` and `substring` parameters
- if `string` is empty return 0
- if `substring` is empty or undefined, return -1

- init `count` to 0

- iterate over string
  - if a slice of the string from idx to idx + 2 equals substring
    - increment count
    - increment idx by substring's length

- return count */

function countSubstring(string, substring) {

  if (!string) return 0;
  if (!substring) return - 1;

  let count = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string.slice(idx, idx + substring.length) === substring) {
      count = count + 1;
      idx = idx + substring.length;
    }
  }

  return count;
}

// Tests
// console.log(countSubstring('', 'abbb') === 0);
// console.log(countSubstring('aaaaa', '') === -1);
// console.log(countSubstring('aaaaa') === -1);

// console.log(countSubstring('aa_bb_cc_dd_bb_e_b', 'bb') === 2);
// console.log(countSubstring('aaabbbcccc', 'ccc') === 1);
// console.log(countSubstring('bbAaaaA', 'Aa') === 1);

/* ===================================================

9. Second to Last Capitalized

Given a string of words or a single word
return the string with the second to last occurrence of each letter capitalized.

Examples:
'hownowbrncow' => howNOWbrncow
'chickenbiscuits' => chiCkenbIScuits
'aabab' => 'aABab' 

aa // Aa
aaa // aAa

18:40 start
18:46 algo done but a little fuzzy about whether I need a `result` array
18:53 solved but made a couple of mistakes where I placed the `===` in the wrong place and I used `===` instead of `=`.

problem
- input string
- output new string

algo
- declare `secondToLastCap()` with `string` parameter
- init `count` to empty object
- init `array` to split of string into chars

- iterate over array in reverse
  - add char to `count` or
  - increment `count` with char
  - if value of char in count is 2
    - change char to uppercase

- join and return `array`

*/

function secondToLastCap(string) {
  let count = {};
  let array = string.split('');

  for (let idx = array.length - 1; idx >= 0; idx -= 1) {
    let char = array[idx];
    count[char] = count[char] + 1 || 1;
    if (count[char] === 2) {
      array[idx] = char.toUpperCase();
    }
  }

  return array.join('');
}

console.log(secondToLastCap('aaa')); // aAa
console.log(secondToLastCap('aabaa')); // aabAa
console.log(secondToLastCap('aabab')); // aABab
console.log(secondToLastCap('hownowbrncow'));  // howNOWbrncow

/* ===================================================

10. Find the Missing Letter

Write a function that takes an array of consecutive (increasing)
letters as input and that returns the missing letter in the array.

19:03 start
19:07 algo done
19:14 done - seemed easy and I liked using slice from Alex instead of making a first, last, and section variables

problem
- input array of letters
- output missing letter

algo
- declare `findMissingLetter` function with `array` parameter
- init `alphabet` to 'a-z'
- if first element in array is uppercase
  - uppercase `alphabet`

- init `section` to slice of `alphabet` from first element of array to last element plus one to account for the missing letter

- iterate over `section`
  - if `array` does not include element in `section`
    - return element from section

*/

function findMissingLetter(array) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  if (array[0] === array[0].toUpperCase()) {
    alphabet = alphabet.toUpperCase();
  }

  let section = alphabet.slice(alphabet.indexOf(array[0]), alphabet.indexOf(array[array.length - 1]) + 1)

  for (let idx = 0; idx < section.length; idx += 1) {
    if (!array.includes(section[idx])) return section[idx];
  }

}

// console.log(findMissingLetter(['a', 'b', 'd']) === 'c');
// console.log(findMissingLetter(['b', 'c', 'e']) === 'd');
// console.log(findMissingLetter(['Q', 'R', 'T']) === 'S');
// console.log(findMissingLetter(['a','b','c','d','f']) === 'e');
// console.log(findMissingLetter(['O','Q','R','S']) === 'P');