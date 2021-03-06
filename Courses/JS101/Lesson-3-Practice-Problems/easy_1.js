/* =======
Question 1

Will the code below raise an error?
*/

// let numbers = [1, 2, 3];
// console.log(numbers[6] = 5);
// console.log(numbers); // [ 1, 2, 3, <3 empty items>, 5 ]

// No error

// Bonus

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers[4]); // what will this line return? => undefined

/* Solution 1

It doesn't raise an error. The JavaScript engine will treat array slots 3 through 5 as empty slots.

Bonus Answer:

numbers[4] will output undefined, but the slot is empty -- it doesn't have a value, not even undefined, in spite of what the line returns. This distinction is important: if you use map(), for instance, the new array will also have empty slots in the corresponding positions. On the other hand, slots with a value of undefined will be remapped based on the return value of the callback:
*/

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]

/* ========
Question 2

How can you determine whether a given string ends with an exclamation mark(`!`)?
*/

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithExclamationMark(string) {
  if (string[string.length - 1] === '!') {
  return true;
  } else {
    return false;
  }
}

console.log(endsWithExclamationMark(str1));
console.log(endsWithExclamationMark(str2));

/* Solution 2

// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('!'));

/* =======
Question 3

Determine whether the following object of people and their age contains an entry for 'Spot':

Note that our keys have capitalized names; this usually violates style guidelines, but is fine for our purposes. We'll use such keys in several exercises in this course.
*/

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// Hint
// Read about the Object.prototype.hasOwnProperty() method on MDN.

// Solution 3
// console.log(ages.hasOwnProperty('Spot'));

/* =======
Question 4

Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)
*/

// let munstersDescription = "the Munsters are CREEPY and Spooky.";

// Solution 4

// console.log(munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase());

// => The munsters are creepy and spooky.

/* =============================================================================
Question 5

What will the following code output?
*/

// console.log(false == '0'); // true
// console.log(false === '0'); // false

/* Solution 5

The code outputs:

true
false

In JavaScript, there are two equality operators: strict equality (===) and non-strict (or weak) equality (==). The === operator behaves as a traditional equality operator does in most languages: it evaluates as true when the two expressions on either side have the same type and value. On the other hand, the == operator coerces the values to the same type before comparing them. Coercions can produce unexpected and confusing behavior. Thus, it's good practice to use === rather than ==. The same holds for the !== vs. != operators: prefer !==.

/* =============================================================================

Question 6

We have most of the Munster family in our ages object:
*/

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

// let additionalAges = { Marilyn: 22, Spot: 237 };

// Hint - did it before seeing this
// Read about the Object.assign() method on MDN.

// Solution 6

// console.log(Object.assign(ages, additionalAges));

// {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// }

/* =============================================================================

Question 7

Determine whether the name Dino appears in the strings below -- check each string separately):
*/
let str1 =
  'Few things in life are as important as house training your pet dinosaur.';
let str2 = 'Fred and Wilma have a pet dinosaur named Dino.';

// Solution 1
// console.log(str1.includes('Dino')); // false
// console.log(str2.includes('Dino')); // true

// Solution 2
// console.log(str1.match('Dino') !== null); // false
// console.log(str2.match('Dino') !== null); // true

// Solution 3
// console.log(str1.indexOf('Dino') > - 1); // false
// console.log(str2.indexOf('Dino') > - 1); // true


/* =============================================================================

Question 8

How can we add the family pet, "Dino", to the following array?
*/

// let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

// Hint - didn't read the hint
// Read about the Array.prototype.push() method on MDN.

// Solution 1
// flintstones.push("Dino");
// console.log(flintstones);
// ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino'];

// Solution 2
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones = flintstones.concat("Dino");
// console.log(flintstones); // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

// Solution 3
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones[flintstones.length] = "Dino"
// console.log(flintstones); // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

/* =============================================================================

Question 9

In the previous problem, our first answer added 'Dino' to the array like this:
*/

// let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];
// flintstones.push('Dino');

// How can we add multiple items to our array? ('Dino' and 'Hoppy')

// My solution
// flintstones.unshift('Dino', 'Hoppy');
// console.log(flintstones);

// LS Solution
// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push('Dino', 'Hoppy');  // we can pass multiple arguments to push
// console.log(flintstones); // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino', 'Hoppy' ]

/* =============================================================================

Question 10

Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

/* Hint

Review the String.prototype.slice() and String.prototype.indexOf() methods on MDN, and use those methods to create the return value.
*/

console.log(advice.slice(0, advice.indexOf('house')));

// Expected return value:
// => 'Few things in life are as important as '

