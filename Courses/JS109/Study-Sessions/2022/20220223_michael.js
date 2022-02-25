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

Algorithm
- declare `canBeTypedWords()` with `text` and `letters` parameters
- init `result` to 0
- init `words` to array of words by splitting `text` at spaces

- iterate
*/

/* Background:
In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling out a word whose beginning syllable is the same as the previous player's ending syllable. 
For example, the first person would say the word ねこ, and the second player must make a word that starts with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that ends in ん, 
because there are no words that begin with ん　in the Japanese language.

English Shiritori has the same principle, with the first and last letters of words. That being said the lose condition is saying a word that doesn't start with the previous word's last letter or not saying a word quick enough.

For example: apple -> eggs -> salmon -> nut -> turkey ...

Your Task:
You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. 
If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

11:50 start

Problem
- input an array of words
- output an array of words

Rules
- return an array of words in which each element starts with the last letter of the previous
- if word doesn't start with last letter of the previous, stop iteration through array and return array with the words up to that point.
- empty array return empty array
- if element is an empty string, stop

Examples
- ['dog', 'goose' 'tiger' ...] => ['dog', 'goose'] ends because next element does not start with last letter of previous element

Data Structure
- input array of words
- inside array
- output array

Algorithm
- declare `shiritori()` with `array` parameter
- init `result` to empty array

- iterate over the array
  - if last char of word at idx

- return `result`


*/
console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]))
//,["dog","goose","elephant","tiger","rhino","orc","cat"]);
console.log(shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"]))
// //,["dog","goose"]);