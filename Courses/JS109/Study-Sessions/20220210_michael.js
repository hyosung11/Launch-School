/* Reverse and Combine Text - Michael */

/* 11:25 start
11:43 coding
12:00
Reversing and Combining Text - 6 kyu

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

PROBLEM: 
  intput: string; that has mutliple words
  output: string; one word each word is reversed

  rules:
    if the string has not spaces then return the string 
    string has atleast 1 space; then reverse;

 Example / Test Cases:
  'abc def ghi jkl') === 'defabcjklghi' - 1st and 2nd - revresed; 
  3rd and fouth reversed and joined; 1st and second are reversed then joined;

DATA STRUCTURE:
  array for words;
  iterate through words; reverse; join;
  input: string
  output: string; one word each word is reversed     

ALGO:
  define the function with para string;
    init array --- word
  while the length is 1 until the length of the arrayOfWords
    iterate through the word
      save word = reverse and join word;
        ietrate through array;
          save to newEle = reverse each word;
            return newEle;

*/
/* 

12:04 start

Given an array of strings made only form lowercase letters, return an array of all characters that show up in all strings within the given array (including duplicates). For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer. 

Problem
- input string
- output array

Rules
- return an array of letters that occur in both strings
- all input letters in lowercase
- if a letter appears more than once in each string, return that many occurrences of that letter in the result array
- if no matches in any of the strings return an empty array

Examples
- reviewed

Data Structure
- input an array of two or more strings
- intermediary: array 
- output array of letters

Algorithm
- input array of strings/words
- init `result` array to [];
- iterate through array's first element
  - iterate through chars of the first element
  - if every element includes the char
    - push char to `result`
  - iterate from next element in the array
    - replace char in elements after the first element with an empty string
- return `result`
*/

function commonChars(words) {
  let result = [];

  for (let idx = 0; idx < words[0].length; idx++) {
     if (words.every(element => element.includes(words[0][idx]))) {
        result.push(words[0][idx]);
    }

    for (let jdx = 1; jdx < words.length; jdx++) {
      words[jdx] = words[jdx].replace(words[0][idx], '');
    }

  }

  return result;
}

console.log(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
console.log(commonChars(['a', 'b'])) // []
console.log(commonChars(['ab', 'bc'])) // ['b']
console.log(commonChars(['bella', 'label', 'roller'])) // ['e','l','l'] 
console.log(commonChars(['cool', 'lock', 'cook'])) // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])) // [o]
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrr', 'yyyzzz'])) // []

/* I had to look up using the second loop to get rid of already used chars!
12:39
 */
