/* JS100 - JavaScript Basics >Functions 1 > 9. Locale Part 1

Locale Part 1

Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g en_US.UTF-8.

*/
// function extractLanguage(locale) {
//   return locale.split('_')[0];
// }

// console.log(extractLanguage('en_US.UTF-8'));  // 'en'
// console.log(extractLanguage('en_GB.UTF-8'));  // 'en'
// console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'

// ==================================================

/* JS100 - JavaScript Basics > Functions 1> 10. Locale Part 2

Locale Part 2

Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'
*/

function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}
console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
