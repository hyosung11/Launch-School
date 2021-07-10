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

