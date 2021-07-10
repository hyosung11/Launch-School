# JavaScript Basics

## Reading Documentation 1

### Finding Documentation

JavaScript documentation at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Lowercase

```js
'Aloha, World!'.toLowerCase(); // 'aloha, world!'
```

### Mountain Caps

```js
let word = 'mountain';
console.log(word.charAt(0).toUpperCase() + word.substring(1));
```

### Array Element Access

```js
// Access the element 'and' in the array ['fish', 'and', 'chips]

// 1
['fish', 'and', 'chips'][1];

// 2
let dinner = ['fish', 'and', 'chips'];
dinner[1];
```

### Out of Bounds

Attempting to access an element at an index that is out of the bounds of the array will return undefined.

```js
['fish', 'and', 'chips'][10]; // => undefined
```

### Property vs Method

```js
let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

trees[trees.length - 1]; // 'palm tree' (array property)
trees.pop();              // 'palm tree' (array method)
trees[trees.length - 1]; // 'sequoia'
```

### Type of Primitive

```js
typeof 23.5;               // 'number'
typeof 'Call me Ishmael.'; // 'string'
typeof false;              // 'boolean'
typeof 0;                  // 'number'
typeof null;               // 'object' - historic bug
typeof undefined;          // 'undefined'
```

### Return Values

```js
let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet;   // 'string'
typeof words;   // 'object'
typeof isValid; // 'boolean'

Array.isArray(words);  // true
```

### Method Chaining

```js
let tweet = 'Starting to get the hang of it... #javascript #launchschool';

tweet.split(' ');
// ["Starting", "to", "get", "the", "hang", "of", "it...", "#javascript", "#launchschool"]

tweet.split(' ').reverse();
// ["#launchschool", "#javascript", "it...", "of", "hang", "the", "get", "to", "Starting"]

tweet.split(' ').reverse().join(' ');
// '#launchschool #javascript it... of hang the get to Starting'
```

### Equality

```js
'8' == 8;  // true 
'8' === 8; // false
```

`==`, also known as the standard or abstract equality operator, will attempt to coerce the operands into two values of the same kind before making a comparison. When dealing with a string and a number, == coerces the string value into a number.

`===,` also known as the strict equality operator, does **not** perform any type conversion on its operands. It will always return false if its operands are of different types. On the second line of our code example, we attempted to compare a string to a number and therefore the return value was false.

## Reading Documentation 2

### Style Guide

```js
// violations of style guide
let ice_cream_taste = 'chocolate'
let ice_cream_density = 10

while(ice_cream_density > 0)
{
    console.log('Drip...');
    ice_cream_density -= 1;
}

console.log('The '+ ice_cream_taste +' ice cream melted.');

// corrected style
let iceCreamTaste = 'chocolate';
let iceCreamDensity = 10;

while (iceCreamDensity > 0) {
  console.log('Drip...');
  iceCreamDensity -= 1;
}

console.log('The ' + iceCreamTaste + ' ice cream melted.');
```

Here are the guidelines that were not followed in the original code snippet:

* Use camelCase for variable names.
* End all statements with a semicolon.
* Indent lines with two spaces.
* Use spaces between keywords (like `while`) and opening parentheses, as well as between closing parentheses and opening curly brackets.
* Put the opening curly brackets of the `while` block on the same line as the while statement.
* Put spaces before and after operators like `+`.

### Data Types

There are seven primitive data types (immutable):

1. Number
2. String
3. Boolean
4. null
5. Undefined
6. Symbol (added in ES6)
7. BigInt (ES9)

One non-primitive data type:

* Object (which comprises arrays) (mutable by adding or removing elements)

### Largest Number

```js
Number.MAX_VALUE; // 1.7976931348623157e+308

MAX_SAFE_INTEGER // 9007199254740991
```

### Arithmetic Operator Precedence

What does the expression 4 * 5 + 3 ** 2 / 10 evaluates to?

** > (* and /) > +

This means that when using parentheses for grouping, the expression is equivalent to (4 * 5) + ((3 ** 2) / 10), and therefore evaluates to 20.9.

```js
(4 * 5) + ((3 ** 2) / 10)
```

### Date

The `Date.now()` method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.

```js
console.log(Date.now()); // 1536562500455
```

### Which year is this?

```js
let today = new Date();

today.getYear(); // deprecated
today.getFullYear(); // returns a number representing the date on which it is invoked.
```

### Argument Signatures

How many arguments does the `Array.prototype.join()` method expect? What happens if you call it with less or more arguments?

The array method `join()` concatenates all elements of an array into a string. It expects a single, optional argument: a string that will be used as separator. If the argument is omitted, the separator defaults to `','`. Any excess arguments passed to the method upon invocation are ignored.

```js
let array = ['Bob', 'Kevin', 'Stuart'];

// separator argument omitted
array.join();                  // 'Bob,Kevin,Stuart'

// single separator argument
array.join(', ');              // 'Bob, Kevin, Stuart'

// excess argument passed in
array.join(' and ', 'also');   // 'Bob and Kevin and Stuart'
```

### String Concatenation

```js
let firstName = 'Ada';
let lastName = 'Lovelace';

''.concat(firstName, ' ', lastName);
// 'Ada Lovelace'

// Assignment operators strongly recommended
let firstName = 'Ada';
let lastName = 'Lovelace';

firstName + ' ' + lastName;
// 'Ada Lovelace'
```

### SyntaxError

```js
// SyntaxError 
let speedLimit = 60;
let currentSpeed = 80;

if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

SyntaxError: Unexpected token &&

// Fixed Version
let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}
```

### TypeError

```js
let tweet = 'Woohoo! :-)';

if (tweet.length() > 140) {
  console.log('Tweet is too long!');
}

TypeError: tweet.length is not a function
```

`length` is called without parentheses. This is because it is a string _property_, not a string _method_.

`tweet.length()`is a type mismatch: `tweet.length` is expected to be a number, but we use it as a function.

## Loops

### Loop and Log

```js
for (let i = 0; i <= 10; i += 2) {
  // include your code here
  console.log(i)
}

0
2
4
6
8
10

for ([initialExpression]; [condition]; [incrementExpression]) {
  statement
}
```

### Countdown

```js
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

console.log('Launch!');

// alternative
for (let i = 10; i >= 0; i -= 1) {
  if (i === 0) {
    console.log('Launch!');
  } else {
    console.log(i);
  }
}
```

### Triple Greeting

Write a loop that logs `greeting` three times.

```js
// for loop
let greeting = 'Aloha!';

for (let count = 1; count <= 3; count += 1) {
  console.log(greeting);
}

// while loop
let greeting = 'Aloha!'
let count = 1;

while (count <= 3) {
  console.log(greeting);
  count += 1;
}
```

### Take Two

Write a `for` loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

```js
for (let num = 1; num <= 100; num += 1) {
  console.log(num * 2);
}
```

### Looping over Array Elements

Using the code below as a starting point, write a `while` loop that logs the elements of `array` at each index, and terminates after logging the last element of the array.

```js
let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}
```

### Continue

Write a `for` loop that loops over the elements of the array `cities` and logs the length of each string to the console. If the element is `null`, skip forward to the next iteration without logging anything to the console.

```js
let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let i = 0; i < cities.length; i += 1) {
  if (cities[i] === null) {
    continue;
  }

  console.log(cities[i].length);
}

8
11
5
6
6
7
```

`continue` terminates the current iteration and continues with execution of the next iteration. This allows us to skip each element that is equal to `null`.

### And on and on and on

```js
// loops forever - condition left empty; JS treats as true
for (let i = 0; ; i += 1) {
  console.log("and on");
}

// terminate the loop with break statement
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}
```

### That's Odd

Write a while loop that logs all odd natural numbers between 1 and 40.

```js
let num = 1;

while (num < 40) {
  console.log(num);
  num += 2;
}
```

### Finding Nemo

Loop over the elements of the array `fish`, logging each one. Terminate the loop immediately after logging the string `'Nemo'`.

```js
let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}

Dory
Marlin
Gill
Nemo
```

### Do...While

```js
// while
let counter = 0;

// condition checked before executing the block
while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}


// do...while
let counter = 0;

// condition checked after the block has executed
// executed at least once, even if condition not satisfied
do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
// 'Woooot!'
```

## Conditionals

### Truthy vs Falsy

In JavaScript, there are only eight values that are falsy:

1. `false`
2. `null`
3. `undefined`
4. `0`
5. `NaN`
6. `''` or `""`
7. `-0` (negative zero)
8. `0n` (BigInt zero)

### Yes? No? Part 1

Write an `if` statement that logs `'Yes!`' if `randomNumber` is 1, and `'No.'` if `randomNumber` is 0.

```js
let randomNumber = Math.round(Math.random());

if (randomNumber) {
  console.log('Yes!');
} else {
  console.log('No');
}
```

Recall that that `0` is falsy in Javascript, while `1` is truthy. Our `if` statement will execute the code on line 4 if the condition provided on line 3 (`randomNumber`) is truthy; otherwise it will execute the code on line 6.

### Yes? No? Part 2 (ternary operator)

```js
// syntactical structure of the ternary operator
condition ? expression1 : expression2
```

Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

```js
let randomNumber = Math.round(Math.random());

console.log(randomNumber ? 'Yes!' : 'No.');
```

### Check the Weather, Part 1

```js
let weather = 'snow storm'; // 'sunny', 'rainy', ...

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log('Grab your umbrella.');
} else {
  console.log("Let's stay inside.");
}
```

### Switch

```js
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
  case 'squirrel':
    console.log('nook nook');
  case 'horse':
    console.log('neigh');
  case 'bird':
    console.log('tweet tweet');
  default:
    console.log('*cricket*');
}

neigh
tweet tweet
*cricket*
```

The `switch` statement evaluates the provided expression (`animal` in our case) and will execute the statement associated with the case that matches, _as well as the statements in all cases following the matching case_ until reaching either the end of the `switch` statement or a `break`.

In the provided code, this means that after finding a matching case (`'horse'`), JavaScript will execute c`onsole.log('neigh')` as well as the `console.log` invocations in all following clauses.

In order to avoid this "fall through" behavior, we can place a `break` statement in each clause of our `switch` statement, as seen below:

```js
let animal = 'horse';

switch (animal) {
  case 'duck':
    console.log('quack');
    break;
  case 'horse':
    console.log('neigh');
    break;
  case 'bird':
    console.log('tweet tweet');
    break;
  default:
    console.log('*crickets*');
}
```

### Check the Weather, Part 2

Rewrite as a `switch` statement

```js
let weather = 'windy';

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log('Grab your umbrella');
    break;
  case 'windy':
    console.log('It feels great on my face.');
    break;
  default:
    console.log("Let's stay inside.");
}

// It feels great on my face.
```

### Logical Conditionals 1

```js
// Output always 'Yes!'
if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}
```

### Logical Conditions 2

```js
// Output always 'No...'
if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}
```

### Logical Conditions 3

```js
let sale = true;
let admissionPrice = !sale ? 5.25 : 3.99;

console.log('$' + admissionPrice);

// $3.99
```

### Are we moving?

```js
let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // true
```

## Functions 1

### Sum

```js
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(22, 10));
// 32
```

### Log Quote

```js
function brendanEichQuote() {
  console.log('Always bet on JavaScript.');
}

brendanEichQuote();
// logs:
// Always bet on JavaScript.
```

### Cite the Author

```js
// using a template literal
function cite(author, quote) {
  console.log(`${author} said: "${quote}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."
```

### Squared Number

```js
function squaredNumber(num) {
  return num ** 2;
}

squaredNumber(3); // 9
```

### Display Division

```js
function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

// append parentheses to the function to invoke it
multiplesOfThree();
```

### Three-way comparison

```js
function compareByLength(str1, str2) {
  if (str1.length < str2.length) {
    return -1;
  } else if (str1.length > str2.length) {
    return 1;
  } else {
    return 0;
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0
```

### Transformation

Use JavaScript's string methods on the string '`Captain Ruby'` to produce the string `'Captain JavaScript'`.

```js
'Captain Ruby'.replace('Ruby', 'JavaScript');

'Captain Ruby'.substring(0, 8) + 'JavaScript';

'Captain Ruby'.split(' ')[0] + ' JavaScript';
```

### Internationalization 1

Write a function that takes an ISO 639-1 language code and returns a greeting in that language. You can take the examples below or add whatever languages you like.

```js
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

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

// Example:
console.log(greet('sv'));
```

Note that if we use `return` statements in the clauses, we don't need to include additional `break` statements, because `return` will immediately exit from the function anyway.

### Locale Part 1

Write a function that extracts the language code from a locale. A locale is a combination of a language code, a region, and usually also a character set, e.g `en_US.UTF-8`.

```js
function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Examples:
console.log(extractLanguage('en_US.UTF-8')); // 'en'
console.log(extractLanguage('en_GB.UTF-8')); // 'en'
console.log(extractLanguage('ko_KR.UTF-16')); // 'ko'
```

### Locale Part 2

Similar to the previous exercise, now write a function that extracts the region code from a locale. For example:

```js
function extractRegion(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

// Examples:
console.log(extractRegion('en_US.UTF-8')); // 'US'
console.log(extractRegion('en_GB.UTF-8')); // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'
```

### Internationalization 2

Building on your solutions from the previous exercises, write a function `localGreet` that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:

```js
localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
```

Distinguish greetings for English speaking countries like the US, UK, Canada, or Australia in your implementation, and feel free to fall back on the language-specific greetings in all other cases, for example:

```js
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
```

When implementing localGreet, make sure to re-use your extractLanguage, extractRegion and greet functions from the previous exercises.

Solution

```js
function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(language);
  }
}
```

## Variable Scope

### What's my value? (Part 1)

What will the following code log to the console and why? Don't run it until you have tried to answer.

```js
console.log(greeting);

var greeting = 'Hello world!';

// undefined
```

Discussion
All variables in JavaScript declared with `var` are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:

```js
var greeting;

console.log(greeting);

greeting = 'Hello world!'
```

When a `var` variable is declared but not assigned a value, like on line 1, it is initialized to the value `undefined`. For that reason, the code logs `undefined` to the console.

### What's my value (Part 2)

What will the following code log to the console and why?

```js
console.log(greeting);

let greeting = 'Hello world!';

// ReferenceError: Cannot access 'greeting' before initialization
```

In contrast to `var` variables, `let` variables are not accessible before they are declared. For that reason the above code raises an error.

### What's my value? (Part 3)

What will the following code log to the console and why?

```js
if (true) {
  let myValue = 20;
}

console.log(myValue);
// ReferenceError: myValue is not defined
```

Variables declared with `let` are block scoped. This means that when we declare the variable `myValue` within a block on line 2, that variable is not accessible outside of the block on line 5, and a `ReferenceError` is raised.

### What's my value? (Part 4)

What will the following code log to the console and why?

```js
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();
// 1
```

Variables declared in an outer scope can be accessed in any inner scope. In our case, the variable `a` is declared in the function definition and then accessed in the body of the _if_ statement. For that reason, line 4 logs the value `1` when `myFunction` is invoked.

### What's my value? (Part 5)

What will the following code log to the console and why?

```js
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
// ReferenceError: Cannot access 'a' before initialization
```

Your initial hunch might have been that this code should output the numbers `1` (on line 5) and `2` (on line 7). The reason that doesn't happen is that variables declared by let aren't available until the code runs. Therefore, the `let` statement on line 6 creates a new variable `a` that isn't available on line 5. Since we try to log `a` before assigning it a value, a `ReferenceError` is raised.

Technically, the scope of `a` is the entire block. JavaScript does hoist the variables defined by `let`, but, when it does, it creates a "temporal dead zone" in which the variable exists but doesn't have a value -- not even a value of `undefined`. We talk more about the temporal dead zone in a later course.

Note that the variable `a` defined on line 6 shadows the variable `a` defined on line 2.

### What's my value? (Part 6)

```js
let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);
// false
```

The situation is similar to that of the previous exercise: The variable `b` declared on line 2 and the variable b declared on line 5 in the body of the `if` statement have the same name, but they are two different variables. Important to note is that the `b` that we reference on line 8 refers to the variable declared on line 2. This is because the scope of `b` declared on line 5 is the body of the `if` statement, and it is not accessible in any outer scope.

### What's my value? (Part 7)

```js
let a = 1;

function myFunction() {
  console.log(a);
}

myFunction(); // 1
```

The variable `a` declared in the `let` statement on line 1 is declared at the very top level of our code, so it is accessible from everywhere in the code (outer scope), including from within the body of `myFunction`.

### What's my value? (Part 8)

```js
let a = 1;

function myFunction(a) {
  console.log(a); // 1
}

let b = 2;

myFunction(b); // 2
```

This is another example of _variable shadowing_: The parameter `a` of `myFunction` shadows the variable `a` declared on line 1. The `a` we reference within the function body, on line 4, therefore refers to whatever argument is passed to the function, in our case the value of `b`, which is then logged.

### What's my value? (Part 9)

```js
const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);
// TypeError: Assignment to constant variable.
```

Variables declared by `const` are block scoped, similar to variables declared by `let`, but their value cannot be changed through re-assignment. So when we try to re-assign `a` to a new value on line 4, we get an error.

Note that passing `a` as an argument to `myFunction` on line 7 has no effect, as the function does not declare any parameters. It is an excess argument that is simply ignored in the function body.

### What's my value? (Part 10)

```js
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);
// { firstName: 'Jane', lastName: 'Doe' }
```

The fact that `const` variables cannot be re-assigned does not mean that the value they hold is immutable. As we see in the example above, objects that are assigned to `const` variables can be _mutated_.

## Strings

### Length

Determine the length of the string `"These aren't the droids you're looking for."`.

```js
let string = "These aren't the droids you're looking for.";

string.length; // 43
```

Determine the length of a string using the `length` property. An empty string will have a length of 0.

### ALL CAPS

Take the string `'confetti floating everywhere'` and transform it to upper case.

```js
let string = 'confetti floating everywhere';

string.toUpperCase(); // CONFETTI FLOATING EVERYWHERE
```

Our solution leverages the `String.prototype.toUpperCase()` method. This method returns a new string, with the calling string's characters converted to uppercase. To see that this method returns a new string rather than mutating the original one, log `string` to the console after line 3.

### Repeat

Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().

```js
function repeat(num, string) {
  let repetitions = ''

  while (num > 0) {
    repetitions += string;
    num -= 1;
  }

  return repetitions;
}

console.log(repeat(3, 'ha')); // 'hahaha'
```

### Multiline String

Take the following rhyme:

```js
A pirate I was meant to be!
Trim the sails and roam the sea!
```

How can you assign this string to a single variable, preserving the line break?

```js
let rhyme = 'A pirate I was meant to be!\nTrim the sails and roam the sea!'

console.log(rhyme);
// A pirate I was meant to be!
// Trim the sails and roam the sea!
```

Special characters can be encoded in a string via [escape notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation). For example, quotes can be included in strings as`\'` and `\"`:

* `'I\'m a mighty pirate!'`
* `"\"It'll be fun\", they said."`

Tabs can be written as `\t`, and `\n` is the newline character.

### Case-insensitive Equality

Given strings like the following, how can you check whether they're equal irrespective of whether the characters they contain are upper or lower case?

```js
let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

// Solution
string1.toLowerCase() === string2.toLowerCase(); // true
string1.toLowerCase() === string3.toLowerCase(); // false
```

A very simple way to check case-insensitive equality of strings is to first turn them to all lower or upper case and then compare them.

### Contains Character

Write code that checks whether the string `byteSequence` contains the character `x`.

```js
let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x')); // true
```

### Blank? Version 1

Write a function that checks whether a string is empty or not. For example:

```js
function isBlank(string) {
  return string.length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
```

A string is empty if it does not contain any characters. The easiest way to check this is to look at the length of the string.

### Blank? Version 2

Change your `isBlank` function from the previous exercise to return `true` if the string is empty or only contains whitespace. For example:

```js
function isBlank(string) {
  return string.trim().length === 0;
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true
```

The `String.prototype.trim()` method removes whitespaces from both ends of a string. Once we removed those whitespaces, we can use the same strategy as in the previous exercise.

### Capitalize Words

Write code that capitalizes the words in the string `'launch school tech & talk'`, so that you get the string `'Launch School Tech & Talk'`.

```js
let string = 'launch school tech & talk';
let words = string.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
}

capitalizedWords.join(' '); // 'Launch School Tech & Talk'
```

In our solution, we capitalize one word after the other. We use `string.split(' ')` to split the input string into words, then iterate over these words, collecting their capitalized version in the array `capitalizedWords`, and finally join the capitalized words into the final string.

Capitalization of a word can be achieved by taking the first character (`word[0]`), transform it to upper case, and then concatenate it with the rest of the word (`word.slice(1)`). If we come across a word that is only one character long, `word.slice(1)` is the empty string. This is the case for `&`. Note that `'&'`.`toUpperCase()` returns `'&'` (as would `'&'.toLowerCase()`), because `'&'` does not distinguish upper and lower case.

## Arrays

### First Element

Write a function that returns the first element of an input array.

```js
function first(array) {
  return array[0];
}

first(['Earth', 'Moon', 'Mars']); // 'Earth'
```

What would you return if the input array was empty?

With this implementation, `first` returns `undefined` if the input array is empty. It is the same behavior you get for trying to access an index that is outside the bounds of the array.

### Last Element

Write a function that returns the last element of an input array. For example:

```js
function last(array) {
  return array[array.length - 1];
}

last(['Earth', 'Moon', 'Mars']); // 'Mars'
```

As in the previous exercise, `last` returns undefined if the input array is empty.

Because arrays in JavaScript have a zero-based index, the last element of an array is at an index position one less than its length. For example, in an array with three elements, the elements are at index positions 0 (the first element), 1, and 2 (the last element).

### Add + Delete

We are given the following array of energy sources.

```js
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
```

Remove `'fossil'` from the array, then add `'geothermal'` to the end of the array.

```js
// adding an element at the end
energy.push('geothermal');

// adding an element at the beginning
energy.unshift('nuclear')

// remove first element. changes original array
energy.shift();

// return a new array containing all elements from index 1 to to the end; doesn't change original array; re-assigns `energy` to the new array returned by `slice`.
energy = energy.slice(1);

// removes 1 element from energy, starting at index 0.  Use to remove any other element of an array, not just the first one.
energy.splice(0, 1);
```

### Alphabet

Split the string `alphabet` into an array of characters.

```js
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

// solution 1
alphabet.split('');

// solution 2
Array.from(alphabet);
```

When `String.prototype.split()` is used with an empty string as separator, it splits the string it is invoked on between each character. (To be precise, it splits the string between each UTF-16 code unit, which in our case amounts to the same thing.)

### Filter

Count the number of elements in `scores` that are 100 or above.

```js
let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count); // 3
```

The solution makes use of a `counter` variable, that we initialize as 0. We then iterate over all elements in the `scores` array, and for each element that is greater than or equal to 100, we increase the `counter` by 1.

### Vocabulary

We've been given an array of vocabulary words grouped into sub-arrays by meaning. This is a two-dimensional array or a nested array. Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

```js
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for(let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}

// Expected output:
// happy
// cheerful
// merry
// etc...
```

Our solution uses nested `for` loops to iterate through each sub-array of the `vocabulary` array. We access each inner element by its index on line 11, and output it using `console.log()`.

### Equality

Predict the output of the below code. When you run the code, do you see what you expected? Why or why not?

```js
let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // false
```

The output of the sample code is `false`.

Primitives, like strings or numbers, are compared by their _value_. For example, the two strings below are strictly equal:

```js
console.log('2, 6, 4' === '2, 6, 4'); // true
```

Arrays, however, are objects and not primitives. JavaScript compares whether two objects are strictly equal by checking whether they are the same object, i.e. _whether they reference the same location in memory._ Since we constructed two array objects, one on line 1 and one on line 2, they don't have the same reference.

Note that if we alter our original code so that array2 references the same object as array1, our comparison logs `true`:

```js
let array1 = [2, 6, 4];
let array2 = array1;

console.log(array1 === array2); // true
```

### Type

How can you check whether a variable holds a value that is an array? For example, imagine you start writing a function and want to check whether its argument is an array:

```js
function filter(input) {
  // Is input an array?
}
```

```js
// Use the Array.isArray() method.
let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

Array.isArray(someValue1); // true
Array.isArray(someValue2); // false
```

Note that the `typeof` operator returns `'object'` for arrays, because arrays are objects. Therefore it does not distinguish between arrays and other objects.

### Travel

The `destinations` array contains a list of travel destinations.

```js
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];
```

Write a function that checks whether or not a particular destination is included within `destinations`, without using the built-in method `Array.prototype.includes()`.

For example: When checking whether `'Barcelona'` is contained in destinations, the expected output is `true`, whereas the expected output for `'Nashville'` is `false`.

```js
contains('Barcelona', destinations); // true
contains('Nashville', destinations); // false
```

```js
function contains(element, list) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === element) {
      return true;
    }
  }

  return false;
}

// Or
function contains(element, list) {
  return list.indexOf(element) >= 0;
}
```

Our first solution iterates over all elements in the input array. As soon as an element equals the input string, it returns `true`. If we have iterated over all elements without returning `true`, it means that there is no element that equals the input string and we return `false`.

Our second solution leverages the built-in method `Array.prototype.indexOf()`, which returns the index of an element in the array, and returns -1 if the element is not in the array.

### Passcode

We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (`-`).

```js
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

// Write some code here.
passcode.join('-'); // '11-jZ5-hQ3f*-8!7g3-p3Fs'
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
```

The `Array.prototype.join()` method easily allows us to join all elements of an array into a new string, with a custom separator.

```js
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let joinedPasscode = '';

for (let i = 0; i < passcode.length; i += 1) {
  if (i > 0) {
    joinedPasscode += '-';
  }

  joinedPasscode += passcode[i];
}

console.log(joinedPasscode); // '11-jZ5-hQ3f*-8!7g3-p3Fs'
```

The main difference between both solutions is that `Array.prototype.join()` provides a higher level of abstraction: it hides the iteration and string building behind a simple method call. This makes it easier to see at one glance what the solution code does with `passcode`.

### Checking items off the grocery list

We have made a grocery list, and as we check off items on that list, we would like to remove them.

Write code that removes the items from `'groceryList'` one by one, until it is empty. If you log the elements you remove, the expected behavior would look as follows.

```js
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
```

The `Array.prototype.shift()` method removes and returns the first element of the calling array. This method permanently modifies the array, which can be seen by logging `groceryList` to the console after removing elements.