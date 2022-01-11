/* 6 kyu Stop gninnipS My sdroW

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

PROBLEM
- input: string of a word or words
- output: new string that is the same length as input string

Rules
- return a string of one or more words with all five or more letter word reversed
- string input will only be letters and spaces
- space delimits words
- keep case of original char in the returned reversed word

EXAMPLES
- see examples

DATA STRUCTURE
- input string
- intermediary: array ()
- output: new string

ALGORITHM
- input string
- split string into words at space
  - if word's length is 5 or more put word into reverseWord helper function
- join words at space
- return string */

// function spinWords(words) {
//   return words.split(' ').map(word => {
//     if (word.length >= 5) {
//       return reverseWord(word);
//     } else {
//       return word;
//     }
//   }).join(' ');
// }

// function reverseWord(word) {
//   return word.split('').reverse().join('');
// }

// refactored
function spinWords(words) {
  return words
    .split(' ')
    .map((word) => {
      if (word.length >= 5) return reverse(word);
      return word;
    })
    .join(' ');
}

function reverse(word) {
  return word.split('').reverse().join('');
}
console.log(spinWords("Welcome") === "emocleW");
console.log(spinWords("Hey fellow warriors") === "Hey wollef sroirraw");
console.log(spinWords("This is a test") === "This is a test");
console.log(spinWords("This is another test") === "This is rehtona test");
console.log(spinWords("You are almost to the last test") === "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more") === "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one") === "ylsuoireS this is the last one");
