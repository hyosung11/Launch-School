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