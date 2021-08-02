// Greet 1
// How can we alter the function definition of greet so that the parameter `greeting` is assigned a default value of `'Hello'` when no argument is passed to the function invocation?

// default parameter
// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// console.log(greet('Salutations')); // logs: Salutations, world!

// console.log(greet());  // logs: undefined, world!
                      // should log: Hello, world!

// (greet(undefined)); // Hello, world!

// Greet 2
// Change the function `greet` from the previous exercise, so that it takes two arguments: a greeting with `'Hello'` as default value, and a recipient with `'world'` as default value. The behavior should then be as follows:

// function greet(greeting = 'Hello', recipient = 'world') {
//   // console.log(greeting + ',' + ' ' + recipient);
//   // template literal version
//   console.log(`${greeting}, ${recipient}!`)
// }

// greet(); // Hello, world!
// greet('Salutations'); // Salutations, world!
// greet('Good morning', 'Launch School'); // Good morning, Launch School!

// Greet 3
// Now we are going to outsource the greeting and recipient to functions. Change the function `greet` from the previous exercise, so that it doesn't take any arguments, and instead calls the functions `greeting` and `recipient` defined below.

// Calling greet() should log Good morning, Launch School! to the console.

// function greeting() {
//   return 'Good morning';
// }

// function recipient() {
//   return 'Launch School';
// }

// function greet() {
//   console.log(`${greeting()}, ${recipient()}!`)
// }

// greet() // 'Good morning, Launch School!'

// Calculate BMI
// Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

// Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).

// Return the result as a string rounded to two decimals. For example:

// function calculateBMI(heightInCentimeters, weightInKilograms) {
//   let heightInMeters = heightInCentimeters / 100;
//   let bmi = weightInKilograms / heightInMeters ** 2;

//   return bmi.toFixed(2);
// }

// console.log(calculateBMI(180, 80)); // "24.69"

// Calculate Cat Age

// Implement a function `catAge` that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:

// * The first human year corresponds to 15 cat years.
// * The second human year corresponds to 9 cat years.
// * Every subsequent human year corresponds to 4 cat years.

function catAge(humanYears) {
  switch(humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24
    default:
      return 24 + (humanYears - 2) * 4
  }
}


  // for example:
// console.log(catAge(0)); // 0
// console.log(catAge(1)); // 15
// console.log(catAge(2)); // 24
// console.log(catAge(3)); // 28
// console.log(catAge(4)); // 32

// Remove Last Char

// Create a function `removeLastChar` that takes a string as an argument, and returns the string without the last character.

function removeLastChar(string) {
  // return string.substring(0, string.length - 1);
  return string.slice(0, string.length - 1);
}

console.log(removeLastChar('ciao!')); // 'ciao'
console.log(removeLastChar('hello')); // 'hell'
console.log(removeLastChar('Site')); // 'Sit'

// Arrow Functions (Part 1)

// Refactor the function below using arrow syntax. Line 9 should still log the same sentence.
// const template = 'I VERB NOUN.';

// function sentence(verb, noun) {
//   return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// }

// console.log(sentence('like', 'birds'));
// logs: I like birds.

// const template = 'I VERB NOUN.';

// const sentence = (verb, noun) => {
//   return template.replace('VERB', verb).replace('NOUN', noun);
// }

// // console.log(sentence('like', 'birds'));

// // more concise 
// let sentence = (verb, noun) => template
//   .replace('VERB', verb)
//   .replace('NOUN', noun);

// Arrow functions were introduced in ES6 as a very concise way of writing JavaScript functions.

// If the function body contains only one statement, the return keyword can be omitted. Note that it's the number of statements that counts, not the number of lines. In our case, we have one statement spreading over several lines.

// Arrow Functions (Part 2)

// The function initGame below returns an object. Refactor it using arrow function syntax.

// let initGame = function () {
//   return {
//     level: 1,
//     score: 0
//   }
// };

// let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// arrow function
let initGame = () => ({
    level: 1,
    score: 0,
});

let game = initGame();

// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

