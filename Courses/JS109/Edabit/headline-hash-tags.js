/* Headline Hash Tags

Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. If multiple words tie for the same length, retrieve the word that occurs first.

Examples

getHashTags("How the Avocado Became the Fruit of the Global Trade")
➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science")
➞ ["#visualizing", "#science"]

Notes
- If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).
- Punctuation does not count towards a word's length.

PROBLEM
- input string of words as a headline
- output array of top three longest words hashtagged from longest to shortest

Rules
- return an array of the three longest words from the input string in descending order of length preceded by a hashtag
- if multiple words have the same length, return the words in the same order as they appear in the input string
- if title is less than 3 words, order words the words in descending order of length
- return words in lowercase
- punctuation does not count toward a word's length

EXAMPLES
- ('Visualizing Science') => ['#visualizing', '#science']
- ('How the Avocado Became the Fruit of the Global Trade') => ['#avocado', '#became', '#global']

DATA STRUCTURE
- input string of words
- intermediary: array
- output: array of strings

ALGORITHM
- input string of words which is a headline
- initialize `result` to empty array
- lowercase the string and split it into an array of words with punctuation removed
- sort the words in the array by length
- push the three longest words into the array with a hashtag prefix
  - how to deal with words of the same length and keeping them in order?
- return `result` array of hashtagged words in descending order of word length
*/

// my butchered code
// function getHashTags(str) {
//   str = str.toLowerCase();
//   let words = headline.replace(/[^a-z]/g, ' ').split(' ').sort((a, b) => b.length - a.length)

//   if (words.length < 3) return [`#${words[0]}`, `#${words[1]}`]

//   return [`#${words[0]}`, `#${words[1]}`, `#${words[2]}`]
// }

// function getHashTags(string) {
//   return string
//     .toLowerCase()
//     .replace(/[^a-z ]/gi, '')
//     .split(' ')
//     .sort((a, b) => b.length - a.length)
//     .slice(0, 3)
//     .map(word => `#${word}`);
// }

// function getHashTags(str) {
//   return str
//     .replace(/[^a-z ]/gi, '')
//     .toLowerCase()
//     .split(' ')
//     .sort((a, b) => b.length - a.length)
//     .slice(0, 3)
//     .map((x) => `#${x}`);
// }

function getHashTags(string) {
  return string
    .match(/\w+/g)
    .sort((a, b) => b.length - a.length)
    .slice(0, 3)
    .map(word => `#${word.toLowerCase()}`);
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade")) // ["#avocado", "#became", "#global"]);

console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")); // ["#christmas", "#probably", "#will"])

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")); // ["#surprise", "#parents", "#fruit"])

console.log(getHashTags("Visualizing Science")); // ["#visualizing", "#science"])

console.log(getHashTags("Minecraft Stars on Youtube Share Secrets to Their Fame")); // ["#minecraft", "#youtube", "#secrets"])

// console.log(getHashTags("Are You an Elite Entrepreneur?")); // ["#entrepreneur", "#elite", "#are"])