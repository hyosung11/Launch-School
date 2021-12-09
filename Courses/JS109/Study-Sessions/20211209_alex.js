/* Study Session with Alex

/* Have the method letter_changes(str) take the str parameter being passed and
modify it using the following algorithm. Replace every letter in the string
with the 3rd letter following it in the alphabet (ie. c becomes f, Z becomes C).
Then return this modified string.

PROBLEM
- input: string
- output: new string

Rules
- if a letter in the string is an alphabetic letter then replace it with the third letter following it in the alphabet
- once we hit z reset to a
- if the original letter is capitalized its replacement is also capitalized
- any non-alphabetic chars remain non-alphabetic
- spaces will also be maintained

Examples

DATA STRUCTURE
- input: string
- intermediary: array
- output: string

ALGORITHM
- input a string
-create alphabet string in which each letter of the alphabet is an element 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
'XYZABCxyzabc'
- split the string by chars
- iterate through each char in the array
  -if its x, y, or z, increase index position in xyz string by 3
  else if its in alphabet string, increase its index position in alphabet string by 3
  -else keep character
- return a new string */

function letterChanges(string) {
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const XYZSTRING = 'XYZABCxyzabc';

  return string
    .split('')
    .map(char => {
      if ("xyzXYZ".includes(char)) {
        return XYZSTRING[XYZSTRING.indexOf(char) + 3]
      } else if (ALPHABET.includes(char)) {
        return ALPHABET[ALPHABET.indexOf(char) + 3]
      } else {
        return char;
      }
    })
    .join('')
}

// console.log(letterChanges('xyz')) // => abc

console.log(letterChanges('xyz') === ('abc'))
console.log(letterChanges("this long cake@&") === "wklv orqj fdnh@&")
console.log(letterChanges("Road trip9") === "Urdg wuls9")
console.log(letterChanges("EMAILZ@gmail.com") === "HPDLOC@jpdlo.frp")


