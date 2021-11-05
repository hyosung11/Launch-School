/* JS101 - Small Problems > Easy 4 > 3. When Will I Retire?

When Will I Retire?

Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */

// My working version
// let readlineSync = require('readline-sync');

// console.log("What is your age?");
// let currentAge = readlineSync.questionInt();
// console.log("At what age would you like to retire?");
// let retirementAge = readlineSync.questionInt();

// let currentYear = new Date().getFullYear();
// let yearsLeftToWork = retirementAge - currentAge;
// let retirementYear = currentYear + yearsLeftToWork;

// console.log(`It's ${currentYear}. You will retire in ${retirementYear}.\nYou have only ${yearsLeftToWork} years of work to go!`);

// Revised version
// let readlineSync = require('readline-sync');

// let currentAge = readlineSync.questionInt("What is your age?\n")
// let retirementAge = readlineSync.questionInt("At what age would you like to retire?\n");

// let currentYear = new Date().getFullYear();

// let yearsLeftToWork = retirementAge - currentAge;
// let retirementYear = currentYear + yearsLeftToWork;

// console.log(`It's ${currentYear}. You will retire in ${retirementYear}.\nYou have only ${yearsLeftToWork} years of work to go!`);

/* Launch School

Approach/Algorithm

Use the `Date` object of JavaScript

Solution */

// let readlineSync = require('readline-sync');

// let currentAge = Number(readlineSync.question('What is your age?\n'));
// let retirementAge = Number(
//   readlineSync.question('At what age would you like to retire?\n')
// );

// let today = new Date();

// let currentYear = today.getFullYear();

// let workYearsToGo = retirementAge - currentAge;
// let retirementYear = currentYear + workYearsToGo;

// console.log(`It's ${currentYear}. You will retire in ${retirementYear}. `);
// console.log(`You have only ${workYearsToGo} years of work to go!`);

/* Discussion

The solution makes use of the `Date` object. It uses the `Date.prototype.getFullYear` method to return the `year` value of the `Date` object that was created. Note that there is also `Date.prototype.getYear` method available in the `Date` object, which returns a 2-3 digit representation of the year (the `getYear` method is deprecated, so it's best to avoid using it).

With the use of the `getFullYear` method, the solution gets the `currentYear`. It then computes the value of `workYearsToGo` by subtracting the current `age` from the `retirementAge`. Then to get the `retirementYear`, it adds the `currentYear` to the number of `workYearsToGo`.

Further Exploration

What would happen if the new keyword wasn't used in defining the today variable on line 8? 

TypeError: today.getFullYear is not a function */

// Bob Rodes
const rlSync = require('readline-sync');

let age = parseInt(rlSync.question('What is your age? '));
let retire = parseInt(rlSync.question('What age would you like to retire? '));

const thisYear = new Date().getFullYear();
const yearsToGo = retire - age;

console.log(`
It's ${thisYear}. You will retire in ${thisYear + yearsToGo}.
You have only ${yearsToGo} years to go!
`);

/* Further Exploration

If you don't use the `new` keyword on line 6, line 10 will throw this error: `TypeError: today.getFullYear is not a function`.

`Date.prototype.getFullYear` is an instance method of the `Date` object, so it can only be invoked from an instance of the `Date` object. You get that instance by calling the `Date` object's constructor, by using the `new` keyword.

The expression `let today = Date()` assigns a string similar to `'Tue Feb 09 2021 21:57:37 GMT-0600 (Central Standard Time)'` to the `today` variable. In this case, `today.getFullYear` attempts to call `String.prototype.getFullYear`, and there is no such function.

> Number('')
0

> parseInt('')
NaN
*/
