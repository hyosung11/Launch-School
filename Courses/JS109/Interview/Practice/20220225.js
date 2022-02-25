/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

    the first and last characters remain in original place for each word
    characters between the first and last characters must be sorted alphabetically
    punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

    words are separated by single spaces
    only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
    special characters do not take the position of the non special characters, for example: -dcba -> -dbca
    for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
    ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia 

11:45 start
11:53 algo
12:00 code
12:12 solved

Problem
- input string
- output new string

Rules
- return a new string where first and last letter are in place, middle letters sorted alphabetically and punctuation remains in place
- punctuation is hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalization
- words separated by spaces, not punctuation

Examples
- 'professionals' => 'p + aefilnoorss + s' => 'paefilnoorsss'
- 'shan't' => 's + ahn + ' + t' => 'sahn't'

- '-dcba' => '- + d + bc + a' => '-dbca'

- multiple words
'you've gotta dance like ... ' => 'y + ou + ' v + e' => 'you've' + 'gotta' (no changes) + 'dance' => 'd + acn + e' => 'dacne`

Data Structure
- input string
- inside array to map and transform each word
- output new string

Algorithm
- declare `scrambleWords()` with `string` parameter
- split string into array of words separated by spaces
- transform each word with `scrambleWord()` helper function
- join words and return

`scrambleWord()`
- input `word`
- init `result` to empty string
- init `punctuation` to "-',."

- init `letters` to string with only letters
- init `sorted` to slice of letters from 1 to letters minus last char
- init `combined` to join first char of letters with `sorted` middle letters and last char of `letters`

- init `array` to combined split by chars into an array

- iterater over string
  - if char is punctuation
    - increment result with char
  - else 
    - increment char with array element 0
    - remove first letter from array

- return result

*/

function scrambleWords(string) {
  return string
    .split(' ')
    .map((word) => scrambleWord(word))
    .join(' ');
}

function scrambleWord(word) {
  let result = '';
  let punctuation = "-',.";

  let letters = word.match(/[a-z]/gi);
  let middle = letters
    .slice(1, letters.length - 1)
    .sort()
    .join('');
  let combined = (letters[0] + middle + letters[letters.length - 1]).split('');
  // console.log(combined)

  for (let idx = 0; idx < word.length; idx += 1) {
    if (punctuation.includes(word[idx])) {
      result = result + word[idx];
    } else {
      result = result + combined[0];
      combined.shift();
    }
  }

  return result;
}

console.log(scrambleWords('professionals') === 'paefilnoorsss'); // 'The first and last letters of a word should reamin in place with the inner letters sorted')

console.log(scrambleWords("shan't") === "sahn't"); // 'Punctuation should remain at the same place as it started')

console.log(scrambleWords('card-carrying') === 'caac-dinrrryg'); // 'Only spaces separate words and punctuation should remain at the same place as it started')

console.log(scrambleWords('-dcba') === '-dbca'); // 'Must handle special character at the start')

console.log(scrambleWords('dcba.') === 'dbca.'); // 'Must handle special character at the end')

console.log(
  scrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  ) ===
    "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
);
// 'Must handle a full sentence')
