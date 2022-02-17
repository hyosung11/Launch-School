// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the character code is replaced by its letter (e.g. 72 becomes H)
// Note: there are no special characters used, only letters and spaces

/*

11:10 start
11:20 algorithm
11:39 stuck

Problem
- input string of `words` separated by spaces
- output new string

Rules
- return new string with char code replaced with its letter and the second and last letters of the word switched
- only letters and spaces in input string
- capitalization?

Examples
- '72olle' => replace 72 with 'H' and switch 'o' and 'e' => 'Hello'

Data Structure
- input string
- intermediary: ?
- output new string

Algorithm
- declare function `decipherThis` with `string` parameter
- split string into an array of words by spaces
- transform each word
  - separate number from letters
  - get the letter from the charcode
  - prepend the letter to the rest of the word
  - switch second letter and last letter - slice?
  - join at spaces
- return string

TEST!

*/



console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); //, 'Have a go at this and see how you do');


/* Comments on Michael's problem

11:41 started the problem
11:50 started algo
11:59 started coding
12:00 spacing of code
12:01 good to test loop
12:04 testing `toUpperCase` method 
12:07 testing `slice`
12:11 working with `slice`
12:12 index positions
12:14 getting unstuck with a hint
12:15 guard clause
12:18 solved 
*/