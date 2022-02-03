/* EXERCISES */

// 1. Write a method that returns true if its argument looks like a URL, false if it does not.

function isUrl(url) {
  return !!url.match(/^https?:\/\/\S+$/);
}

// console.log(isUrl('http://launchschool.com'));   // -> true
// console.log(isUrl('https://example.com'));       // -> true
// console.log(isUrl('https://example.com hello')); // -> false
// console.log(isUrl('   https://example.com'));    // -> false

// 2. Write a method that returns all of the fields in a haphazardly formatted string. A variety of spaces, tabs, and commas separate the fields, with possibly multiple occurrences of each delimiter.

function fields(string) {
  return string.split(/[ \t,]+/);
}

// console.log(fields("Pete,201,Student"));
// // -> ['Pete', '201', 'Student']

// console.log(fields("Pete \t 201    ,  TA"));
// // -> ['Pete', '201', 'TA']

// console.log(fields("Pete \t 201"));
// // -> ['Pete', '201']

// console.log(fields("Pete \n 201"));
// -> ['Pete', '\n', '201']

// 3. Write a method that changes the first arithmetic operator (`+`, `-`, `*`, `/`) in a string to a '?' and returns the resulting string. Don't modify the original string.

function mysteryMath(string) {
  return string.replace(/[+\-*\/]/, '?')
}

// console.log(mysteryMath('4 + 3 - 5 = 2'));
// // -> '4 ? 3 - 5 = 2'

// console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// -> '(4 ? 3 + 2) / 7 - 1 = 1'

/* 4. Write a method that changes every arithmetic operator (`+`, `-`, `*`, `/`) to a `'?'` and returns the resulting string. Don't modify the original string. */

// function mysteriousMath(equation) {
//   return equation.replace(/[+\-*\/]/g, '?');
// }

const mysteriousMath = (equation) => {
  return equation.replace(/[+\-*\/]/g, '?')
}

// console.log(mysteriousMath('4 + 3 - 5 = 2'));           // -> '4 ? 3 ? 5 = 2'
// console.log(mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1')); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'

/* 5. Write a method that changes the first occurrence of the word `apple`, `blueberry`, or `cherry` in a string to `danish`. */

function danish(string) {
  return string.replace(/\b(apple|blueberry|cherry)\b/, 'danish')
}

// console.log(danish('An apple a day keeps the doctor away'));
// // -> 'An danish a day keeps the doctor away'

// console.log(danish('My favorite is blueberry pie'));
// // -> 'My favorite is danish pie'

// console.log(danish('The cherry of my eye'));
// // -> 'The danish of my eye'

// console.log(danish('apple. cherry. blueberry.'));
// // -> 'danish. cherry. blueberry.'

// console.log(danish('I love pineapple'));
// // -> 'I love pineapple'

/* 6. Challenge: write a method that changes strings in the date format `2016-06-17` to the format `17.06.2016`. You must use a regular expression and should use methods described in this section. */

// let formatDate = function (originalDate) {
//   return originalDate.replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
// }

// console.log(formatDate('2016-06-17')); // -> '17.06.2016'
// console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)

/* 7. Challenge: write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section. */

// let formatDate = function (originalDate) {
//   return originalDate
//     .replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
//     .replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
// };

// Alternate Solution
function formatDate(originalDate) {
  let dateRegex = /^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/;
  return originalDate.replace(dateRegex, '$4.$3.$1');
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)