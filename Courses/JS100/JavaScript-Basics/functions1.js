// sum
// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(22, 10));
// // 32

// Log Quote
// let quote = 'Always bet on JavaScript';

// function brendanEichQuote(quote) {
//   console.log(quote);
// }

// brendanEichQuote(quote);
// logs:
// Always bet on JavaScript.

// function brendanEichQuote() {
//   console.log('Always bet on JavaScript.');
// }

// brendanEichQuote();
// logs:
// Always bet on JavaScript.
// returns undefined

// cite the author
function cite (author, quote) {
  console.log(`${author} said: ${quote}`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

// squared number
// function squaredNumber(number) {
//   //return number * number;
//   return number ** 2;
// }
// console.log(squaredNumber(3)); // 9

// function multiplesOfThree() {
//   let divisor = 1;

//   for (let dividend = 3; dividend <= 30; dividend += 3) {
//     console.log(dividend + ' / ' + divisor + ' = 3');
//     divisor += 1;
//   }
// }

// multiplesOfThree();

// function compareByLength(string1, string2) {
//   if (string1.length < string2.length) {
//     return -1;
//   } else if (string1.length > string2.length) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(compareByLength('patience', 'perseverance'));
// console.log(compareByLength('strength', 'dignity'));
// console.log(compareByLength('humor', 'grace'));

// Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

// console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));

// console.log('Captain Ruby'.substring(0, 8) + 'JavaScript');

// console.log('Captain Ruby'.split(' ')[0] + ' JavaScript');

// Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

// console.log(greet('en')); // 'Hi!'
// console.log(greet('fr')); // 'Salut!'
// console.log(greet('pt')); // 'Olá!'
// console.log(greet('de')); // 'Hallo!'
// console.log(greet('sv')); // 'Hej!'
// console.log(greet('af')); // 'Haai!'

// Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

function extractLanguage(locale) {
  return locale.split('_')[0];
}

// console.log(extractLanguage('en_US.UTF-8'));
// console.log(extractLanguage('en_GB.UTF-8'));
// console.log(extractLanguage('ko_KR.UTF-16'));

// Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

function extractRegion(locale) {
  return locale.split('_')[1].split('.')[0];
}

console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

// Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US':
      return 'Hey!';
    case 'GB':
      return 'Hello!';
    case 'AU':
      return 'Howdy!';
    default:
      return greet(language);
  }
}

/* PEDAC

Problem
=======
Input: string
Output: string

Rules:
- distinguish greetings for English speaking countries
- fall back on language-specific greetings in all other cases
- When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.

Examples
========
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

Data structure
==============
input: string
output: string

Algorithm
=========


Code
====
*/