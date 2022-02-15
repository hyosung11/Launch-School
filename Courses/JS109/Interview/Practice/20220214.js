/* 5 kyu Typoglycemia Generator

Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

-the first and last characters remain in original place for each word
- characters between the first and last characters must be sorted alphabetically
- punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions
- words are separated by single spaces
- only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
- special characters do not take the position of the non special characters, for example: -dcba -> -dbca
- for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
- ignore capitalization

17:12 start again
17:18 end algo
17:28 solved seamlessly with even a few new wrinkles like for ... of loop

Problem
- input string
- output new string

Algorithm
- declare `scrambleWord` function with `string` parameter
- split string into an array of words
- transform each word using `scramble` helper function
- join string
- return string

`scramble` helper function
- input word
- init `result` to empty string
- init `letters` to empty array
- init `init` punctuation to "-',."

- iterate over word
  - if puncutation doesn't include the char
    - push char to `letters`

- init `sortedLetters` to slice of `letters` from second letter to second to last letter, sorted
- add first letter from `letters` to `sortedLetters`
- add last letter from `letters` to `sortedLetters`

- iterate over word
  - if char is punctuation
    - increment result with char
  - else increment result with first letter of sortedLetters
    - remove first letter from sortedLetters

- return `result`
*/

function scrambleWords(string) {
  return string
    .split(' ')
    .map((word) => scramble(word))
    .join(' ');
}

function scramble(word) {
  let result = '';
  let letters = [];
  let punctuation = "-',.";

  for (let char of word) {
    if (!punctuation.includes(char)) letters.push(char);
  }

  let sortedLetters = letters.slice(1, letters.length - 1).sort();
  sortedLetters.unshift(letters[0]);
  sortedLetters.push(letters[letters.length - 1]);

  for (let idx = 0; idx < word.length; idx += 1) {
    if (punctuation.includes(word[idx])) result = result + word[idx];
    else {
      result = result + sortedLetters[0];
      sortedLetters.shift();
    }
  }

  return result;
}

console.log(scrambleWords("shan't") === "sahn't");
console.log(scrambleWords('card-carrying') === 'caac-dinrrryg');
console.log(scrambleWords('-dcba') === '-dbca');
console.log(scrambleWords('dcba.') === 'dbca.');
console.log(scrambleWords('professionals') === 'paefilnoorsss');

console.log(
  scrambleWords(
    "you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
  ) ===
    "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
);

/* 2. Non-Repeating Substring

Get the longest substring in a string that does not contain any repeating characters. 

20:28 start

Problem
- input string
- output substring

Algorithm
- declare `nonRepeatingSubstring` function with `string` parameter
- init `substrings` to getSubstrings helper function
- transform substrings
  - split substring into chars
  - filter array
  - every element at idx of array whose index of element is equal to idx
  - sort by longest and return the first element
  - join
*/

function nonRepeatingSubstring(string) {
  
  let substrings = getSubstrings(string);
  
  return substrings
    .map(substring => substring.split(''))
    .filter(array => array
    .every((char, idx, array) => array.indexOf(char) === idx))
    .sort((a, b) => b.length - a.length)[0]
    .join('')
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


console.log(nonRepeatingSubstring("aa") === 'a'); // 'a'
console.log(nonRepeatingSubstring("aAa") === 'aA'); // 'aA'
console.log(nonRepeatingSubstring("abcdefabdhh") === 'abcdef'); // 'abcdef'
console.log(nonRepeatingSubstring("fgrjnr9e7g") === 'jnr9e7g'); // 'jnr9e7g'

