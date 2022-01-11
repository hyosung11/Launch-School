/* Kebabize 6 kyu

Modify the kebabize function so that it converts a camel case string into a kebab case.

Notes:
the returned string should only contain lowercase letters

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps

PROBLEM
- input: string
- output: new string

Rules
- convert camelCase string to kebab case
  e.g., 'myCamelCasedString' => 'my-camel-cased-string
- the returned string should only contain lowercase letters
  - no numbers

EXAMPLES
- see examples

DATA STRUCTURE
- input: string
- intermediary: array (map?)
- output: new string

ALGORITHM
- input string
- iterate through each char of string
  - char is not a letter do not return it
  - if char is uppercase
    - add hyphen before uppercase
    - turn uppercase char to lowercase
  - join string
- return new string */

function isLower(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isUpper(letter) {
  return letter >= 'A' && letter <= 'Z';
}

function kebabize(camelCase) {
  let kebab = '';
  for (let character of camelCase) {
    if (isLower(character)) {
      kebab += character;
    } else if (isUpper(character)) {
      if (kebab !== '') {
        kebab += '-';
      }
      kebab += character.toLowerCase();
    }
  }
  return kebab;
}

// console.log(lettersString('myCamelHas3Humps'));

// console.log(kebabize('myCamelHas3Humps'));
// console.log(kebabize('myCamelCasedString'));
console.log(kebabize('sdf'));
console.log(kebabize('myCamelCasedString') === 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps') === 'my-camel-has-humps');

function kebabize(camelCase) {
  let kebab = '';
  for (let character of camelCase) {
    if (character >= 'a' && character <= 'z') {
      kebab += character;
    } else if (character >= 'A' && character <= 'Z') {
      if (kebab === '') {
        kebab += character.toLowerCase();
      } else {
        kebab += '-' + character.toLowerCase();
      }
    }
  }
  return kebab;
}

/*
INPUT: string
OUTPUT: string

RULES
- create a function that converts a camel case string into a kebab case.
- ignore numbers
- assume a valid string will always be given

DATA STRUCTURE
- string

ALGORITHM
- create a result variable and set to empty string
- convert input string into an array of characters
- filter out all the characters that are no alphabetic (ignore numbers) and join back into string
- traverse the letters in filtered string
  - if the current character is uppercase
    - if the current index is 0
      - lowercase the current character
      - concatenate to result string
    - otherwise
      - concatenate a hyphen (-) to the result string variable
      - lowercase the current character
      - concatenate the current character to result string variable
  - otherwise
    - concatenate the current character as is
- return the result string variable

Helper functions
- isAlphabetic(letter): string -> boolean
- isUpperCase(letter): string -> boolean
*/

function isAlphabetic(letter) {
  return /[a-zA-Z]/.test(letter);
}

function isUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function kebabize(str) {
  let kebabCaseString = "";
  let letters = str.split('').filter(char => isAlphabetic(char));
  
  for (let idx = 0; idx < letters.length; idx += 1) {
    let letter = letters[idx];
    if (isUpperCase(letter)) {
      if (idx === 0) {
        kebabCaseString += letter.toLowerCase()
      } else {
        kebabCaseString += "-";
        kebabCaseString += letter.toLowerCase();
      }
    } else {
      kebabCaseString += letter;
    }
  }
  return kebabCaseString;
}

/*
Input: string
Output: string
Rules
- modify the camelCase input string and turn it into kebabCase
- the returned string should only contain lowercase letters

Algorithm
- create result empty string
- iterate over the input string
  - append each chararcter to result if it is a letter
    - use isLetter helper function
  - if the current character (is a letter) and is uppercase, append a '-' to result, lowercase the word and then append it
  to result
- return result after the loop terminates
*/

function kebabize(str) {
  let result = '';
  for (let idx = 0; idx < str.length; idx++) {
    if (isLetter(str[idx].toLowerCase())) {
      if (str[idx] === str[idx].toUpperCase()) {
        if (result === '') {
          result += str[idx].toLowerCase();
        } else {
          result += '-' + str[idx].toLowerCase();
        }
      } else {
        result += str[idx];
      }
    }
  }
  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

/*
Input: string
Output: string
Rules 
- modify the string so instead of camel case, it is in kebab case
- the returned string should only contain lowercase letters

Algorithm
- create kebabString and set it to an empty string
- individually append each character to kebabString
- if the char is uppercase, append a '-' befofre it
- set kebab string to lowercase and filter out any non letters
- return the filtered kebab string
*/

function kebabize(str) {
  str = str.split('').filter(char => char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z' ).join('');
  let kebabString = '';

  for (let idx = 0; idx < str.length; idx++) {
     if (str[idx] === str[idx].toUpperCase() && str[idx - 1] !== undefined) {
       kebabString += '-' + str[idx];
     } else {
       kebabString += str[idx];
     }
  }
  return kebabString.toLowerCase();
}

function kebabize(str) {
  // split the argument into a string by character
  let kebabArr = str.split('');

  // iterate over the array
  for (let idx = 0; idx < kebabArr.length; idx++) {
    // if the character is a number, replace it with an empty string
    if (!Number.isNaN(Number(kebabArr[idx]))) {
      kebabArr.splice(idx, 1, '');
      // if it's a character, check to see if it is uppercase
    } else if (kebabArr[idx].toUpperCase() === kebabArr[idx]) {
      // if so, replace it with a dash and the lowercase letter
      kebabArr.splice(idx, 1, `-${kebabArr[idx].toLowerCase()}`);
    }
  }
  // store the joined array as your output string
  let output = kebabArr.join('');
  // if the first character is a dash, return the output string without the dash
  if (output[0] === '-') return output.slice(1);
  // otherwise, just return the output
  return output;
}

/*
str to array
filter array for just letters
iterate over each letter
  progressively build a substring
  if next letter is capitalized
    push substring onto new array
    reset substring
join substring array with dashes
*/

function kebabize(str) {
  let charArr = str.split("");
  let justLettersArr = charArr.filter(char => /[A-z]/.test(char))
  let subStrArr = [];
  let subStr = "";
  for (let i = 0; i < justLettersArr.length; i += 1) {
    subStr += justLettersArr[i];
    if (/[A-Z]/.test(justLettersArr[i + 1]) || justLettersArr[i + 1] === undefined) {
          subStrArr.push(subStr.toLowerCase());
          subStr = ""
        }
    }
  return subStrArr.join("-");
}

/*
Problem is figuring out how to split the string according to where the
capital letters are
camelsHave -> camels-have

1) split everything into an array //['c', 'a', 'm', 'H']
2) Declare a new array
3) iterate over the original array, pushing the letter into the new array
  >> if it's an uppercase,
     >> add in a 'dash' before it
     >> dont push uppercase letter, push lowercase letter
4) join holdingArray

*/

function kebabize(str) {
  console.log(str);
  let holdingArr = [];
  for (let i = 0; i < str.length; i++) {
    switch(true) {
        case str[i] >= 'A' && str[i] <= 'Z':
          if (i === 0) {
            holdingArr.push(str[i].toLowerCase());
          } else {
            if (holdingArr.length > 0) {
              holdingArr.push('-');
              holdingArr.push(str[i].toLowerCase()); 
            } else {
              holdingArr.push(str[i].toLowerCase())
            }
          }
          break;
        case str[i] >= 'a' && str[i] <= 'z':
          holdingArr.push(str[i]);
          break;
    }
  }
  return holdingArr.join('');
}