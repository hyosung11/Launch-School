/* Courses > JS101 Programming Foundations with JavaScript > Lesson 2: Small Programs > 13. Preventing Errors
*/

// guard clause
function lowerInitial(word){
  if (word.length === 0) {     // If word contains an empty String
    return '-';                // return a dash instead of proceeding.
  }

  return word[0].toLowerCase(); // word is guaranteed to have at least
}                               // 1 character, so word[0] never evaluates
                                // as undefined.


// console.log(lowerInitial('Omi')); // => o
// console.log(lowerInitial('SungOh')); // => s

// console.log(lowerInitial('')); // TypeError: Cannot read property 'toLowerCase' of undefined

// console.log(lowerInitial('')); // => -

let countries = ['Australia', 'Cuba', 'Senegal'];

alphaInsert(countries, 'Brazil');

console.log(countries.join(', ')); // ReferenceError: alphaInsert is not defined

alphaInsert([], 'Brazil');  // Inserting in an empty Array
alphaInsert(['Brazil'], 'Australia'); // At the beginning of an Array
alphaInsert(['Brazil'], 'Cuba'); // At the end of an Array
alphaInsert(['Brazil'], 'Brazil'); // Duplicate entry

// Not an actual function which is weird to use as an example.