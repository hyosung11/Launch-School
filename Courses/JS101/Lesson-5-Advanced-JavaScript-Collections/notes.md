# Lesson 5: Advanced JavaScript Collections (20210901 07:30)

## Introduction

In the previous lesson, we took an in-depth look at JavaScript collections. You should now feel comfortable with what collections are on a conceptual level, as well as with working with them on a practical level, through looping and using iterative methods. If any of those areas still feel unclear, it would be a good idea to review them again before moving on.

In this lesson, we will be building on what we learned in the previous lesson and exploring some more advanced aspects of working with collections in JavaScript such as sorting, nested collections and working with callback functions.

Before you start, make sure to create a new directory for this lesson. Call it perhaps `lesson_5`, and do all your work for this lesson in that directory.

```sh
js_101          <-- this is your course 1 git repo
|
+--lesson_2     <-- all lesson 2 code goes here
|
+--lesson_3     <-- all lesson 3 code goes here
|
+--lesson_4     <-- all lesson 4 code goes here
|
+--lesson_5     <-- all lesson 5 code goes here
```

## Sorting

Thus far in our explorations, we've looked at various ways to work with collections, such as iterating through them, performing selection on the collection, or performing a transformation on the elements in the collection. We've also studied several methods that can make those tasks easier.

Another way to work with collections is to sort them into some predictable sequence or order. Sorting is typically performed on arrays; since items in arrays are accessed via their index, their order in the array is important.

Strings don't have access to any built-in sorting methods. However, it is easy to convert a string into an array, sort it, and then build a new string from the result.

JavaScript objects don't maintain a set order, so there's no point in sorting them. Most JavaScript implementations order the key-value pairs of an object based on the sequence in which they were added to the object, but the specification doesn't guarantee a set order, so you should not rely on it. Since object values are accessed via their keys, there generally is no need to sort them.

### What is sorting?

Sorting is setting the order of the items in a collection according to some criteria. For example, if we look at these two arrays of numbers:

```js
[2, 11, 9, 4, 107, 21, 1]
[1, 2, 4, 9, 11, 21, 107]
```

They both contain the same numbers, but, in the second array, the sequence is different: they're sorted numerically.

Given the first array in the above example as a starting point, how can we go from that to the second array? We need a mechanism that we can use on the first array to put all the items of that array into a particular order; numerical, in this case.

With some of the other concepts we've looked at so far in this course - such as iteration, selection, and transformation - we first showed how those actions could be performed algorithmically, via the use of reasonably simple looping mechanisms. Once we did that, we moved on to look at specific methods in JavaScript that do those things for us.

Though it's possible to write sorting code manually, such code is relatively complex and is beyond the scope of what you need to know right now. (If you're curious, discussions of sorting algorithms are easy to find on the Internet.) Luckily for us, JavaScript provides the `Array.prototype.sort` method to handle this complex operation.

### Sorting in JavaScript

Comparisons are at the heart of how sorting works. Sorting algorithms must perform a comparison of some kind between the items in a collection. They use the results of the comparison to rearrange the order of the collection, eventually leading to the sorted result.

Sorting integers via numeric comparison may seem easy. For example, we all know that 2 comes after 1 in numerical order. However, the default behavior of sort doesn't perform numerical sorting. What would you expect the following code to return?

```js
[2, 11, 9, 4, 107, 21, 1].sort();
```

You'd expect it to return `[1, 2, 4, 9, 11, 21, 107]` since that's the natural order of numbers. The number `1` comes before `2`, which comes before `4`, which comes before `11`, and so on. Try it out in the node console. You may be surprised when you see the following result:

```sh
> [2, 11, 9, 4, 107, 21, 1].sort()
[ 1, 107, 11, 2, 21, 4, 9 ]
```

What on Earth is going on here? Can you see what's happening by studying the return value? Think about it for a minute or two before moving on.

JavaScript being JavaScript, it converts all the numbers to strings and compares them by their **Unicode character codes**. Thus, all the numbers that begin with `1` move to the beginning of the array, then all the numbers that begin with `2` come next, and so on. The numbers are compared digit by digit, so `1`comes before `107` which comes before `11`, which comes before `2`. Given this behavior, how would you sort numbers by their numerical value? We'll return to this question later in the assignment.

When `sort` is called without arguments, it coerces all the array elements except those that are `undefined` to their string equivalents, then sorts them using string comparisons:

```sh
> [null, 'a', true, 1].sort()
[ 1, 'a', null, true ]
```

`undefined` values are a special case when it comes to sorting. They are always placed at the end of the array no matter what the other values are:

```sh
> [undefined, 11, 'z', 'x', 'y', undefined].sort()
[ 11, 'x', 'y', 'z', undefined, undefined ]
```

#### Sorting Arrays of Strings Alphabetically

RR

#### UTF-16

### Sorting Summary

In this assignment, we've looked at sorting as another way that we can work with collections. Sorting is complicated to perform algorithmically, but we can use the built-in `Array.prototype.sort` method to handle that complex work for us. At this point, you should understand the concept of sorting and be comfortable using the `sort` method that JavaScript arrays provide.
