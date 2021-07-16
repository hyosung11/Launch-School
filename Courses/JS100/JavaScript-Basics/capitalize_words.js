// Capitalize Words
// Write code that capitalizes the words in the string 'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.

/*
Problem
capitalize the words in a string

Examples
'launch school tech & talk' => 'Launch School Tech & Talk'

Data Structure
array

Algorithm
1. initialize string variable
2. split string into individual words
3. initialize an array to return capitalized words
4. loop through the string at each word
5. capitalize the first letter of each word
6. put each capitalized word in the array
7. join the words together to make the sentence
8. return the array

Code
*/

let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let index = 0; index < words.length; index += 1) {
  let word = words[index];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1))
}

console.log(capitalizedWords.join(' ')); // Launch School Tech & Talk
