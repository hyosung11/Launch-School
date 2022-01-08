// function disemvowel(string) {
//   return string.replace(/[aeiou]/gi, '');
// }

function disemvowel(string) {
  return string
    .split('')
    .filter((char => !['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())))
    .join('');
}

/*
Problem
  - input: a string
  - output: a new string

  - explicit rules
    - remove the vowels from input string
    - vowels include [Aa Ee Ii Oo Uu]; not y
      - y is not a vowel here
    - maintain all other characters/
    - replace the vowels with nothing(empty string)

    - questions:
      - what if input string is empty?
        - just return an empty new string
      - can expect any valid string characters? not just whitespace, letters,punctuation
      - if we get invalid input, do we need to return a specific value/message/raise an error?
      - missing args/ too many args?
        - if missing value set default to '' empty string
  -

- algorithm
  - assign default arg value to '' empty string
  - replace all instances of vowels with empty string; return that

*/

function disemvowel(text = '') {
  let vowelRegex = /[AaEeIiOoUu]/g;
  return text.replace(vowelRegex, '');
}

console.log(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!");
console.log(disemvowel("") === ""); // input empty string, return new empty string
console.log(disemvowel() === ""); // missing input: return empty string
console.log(disemvowel("hiya") === "hy"); // one word
console.log(disemvowel("Peet") === "Pt"); // two vowels next to eachother
