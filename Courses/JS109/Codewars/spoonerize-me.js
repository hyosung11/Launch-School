/* Spoonerize Me - 7 kyu

A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, oftenw ith amusing results.

In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

"not picking" --> "pot nicking"

Your task is to create a function that takes a string of two words, separated by a space: `words` and returns a spoonerism of those words in a string, as in the above example.

NOTE: All input strings will contain only two words.Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOTexpected to account for these, or any other nuances involved in spoonerisms.

Once you have completed this kata, a slightly more challenging take on the idea can be found here: http://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd

Algo
- input `words` argument
- split `words` at space into an array of words
- get first letter of second word plus the letters in the first word after the first letter
- get the first letter of the first word plus the letter in the second word after the first letter
- concatenate the two words
- join the array to make it into a string
- return new string */

// function spoonerize(words) {
//   let word = words.split(' ');
//   return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ');
// }

// function spoonerize(words) {
//   let [firstWord, secondWord] = words.split(' ');
//   return `${secondWord[0] + firstWord.slice(1)} ${firstWord[0] + secondWord.slice(1)}`
// }

// function spoonerize(words) {
//   words = words.split(' ');
//   return [words[1][0] + words[0].slice(1), words[0][0] + words[1].slice(1)].join(' ');
// }

// function spoonerize(words) {
//   words = words.split(' ');
//   return words[1][0] + words[0].slice(1) + ' ' + words[0][0] + words[1].slice(1)
// }

function spoonerize(words) {
  words = words.split(' ');
  return `${words[1][0] + words[0].slice(1)} ${words[0][0] + words[1].slice(1)}`;
}

console.log(spoonerize('nit picking'));
console.log(spoonerize('nit picking') === 'pit nicking');
console.log(spoonerize('wedding bells') === 'bedding wells');
console.log(spoonerize('jelly beans') === 'belly jeans');