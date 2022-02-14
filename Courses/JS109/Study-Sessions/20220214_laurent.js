/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each word are scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically.

Requirement
return a string where:
-the first and last characters remain in their original place for each word
- characters between the first and last characters must be sorted alphabetically
- punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions
- words are separated by single spaces
- only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
- special characters do not take the position of the non special characters, for example: -dcba -> -dbca
- for this kata punctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalization

PROBLEM
Input: string
Output: string
Rules: - don't touch the first and last characters
         - don't touch first letter if punctuation before
         - don't touch last letter if punctuation after
       - sort letters in between alphabetically
       - don't move non-letters characters

EXAMPLES

ALGORITHM
Approach 1: divide and conquer in place => break everything into its different components:
  - the non-letters characters => keep at the same place
  - first and last letters => keep at the same place
  - in-between letters => sort alphabetically

object to store non-moving characters
array to store non-moving characters => empty spots

['a', 'c', 'b', 'b']

Algorithm
declare sortedInBetweenLetters
  - filter out non-letter characters
  - remove first and last letters
  - sort the letters

declare metFirstLetter = false

iterate over the string character by character
  if the character is a non-letter character, leave where it is
  if sortedInBetweenLetters length is 0, leave the character where it is

  if the value of metFirstLetter is false and the character is a letter
    metFirstLetter = true
    leave the character where it is
  if the value of metFirstLetter is true and the character is a letter
    replace by the alphabetically sorted in-between letters (shift the sortedInBetweenLetters)

return the string
*/

function scrambleWords(string) {
  const putWordInOrder = (word) => {
    let sortedInBetweenLetters = word
      .split('')
      .filter((char) => char.match(/[a-z]/));

    sortedInBetweenLetters.shift();
    sortedInBetweenLetters.pop();
    sortedInBetweenLetters.sort();

    let metFirstLetter = false;

    for (let idx = 0; idx < word.length; idx += 1) {
      if (word[idx].match(/[^a-z]/)) continue;
      if (sortedInBetweenLetters.length === 0) continue;
      if (metFirstLetter === false && word[idx].match(/[a-z]/)) {
        metFirstLetter = true;
        continue;
      }

      if (metFirstLetter === true && word[idx].match(/[a-z]/)) {
        word =
          word.slice(0, idx) +
          sortedInBetweenLetters.shift() +
          word.slice(idx + 1);
      }
    }

    return word;
  };

  return string
    .split(' ')
    .map((word) => putWordInOrder(word))
    .join(' ');
}

console.log(scrambleWords('') === '');
console.log(scrambleWords('ab') === 'ab');
console.log(scrambleWords('abc') === 'abc');
console.log(scrambleWords('acbb'));
console.log(scrambleWords('-ab-') === '-ab-');
console.log(scrambleWords('-acbb-') === '-abcb-');
console.log(scrambleWords('professionals') === 'paefilnoorsss');
console.log(scrambleWords("shan't") === "sahn't");
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg');
console.log(scrambleWords('-dcba') === '-dbca');
console.log(scrambleWords('dcba.') === 'dbca.');

console.log(
  scrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  ) ===
    "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
);
// 'Must handle a full sentence')
