/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the character code is replaced by its letter (e.g. 72 becomes H)
Note: there are no special characters used, only letters and spaces

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

/* Algorithm
- declare `decipherThis` function with `string` parameter
- init `result` array
- init `words` to an array of words by splitting string at spaces

- iterate over `words` array
  - init `word` to words[idx]
  - init `codepoint` to word 
    - split into chars*
    - filter out numbers
    - join 
  - init `firstLetter` to get letter from char code by passing in codepoint
  - init `combined to `firstLetter` concatenated with word sliced at the codepoint length

  - if combined length is greater than 2
    - reassign word to combined[0] + combined[combined.length -1] + combined.slice(2, combined.length - 1 + combined[1]
      - push word to `result`
  - else push `combined` to `result`

- join `result` at spaces and return

*/

function decipherThis (string) {

  let result = [];

  let words = string.split(' ');

  for (let word of words) {

    let codepoint = word.split('').filter(char => char.match(/[0-9]+/)).join('');
    let firstLetter = String.fromCharCode(+codepoint);
    let combined = firstLetter + word.slice(codepoint.length);

    if (combined.length > 2) {
      word = combined[0] + combined[combined.length - 1] + combined.slice(2, combined.length - 1) + combined[1];
      result.push(word)
    } else {
      result.push(combined)
    }
  }

  return result.join(' ');
}

// function decipherThis(string) {
  
//   return string
//     .split(' ')
//     .map(word => lettersOnly(word))
//     .join(' ');
// }


// function lettersOnly(word) {
  
//   let array = word.split('')
//   let num = '';
  
//   for (let idx = 0; idx < array.length; idx += 1) {
//     if ('0123456789'.includes(array[idx])) {
//       num = num + array[idx];
//     }
//   }
  
//   array.splice(0, num.length);
//   array.unshift(String.fromCharCode(Number(num)))
  
//   if (array.length <= 2) {
//     return array.join('');
//   }
    
//   // console.log(array)
//   return array[0] + array[array.length - 1] + array.slice(2, array.length -1).join('') + array[1];
// }
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

/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the character code is replaced by its letter (e.g. 72 becomes H)
Note: there are no special characters used, only letters and spaces 

Algo
- declare `decipherThis` function with `string` parameter
- init `result` to empty array
- init `words` to array of words of string split by spaces
- iterate over `words` array
  - init `codepoint` digits of the word
  - init `firstLetter` to the letter from the char code of codepoint
  - init `combined` to `firstLetter` concatenated with word sliced from codepoint length to end of word

  - if combined length is greater than 2
    - reassign combined to first letter of combined plus last letter of combined plus middle letters of combined plus the second letter of combined
      - push combined to `result`
  - else
    - push combined as-is to result
- join and return `result`
*/

function decipherThis(string) {

  let result = [];
  let words = string.split(' ');

  for (let word of words) {

    let codepoint = word.match(/[0-9]+/).join('');
    let firstLetter = String.fromCharCode(codepoint);
    let combined = firstLetter + word.slice(codepoint.length)

    if (combined.length < 3) {
      result.push(combined);
    } else {
      combined = combined[0] + combined.at(-1) + combined.slice(2, -1) + combined[1];
     result.push(combined);
    }
  }

  return result.join(' ');
}

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')); //, 'Have a go at this and see how you do');