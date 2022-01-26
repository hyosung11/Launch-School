/* Reversing and Combining Text - 6 kyu

Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...
So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321" 

PROBLEM
- input string of space separated words
- output: one long string with no space 

Rules
- return a string of words that have been combined without spaces
  - if single word in string, return word
  - if two or more words
    - reverse each word
      - combine first with second and third with fourth, and so on
      - if odd number of words, leave last alone, but reverse it
  - continue combining words until only one word without spaces
- words separated by spaces

EXAMPLES
- two words: 'abc def' => 'cbafed'
- three words: 'abc def ghi' => 'cba fed ihg' --> 'cbafeding'

- five words: 'sdfsdf wee sdffg 342234 ftt' --> 'fdsfds eew gffds 432243 ttf' --> 'fdsfdseew gffds432243 ttf' --> 'gffds432243fdsfdseewttf'

- four words: 'abc def ghi jkl' --> 'cbafed ihglkj' -> 'defabcjklghi'

DATA STRUCTRURE
- input string of words separated by spaces
- intermediary: array (split, reverse, join)
- output: new string

ALGORITHM
- input string of words separated by spaces
- initialize `words` to array of strings separated by spaces from the input string
- while `words` length is greater than 1
  - reverse each element's order
  - for even indices, concatenate element at index with element at index + 1
- return
 */

function reverseAndCombineText(string) {
  let words = string.split(' ');

  while (words.length > 1) {
    words = words.map((word) => word.split('').reverse().join(''));

    for (let idx = 0; idx < words.length; idx++) {
      words[idx] = words[idx].concat(words.splice(idx + 1, 1));
    }
  }

  return words[0];
}

console.log(reverseAndCombineText('dfghrtcbafed') === 'dfghrtcbafed');
console.log(reverseAndCombineText('abc def') === 'cbafed');

console.log(reverseAndCombineText('abc def ghi jkl') === 'defabcjklghi');

console.log(reverseAndCombineText('abc def ghi jkl') === 'defabcjklghi');

console.log(
  reverseAndCombineText('234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44') ===
    'trzwqfdstrteettr45hh4325543544hjhjh21lllll'
);

console.log(
  reverseAndCombineText('sdfsdf wee sdffg 342234 ftt') ===
    'gffds432243fdsfdseewttf'
);

// Antonina
// function reverse_and_combine_text(str) {
//   let words = str.split(' ').filter((word) => word);

//   while (words.length > 1) {
//     words = words.map((word) => word.split('').reverse().join(''));
//     let newWords = [];
//     for (let idx = 0; idx < words.length; idx += 2) {
//       if (idx === words.length - 1) newWords.push(words[idx]);
//       else newWords.push(words[idx] + words[idx + 1]);
//     }

//     words = newWords;
//   }

//   return words[0];
// }

// Juan Juy
function reverse_and_combine_text(str) {
  // start up a loop as long as the input string contains a space
  while (str.includes(' ')) {
    // use an array to keep track of the modified substrings
    let subsArr = [];
    // split the full string by spaces
    let splitArr = str.split(' ');
    // loop over the split string, incrementing the index by 2 each time
    for (let idx = 0; idx < splitArr.length; idx += 2) {
      // if there is no second element (idx + 1 will be undefined)...
      if (splitArr[idx + 1] === undefined) {
        // only push the one modified value to the subsArr
        subsArr.push(splitArr[idx].split('').reverse().join(''));
      } else {
        // if there is a second value, then push both modified numbers to the subsArr
        subsArr.push(
          splitArr[idx].split('').reverse().join('') +
            splitArr[idx + 1].split('').reverse().join('')
        );
      }
    }
    // reassign str to the elements of subsArr joined by a space
    str = subsArr.join(' ');
  }
  // after breaking out of the while loop, return the new value of str
  return str;
}