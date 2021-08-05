/* JS100 - JavaScript Basics > Functions 2 > 1. Greet 1

Greet 1

How can we alter the function definition of greet so that the parameter greeting is assigned a default value of 'Hello' when no argument is passed to the function invocation?
*/

// function greet(greeting = 'Hello') {
//   console.log(greeting + ', world!');
// }

// greet('Salutations'); // logs: Salutations, world!

// greet();              // logs: undefined, world!
//                       // should log: Hello, world!

/* JS100 - JavaScript Basics Functions 2 > 2. Greet 2

Greet 2

Change the function greet from the previous exercise, so that it takes two arguments: a greeting with 'Hello' as default value, and a recipient with 'world' as default value. The behavior should then be as follows:
*/

// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(greeting + ', ' + recipient + '!');
// }

// function greet(greeting = 'Hello', recipient = 'world') {
//   console.log(`${greeting}, ${recipient}!`);
// }

// greet();                                // logs: Hello, world!
// greet('Salutations');                   // logs: Salutations, world!
// greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

/* JS100 - JavaScript Basics > Functions 2 > 3. Greet 3

Greet 3

Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

*/

function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(`${greeting()}, ${recipient()}!`);
}

greet();

// Calling greet() should log Good morning, Launch School! to the console.