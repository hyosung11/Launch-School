# Lesson 4: JavaScript Collections

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
  return str[0].toUpperCase() + str.slice(1);
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
- If it is, it displays 'Exiting...' and then executes break to exit the loop.
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

Using the `for` and `while` loops to iterate over an object is a bit harder ??? it requires a couple more steps. That's because objects use key-value pairs instead of a zero-based index. Each value in an object is associated with a specific key. Since object keys are strings, a simple counter variable won't allow us to fetch the values we want.

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

Every loop in JavaScript, whether it uses `while`, `do/while`, or `for` can be rewritten as a generic `while (true)` loop. If you're not sure what type of loop you need, you can always start with a generic loop, then modify the finished code to use the appropriate non-generic loop.

In our earlier example with random numbers, we put the `break` at the end of the loop:

```js
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
```

That mimics the behavior of a `do/while` loop. For instance, here's the equivalent `do/while` code:

```js
let number;

do {
  number = Math.floor(10 * Math.random());
  console.log(number);
} while (number !== 5);

console.log('Exiting...');
```

If we put the `break` at the beginning of the loop, it mimics a regular `while` loop:

```js
let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}
```

```js
let str = '';

while (str.length < 10) {
  str += '*';
  console.log(str);
}
```

These last few examples demonstrate that we can often replace `while (true)` loops with an equivalent `while` or `do/while` loop. In most cases, you can and should. However, that's not always the case. Sometimes, you have to exit from the middle of a loop rather than the beginning or end:

```js
while (true) {
  let number = Math.floor(10 * Math.random());
  if (number === 5) {
    console.log('Exiting...');
    break;
  }

  console.log(number);
}
```

This loop is similar to the `while (true)` loop we wrote at the beginning of this section. There, we exited after we displayed the number `5`. This one, though, never displays the number `5`. Instead, it tests the termination condition in the middle of the loop and exits before outputting the number.

Note that we can use the `break` statement in any `while`, `do/while`, or `for` loop; you aren't restricted to using it only in `while (true)` loops.

```js
let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) {
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}
```

This loop iterates over the elements of the `names` array, but terminates the loop early if it encounters a name that begins with `'E'`.

##### continue and Guard Clauses

The `break` statement lets us terminate a loop at any time. The `continue` statement provides a similar service, but, instead of terminating the loop, it terminates the current iteration and returns to the top of the loop.

Suppose we want to display the squares of all the even numbers in an array. Our solution might look like this:

```js
let numbers = [1, 4, 3, 7, 6, 5, 2, 1];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 1) {
    let square = numbers[index] * numbers[index];
    console.log(square);
  }
}
```

That's simple enough. However, the nested logic is a little harder to understand than unnested logic would be. It also doesn't clearly show that the loop has no interest in the odd numbers. In a small loop like this, that's not significant, but in a larger loop, you have to scan down to find out whether the loop ever does something with the odd numbers. That decreases the readability of your code.

One way to deal with this issue is to use a **guard clause** to exclude the odd numbers from further consideration:

```js
let numbers = [ 1, 4, 3, 7, 6, 5, 2, 1 ];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) continue;

  let square = numbers[index] * numbers[index];
  console.log(square);
}
```

A guard clause is a conditional statement that protects the body of a loop or function from having to deal with values it doesn't need to handle. In this case, we don't want the main body of our loop (lines 6 and 7) to handle odd numbers, so we use a guard clause at the top of the loop to end the current iteration of the loop and resume with the next. In this example, we use the `continue` statement to terminate the current iteration of the loop and perform the next. The guard clause also clearly shows that we have no further interest in odd numbers.

Note that `continue` doesn't restart the loop. Instead, it ends the current iteration and starts the next. In the above example, for instance, `continue` doesn't reset `index` to `0` as it would if it restarted the loop. However, since it starts the next iteration, it increments the `index` variable (`index += 1`) and tests the termination condition again.

Guard clauses always include a `continue`, `break`, or `return` statement in the body of the `if` statement, depending on need. Most shouldn't do anything else, but that's not a strict rule.

Actually, there are some other statements you can use in a guard clause besides `continue`, `break`, and `return`, but we don't talk about them in this course.

Note that we used a single-line version of the `if` statement when writing our guard clause, contrary to the general rule that you should always use blocks with braces. It's common practice to use the single-line version of the `if` statement with guard clauses, but it isn't required. You could, for example, write:

```js
if (numbers[index] % 2 === 1) {
  continue;
}
```

However, the multi-line form makes for longer functions, especially if you have multiple guard clauses.

### **Iterating Summary**

Looping comprises four primary elements: a looping construct such as `for` or `while`, a counter (or control variable), a way to retrieve a current value, and a way to exit the loop. It's important to understand how to manually loop over collections with nothing more than these 4 tools. It's often tempting to go "method hunting" to search for a method to iterate over a collection, but, if you master the basics of looping, you'll find that you can perform nearly any operation you need with the simple techniques in this assignment. Methods can be useful, but they shouldn't be used as a crutch.

In later assignments, you'll see how to combine `for` and `while` with a few other tools to manipulate collections according to your will.

20210819 10:48 Assignment complete.

## 5. Introduction to the PEDAC Process

The PEDAC process is one approach to solving programming problems. Its primary goal is to help you identify and avoid pitfalls that you may encounter when you don't code with intent.

P - [Understand the] **P**roblem

E - **E**xamples / Test cases

D - **D**ata Structure

A - **A**lgorithm

C - **C**ode

This guide describes a "lighter" version of the PEDAC process that should help you prepare for the upcoming interview assessment. We'll discuss PEDAC in much more detail in a later course.

When given a programming problem, students often jump straight to the coding part. At first glance, this approach seems reasonable. In an interview setting with limited time, you want to solve the problem quickly. Writing an algorithm may seem like an unnecessary use of your limited time, especially when the problem seems simple. However, in this guide, we want to show you that following the PEDAC process saves time and lets you solve **complex** problems efficiently.

Note that we've bolded the word "complex." Some problems, like, writing a function that takes a string and returns its uppercased version are so simple that they don't need a detailed algorithm. However, writing a function that returns all the substrings from a given string that are palindromes is not simple, and following the PEDAC process is crucial to solving the problem in the time allotted.

In this guide, we will focus on the "understand the problem" and "data structure/algorithm" steps of the PEDAC process. We won't spend much time talking about the Examples/Test Cases step since we will provide test cases during the first interview assessment. We also won't spend much time on the Code: most students have sufficient knowledge of JavaScript syntax, functions and methods to solve even the hardest problems. Where they run into trouble is *understanding the problem and determining an appropriate algorithm*.

### P - [Understand the] Problem

Understanding the problem has three steps:

1. Read the problem description.
2. Check the test cases, if any.
3. If any part of the problem is unclear, ask the interviewer or problem requester to clarify the matter.

Let's walk through this process for the problem given below:

```js
// PROBLEM:

// Given a string, write a function changeMe which returns the same
// string but with all the words in it that are palindromes uppercased.

// changeMe("We will meet at noon") === "We will meet at NOON"
// changeMe("No palindromes here") === "No palindromes here"
// changeMe("") === ""
// changeMe("I LOVE my mom and dad equally") === "I LOVE my MOM and DAD equally"
```

After reading this problem, some items may need clarification:

1. **What is a palindrome?** You might ask the interviewer to tell you what a palindrome is, and the interviewer would tell you that it is a word that reads the same forwards and backward.

2. **Should the words in the string remain the same if they already use uppercase?** Here, you can check the test cases. In the fourth test case, the word LOVE already uses uppercase, and it remains uppercase in the solution.

3. **How should I deal with empty strings provided as input?** The test cases frequently answer this question. In this case, test case number 3 provides the answer. This is an implicit requirement that we can infer from the test cases.

4. **Can I assume that all inputs are strings?** Test cases don't show any non-string inputs, so you should ask whether the inputs can contain non-string values, and what you should do with them. In this problem, we won't worry about non-string values.

5. **Should I consider letter case when deciding whether a word is a palindrome?** Again, test cases don't show any appropriate examples. The interviewer might tell you that the palindrome words should be case sensitive: mom is a palindrome, Mom is not.

6. **Do I need to return the same object or an entirely new one?** This question isn't relevant to our current problem since JavaScript strings are immutable and any operation on them will result in a new string. In general, though, this question is one of the most important and most overlooked that you can ask. Typically, while solving problems, students make certain assumptions. One assumption they might make is to return the same object; they often start solving the problem without checking whether that assumption is correct. For this reason, the student may end up losing 10-15 minutes struggling with the wrong problem.

7. **Always verify your assumptions by looking at the test cases or by asking the interviewer.** As discussed in the above point, students often make assumptions about the problem or the expected output that may not be what the interviewer has in mind. That can lead to a waste of time pursuing an incorrect or incomplete solution. Make sure to confirm that your assumptions are correct before you proceed to start developing your algorithm.

To conclude this part of the PEDAC process, you need to write down what the inputs and outputs for the problem are. You should also describe the rules that you must follow. The rules should encapsulate all the explicit and implicit requirements in the problem. So, you should identify what the explicit requirements are, write them down, and then repeat the process for the implicit requirements:

```js
// input: string
// output: string (not the same object)
// rules:
//      Explicit requirements:
//        - every palindrome in the string must be converted to
//          uppercase. (Reminder: a palindrome is a word that reads
//          the same forwards and backward).
//        - Palindromes are case sensitive ("Dad" is not a palindrome, but
//          "dad" is.)

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty string
```

### Data Structure / Algorithm

Data structures influence your algorithm, and for that reason, these two steps are often paired. Deciding what data structure to use is generally easy. A case that calls for an array rather than an object, for instance, is generally easy to identify. However, designing the right algorithm is far more challenging. The biggest problem that students have when writing algorithms is providing sufficient detail.

Let's consider another problem. Try to work through the "understand the problem" part of this problem on your own, and write the input, output, and rules for it. We'll provide a solution below. Later, we'll tackle the data structure and algorithm.

```js
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
```

Answer

```js
// Some questions you might have?
// 1. What is a substring?
// 2. What is a palindrome?
// 3. Will inputs always be strings?
// 4. What does it mean to treat palindrome words case-sensitively?

// input: string
// output: an array of substrings
// rules:
//      Explicit requirements:
//        - return only substrings which are palindromes.
//        - palindrome words should be case sensitive, meaning "abBA"
//          is not a palindrome.

//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty array
```

What data structure could we use to solve this problem? The obvious choice seems to be an array since that's the desired output.

Now, we come to the algorithm part. Look at the algorithm written below.

```js
// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array
```

Does this algorithm look complete to you?

This algorithm is a "high-level" algorithm and it resembles those that we often see students write during interviews. It looks complete, but let's think about it for a moment: what is the hardest part of this problem? Is it looping through an array and pushing substrings that are palindromes in the result array? Is it determining whether a substring is a palindrome? Is it something else entirely?

Determining whether a word is a palindrome isn't that difficult for most students. Looping through the array and selecting all the palindromes is relatively easy as well. However, finding all the substrings for a given string can be challenging. The above algorithm doesn't tackle that issue. It lacks implementation details for the "hard" parts.

When a student starts writing code based on this algorithm, he soon realizes that returning all the substrings won't be easy. Ideally, the student should return to the algorithm and try to come up with a way to find all the substrings from the input string. He might also create a new function named substrings that returns the array of substrings. In practice, though, the time limitations often lead him to take a hack & slash approach instead. That almost always leads to spending more time than necessary on the problem or, worse yet, not solving it at all.

Let's now follow the correct approach. The student can use the "high-level" algorithm from above and first write the code for it. The code might look like this:

```js
function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}
```

Note that we are calling functions named `substrings` and `isPalindrome`. We haven't defined those functions yet. Instead of trying to write the code for those functions, let's return to our algorithm and determine how they need to work. Let's see how that might look; we'll tackle the `substrings` function first.

To find a correct algorithm, we can simplify the problem by using a small, concrete example to determine what we need to do. For instance, we can start with a short word like `halo` and write all its substrings that are at least 2 characters in length. The resulting list is `['ha', 'hal', 'halo', 'al', 'alo', 'lo']`. Do you see a pattern here? It's clear that some sort of complex looping is going on.

The first loop - the outermost loop - iterates over the starting index for the substrings. With `halo` as a starting string, we need to iterate over the letters `h`, `a`, and `l`. (We don't need to iterate over `o` since there are no substrings of at least 2 characters that start with `o`.)

Within the first loop, we need to iterate over the substrings that start at the given starting index. It's easiest to start with the substring of length 2, then the substring of length 3, and so on. The resulting loops look something like this:

```js
for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicated index position
  end of inner loop
end of outer loop
```

Beginning with the first letter of the string at index 0, `'h'`, we first find all of the substrings that begin with that letter: `['ha', 'hal', 'halo']`. As you can see, we're showing the inner loop at work here:

- First, we get a 2-letter substring that begins at index 0: `'ha'`
- Next, we get a 3-letter substring that begins at index 0: `'hal'`
- Finally, we get a 4-letter substring that begins at index 0: `'halo'`

The loop, in this case, is one that starts with a length of 2 and ends with a length of 4.

Next, we need to find the substrings that start at index 1 (`a`). The loop, in this case, starts with a length of 2 and ends with a length of 3.

- First, we get a 2-letter substring that begins at index 1: `'al'`
- Next, we get a 3-letter substring that begins at index 1: `'alo'`

Finally, we get all of the substrings that begin at index 2. This time, the loop starts and ends with a length of 2, so there is only one iteration:

- We get a 2-letter substring that begins at index 2: `'lo'`

What would happen if the original string was, say, 7 characters in length, such as `goalies`? In that case, we'd still have to go through the same process - an outer loop that iterates from index 0 (the letter g) to index 5 (the letter e), and an inner loop that starts with a length of 2 and continues until there are no substrings of the desired length:

- On the first iteration of the outer loop, the substring length used in the inner loop ranges from 2 to 7.
- On the second iteration, the substring length ranges from 2 to 6.
- On the third iteration, the substring length ranges from 2 to 5.
- On the fourth iteration, the substring length ranges from 2 to 4.
- On the fifth iteration, the substring length ranges from 2 to 3.
- On the sixth, the substring length starts and ends at 2.

Looking at these two examples, we can determine that the outer loop iterates over indices from 0 to the length of the next to the last index position (i.e., `string.length - 2`). We can also see that the inner loop ranges from 2 to the original string length minus the starting index (`string.length - startingIndex`). We can use both of these facts in our algorithm. Let's go ahead and write the complete algorithm for this function:

```js
// - create an empty array called `result` that will contain all required substrings
// - create a `startingIndex` variable (value `0`) for the starting index of a substring
// - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//   - create a `numChars` variable (value `2`) for the length of a substring
//   - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//     - extract a substring of length `numChars` from `string` starting at `startingIndex`
//     - append the extracted substring to the `result` array
//     - increment the `numChars` variable by `1`
//   - end the inner loop
//   - increment the `startingIndex` variable by `1`
// - end the outer loop
// - return the `result` array
```

Since this pseudocode is relatively complex, you might decide to convert it to formal pseudocode as shown in the [Pseudocode assignment](https://launchschool.com/lessons/64655364/assignments/fea216fc). For instance, we might write the following formal pseudocode:

```js
// START
//
//   /* Given a string named `string` */
//
//   SET result = []
//   SET startingIndex = 0
//
//   WHILE startingIndex <= length of string - 2
//     SET numChars = 2
//     WHILE numChars <= length of string - startingIndex
//       SET substring = numChars characters from string starting at index startingIndex
//       append substring to result array
//       SET numChars = numChars + 1
//
//     SET startingIndex = startingIndex + 1
//
//   RETURN result
//
// END
```

Formal pseudocode is an intermediate step between the informal pseudocode shown above and the final program code shown below - it isn't always needed, but can sometimes be helpful. We'll skip that step in the rest of this assignment.

Here's some code that we might write for the `substrings` function:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}
```

Notice how similar it is to the formal pseudocode; that made writing the code straightforward. However, we could easily write this same code using the informal pseudocode with which we started.

Checking whether the string is a palindrome is easy enough. However, we can write a function for it to help make our code more readable. Let's include that function in our algorithm.

```js
// - Inside the `isPalindrome` function, check whether the string
//   value is equal to its reversed value.
```

You can use the `Array.prototype.reverse` method along with `split` and `join`:

```js
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

Here's the complete informal **pseudocode** for this problem:

```js
// input: a string
// output: an array of substrings
// rules: palindrome words should be case sensitive, meaning "abBA"
//        is not a palindrome

// Algorithm:
//  substrings function
//  =================
//    - create an empty array called `result` that will contain all required substrings
//    - create a `startingIndex` variable (value `0`) for the starting index of a substring
//    - start a loop that uses `startingIndex` to iterate over `string` from `0` to the length of the string minus 2
//      - create a `numChars` variable (value `2`) for the length of a substring
//      - start an inner loop that uses `numChars` to iterate over `string` from `2` to `string.length - startingIndex`
//        - extract a substring of length `numChars` from `string` starting at `startingIndex`
//        - append the extracted substring to the `result` array
//        - increment the `numChars` variable by `1`
//      - end the inner loop
//      - increment the `startingIndex` variable by `1`
//    - end the outer loop
//    - return the `result` array

//  isPalindrome function
//  =====================
//    - Inside the `isPalindrome` function, check whether the string
//      value is equal to its reversed value.

//  palindromeSubstrings function
//  ============================
//    - declare a `result` variable and initialize it to an empty array
//    - create an array named `substrArray` that will contain all of the
//      substrings of the input string that are at least 2 characters long.
//    - loop through the words in the `substrArray` array.
//      - if the word is a palindrome, append it to the `result` array
//    - return the `result` array
```

The code for this with all the helper functions:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach(substring => {
    if (isPalindrome(substring)) {
      result.push(substring)
    }
  });

  return result;
}

console.log(palindromeSubstrings("supercalifragilisticexpialidocious")); // ["ili"]
console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
console.log(palindromeSubstrings("palindrome")); // []
console.log(palindromeSubstrings(""));           // []
```

Once again, we want to emphasize that you don't need to write all your pseudocode before you start coding. As you saw above, we first wrote the pseudocode for the `palindromeSubstrings` function. We then wrote the corresponding JavaScript code before we returned to write the pseudocode for the other two functions. Afterwards, we wrote the corresponding code, and then returned to the two lower-level functions.

We also want to emphasize that you don't need the formal pseudocode step. You can use it if it helps you, but it is an extra step.

Finally, the main takeaway is that you should be able to write a plain English solution to the problem. If you can't do that, you won't be able to code it either. You also don't need any "fancy" functions to solve these problems.

### Testing Frequently

Testing isn't properly part of the PEDAC approach, but it's an important step that you don't want to omit. Test your code early and often while writing it. For instance, consider the `substrings` function that we wrote above. When we're writing this code, we might start with:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;
  let endingIndex = startingIndex + numChars;
}
```

At this point, you may want to check that `endIndex` is correct. To do that, you can insert a console.log statement:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;
  let endIndex = startingIndex + numChars;
  console.log(endIndex); // => 2
}

substrings("abcdef");
```

Next, add a bit more code and test again:

```js
function substrings(str) {
  let result = [];
  let startingIndex = 0;
  let numChars = 2;

  while (startingIndex <= str.length - 2) {
    startingIndex += 1;
  }

  console.log(startingIndex); // => 5
}

substrings("abcdef");
```

Continue in this manner. Each time you write a bit of code that you can test, test it and make sure you're getting the answer you expect. Don't wait until you're finished writing the entire program or function or even an entire loop if you can test something earlier. This way, if there is a bug in your code, you'll find it as soon as possible; the sooner you find a bug, the easier it will be to identify what's wrong and fix it.

### Introduction to the PEDAC Process Summary

In conclusion, practice working through the PEDAC process while solving problems. It may be hard, at first. For simple problems, it might even seem unnecessary, but, stick with it. In time, your process will improve; you'll soon be able to solve difficult problems much more readily.

## 6. The PEDAC Problem Solving Process

In the previous assignment, we introduced the PEDAC process. In this assignment, we're going to further explore that process in the series of videos below.

The PEDAC Process

P: Understanding the Problem
E: Examples and Test Cases
D: Data Structures
A: Algorithms
C: Implementing a Solution in Code

### P: Understanding the Problem

- Establish the rules / define the boundaries of the problem
  - Assess the available information
  - Restate the explicit requirements
  - Identify implicit requirements
- Spend enough time. Don't rush this step.

#### General Example

Given a string, produce a new string with every other word removed.

- Explicit requirements:
  - Input: string
  - Output: new string
  - Remove every other word from input string

- Questions:
  - What do we mean by every other word?
  - How do we define a word in this context?
    - Words are delimited by spaces

### E. Examples and Test Cases

- Can confirm / refute assumptions
- Help to answer questions about implicit requirements
- Act as assertions which help to codify the rules and boundaries

### D: Data Structures

- Help reason with data logically
- Help interact with data at implementation level
- Thinking in terms of data structures is part of the problem solving process
- Data structures closely linked to algorithm
  - Set of steps from input to output
  - Involves structuring data in a certain way

### A: Algorithms

- A logical sequence of steps for accomplishing a task or objective
  - Closely linked to data structure
  - Series of steps to structure data to produce the required output
- Stay abstract / high-level
  - Avoid implementation detail
  - Don't worry about efficiency for now

### C: Implementing a Solution in Code

- Translating solution to algorithm to code
- Think about algorithm in the context of the programming language
  - Language features / constraints
  - Characteristics of data structures
  - Built-in functions / methods
  - Syntax / coding patterns
- Create test cases
- Code with intent

#### Sum Even Number Rows

Imagine a sequence of consecutive integers beginning with 2. The integers are grouped in rows, with the first row containing one integer, the second row two integers, the third row three integers, and so on. Given an integer representing the number of a particular row, return an integer representing the sum of all the integers in that row.

#### Rules / Requirements

- Sequence of even integers
- Sequence begins with two
- Integers are consecutive
- Sequence is grouped into rows
- Each row is incrementally larger: 1, 2, 3, ...
- Row 'number' equals the number of elements in the row
  - Row 1 has 1 element, row 2 has 2 elements, ...
- Input: a single integer
  - Identifies a 'row', which is a subset of a sequence of integers
- Output: a single integer
  - The sum of the integers in the row identified by the input integer

- Sequence:
2, 4, 6, 8, 10, 12, 14, 16, 18, ...

2
4, 6
8, 10, 12
14, 16, 18, 20
...

- How do we create the structure?

#### Examples

row number: 1 --> sum of integers in row: 2
row number: 2 --> sum of integers in row: 10
row number: 4 --> sum of integers in row: 68

2 --> 2
4, 6 --> 10
14, 16, 18, 20 --> 68

#### Data Structure

2
4, 6
8, 10, 12
14, 16, 18, 20
...

- Overall structure representing sequence as a whole
- Individual rows within overall structure
- Individual rows in a set order in the context of the sequence
- Individual rows contain integers
- Can assume that integers are in a set order in the context of the sequence

[
  [2],
  [4, 6],
  [8, 10, 12],
  [14, 16, 18, 20]
  ...
]

#### Algorithm

1. Create an empty 'rows' array to contain all of the rows
2. Create a 'row' array and add it to the overall 'rows' array
3. Repeat step 2 until all the necessary rows have been created
   - All rows have been created when the length of the 'rows' array is equal to the input integer
4. Sum the final row
5. Return the sum

#### Problem: Create a Row

Rules:

- Row is an array
- Arrays contain integers
- Integers are consecutive even numbers
- Integers in each row form part of an overall larger sequence
- Rows are of different lengths
- Input: the information needed to create the output
  - The starting integer
  - Length of the row
- Output: `[8, 10, 12]`

Examples:
start: 2, length: 1 --> [2]
start: 4, length: 2 --> [4, 6]
start: 8, length: 3 --> [8, 10, 12]

Data Structure:

- An array of integers

Algorithm:

1. Create an empty 'row' array to contain the integers
2. Add the starting integer
3. Increment the starting integer by 2 to get the next integer in the sequence
4. Repeat steps 2 & 3 until the array has reached the correct length
5. Return the 'row' array

### Final Thoughts

- Not a completely linear process
- Move back and forth between the steps
- Switch from implementation mode to abstract problem-solving mode when necessary
- Don't try to problem solve at the code level

You should now have a basic understanding of using a structured approach for solving programming problems. We recommend that you put this understanding into practice, and hone your problem-solving abilities, as you work through programming problems, for example the [Small Problems](https://launchschool.com/exercises) exercise sets which accompany this course. We'll return to PEDAC, and explore it in more depth, in a later course in the curriculum.

20210822 20:46 Complete Assignment

## 7. Selection and Transformation

Now that we know how to loop through a collection, it's time to do something more interesting. Besides *iteration*, the two most common actions to perform on a collection are **selection** and **transformation**.

Selection is picking some elements out of a collection depending on one or more criteria. For example, you might want to pick out all the odd numbers from an array. Transformation, on the other hand, refers to manipulating every element in the collection. For example, increment all elements of an array by 1. If there are *N* elements in a collection, selection results in *N* or fewer elements, while transformation always results in the same number, *N*, of elements. Using these two actions, we can do nearly anything you can imagine to a collection. Therefore, it's critical to not only understand how to perform these actions, but also to develop a high level of proficiency so you can quickly and fluently work with collections.

Selection and transformation both use the basics of looping: a loop, a counter, a way to retrieve the current value, and a way to exit the loop. Keep those four things in mind. Also, selection and transformation require criteria that determine the results. Selection needs criteria to determine which elements to select, while transformation uses criteria to determine the transformation.

At this point, you've already seen some examples of selection and transformation in previous assignments, but here, we'll analyze these topics in more depth.

### Using Loops to Select and Transform

Let's start by looking at an example of selection. There are many conditions that you can use to select elements, but a basic example involves the selection of a single value from an array.

In the example below, we want to select all the `1`s from an array of numbers. You'll notice that this is just a basic `for` loop with one main addition: the `if` statement.

```js
let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];

for (let counter = 0; counter < numbers.length; counter++) {
  let currentNum = numbers[counter];

  if (currentNum === 1) {
    ones.push(currentNum); // appends currentNum to the ones array
  }
}

ones; // => [1, 1, 1]
```

The `if` condition determines which values are selected and which are ignored; this is the *selection criterion*. The rest of the code is your typical iteration code.

We can apply these same concepts to transformation. Let's loop through an array of strings, but with one addition: we'll append an `s` to each string in the array. We'll use a `while` loop for this example:

```js
let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let counter = 0;

while (counter < fruits.length) {
  let currentElement = fruits[counter];

  transformedElement.push(currentElement + 's'); // appends transformed string into array
  counter += 1;
}

transformedElements; // => ['apples', 'bananas', 'pears']
```

Since we're applying the transformation to every element in the array, we don't need an `if` condition, but the entire line is the *transformation criterion*. Note that, in this example, we write the transformed values to a new array and leave the original array unchanged. **When performing a transformation, it's always important to pay attention to whether the original collection is mutated or if a new collection is returned.**

### Extracting Functions

Most of the time, selecting or transforming a collection is a specific action, e.g., select all the odd numbers or turn all elements into strings. That naturally lends the specific action being extracted into convenience functions.

Say, for example, that we wanted to be able to select all of the vowels in a given string. We're going to use the helpful `String.prototype.includes` method here to help determine whether a character is a vowel:

```js
if ('aeiouAEIOU'.includes(currentChar)) {
  selectedChars += currentChar;
}
```

Let's put it all together with a `selectVowels` function so we can call this function on any string:

```js
function selectVowels(str) {
  let selectedChars = '';

  for (let counter = 0; counter < str.length; counter += 1) {
    let currentChar = str[counter];

    if ('aeiouAEIOU'.includes(currentChar)) {
      selectedChars += currentChar;
    }
  }

  return selectedChars;
}
```

An important thing to note here is that when our function finishes iterating over the string, it returns a **new string** that contains the selected characters.

```js
selectVowels('the quick brown fox'); // => 'euioo'

let sentence = 'I wandered lonely as a cloud';
selectVowels(sentence); // => 'Iaeeoeaaou'
sentence; // => 'I wandered lonely as a cloud'
```

We can, therefore, call other methods or access properties on the return value.

```js
let numberOfVowels = selectVowels('hello world').length;
numberOfVowels; // => 3
```

Let's look at an example with objects. In this example, we want to select the key-value pairs where the value is `'Fruit'`.

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce) // => { apple: 'Fruit', pear: 'Fruit' }
```

How would you implement this function?

Hint

1. Remember that you have to loop through the keys to access the values.
2. Notice that the return value of the function is an object.

Try coding a solution and check the answer:

Solution

```js
function selectFruit(produceList) {
  let produceKeys = Object.keys(produceList);
  let selectedFruits = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === 'Fruit') {
      selectedFruits[currentKey] = currentValue;
    }
  }

  return selectedFruits;
}
```

Notice that:

- The original argument, `produceList`, is not mutated.
- A new object is returned by the function (as opposed to an array).

We'll now move on to examples of some functions that perform transformations. The function below multiplies each element in an array by 2.

```js
function doubleNumbers(numbers) {
  let doubledNumbers = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNumber = numbers[counter];
    doubledNumbers.push(currentNumber * 2);

    counter += 1;
  }

  return doubledNumbers;
}
```

We can invoke it like this:

```js
let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
myNumbers; // => [1, 4, 3, 7, 2, 6]
```

Note that `doubleNumbers` returned a new array with every element doubled, and that the original array was *not mutated*. In other words, `myNumbers` is still `[1, 4, 3, 7, 2, 6]`. The lack of mutation isn't a requirement, but it is a consequence of how we implemented the function.

If we wanted to, we could've decided that mutating the function argument is the right approach. Can you implement a `doubleNumbers` function that mutates its argument?

Solution

```js
function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNumber = numbers[counter];
    numbers[counter] = currentNumber * 2;

    counter += 1;
  }

  return numbers;
}
```

A couple items of note:

- Rather than returning a new array, this function returns a reference to the (mutated) original array.
- Lines 5 and 6 can be shortened to 1 line: `numbers[counter] = numbers[counter] * 2` or even `numbers[counter] *= 2`.

Now we can check our function like this.

```js
let numbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(numbers); // => [2, 8, 6, 14, 4, 12]
numbers; // => [2, 8, 6, 14, 4, 12]
```

We previously said that transformation is an operation that is performed on every element in the collection. In the next example, we'll study a function that only transforms a subset of the elements in the collection. Here, we only multiply by `2` if the value is odd. The `if` condition will only evaluate to true when `currentNumber` is odd. We check whether a number is odd by using the remainder (`%`) operator. We know from basic arithmetic that the remainder of a number divided by 2 is 0 when the number is even and 1 if it's odd.

```js
function doubleOddNumbers(numbers) {
  led doubledNumbers = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (currentNumber % 2 === 1) {
      doubledNumbers.push(currentNumber * 2);
    } else {
      doubledNumbers.push(currentNumber);
    }
  }

  return doubledNumbers;
}
```

Once again, note that we are working with a function that does not mutate its argument and instead returns a new array. We can call it like so:

```js
let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddNumbers(myNumbers); // => [2, 4, 6, 14, 2, 6]

// not mutated
myNumbers; // => [1, 4, 3, 7, 2, 6]
```

Though we didn't change all of the elements, we can reasonably say that we performed a transformation on the array, it's just that the transformation left some elements unchanged. Even if we don't change any elements because none met our criterion (being odd, in this case), it's still considered a transformation -- sometimes, that's called an **identity transformation**.

Here's an exercise for you: suppose we wanted to transform the numbers based on their position in the array rather than their value? Try coding a solution that doubles the numbers that have odd indices:

Solution

```js
function doubleNumsWithOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}
```

### More Flexible Functions

The examples we've looked at so far have taken one argument (the collection) and performed one operation on that collection. By defining our functions in a way that we can pass in additional arguments to alter the logic of the iteration, we can create more flexible and generic functions.

Recall earlier we wrote a `selectFruit` function that selected fruits out of the `produceList` object of fruits and vegetables. Suppose we wish to select generic produce types; we want to be able to specify whether we're interested in selecting fruits or vegetables or some other kind of produce, entirely. Here's how we could build such a function:

```js
function selectType(produceList, selectionCriterion) {
  let produceKeys = Object.keys(produceList);
  let selectedItems = {};

  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    // used to be (currentValue === 'Fruit')
    if (currentValue === selectionCriterion) {
      selectedItems[currentKey] = currentValue;
    }
  }

  return selectedItems;
}
```

To use `selectType`, we have to pass in a collection and a selection criterion. In this case, the criterion is hardcoded to match with a value: if there's a match between the criterion and value, then the current key-value pair is selected into the `selectedItems` object. Here's how we can use this function:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectType(produce, 'Fruit');     // => {apple: 'Fruit', pear: 'Fruit'}
selectType(produce, 'Vegetable'); // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
selectType(produce, 'Meat');      // => {}
```

Continuing with the idea of building generic functions, let's replace our `doubleNumbers` function with a `multiply` function that can multiply the elements of the array by an arbitrary number. For instance:

```js
let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]
```

Try coding a function that lets you multiply every array item by a specified value. As with `doubleNumbers`, *don't mutate the array*, but return a new array instead.

Solution

```js
function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNums.push(currentNumber * multiplier);
  }

  return multipliedNums;
}
```

The second argument, the multiplier, is our *transformation criterion*.

### Selection and Transformation Summary

We often want to perform iteration, selection or transformation operations on a collection. Using these 3 actions, we can manipulate a collection nearly any way we need to. Typically, these are generic actions that we can move into a function so that we can perform these operations on different collections.

Pay attention to when the original collection is **mutated** vs. when the function returns a new collection. That might seem trivial right now, but it's a source of much misunderstanding. Make sure you study this concept.

Understand how these functions can be made more generic by allowing for additional parameters to specify the criteria for selection or transformation.

Finally, it's common to chain actions on collections, but pay particular attention to the return value, especially if the return value is an empty collection or `undefined`. Trying to chain methods on empty collections or `undefined` is dangerous and results in a lot of broken programs.

20210823 17:03 Complete Assignment

## 8. Array Methods - 20210824 10:13

Writing loops with `while` and `for` that iterate over a collection is both repetitive and unnecessary. JavaScript provides an easier way to work with arrays through the use of built-in methods. In this assignment, we'll look specifically at the `forEach`, `filter`, and `map` methods.

Unfortunately, other collections and *collection-like* types like objects and strings don't have these methods. With objects, however, we can use the `Object.keys`, `Object.values`, and `Object.entries` methods to convert the object to an array and then take advantage of the built-in array methods.

### `Array.prototype.forEach()`

So far, we've learned that the most effective option for iterating over a collection is to use a loop, like this:

```js
let numbers = [1, 2, 3];
let counter = 0;

while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter += 1;
}
```

Iterating over an array is such a common task that JavaScript provides a method to do just that. The `Array.prototype.forEach` method is functionally equivalent to a `for` or `while` loop and represents a simpler way to accomplish the same task. Here's an example that produces the same result as the implementation above:

```js
[1, 2, 3].forEach(number => {
  console.log(number);
});
```

In this example, we're working with the following array:

```js
[1, 2, 3]
```

`forEach` is a method that is called on the array. The method takes a function as an argument -- the `() => {...}` component. Here, we're using an arrow function for its simplicity. A function expression provided to another function/method as an argument is often called a **callback**.

```js
number => {
  console.log(number);
};
```

The code within the callback is executed for each iteration. In this case, the callback executes `console.log(number)`. The result is that the program displays the elements in the array.

How does the callback know what `number` is? For each iteration, `forEach` sends the value of the current element to the callback in the form of an argument. In this callback, the parameter is `number`; it represents the value of the current element in the array.

`Array.prototype.forEach` also passes a second argument, the index position of the element in the array, to the callback function. Thus far, we haven't accepted a second argument, but we can do that. Even though `forEach` provides more than one argument to our callback, our callback doesn't have to use those arguments if it doesn't need them. Let's see an example of how we can use the index argument in the callback function:

```js
[1, 2, 3].forEach((number, idx) => {
  console.log(`${idx}: ${number}`);
});

// logs
// 0: 1
// 1: 2
// 2: 3
```

#### `forEach` with Strings

JavaScript strings don't have a `forEach` method. However, we can leverage the `String.prototype.split` method to process every character in a string with `forEach`. Let's say that we want to iterate over all characters in a string and log them to the console using `forEach`; we can do so in the following manner:

```js
'abcd'.split('').forEach(char => {
  console.log(char);
})

// logs
// a
// b
// c
// d
```

This approach works with other array iteration methods as well. We'll see an example of that later on.

#### `forEach` with Objects

Objects in JavaScript don't have the `forEach` method. However, as we said earlier, the `Object.keys`, `Object.values`, and `Object.entries` methods readily convert objects into arrays for us, which we can then use with the `forEach` method. Let's say that we want to iterate over all values in an object and log them to the console using forEach; we can do so in the following manner:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable
};

let produceValues = Object.values(produce);

produceValues.forEach(value => {
  console.log(value);
});
// logs
// Fruit
// Vegetable
// Fruit
// Vegetable
```

Suppose you need the keys, instead of the values. You can use `Object.keys` instead:

```js
let produceKeys = Object.keys(produce);
produceKeys.forEach(key => {
  console.log(key);
});
// logs
// apple
// carrot
// pear
// broccoli
```

We can also get all of the key-value pairs of an object with `Object.entries`:

```js
let produceKeyValues = Object.entries(produce);
// produceKeyValues contains:
//   [['apple', 'Fruit'],
//    ['carrot', 'Vegetable'],
//    ['pear', 'Fruit'],
//    ['broccoli', 'Vegetable']]

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;

  console.log(`${key} is a ${value}`);
});
// logs:
// apple is a Fruit
// carrot is a Vegetable
// pear is a Fruit
// broccoli is a Vegetable
```

As we've seen before, `Object.entries` returns all the key-value pairs of an object in an array. Each key-value pair is represented by an array of two elements where the first element is the key and the second element is the value. The `forEach` method then iterates over the array, passing in each key-value pair as the argument to the callback. The `keyValue` parameter captures that argument.

What's happening on line 9, though?

```js
let [ key, value ] = keyValue;
```

This code demonstrates what we call **array destructuring assignment**. In an array destructuring assignment, we can assign elements of the array to multiple variables by wrapping the variable names in brackets. The first element gets assigned to the first variable, the second element gets assigned to the second variable, and so on. We can rewrite that line without array destructuring assignment as follows:

```js
let key = keyValue[0];
let value = keyValue[1];
```

We will discuss destructuring in more detail in a later course. For now, all you need to know is that you can assign the elements of an array to individual variables as shown above.

One thing to note about `forEach` is that it returns `undefined`.

```sh
> let val = [1, 2, 3].forEach(num => console.log(num))
> val
undefined
```

`forEach` is just a method call, and methods in JavaScript always return something, even if it's `undefined`. The return value of `forEach` isn't important since the sole purpose of `forEach` is iteration. It just performs some action on each element. What the method returns isn't significant. However, we'll see some other array methods where the return value is significant.

### `Array.prototype.filter()`

Frequently, we want to **select** or **filter** certain elements from an array so that we can work with them separately from the other elements. Doing so helps reduce code complexity, which in turn makes code easier to write and reduces the likelihood of bugs.

We can perform selection using a regular `for` or `while` loop:

```js
let numbers = [1, 2, 3];
let oddNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumbers.push(numbers[index]);
  }
}

oddNumbers; // => [1, 3]
```

That works fine, and it's not hard, but it is tedious. There's a lot of "boilerplate" code involved, such as declaring and initializing the `oddNumbers` array for the result and setting up the `for` loop.

As it happens, arrays have a built-in method to filter elements from an array: the `filter` method. It makes selection significantly easier. For instance, here's how the above code looks when converted to use `filter`:

```js
let oddNumbers = [1, 2, 3].filter(num => {
  return num % 2 === 1;
});

oddNumbers; // => [1, 3]
```

Much simpler, isn't it?

To perform the selection, `filter` examines the return value of the callback on each iteration. It determines the **truthiness** of the return value. There's only one thing that `filter` cares about concerning the callback's return value: whether it is **truthy** or **falsy**. Note that truthy and falsy are not the same as `true` and `false`.

JavaScript treats six values as falsy: `undefined`, `null`, `NaN`, `0`, `''`, and `false`. "0funN is empty" All other values are truthy values. That's not the same as saying that everything that is truthy is also `true` or that everything that is falsy is also `false`. The values `true` and `false` are the two JavaScript values that make up its Boolean type; truthy and falsy aren't values that belong to a specific JavaScript type but are simply a classification of which values JavaScript recognizes as representing truth or falsity.

Note that the body of the callback function in the above example is a single expression. That means that we can eliminate the curly braces and the `return` keyword, and it'll still work:

```js
[1, 2, 3].filter(num => num % 2 === 1); // =>  [1, 3]
```

This code provides a much more succinct way to do things. It's the preferred approach if your callback has a simple one-line *selection criterion*.

If the return value of `filter`'s callback is truthy during a given iteration, then `filter` will select that element. If the return value is falsy, then the element won't be selected.

Consider this code:

```js
[1, 2, 3].filter(num => num + 1);
```

Here, the callback's return value is always truthy. How do we know that? If the value is anything other than the six falsy values mentioned above, it's truthy. In this case, the return value is always an integer greater than `0`, all of which are truthy.

The follow-up question is then, what is the return value of `filter` in the above example? Remember that `filter` performs selection based on the truthiness of the callback's return value. If the callback's return value is always truthy, then `filter` will select all of the elements. When an element is selected, it's placed in a new array. Since the selection criterion -- the callback's return value -- is truthy for all elements in this example, `filter` returns a new array that contains all of the elements from the original array:

```js
> [1, 2, 3].filter(num => num + 1)
[ 1, 2, 3 ]
```

When working with filter, you must pay attention to the callback's return value. For example, if we write a callback with the curly braces and forget to write an explicit return, how will that affect the return value of filter?

```sh
> [1, 2, 3].filter(num => {
...   num + 1;
... })
[]
```

`filter` now returns an empty array. Why is that? Since our callback doesn't explicitly return a value, its implicit return value is `undefined`. Since `undefined` is falsy, `filter` won't select any elements.

The question now is whether we can effectively use `filter` to select certain key-value pairs from an object. Let's say we want to select the key-value pairs from our `produce` object where the value is `Vegetable`. Let's give it a shot with `Array.prototype.filter`.

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = produceKeyValues.filter(keyValue => {
  let [ key, value ] = keyValue;
  return value === 'Vegetable';
});

onlyVegetables; // => [ [ 'carrot', 'Vegetable' ], [ 'broccoli', 'Vegetable' ] ]
```

That sort of works, but the return value isn't ideal: it returns an array, not an object as we want. Maybe we can convert the array to an object using `forEach`:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetablesArr = produceKeyValues.filter(keyValue => {
  let [ key, value ] = keyValue;
  return value === 'Vegetable';
});

let onlyVegetables = {};

onlyVegetablesArr.forEach(keyValue => {
  let [ key, value ] = keyValue;
  onlyVegetables[key] = value;
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

Okay, that works, but it's complicated logic. Can we simplify it? Let's try using `forEach` by itself without using `filter` at all:

```js
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [ key, value ] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}
```

Oh, that's better. This code is much more succinct than the previous code. It seems like `forEach` is better suited to filtering an object than using a combination of `forEach` and `filter`.

### `Array.prototype.map()`

As with `filter`, `map` also considers the return value of the callback. The main difference between these two methods is that `map` uses the return value of the callback to perform **transformation** instead of *selection*.

```js
[1, 2, 3].map(num => num * 2);
```

In this example, the return value of the callback function is the product of `num` and `2`. `map` then takes this value and places it in a new array. This process repeats for each element in the original array. We can see what the return value of map looks like in the console.

```sh
> [1, 2, 3].map(num => num * 2)
[ 2, 4, 6 ]
```

What happens if we write some code in the callback that doesn't appear to be a transformation? For instance, in the following code, it seems like we're looking for odd numbers:

```js
[1, 2, 3].map(num => num % 2 === 1);
```

The key here is to remember that `map` always performs transformation based on the return value of the callback. In this case, the return value of the callback is boolean. Thus, `map` returns an array of booleans.

```sh
> [1, 2, 3].map(num => num % 2 === 1)
[ true, false, true ]
```

What will `map` return in this example?

```js
[1, 2, 3].map(num => {
  num * 2;
});
```

It's a little tricky, but you should now have all the necessary information to evaluate this code. Take a few minutes to deconstruct the above example and try to determine the return value of the code above.

By looking at the last expression within the callback, we know that the return value of the callback will always be `undefined` since it's a callback with curly braces and without an explicit return value. `map` doesn't care about truthiness, and takes this return value as the transformation criterion. Therefore, the array returned by `map` is a new array of `undefined` values.

```sh
> [1, 2, 3].map(num => {
...   num * 2;
... })
[ undefined, undefined, undefined ]
```

#### `filter` and `map` with Strings

As with `forEach`, JavaScript strings don't have `filter` or `map` methods. However, we can use the `String.prototype.split` technique that we showed earlier together with `Array.prototype.join` to use `filter` and `map` on the characters in a string.

For instance, suppose we want to select all of the vowels in a string and get a new string that contains all of those vowels, and nothing else. We can use `split`, `filter`, and `join` like so:

```js
let str = "What's up, Doc?";
str.split('')
   .filter(char => 'aeiou'.includes(char.toLowerCase()))
   .join('');
// => 'auo'
```

Here, we split the string into an array of characters, then filter the resulting array. The callback defines the selection criterion as any vowel (assuming the US alphabet), so `filter` returns an array of vowels. Finally, we join those vowels together as a new string.

We can also use this technique with map. Let's *duplicate* every character in a string and return the result:

```js
let str = "What's up, Doc?";
str.split('')
   .map(char => char + char)
   .join('');
// => "WWhhaatt''ss  uupp,,  DDoocc??"
```

This technique of converting strings to arrays and then back again to use array methods works well. Even though it's not the case, thinking of strings as an array of characters can help when you need to iterate over the characters in the string.

### Array Methods Summary

Methods like `forEach`, `filter`, and `map` are provided by JavaScript to allow for simpler implementations of common collection manipulation tasks. Using these methods to iterate, select, and transform a collection is preferred over manually looping.

To further clarify your understanding of these methods and how they work, use the following table as a reference:

**Method** | **Action** | **Considers the return value of the callback?** | **Returns a new array from the method**? | **Length of the returned array**
---------|----------|---------|----------|---------|
 `forEach` | Iteration | No | No, it returns `undefined` | N/A
 `filter` | Selection/Filtering | Yes, its truthiness | Yes | Length of original or less
 `map` | Transformation | Yes | Yes | Length of original

These methods each use the callback's return value in different ways. In the case of `forEach`, the return value of the callback is simply ignored. Before moving forward, it is crucial to understand how these methods use the callback's return value to perform their intended task.

20210825 07:55 Assignment Complete

## More Array Methods

There are many useful methods that you get out-of-the-box with JavaScript, but they're only useful when you thoroughly understand how they work. In this assignment, we're going to take what we learned from the previous assignment to deconstruct how the common built-in array methods work.

Before we begin exploring these methods, be sure to refresh your memory by revisiting our coverage in [the book](https://launchschool.com/books/javascript/read/arrays#commonarraymethods).

One of the best ways to learn about a method is to consult the JavaScript documentation. If you're unfamiliar with this website, we've written a few exercise sets - [Reading Documentation](https://launchschool.com/exercise_sets/fc8034da) and [Reading Documentation 2](https://launchschool.com/exercise_sets/a63f2bbc).

Let's look at some common JavaScript array methods and explore how they work.

### `Array.prototype.some()`

The first thing you should do when you're unsure of how a method works is to check the[JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some). Take a quick look at it to get an idea for what the method does, and then continue reading this section.

Let's see the method in action:

```js
> [1, 2, 3].some(num => num > 2)
true

> [1, 2, 3].some(num => num > 3)
false
```

There are two return values that we need to be aware of here: the return value of the method call to `some`, and the return value of the callback on each iteration. `some` looks at the truthiness of the callback's return value to determine its own return value. **If the callback function returns a truthy value for any element in the collection, then the some method will return true.** In effect, the method asks "Are there *some* values in the array for which the given callback returns a truthy value?".

The `Object.keys`, `Object.values`, and `Object.entries` methods will help you to use `some` with objects as well.

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).some(animalName => animalName.length > 4);
// => false

Object.values(animals).some(animalName => animalName.length > 3);
// => true
```

The above code returns a boolean, signifying whether any value in the object has a length greater than 4 or 3. In the first case, none of the string values have more than 4 characters; hence the overall return value is `false`. In the second case, `bear` has more than 3 characters, so `some` returns `true`.

### `Array.prototype.every()`

The `every` method works similarly to `some`. It also looks at the truthiness of the callback's return value, but the method only returns `true` if the callback's return value in every iteration is truthy (that is, not one of the falsy JavaScript values).

```sh
> [1, 2, 3].every(num => num > 2)
false

> [3, 4, 5].every(num => num > 2)
true
```

`every` can also be used with objects by using the usual `Object` methods to extract the keys, values, or key-value pairs:

```js
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).every(animalName => animalName.length > 2);
//  => true
```

### `Array.prototype.find()`

The `find` method also takes a callback function as an argument and returns the first element for which the callback function returns a truthy value:

```js
> [2, 1, 4, 3, 5].find(num => num > 2)
4
```

Here, we're asking for the **first** number in the array that's greater than 2. Since `num > 2` evaluates as true for the number `4`, we get a return value of `4`. Note that `3` and `5` also satisfy the condition, but `find` *stops looking once it finds a matching element*.

If the callback function doesn't return a truthy value for any of the elements, `find` returns `undefined`:

```sh
> [2, 1, 4, 3, 5].find(num => num < 1)
undefined
```

### `Array.prototype.findIndex()`

`findIndex` is similar to `find` except it *returns the index of the element* for which the callback returns a truthy value.

```sh
> [2, 1, 4, 3, 5].findIndex(num => num > 2)
2
```

Since the number `4` satisfies the condition `num > 2`, and `4` is positioned at index 2, that's what gets returned.

`findIndex` works a little differently from `find` when the callback doesn't return a truthy value for any of the elements. In this case, it returns `-1` instead of `undefined`:

```sh
> [2, 1, 4, 3, 5].findIndex(num => num < 1)
-1
```

### `Array.prototype.reverse()`

The name of the `reverse` method is self-explanatory: it reverses the elements of the array it's called on. The first element becomes the last, and the last becomes first.

```sh
> [1, 2, 5, 7, 3].reverse()
[3, 7, 5, 2, 1]
```

A crucial point to note about `reverse` is that it does the reversal in place. In other words, it **mutates** the original array.

```js
let nums = [1, 2, 3];
nums.reverse() // => [3, 2, 1]
nums; // => [3, 2, 1]
```

You may not always want this behavior when reversing an array. In that case, you can use the `Array.prototype.slice()` method to make a shallow copy of the array, then reverse the copy:

```js
let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // => [3, 2, 1]
nums; // => [1, 2, 3]
```

### `Array.prototype.includes()`

The `includes` method searches the array used to call it for an element whose value is strictly equal (`===`) to the single argument. It returns `true` when a matching element exists in the array and `false` when it doesn't.

```sh
> [2, 1, 3].includes(1)
true

> [2, 1, 3].includes(5)
false
```

The `includes` method doesn't work when you want to check the existence of an object in an array, at least not in the way you'd expect.

```js
let arr = ['a', 'b', {c: 'foo'}];
arr.includes({c: 'foo'}); // => false
```

You might expect a return value of `true` from the `includes` call above, but it returns `false`. That's because `includes` uses the `===` operator to compare its argument with elements of the array. Since the comparison `{c: 'foo'} === {c: 'foo'}` returns `false`, `arr.includes({c: 'foo'})` also returns `false` in the above example.

The following `includes` call returns `true` since we're checking for the existence of the same object, and not an object with the same key-value pairs:

```js
let obj = {c: 'foo'};
let arr = ['a', 'b', obj];

arr.includes(obj) // => true
```

As with so many other array methods, `includes` is useful when working with objects as well. For example, you could use it in conjunction with `Object.keys()` to determine whether a specific key exists in an object:

```js
let obj = {a: 'apple', b: 'banana', c: 'custard'};
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('f'); // => false
```

Another method you can use to check if a key exists in an object is `Object.prototype.hasOwnProperty`.

```js
let obj = {a: 'apple', b: 'banana', c: 'custard'};
obj.hasOwnProperty('c'); // => true
obj.hasOwnProperty('f'); // => false
```

### More Array Methods Summary

JavaScript arrays supply more than 30 methods, many of which you will find useful in your future programs. We recommend that you memorize the basic details of the methods we've discussed in this assignment and the previous assignment, and become familiar with what else is available. Nobody expects you to memorize every last detail of all these methods, but, the more familiar you are with them, the easier it will be to solve problems.

20210826 14:43 Assignment complete.

## 10. Arrays: What is an Element?

We've previously mentioned that arrays are also objects. Thus, all of the indices of an array are also property names of the object (after first being translated to strings). However, not all properties of the array object are elements of the array. This fact has surprising consequences that lead to ambiguity in terms of what we mean by an empty array.

### Array Keys

Consider, for instance, the following code:

```js
let arr = [];
console.log(arr); // []
console.log(arr.length) // 0
console.log(Object.keys(arr)) // []
```

It's easy to see here that `arr` should be treated as an empty array. The array has no elements, as shown on line #2, and it has a length of `0` as shown on line #3. Furthermore, `Object.keys` returns no property keys for the array. (Note, however, that arrays have a `length` property; `Object.keys` does not include this property in the return value. Don't worry about why that is.)

Let's see what happens when the array contains elements:

```js
let arr = [2, 4, 6];
console.log(arr) // [2, 4, 6]
console.log(arr.length) // 3
console.log(Object.keys(arr)); ['0', '1', '2']
```

Lines 2 and 3 display the values you likely expect: we see that the array has 3 elements with values `2`, `4`, and `6`, and the total length is `3`. Line 4 shows that the property keys are `'0'`, `'1'`, and `'2'`; these string values correspond to the indices of the array.

We can *add properties* to the object `arr` that are not elements of the array. All we have to do is use a key that is not an non-negative integer; it doesn't even have to be a number:

```js
let arr = [2, 4, 6];
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr); // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length); // 3
console.log(Object.keys(arr)); // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1); // [3, 5, 7]
```

Notice how it looks like we're adding two elements to the array, one with an "index" of `-3` and one with an index of `'foo'`. Both of these "elements" show up when we log `arr`, though the output looks a little strange. However, the length of the array is still `3`: the count does not include the new "elements" since neither key is a non-negative integer. If we use `Object.keys`, we see all 5 property keys, both the real element indices, plus the two non-element keys.

In the last line above, we can see that `map` ignores the non-element values. All built-in array methods ignore properties that are not elements, so `map` does nothing with `arr[-3]` and `arr['foo']`.

This weird behavior leads to some ambiguity:

```js
let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length); // 0 --> Yes
console.log(Object.keys(arr)); // [ '-3', 'foo' ] --> No
```

To determine whether `arr` is empty on lines 6 and 7, we first need to define what we mean by an empty array. If we're only interested in elements, then we can use `length` to determine whether the array is empty. However, if we need to included non-elements, then we need to look at the object keys to learn whether the array is empty. **There is no one right answer here.** That's a decision you have to make when writing the code.

### Sparse Arrays

Another consideration with arrays is that they are "sparse". The number of elements in an array isn't necessarily the same as its length: there can be gaps in the array. One way to create these gaps is by increasing the size of the `length` property without adding any values to the array:

```js
let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']
```

Notice that the array now contains 5 elements, as shown on lines #3 and #4. Curiously, though, two of the elements are shown as **empty items**. The empty items, `arr[3]` and `arr[4]`, have no value at all. In fact, those elements don't exist; you can see that on line #5 where `Object.keys` makes no mention of keys `'3'` and `'4'`.

If you try to access either value, JavaScript will tell you that it is `undefined`.

```js
console.log(arr[3]);           // undefined
```

However, that does not mean its value is `undefined`. The value is not set at all. Let's see what happens when we change one of these elements to an explicit `undefined` value:

```js
let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined;
console.log(arr); // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length); // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
```

Do you see the difference? `arr[3]` is still an empty item, but `arr[4]` is `undefined`. `arr[4]` has a value; `arr[3]` does not. Note, also, that `Object.keys` includes the key of the explicitly `undefined` element (`'4'`) in the return value. Still, it does not include the key for the gap at `arr[3]`.

This behavior again leads to ambiguity about what arrays are empty and which are not:

```js
let arr = [];
arr.length = 3;

// Is arr empty?
console.log(arr.length); // 3 --> No
console.log(Object.keys(arr)); // [] --> Yes
```

To determine whether `arr` is empty on lines 5 and 6, we again need to determine what we mean by an empty array. If we want to include the gaps, then we can use `length` to determine whether the array is empty. However, if we need to ignore the gaps, then we must look at the object keys to learn whether the array is empty, keeping in mind that some of the object keys may not be non-negative integers. **Again, there is no one right answer here**. You have to decide what empty means.

20210826 20:18 Assignment Complete.

## 11. Practice Problems

We've now explored a handful of array methods and looked at how they work. Let's do some practice problems to help drive home those concepts.

The goal for these practice problems is to gain a deeper understanding of specific concepts, not to rush through them. Do your best to answer the questions without running the example code. You should be able to determine the answers just by looking at the code or by referring to the MDN docs.

t to answer the questions without running the example code. You should be able to determine the answers just by looking at the code or by referring to the MDN docs.

As we've already seen, when working with collections, there are often multiple ways that you can use to solve a particular problem. The solutions to these practice problems provide a suggestion of how each might be solved. However, don't be afraid to explore each problem in more depth, perhaps coming up with more than one possible solution and thinking about the differences and trade-offs between each.

### Practice Problem 1

What is the return value of the `filter` method call below? Why?

```js
[1, 2, 3].filter(num => 'hi');
```

Solution

```js
[1, 2, 3]
```

`filter` performs selection based on the *truthiness* of the callback's return value. In this case, the return value is always `'hi'`, which is truthy. Therefore `filter` will return a new array containing all of the elements in the original array.

### Practice Problem 2

What is the return value of `map` in the following code? Why?

```js
[1, 2, 3].map(num => {
  num * num;
});
```

Solution

```js
[ undefined, undefined, undefined ]
```

`map` looks at the return value of the callback function to decide the elements in the returned array. Each element in the original array is replaced by what the callback returns for that element. In this case, there's no explicit return statement in the callback function, which means that the callback returns undefined each time.

### Practice Problem 3

The following code differs slightly from the above code. What is the return value of `map` in this case? Why?

```js
[1, 2, 3].map(num => num * num);
```

Solution

```js
[1, 4, 9]
```

Without braces surrounding the body of the arrow function, JavaScript uses the computed value as the return value. In this case, the callback returns `1`, `4`, `9` on the 3 iterations.

### Practice Problem 4

What is the return value of the following statement? Why?

```js
['ant', 'bear', 'caterpillar'].pop().length;
```

Solution

```js
11
```

There are a couple of things going on here. First, `pop` is being called on the array. `pop` destructively removes the last element from the calling array and returns it. Second, `length` is being accessed on the return value by `pop`. Once we realize that `length` is evaluating the return value of pop(`caterpillar`) then the final return value of 11 should make sense.

### Practice Problem 5

What is the callback's return value in the following code? Also, what is the return value of `every` in this code?

```js
[1, 2, 3].every(num => {
  return num = num * 2;
});
```

Solution

```js
2
4
6
true
```

The return values of the callback will be `2`, `4`, and `6` on the respective iterations. The expression `num = num * 2` is an assignment expression and will evaluate as the expression on the right-hand side of the assignment and that is what gets returned in each iteration. Since all of those numbers are truthy values, `every` will return `true`.

### Practice Problem 6

How does `Array.prototype.fill` work? Is it destructive? How can we find out?

```js
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
```

Solution

```js
[1, 1, 1, 1, 1]
```

If you're unsure of how a method works the best thing to do is to read its [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill). Along with that, testing the method in node console can be very helpful. In this case, we can quickly check if `fill` is destructive or not by running the code in the console.

```sh
> let arr = [1, 2, 3, 4, 5]
undefined
> arr.fill(1, 1, 5)
[1, 1, 1, 1, 1]
> arr
[1, 1, 1, 1, 1]
```

By reading the documentation and trying some code in the console, we can determine that `fill` takes a value and two indices and replaces the indices in between those two given indices with the given value. We can also verify that it's a **destructive** method.

`Array.prototype.fill()`

The `fill()` method changes all elements in an array to a static value, from a start index (default `0`) to an end index (default `array.length`). It returns the modified array.

### Practice Problem 7

What is the return value of `map` in the following code? Why?

```js
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});
```

Solution

```js
[ undefined, 'bear' ]
```

There are some interesting things to point out here. First the return value of `map` is an array, which is the collection type that `map` always returns. Second, where did we get that `undefined` value? If we look at the if condition (`elem.length > 3`), we'll notice that it evaluates as true when the length of the element is greater than `3`. In this case, the only value with a length greater than `3` is `bear`. Thus, for the first element `ant`, the condition evaluates as false and `elem` isn't returned.

When a function doesn't explicitly return something, it implicitly returns `undefined`. That's why we see `undefined` as the first element of the returned array.

### Practice Problem 8

Take a look at the following array.

```js
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
```

Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

Solution

```js
let flintstonesObj = {};
flintstones.forEach((name, index) =>  {
  flintstonesObj[name] = index;
});

flintstonesObj;
```

### Practice Problem 9

Add up all of the ages from the Munster family object:

```js
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
```

Solution

```js
let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174
```

Another option would be to use `Array.prototype.reduce()` method:

```js
Object.values(ages).reduce((agesSum, currentAge) => agesSum + currentAge, 0); // =>  6174
```

One slight advantage of the `reduce` method is that we don't have to declare and initialize a variable and then reassign to that value from inside the callback. Be sure to read the documentation on `Array.prototype.reduce` to see how it works.

When faced with a problem such as this one, however, don't get tempted to go 'method hunting' to reach a solution. As demonstrated, even if you don't know the `reduce` method, the problem can be solved equally well by using `forEach` to iterate through the object values; you could even use a basic loop (`while`, `for`, or `do/while`) to achieve the same result.

### Practice Problem 10

Pick out the minimum age from our current Munster family object:

```js
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};
```

Hint

Investigate JavaScript's [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). It should come in handy in this exercise.

Spread syntax (`...`) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```js
// Expressions - Spread syntax
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6
```

Solution

```js
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
```

Recall that the `Math.min` function takes multiple numbers as arguments and returns the minimum of those numbers:

```sh
> Math.min(1, 2, 3)
1
```

In the above example, though, we have the numbers in the `agesArr` array. We use the `...` operator, called the **spread operator**, to convert the array to a list of arguments.

### Practice Problem 11

Create an object that expresses the frequency with which each letter occurs in this string:

```js
let statement = "The Flintstones Rock";
```

The output will look something like the following:

```js
{ T: 1, h: 1, e: 2, F: 1, l: 1, ... }
```

Solution

```js
let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);
```

There are a couple of interesting things to note about this solution. First with the expression `statement.split('').filter(char => char !== ' ')`, we convert the string into an array of characters but we make sure to exclude the space characters by using the `filter` method.

Note the following line:

```js
result[char] = result[char] || 0;
```

We're taking advantage of something called **short-circuiting** here. What this means is that JavaScript first evaluates the left operand (`result[char]`) of the `||` operator. If it is truthy, JavaScript doesn't evaluate the right operand; it only evaluates the right operand when the left is falsy. Thus, if a character doesn't exist as a key in our `results` object, `result[char]` will return `undefined` ??? a falsy value ??? resulting in the assignment of `result[char]` to `0`. If `result[char]` instead evaluates to a truthy value such as `1`, it'll simply reassign the current value to `result[char]`.

We can also code up the same logic without using the `||` operator:

```js
let charsInStatement = statement.split('').filter(char => char !== ' ' );
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});
```

Note that we don't have to convert the string to an array to solve the problem. We're doing so here only so that we can use the `forEach` method. We could've used a simple `for` loop to iterate over the string directly:

```js
let result = {};

for (let counter = 0; counter < statement.length; counter += 1) {
  let char = statement[counter];
  if (char === ' ') continue;

  result[char] = result[char] || 0;
  result[char] += 1;
}
```

20210831 12:45 Assignment complete. Just Lesson 4 Quiz 1 left.
