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

You'll often see another method, String.prototype.substr, used in some old code. This method isn't strictly deprecated, but it is now defined as a legacy function. Eventual deprecation seems likely, which means it may be removed from future implementations of JavaScript. We don't recommend using it, but it's worth knowing about since you may come across it in the wild. See the documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr).

#### Array Element Reference

#### Object Element Reference

#### Element Reference Gotchas

##### Out of Bounds Indices

##### Invalid Object Keys

##### Arrays are Objects!

### Conversion

### Element Assignment

#### Object Key Assignment

#### String Character Assignment

### Summary

We've talked about quite a few important topics in this assignment. More specifically, we covered the core ways to reference elements or assign values for particular elements in a collection using some of the various element reference and element assignment methods of String, Array, and Object.

These concepts are fundamental to working with collections, so it's critical to understand everything we talked about in this assignment before moving forward. Taking the time to have a clear understanding of these topics will make it much easier to handle topics that build upon these fundamentals in the future.
