# Courses > JS101 Programming Foundations with JavaScript > Lesson 4: JavaScript Collections > 1. Introduction

## 1. Introduction

Programming involves working with data. It's common for programmers to store, search and manipulate data as part of their day-to-day work. Think about that first action for a moment: storing. How do we store data? The answer for most programming languages is to put them into structured containers, or collections. Collections come in many different forms, and it's useful to think of them as lists of data.

In this lesson, we'll work with three of the most commonly used collections in JavaScript: String, Array, and Object. String values in JavaScript generally aren't regarded as collections since strings are a primitive data type, but they do exhibit some properties of collections; for example, you can extract a character or a substring from a larger string. That is why we'll cover them here with the other collections.

You have already encountered these collections in previous lessons and assignments; in this lesson, we will explore them in greater depth.

Before you start, make sure to create a new directory for this lesson. Call it perhaps lesson_4, and do all your work in this lesson in that directory.

```sh
js_101          <-- this is your course 1 git repo
|
+--lesson_2     <-- all lesson 2 code goes here
|
+--lesson_3     <-- all lesson 3 code goes here
|
+--lesson_4     <-- all lesson 4 code goes here
```

## 2. Collections Basics

Collections are made up of individual elements. To work with collections, we need to understand how they are structured and how to reference and assign the individual elements within them.

### Element Reference

#### String Element Reference

![string-index-diagram](string-index-diagram.png)

Strings use an integer-based index that represents each character in the string. The index starts counting at zero and increments by one for the remaining index values. You can reference a specific character using this index.

```js
let str = 'abcdefghi';
str[2]; //=> 'c'
```

If you want to reference multiple characters within a string, you can use the `slice` method. The `slice` method takes two arguments. The first argument specifies the index at which to start the extraction and the second argument specifies the index where you want to end the extraction.

```js
str.slice(2, 5); // => 'cde'
```

Note that the character at index `5` wasn't included in the returned substring. The character at the ending index isn't part of the returned substring.

How would you reference `grass` from within this string? Try it out in the node REPL.

```sh
> let str = 'The grass is green'
```

Solution

```sh
> str.slice(4, 9)
'grass
```

You can also omit the second argument to `String.prototype.slice`. In that case, all characters from the start index to the end are returned in the substring.

```js
let str = 'abcdefghi';
str.slice(2); // => 'cdefghi'
```

Calling the `slice` method without any arguments will return a copy of the original string:

```js
'abcdefghi'.slice(); // => 'abcdefghi'
```

What happens when you provide *negative* arguments to `slice`?

```js
'abcdefghi'.slice(-4, -2) // => 'fg'
```

When given negative numbers as the indices, `slice` treats them as `string length + index`. In the above, an index of `-4` is equivalent `9 + (-4)` since the length of the string is 9 and `9 + (-4)` equals `5`. Likewise, `-2` is equivalent to `7`.

A method that is very similar to `slice`, but differs in some respects, is `String.prototype.substring`. It also takes a start index and an end index and returns a substring from the start of the index up to, but not including, the end index.

```js
let str = 'The grass is green';
str.substring(4, 9); // => 'grass'
```

`slice` and `substring` differ in the following ways:

1. When the start index is greater than the end index, `substring` *swaps* the two arguments while `slice` returns an empty string:

```js
// swap
'abcdef'.substring(3, 1); // => 'bc'

// empty string
'abcdef'.slice(3, 1); // => ''
```

1. When either argument is negative, `substring` treats them as `0`, while, as we saw above, `slice` treats them as `length + index`:

```js
// negative argument treated as 0
'abcdef'.substring(-2); // => 'abcdef'
'abcdef'.slice(-2) // => 'ef'
```

We recommend using `String.prototype.slice`. Its behavior is more natural and predictable when dealing with these edge cases.

You'll often see another method, `String.prototype.substr`, used in some old code. This method isn't strictly deprecated, but it is now defined as a **legacy function**. Eventual deprecation seems likely, which means it may be removed from future implementations of JavaScript. We don't recommend using it, but it's worth knowing about since you may come across it in the wild. See the documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr).

#### Array Element Reference

Arrays, like strings, are also ordered, zero-indexed collections.

![Array Index Diagram](array-index-diagram.png)

Arrays are lists of elements that are ordered by index, where each element can be any value. Arrays use an integer-based index to maintain the order of its elements. A specific element can be reference by its index.

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
arr[2]; // => 'c'
```

What do you think would be returned here? Try it out in the console.

```js
> let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
> arr.slice(2, 5)[0] // => 'c'
```

Solution

```sh
> arr.slice(2, 5)
['c', 'd', 'e']
> arr.slice(2, 5)[0]
'c'
```

Since `slice` returns an array value, we can use `[0]` to extract the first element of the array.

It is important to note that `Array.prototype.slice()` and `String.prototype.slice()` are not the same method, even though they have the same name. They do share a lot of the same functionality, but they are separate implementations. One key distinction is that `String.prototype.slice()` returns a new **string** whereas `Array.prototype.slice` returns a new **array**.

As with `String.prototype.slice()`, you can also omit the second argument to `Array.prototype.slice`. The result is similar:

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
arr.slice(2); // => ['c', 'd', 'e', 'f', 'g']
```

Calling `slice` without any arguments returns a shallow copy of the original array:

```js
arr.slice(); // => [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
```

Note that we said `slice` returns a copy of the array and not the original array. How would you verify that in the node console?

Solution

```sh
> let arr = ['a', 'b', 'c', 'd']
> let arrCopy = arr.slice()
> arrCopy.push('e')
5

> arr
[ 'a', 'b', 'c', 'd' ]
> arrCopy
[ 'a', 'b', 'c', 'd', 'e' ]
```

Notice that the original array `arr` doesn't get mutated when we call the `push` method on `arrCopy`. That tells us that `slice` returns a copy, not the original array object.

It's also a shallow copy instead of a deep copy. This becomes important when the copied array contains objects and other arrays as elements. How would you verify that in the node console?

Solution

```sh
> let nestedArr = [1, [2, 3], { foo: 4 } ]
> let nestedCopy = nestedArr.slice()

> nestedCopy.push(5)
4
> nestedCopy[1].push(6)
3
> nestedCopy[2].bar = 7;
7

> nestedArr
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 } ]
> nestedCopy
[ 1, [ 2, 3, 6 ], { foo: 4, bar: 7 }, 5 ]
```

Notice that we mutated both the nested array and the nested object using the `nestedCopy` variable, but those mutations also showed up in `nestedArr`. However, when we just added a single element to `nestedCopy`, it had no effect on `nestedArr`.

#### Object Element Reference

Objects are another common collection data structure that, instead of using an integer-based index, uses key-value pairs, where the key is a string and the value can be any JavaScript value. That allows for a more expansive and descriptive collection of elements. Object keys are also called **properties**.

![hash-key-value-diagram](hash-key-value-diagram.png)

```js
let obj = { fruit: 'apple', vegetable: 'carrot' };
obj.fruit; // => 'apple'
obj.fruit[3]; // => 'l'
obj['vegetable']; // => 'carrot'
obj['vegetable'][0]; // => 'c'
```

Note that there are two ways of referencing an element in an object. The first one is called the **dot notation** of object property access and the second one is the **bracket notation**. In the above example, we use dot notation to access the value of the `'fruit'` key and bracket notation to access the value of the `'vegetable'` key. It is important to note that the `[0]` part of `obj['vegetable'][0]` and `[3]` in `obj.fruit[3]` in the above example is **string element reference**. The string `'carrot'` is returned by `object['vegetable']` and `[0]` is used to access the first letter of that value.

When initializing an object, the keys/property names must be unique. Try the following code out in the console.

```sh
> let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
```

Solution

```sh
> let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }
> obj
{ fruit: 'pear', vegetable: 'carrot' }
```

Our object ends up with only two key-value pairs. The first one is *overwritten* by the third as they have identical keys.

Values, however, can be **duplicated**:

```js
let obj = { apple: 'fruit', carrot: 'vegetable', pear: 'fruit' };
```

We can access just the keys or just the values from an object with the `Object.keys` and `Object.values` methods. These methods return an array:

```js
let capitals = { uk: 'London', france: 'Paris', germany: 'Berlin' };
Object.keys(capitals); // => ['uk', 'france', 'germany']
Object.values(capitals); // => ['London', 'Paris', 'Berlin']
Object.values(capitals)[0]; // => 'London'
```

In the final line of the example above, `[0]` is referencing the item at index `0` of the array `['London', 'Paris', 'Berlin']` since this is the return value of `Object.values(capitals)`.

#### Element Reference Gotchas

There are a few things that can catch you off guard when referencing elements in a collection, so you need to be aware of these to avoid unintended behavior in your code.

##### Out of Bounds Indices

We know that strings and arrays are indexed collections and that we can reference individual elements within the collection via their index.

```js
let string = 'abcde';
let array = ['a', 'b', 'c', 'd', 'e'];

string[2]; // => 'c'
array[2]; // => 'c'
```

The indices of both of these collections run from 0 to 4. What if we try to reference an index greater than 4?

```js
string[5] // => undefined
array[5] // => undefined
```

Referencing an **out-of-bounds** index in this way returns `undefined`.

What happens if we try to reference an index less than `0`?

```js
string[-1]; // => undefined
array[-1]; // => undefined
```

Accessing an index less than `0` on an array or a string also returns `undefined` in JavaScript.

##### Invalid Object Keys

Using a key to access a property that doesn't exist on an object also returns `undefined`:

```js
let obj = { a: 'foo', b: 'bar' };
obj['c']; // => undefined
```

Sometimes, though, an object contains properties with `undefined` values on purpose. In that case, how would we differentiate between a non-existent property versus a property that has `undefined` as its value? There are a number of ways do that. The `Object.prototype.hasOwnProperty` method returns a boolean indicating whether it exists as a property in the object:

```js
let obj = { a: 'foo', b: 'bar', c: undefined};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('d'); // => false
```

 Another way to differentiate a non-existent property from a property with `undefined` as its value is to use `Object.keys` along with the array `includes` method:

```js
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('d'); // => false
```

##### Arrays are Objects

It's important to remember that JavaScript arrays are objects. The chief difference between an array and some other object is that it uses non-negative integers as its primary keys. Another significant difference is that adding elements to the array increases the value of its `length` property, and changing the value of the `length` property causes the number of elements to change.

Since arrays are objects, we can add additional properties to them:

```js
let arr = ['foo', 'bar', 'qux'];
arr['boo'] = 'hoo';
arr[-1] = 374;
arr; // => ['foo', 'bar', 'qux', boo: 'hoo', '-1': 374]
arr.length; // => 3 (not 5!) - just counting indexes
arr.forEach(element => console.log(element)); // prints: foo, bar, qux
Object.keys(arr); // => [ '0', '1', '2', 'boo', '-1' ]
```

Note that `arr[-1] = 374` looks like we're creating an element at index position `-1`. In fact, the `'-1'` property is not really an element of the array, but is an ordinary property of the object. You can see this in the return value from line 4 where the property is shown as `'-1': 374`. By the same token, `arr['boo']` isn't an element of the array, but a property of the object.

It's also important to note that the value of the length property *does not change after we add non-element properties* to the array. Furthermore, those properties are *ignored* by array methods like `forEach`, `map`, and `filter`. (We'll talk about those methods in a later assignment.)

However, when we use an `Object` method, such as `keys`, we get a list of all of the property names. Curiously, the return value here shows the indices of the array elements as string keys, `'0'`, `'1'`, and `'2'`.

Finally, you must be careful when you need to distinguish between arrays and other objects. You might, for instance, assume that the `typeof` operator would identify an array as an `'array'`. It doesn't. It returns `'object'` instead. If you really need to detect an array, you can use the `Array.isArray` method:

```js
let arr = ['foo', 'bar', 'qux'];
let obj = { a: 1, b: 2 };
typeof arr; // => 'object'
typeof obj; // => 'objet'
Array.isArray(arr); // => true
Array.isArray(obj); // => false
```

### Conversion

The fact that strings and arrays share similarities makes it intuitive to convert from one to the other, which is quite common in JavaScript code. There are a few methods that facilitate this type of conversion including `String.prototype.split` and `Array.prototype.join`.

`String.prototype.split()`, when called without any arguments, returns an array with the string as its only element:

```js
'this is a string'.split(); // => ['this is a string']
```

However, if you provide it with an empty string as the argument, it returns an array of all the characters in the string:

```js
'abcdef'.split(''); // => ['a', 'b', 'c', 'd', 'e', 'f']
'abcdef'.split('')[0]; // => 'a'
```

Note that we use the `[]` operator on the return value of `split`. The `split` method returns an array so we can access element from that array using the `[]` operator.

Any other string provided to `split` as the argument will be used to separate the string using the argument as the delimiter:

```js
'apple,orange,mango'.split(',') // => ['apple', 'orange', 'mango']
```

When called without any arguments, `Array.prototype.join()` returns a string with the elements of the array joined together into a string, separated by commas.

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join() // => 'a,b,c,d,e,f'
```

How would you join the characters in the array into a string without delimiting each character with a comma? You may want to check the MDN docs to read up on `Array.prototype.join()`.

Solution

```js
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
arr.join(''); // => 'abcdef'
```

We can also convert objects to arrays. Apart from `Object.keys` and `Object.values` methods, you can use `Object.entries` to convert an object to an array.

```js
let obj = { sky: 'blue', grass: 'green' };
Object.entries(obj); // => [[ 'sky', blue], [ 'grass', 'green ]]
```

The array returned by `Object.entries` contains nested arrays, with each sub-array containing two values. The sub-arrays are equivalent to the key-value pairs from the initial object.

### Element Assignment

#### Array Element Assignment

We can use the element assignment notation of arrays to change the value of a specific element within an array by referring to its index. Say, for example, that we wanted to increment the first element of an array of numbers by 1, we could do this in the following way.

```js
let numbers = [1, 2, 3, 4];
numbers[0] = numbers[0] + 1; // => 2
numbers; // => [2, 2, 3, 4]
```

Note that this way of modifying an array is a **destructive** action; that is, the `numbers` array is **mutated**.

In the node REPL or a code file, use the same method to increase the value of the rest of the numbers in the array by 1. Also, try incrementing an element that doesn't exist, such as numbers[4].

Solution

```js
numbers[1] = numbers[1] + 1;
numbers[2] = numbers[2] + 1;
numbers[3] = numbers[3] + 1;
numbers[4] = numbers[4] + 1;
numbers;    // [ 2, 3, 4, 5, NaN ]
```

#### Object Key Assignment

Object element assignment is similar. The object key is used instead of assigning a value using an index.

```sh
> let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
> obj['apple'] = 'Fruit'
> obj.carrot = 'Vegetable'
> obj
{ apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Produce',
  broccoli: 'Produce' }
```

As you can see, we can use dot notation as well as bracket notation for object key assignment.

Note that, once again, this is a **destructive** action that permanently modifies `obj`.

In the node REPL or a code file, use the same method to set a value of either 'Fruit' or 'Vegetable' to the pear and broccoli properties.

#### String Character Assignment

Here is where the major difference between strings and the other two collection types begins to show. JavaScript strings are **immutable** and, hence, cannot be altered permanently. You can try to use the array element assignment syntax with strings without getting any errors, but it does not affect the string:

```js
let str = 'bob';
str[0] = 'B'; // => 'B'
str; // => 'bob'
```

You can see that after the "reassignment," `str` has the same value as it had before. One question you might ask is why JavaScript lets you do the reassignment if it doesn't affect the original string. We'll talk about why that is in a later course. For now, remember that string element reassignment, even though it's syntactically permitted, doesn't affect the string. That behavior can lead to frustrating bugs, so beware!

If that's the case, how can one make changes to a string? Well, just create a new string with the desired changes. For example, we can reassign the `str` value to a new string and reassign the variable to the new value:

```js
str = 'B' + str.slice(1);
str; // => 'Bob'
```

### Collections Basics Summary

We've talked about quite a few important topics in this assignment. More specifically, we covered the core ways to reference elements or assign values for particular elements in a collection using some of the various element reference and element assignment methods of String, Array, and Object.

These concepts are fundamental to working with collections, so it's critical to understand everything we talked about in this assignment before moving forward. Taking the time to have a clear understanding of these topics will make it much easier to handle topics that build upon these fundamentals in the future.

20210817 17:35 Finish Assignment 2

## 3. String Methods

As mentioned in the previous assignment, JavaScript strings aren't really collections since you can't store generic data in them. You can, perhaps, think of them as collections of characters; they have some properties that one would associate with collections. For example, you can access individual characters or multiple characters of the string and can loop through all the characters by using the `length` property in conjunction with the `for` and `while` loops. That's the reason behind covering strings in a lesson about JavaScript collections.

Before we start diving into the most common string methods you're expected to know about, be sure to refresh your memory on the various ways of writing string literals and when to use each one, from the [book](https://launchschool.com/books/javascript/read/basics#datatypes).

Time to learn about some string methods.

### `String.prototype.concat()`

We've already seen one way of joining two strings together, the + operator. Another way to concatenate two strings together is by using the concat method. It works exactly the way the + operator works with two strings.

```sh
> 'Hello '.concat('World!')
'Hello World!'
```

Since JavaScript strings are **primitive values**, any operation performed on them, including the `concat` method, *results in a new string*. We won't reiterate this point in the rest of the assignment. None of the methods that operate on strings mutate the string since JavaScript strings are **immutable**.

Open a console session and verify that that's the case with the `concat` method.

Solution

```sh
> let str = 'Hello'
undefined
> str.concat(' World!')
'Hello World!'
> str
'Hello'
```

Note that the original string assigned to `str`, remains unchanged after we call the `concat` method on it. If you want to change the value that `str` refers to, reassign it the return value of the `concat` method call.

```sh
> let str = 'Hello'
> str = str.concat(' there!')
'Hello there!'
> str
'Hello there!'
```

Concat can take more than one string as arguments. It combines all those strings into one:

```sh
> let str1 = 'Hello'
> let str2 = 'World!'

> str1.concat(' ', str2)
'Hello World!'
```

### `String.prototype.includes()`

The `includes` method takes a string as the argument and returns a boolean signifying whether that string exists within the string that `includes` was called on.

```sh
> 'One potato, two potato, three potato, four'.includes('three')
true
> 'One potato, two potato, three potato, four'.includes('tater')
false
> 'abc'.includes('a')
true
```

`includes` also takes an optional second argument that specifies which index in the string to start looking for the substring.

```sh
> 'abcdefg'.includes('b', 2)
false
```

Even though the string `abcdefg` includes `'b'`, the method call returns `false` since we're telling it to start its search from index `2`.

### `String.prototype.split()`

We've already seen the `split` method in previous assignments, but we'll cover it again here because `split` is one of the more important string methods. `String.prototype.split`, as the name signifies, separates a given string into multiple strings and returns them in the form of an array. How the string gets split depends on the argument you provide to `split`. The basic case is when you don't provide any argument:

```sh
> 'abcdef'.split()
['abcdef']
```

In this case, the whole string is simply returned as the first element of an array. If you provide an **empty string**, each character of the string will be split into individual characters:

```sh
> 'abcdef'.split('')
['a', 'b', 'c', 'd', 'e', 'f']
```

Any other string argument you provide to `split` will be used as the separator by which to split the string:

```sh
> 'One potato, two potato, three potato, four'.split(', ')
[ 'One potato', 'two potato', 'three potato', 'four' ]
```

Note that we provided the `,` character and space as the separator. Open the node console and see how the string gets split if we provide `','` as the argument.

```sh
> 'One potato, two potato, three potato, four'.split(',')
[ 'One potato', ' two potato', ' three potato', ' four' ]
```

### `String.prototype.trim()`

The `trim` method removes whitespace from both ends of a string it's called on. The `trim` method is often useful when getting input from users, which can often contain unnecessary whitespace at either end.

```sh
> '  abcdef   '.trim()
'abcdef'
```

`trim` removes any number of space characters as well as whitespace characters like `\n` and `\t`.

```sh
> '\nabcdef\t'.trim()
'abcdef'
```

There are a couple of variations and the `trim` method that are also very useful. The `trim Start` method removes whitespace from the beginning of a string while `trimEnd` does so at the end of the string.

```sh
> '  abcdef  '.trimStart()
'abcdef  '
>'  abcdef  '.trimEnd()
'  abcdef'
```

### `toUpperCase()` and `toLowerCase()`

 You've already seen both of these methods and the names are pretty self-explanatory. `toUpperCase()` and `toLowerCase()` convert the strings to uppercase or lowercase respectively:

```sh
> 'pete'.toUpperCase()
'PETE'
> 'PETE'.toLowerCase()
'pete'
```

 Sometimes, you want to convert only the first character of a string to it uppercase equivalent. You can do that by combining `toUpperCase()` with `slice()` and any of the string concatenation methods:

 ```js
function capitalize(str) {
  return str[0].toUpperCase() + str.slice();
}

capitalize('pete'); // => 'Pete'
 ```

### `String.prototype.charAt`

The `charAt` method is nearly identical to using brackets on a string. It takes an index as an argument and returns the character at that index in the given string:

```sh
> let sentence = "It's a walk in the park."
> sentence.charAt(5)
'a'
```

We see that the character `a` is at index five in the string `"It's a walk in the park."`

Note that when we create the string literal, `It's a walk in the park.`, we are using double quotes (`""`) instead of the single quotes that we have normally been using. The reason is that our string itself contains a single quote. Using single quotes to wrap a string that contains a single quote will confuse the JavaScript engine; instead of being a part of our string, it will be interpreted as syntax. You can use a similar technique with strings that contain double quotes:

```sh
> let sentence = 'He said, "I will come back!"'
```

 You can of course always use the escape character (`\`) to let JavaScript know that the character immediately after the `\` should not be interpreted as part of the syntax:

```sh
> let sentence = 'It\'s a walk in the park'
> sentence
"It's a walk in the park"
```

 The chief difference between `charAt()` and `[]` occurs when using indices for characters that don't exist: `charAt()` returns an empty string (`''`), while `[]` returns undefined:

```sh
> 'abc'[5]
undefined
> 'abc'.charAt(5)
''
> 'abc'[-2]
undefined
> 'abc'.charAt(-2)
''
```

### `String.prototype.charCodeAt()`

 The method `charCodeAt()` is similar to `charAt()`, but instead of returning the character at the given index, it returns the **Unicode code point** or **character code** of the character at the index. A unicode code point is the number that represents the machine level.

```sh
> 'abcdef'.charCodeAt(1)
98
```

Index `1` contains the character `'b'` and the code point for `'b'` is 98.

If you don't provide an index, `charCodeAt() assumes the index`0`.

```sh
> 'abcdef'.charCodeAt()
97 // the character code for 'a'
```

The `String.fromCharCode()` method does the opposite of `String.prototype.charCodeAt()`. It takes a character code (Unicode code point) and returns the character represented by that character code.

```sh
> String.fromCharCode(97)
'a'
```

Note that `fromCharCode()` is not a prototype method. It's instead what we call a **static method** or a function. We can't call `fromCharCode` directly on a string; instead, it must be called on the constructor `String`. It's a common pattern in different languages to write methods that don't pertain to a specific value of a type directly on the class/constructor for that type. In this case, `fromCharCode` isn't an operation you'd perform on a string value. That is, something like the following doesn't make sense:

```sh
'abcd'.fromCharCode(97)
=> Uncaught TypeError: "abcd".fromCharCode is not a function
```

The operator `fromCharCode` isn't doing anything with the string `'abcd'`. It's simply a function that, given a character code, returns a string that contains the character for that character code. That's why it makes sense to call `fromCharCode()` directly on the `String` constructor.

### Other String Methods

The following are a few other string methods of note. Read the MDN documentation to see what each method does:

`String.prototype.endsWith()`

- The `endsWith()` method determines whether a string ends with the characters of a specified string, returning `true` or `false` as appropriate.
- Syntax
  - `endsWith(searchString)`
  - `endsWith(searchString, length)`

```js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false
```

`String.prototype.startsWith()`

- The `startsWith()` method determines whether a string begins with the characters of a specified string, returning `true` or `false` as appropriate.
- Syntax
  - `startsWith(searchString)`
  - `startsWith(searchString, position)`

```js
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false
```

`String.prototype.repeat()`

- The `repeat()` method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
- Syntax
  - `repeat(count)`

```js
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
```

### String Methods Summary

Strings are an important data-type in JavaScript. Most programs in modern JavaScript involve working with strings in one form or another. Get familiar with the methods that operate on strings; doing so will serve you well as you learn more about JavaScript.

20210818 16:46 Assignment complete.

## 4. Iterating with for and while Loops

20210819 06:02

When working with a collection, it's common to perform a single action on each element in the collection. Instead of writing the action over and over again, loops can be used to process many, if not all, of the elements in a collection.

In a previous assignment, we looked at manually incrementing all the numbers in an array by 1. Here's a reminder of what that looked like (slightly modified).

```js
let numbers = [1, 2, 3, 4];
numbers[0] += 1;
numbers[1] += 1;
numbers[2] += 1;
numbers[3] += 1;
numbers;               // => [ 2, 3, 4, 5 ]
```

You probably noticed that lines 2 - 5 of the above code are almost identical other than the array indices. This array is relatively small; imagine if we needed to increment each value in a much larger array - say, one containing 20 or 30 numbers or maybe even 1,000,000. That's a lot of repetitive code. Situations like this are where we can use a loop to do the hard work for us.

Let's see how we'd solve this problem with a `while` loop:

```js
let numbers = [1, 2, 3, 4];
let idx = 0;

while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}

console.log(numbers) // => [2, 3, 4, 5]
```

If you understand this code immediately, you can glance at the rest of this assignment. If you have a little bit of trouble with it, though, make sure you reread the [chapter on loops](https://launchschool.com/books/javascript/read/loops_iterating) in the book, then read the rest of this assignment. Take notes and pay attention -- it's extremely critical.

### Generic Loops

In JavaScript, the most basic kind of loop uses the while statement with a conditional expression that is always true:

```js
while (true) {
  // some code here
}
```

Any code within the block gets executed during each iteration. Since the condition never becomes false, the loop continues to repeat forever: it becomes an infinite loop. Try the following code in the node REPL:

```sh
> while (true) {
>   console.log('Hello!')
> }
```

You should see thousands of lines of text output on the console, though they may occur so rapidly, it may look like the program isn't doing anything. Press `Ctrl + C` to cancel the program. You can safely ignore the error and stack trace caused by `Ctrl + C` -- that's normal behavior.

Let's add a `break` statement after the `console.log` call. When we do, the loop iterates just once since `break` causes JavaScript to exit the nearest loop:

```js
while (true) {
  console.log('Hello!');
  break;
}
```

If we want the loop to iterate more than once, we can use a conditional statement with `break` so it only breaks out of the loop when a specific condition occurs. For example, let's say we have a variable named `number` that represents a random number. We can exit the loop when `number` equals `5` by writing the `if` condition as `number === 5`:

```js
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting ...')
    break;
  }
}
```

Try running this code a few times (either from a code file or in the node REPL) and make a note of what you notice.

Once you've done that, compare your notes with these:

1. One or more numbers are output.
2. The last number output is 5.
3. 'Exiting...' is output once

On each iteration:

- number is assigned to a random number between 0 and 9.
- The number is output.
- The if statement checks whether number is equal to 5.
- If it is, it displays'Exiting...' and then executes break to exit the loop.
- If it isn't, then the loop repeats.

### **Iterating Over Collections**

Let's see how we can use our knowledge of loops to iterate over collections.

#### Strings

Here's a loop that iterates over a string and prints each character.

```js
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let counter = 0;

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter += 1;
}
```

Here's the same iteration performed with a for loop:

```js
let alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let counter = 0; counter < alphabet.length; counter++) {
  console.log(alphabet[counter]);
}
```

The `for` loop is a little more succinct as it puts the `counter` declaration and initialization, the looping condition, and the counter incrementing statement on a single line. The `for` loop is the preferred approach of the two when it comes to iterating over collections.

To print each character in the string, we need to iterate over the entire string and use string references to retrieve each letter based on its index. Since our `counter` starts at `0`, we can use that. Our looping condition, `counter < alphabet.length` makes sure that the loop stops as soon as the value of `counter` becomes equal to the length of our string, which is 26.

To print a specific character in a string, we use the index value associated with that character. Since `counter` represents the current iteration number, we can use its value as the index value for each character. That results in every character being printed one at a time.

Note that our looping condition is not `counter <= alphabet.length`. In other words, we want the loop to continue only as long as the counter is less than 26 and not until its equal to 26. The reason for that is that strings and arrays have 0-based indices and our counter also starts at zero. By the time the counter reaches `26`, the loop has already performed 26 operations and accessing `alphabet[26]` would be an out of bounds access.

Suppose the string includes spaces. Since strings can only contain characters, we know that spaces are also characters. If the string were `'a b c'` for example, each character would be printed, including the spaces.

```sh
a

b

c
```

#### Arrays

To iterate over an array, we can use the for loop in the same way we did with a string.

```js
let colors = ['green', 'blue', 'purple', 'orange'];

for (let counter = 0; counter < colors.length; counter += 1) {
  console.log(`I'm the color ${colors[counter]}!`);
}
```

What do you think will be output by the loop?

Solution

```sh
I'm the color green!
I'm the color blue!
I'm the color purple!
I'm the color orange!
```

In the above example, the array only contains strings. However, arrays can contain any JavaScript values, regardless of type, and can contain different types at the same time. Let's modify the array so that it contains different data types. We also modify the call to `console.log` to print the type of each element. We can use the `typeof` operator to do that.

```js
let mixed = ['hello', 10, undefined];

for (let counter = 0; counter < mixed.length; counter += 1) {
  console.log(typeof mixed[counter]);
}

Now our output looks a little different.

```sh
string
number
undefined
```

#### Objects

Using the `for` and `while` loops to iterate over an object is a bit harder — it requires a couple more steps. That's because objects use key-value pairs instead of a zero-based index. Each value in an object is associated with a specific key. Since object keys are strings, a simple counter variable won't allow us to fetch the values we want.

To remedy this, we have to create an array containing all of the keys in the object. We can do this by using `Object.keys`, which returns an array containing all of the keys in the object. We can then use the new array of keys to iterate over the object.

```js
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = Object.keys(numberOfPets);
let counter = 0;

while (counter < pets.length) {
  let currentPet = pets[counter];
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
  counter += 1;
}
```

The most important thing to realize here is that this is a two-step process. First, we're iterating over the array of keys, `pets`, and saving each key into the `currentPet` variable. We then use the `currentPet` key to retrieve the appropriate value from the `numberOfPets` object.

The `console.log` statement interpolates both the current object value, `currentPetNumber`, and the current object key, `currentPet`, into the "I have ... !" string.

```sh
I have 2 dogs!
I have 4 cats!
I have 1 fish!
```

Recall from the [Objects chapter](https://launchschool.com/books/javascript/read/objects#whatareobjects) of the book that you don't have to use `for` or `while` loops to iterate over an object. The [for/in](https://launchschool.com/books/javascript/read/objects#iteration) loop provides a simpler way to iterate over objects:

```js
let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

for (let currentPet in numberOfPets) {
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${currentPet}!`);
}
```

The book discusses why `for/in` may not produce the same results as the `while` loop shown above.

#### Loop Controls: break and continue

##### Positioning break

##### continue and Guard Clauses

### **Iterating Summary**

Looping comprises four primary elements: a looping construct such as `for` or `while`, a counter (or control variable), a way to retrieve a current value, and a way to exit the loop. It's important to understand how to manually loop over collections with nothing more than these 4 tools. It's often tempting to go "method hunting" to search for a method to iterate over a collection, but, if you master the basics of looping, you'll find that you can perform nearly any operation you need with the simple techniques in this assignment. Methods can be useful, but they shouldn't be used as a crutch.

In later assignments, you'll see how to combine `for` and `while` with a few other tools to manipulate collections according to your will.
