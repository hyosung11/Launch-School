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
// function cite (author, quote) {
//   console.log(`${author} said: ${quote}`);
// }
// cite('Brendan Eich', 'Always bet on JavaScript.');
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

console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));

console.log('Captain Ruby'.substring(0, 8) + 'JavaScript');

console.log('Captain Ruby'.split(' ')[0] + ' JavaScript');