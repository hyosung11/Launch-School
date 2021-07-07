# INTRODUCTION TO PROGRAMMING: Arrays

## Arrays

### What is an Array?

An array is an ordered list of elements; each element has a value of any type. You can define an array by placing a list of values between brackets (`[]`):

```js
> let myArray = [2, 'Pete', 2.99, 'another string']
```

This example demonstrates that arrays are **heterogenous**; `myArray` has both number and string values. Arrays can have anything in them, including objects and even other arrays.

Each element in an array has a unique index number that gives the position of the element in the array. Thus, we can say that arrays are **indexed lists** as well as ordered lists.

You can refer to any element of an array by its index number. The syntax puts the index number between brackets (`[]`) after the array's name or value. For instance, we can get the first element of `myArray` this way:

```js
> let myArray = [2, 'Pete', 2.99, 'another string']

> myArray[0]
= 2

> myArray[2]
= 2.99

// Use length-1 property to find the last element
> myArray[myArray.length - 1]
= 'another string'

// Note that we must use the array's name twice, and, since we must account for the element at index 0, we must subtract 1 from the length to get the last element's index. because of zero-based indexing.
```

## Modifying Arrays

### Replacing and Adding Elements with `[]`

```js
// To replace an element of an array, use brackets ([]) with the assignment operator:
> let array = [1, 2, 3]
> array[1] = 4
= 4

> array
= [ 1, 4, 3 ]
```

```js
// You can also use [] to add new elements to an array:
> array[array.length] = 10
= 10

> array
= [ 1, 4, 3, 10 ]

// Note that array[array.length] = value adds a new value to the end of array since the previous ending element was at array[array.length - 1].
```

```js
// Note that variables declared with const and initialized to an array are a little strange; while you can't change what array the variable refers to, you can modify the array's contents:

> const MyArray = [1, 2, 3]
> MyArray[1] = 5
> MyArray
= [1, 5, 3]

> MyArray = [4, 5, 6] // Uncaught TypeError: Assignment to constant variable.
```

This type of behavior can be confusing. It stems from the "variables as pointers" concept that we discuss a little later. Essentially, a `const` declaration prohibits changing what thing the `const` points to, but it does not prohibit changing the content of that thing. Thus, we can change an element in a `const` array, but we can't change which array the `const` points to.

```js
// If you want the elements of the array to also be const, you can use the Object.freeze method:

> const MyArray = Object.freeze([1, 2, 3])
> MyArray[1] = 5
> MyArray
= [1, 2, 3]

// Notice how the assignment on line 2 had no effect on the content of the array.
```

It's important to realize that `Object.freeze` only works one level deep in the array. If your array contains nested arrays or other objects, the values inside them can still be changed unless they are also frozen:

```js
> const MyArray = Object.freeze([1, 2, 3, [4, 5, 6]])
> MyArray[3][1] = 0
> MyArray
= [1, 2, 3, [4, 0, 6]]

// If you want the sub-array to be constant as well, you have to freeze it:

> const MyArray = Object.freeze([1, 2, 3, Object.freeze([4, 5, 6])])
> MyArray[3][1] = 0
> MyArray
= [1, 2, 3, [4, 5, 6]]
```

### Adding Elements with `push`

```js
// The push method adds one or more elements to the end of an array:
> array.push('a')
= 5               // the new length of the array

> array
= [ 1, 4, 3, 10, 'a' ]

> array.push(null, 'xyz')
= 7

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```

The `push` method appends its arguments to the caller (the array), which mutates the caller. It then returns the array's new length. Don't forget that methods and functions perform actions and return values. You must be careful to distinguish between these two things. `push` appends elements to the end of the caller array, but it returns the array's updated length. Note that it does not return the modified array! New JavaScript programmers often get confused over this difference and spend hours puzzling over why a function isn't returning the value they expect. Check the documentation if you have any doubt.

### Adding Elements with `concat`

The `concat` method is similar to `push`, but it doesn't mutate the caller. It concatenates two arrays and returns a brand new array that contains all the elements from the original array followed by all of the arguments passed to it:

```js
> array.concat(42, 'abc')
= [ 1, 4, 3, 10, 'a', null, 'xyz', 42, 'abc' ]

> array
= [ 1, 4, 3, 10, 'a', null, 'xyz' ]
```

How do you know which methods mutate the caller and which ones don't? Most of the time, the documentation has this information; documentation for non-mutating methods may mention that they return a new array. However, don't count on it. The way to be sure is to use the method and examine the results.

### Removing Elements with `pop`

The inverse of `push` is `pop`. While `push` adds an element to the end of the array, `pop` removes and returns the last element of the array:

```js
> array.pop()
= 'xyz'            // removed element value

> array
= [ 1, 4, 3, 10, 'a', null ]

// pop mutates the caller
```

### Removing Elements with `splice`

The `splice` method lets you remove one or more elements from an array, even those that aren't at the end of the array:

```js
// let array = [1, 4, 3, 10, 'a', null]
> array.splice(3, 2)
[ 10, 'a' ]

> array
= [ 1, 4, 3, null ]
```

In this example, we delete 2 elements starting at index position 3. `splice` mutates the original array and returns a new array that contains the deleted elements.

`splice` can also add and insert elements, but we'll leave that for our JavaScript courses.

## Iteration Methods

### Iterating with `forEach`

To use forEach, you need a **callback** function that you pass to `forEach` as an argument. A callback function is a function that you pass to another function as an argument. The called function invokes the callback function when it runs. The forEach method invokes its callback once for each element, passing it the element's value as an argument. `forEach` always returns undefined.

A callback is a function that you pass to another function as an argument. The called function subsequently invokes the callback function at certain times while it runs.

```js
let array = [1, 2, 3];
array.forEach(function(num) {
  console.log(num); // on first iteration  => 1
                    // on second iteration => 2
                    // on third iteration  => 3
}); // returns `undefined`

// We can also use an arrow function instead of a function expression, which makes our code compact and, when you're familiar with the syntax, more readable.
let array = [1, 2, 3];
array.forEach(num => console.log(num));

// We can also perform more complex operations:
let array = [1, 2, 3];
array.forEach(num => console.log(num + 2)); // on first iteration  => 3
                                            // on second iteration => 4
                                            // on third iteration  => 5
```

This code invokes the callback function once for each element in the array. `forEach`, during each iteration, invokes the callback with the element's value as an argument. The callback then logs it to the console. In the end, `forEach` returns `undefined`.

### Transforming Arrays with `map`

`forEach` works well when you want to use the values of an array's elements. Suppose, though, that you want to create a new array whose values depend on the original contents of the array. For instance, suppose you want to create a new array that contains the squares of all the numbers in the calling array. With `forEach`, you might end up with something like this:

```js
> let numbers = [1, 2, 3, 4]
> let squares = [];
> numbers.forEach(num => squares.push(num * num));
> squares
= [ 1, 4, 9, 16 ]

> numbers
= [ 1, 2, 3, 4 ]
```

That works well enough, but the callback now has a side effect: it modifies the `squares` variable, which isn't part of the callback function. Side effects sometimes lead to trouble. Consider what happens if you ran the `forEach` call again after running the above code:

```js
> numbers.forEach(num => squares.push(num * num));
> squares
= [ 1, 4, 9, 16, 1, 4, 9, 16 ]

// We now have two copies of the squares since we forgot to reset squares to an empty array.
```

```js
// The map method handles this situation more cleanly:
> let numbers = [1, 2, 3, 4]
> let squares = numbers.map(num => num * num);
> squares
= [ 1, 4, 9, 16 ]

> squares = numbers.map(num => num * num);
= [ 1, 4, 9, 16 ]
```

The first 4 lines of this code have the same result as the previous example using `forEach`. However, map returns a new array that contains one element for each element in numbers, with each element set to the return value of the callback: the squares of the numbers in this case. This code is more compact than the `forEach` code, and, better yet, it has no side effects; the callback doesn't update `squares` (the return value of `map` does that), and we don't have to reset the variable if we rerun the same code.

`forEach` and `map` are important methods, but they can confuse beginners. The main thing to remember is that `forEach` performs simple iteration and returns `undefined`, while `map` transforms an array's elements and returns a new array with the transformed values.

### Filtering Arrays with `filter`

The `filter` method is another array iteration method. It returns a new array that includes all elements from the calling array for which the callback returns a truthy value. That's a mouthful. Some code should help clarify what `filter` does:

```js
> let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2]
> numbers.filter(num => num > 4)
= [ 5, 6, 7, 8, 9, 10 ]

> numbers
= [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2 ]
```

`filter` iterates over the elements of the array. During each iteration, it invokes the callback function, using the value of the current element as an argument. If the callback returns a truthy value, `filter` appends the element's value to a new array. Otherwise, it ignores the element's value and does nothing. When `filter` finishes iterating, it returns the array of _selected_ elements: the elements for which the callback returned a truthy value. In our example, `filter` selects all of the elements with a value greater than 4.

`filter` doesn't mutate the caller.

### Building New Values from Arrays with `reduce`

The `reduce` method effectively reduces the contents of an array to a single value. It is, perhaps, one of the hardest array iteration methods to understand, but it is also one of the most fundamental. You can build `forEach`, `map`, and `filter` with `reduce`, as well as a number of other iterative methods defined for Arrays.

`reduce` takes two arguments: a callback function and a value that initializes something called the **accumulator**. In its simplest form, the callback function takes two arguments: the current value of the accumulator and an element from the array. It returns a value that will be used as the accumulator in the next invocation of the callback. That sounds more complicated than it is, so let's take a look at two simple uses of reduce:

```js
// computes the sum of all the elements of the array
> let arr = [2, 3, 5, 7]
> arr.reduce((accumulator, element) => accumulator + element, 0)
= 17

// computes the product of the numbers in the array
> arr.reduce((accumulator, element) => accumulator * element, 1)
= 210
```

The first invocation computes the sum of all the values in the array, e.g., `2 + 3 + 5 + 7`. To get us started, we initialize the accumulator to 0. Thus, on the first invocation of the callback function, `accumulator` is `0` and `element` is `2`. The callback returns `2`, which becomes the new `accumulator` value when we invoke the callback again, this time with the element `3`. That invocation, in turn, returns `5`. This process continues until the final return value is `17`.

The second invocation of `reduce` computes the product of the numbers in the array (`2 * 3 * 5 * 7`), starting out with `1` as the accumulator. (If we started with `0` as the accumulator, the final return value would be `0` since `0` times anything is `0`.)

```js
// The reduce function isn't limited to computing numbers: you can also use it to compute strings, objects, arrays: anything. Here's an example with strings:

> let strings = ['a', 'b', 'c', 'd']
> strings.reduce((accumulator, element) => {
...   return accumulator + element.toUpperCase()
... }, '');
= 'ABCD'
```

`reduce` does not mutate the caller. (It is possible that the callback might mutate the caller, but that's inadvisable, and not `reduce`'s fault.)

## Arrays Can Be Odd

JavaScript arrays have some odd properties that might catch you by surprise. 

* indexes start at `0`. Most programming languages use zero-based indexes, so it's not too odd.

* The `length` property always returns a number that is one greater than the greatest used index position of the array. For instance, if an element exists at index position `111` and there are no other elements with greater index values, then the array's `length` is 112.

* **Arrays are objects**. One side effect of this is that the `typeof` operator doesn't return `'array'` when applied to an array:

```js
> let arr = [1, 2, 3]
> typeof arr
= 'object'
```

If you really need to detect whether a variable references an array, you need to use `Array.isArray` instead:

```js
> let arr = [1, 2, 3]
> Array.isArray(arr)
= true
```

* If you change an array's `length` property to a new, smaller value, the array gets truncated; JavaScript removes all elements beyond the new final element.

```js
let arr = [1, 2, 3, 4];
arr.length = 3
console.log(arr); // => [ 1, 2, 3 ]
```

* If you change an array's length property to a new, larger value, the array expands to the new size. The new elements **do not get initialized**, which leads to some strange behavior:

```js
> let arr = []
> arr.length = 3
> arr
= [ <3 empty items> ]

> arr[0]
= undefined

> arr.filter(element => element === undefined)
= []

> arr.forEach(element => console.log(element)) // no output
= undefined

> arr[1] = 3
> arr
= [ <1 empty item>, 3, <1 empty item> ]

> arr.length
= 3

> arr.forEach(element => console.log(element))
= 3

> Object.keys(arr)
= ['1']
```

In general, JS treats unset array elements as missing, but the `length` property includes the unset elements.

* You can create array "elements" with indexes that use negative or non-integer values, or even non-numeric values:

```js
> arr = [1, 2, 3]
= [ 1, 2, 3 ]

> arr[-3] = 4
= 4

> arr
= [ 1, 2, 3, '-3': 4 ]

> arr[3.1415] = 'pi'
= 'pi'

> arr["cat"] = 'Fluffy'
= 'Fluffy'

> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]
```

These "elements" aren't true elements; they are properties on the array object, which we'll discuss later. Only index values (0, 1, 2, 3, and so on) count toward the length of the array.

```js
> arr.length
= 3
```

* Since arrays are objects, you can use the `Object.keys` method to return an array's keys -- its index values -- as an array of strings. Even negative, non-integer, and non-numeric indexes are included.

```js
> arr = [1, 2, 3]
> arr[-3] = 4
> arr[3.1415] = 'pi'
> arr["cat"] = 'Fluffy'
> arr
= [ 1, 2, 3, '-3': 4, '3.1415': 'pi', cat: 'Fluffy' ]

> Object.keys(arr)
= [ '0', '1', '2', '-3', '3.1415', 'cat' ]
```

One quirk of this method is that it treats unset values in arrays differently from those that merely have a value of `undefined`. Unset values are created when there are "gaps" in the array; they show up as empty items until you try to use their value:

```js
> let a = new Array(3);
> a
= [ <3 empty items> ]

> a[0] === undefined;
= true

> let b = [];
> b.length = 3;
> b
= [ <3 empty items> ]

> b[0] === undefined;
= true

> let c = [undefined, undefined, undefined]
> c
= [ undefined, undefined, undefined ]

> c[0] === undefined;
= true
```

While the `length` property of Array includes unset values in the count, `Object.keys` only counts those values that have been set to some value:

```js
> let aKeys = Object.keys(a)
> a.length
= 3
> aKeys.length;
= 0

> let bKeys = Object.keys(b)
> b.length
= 3
> bKeys.length;
= 0

> let cKeys = Object.keys(c)
> c.length
= 3
> cKeys.length;
= 3
```

## Nested Arrays

Array elements can contain anything, including other arrays. You can create arrays with arrays inside them and even arrays inside those inner arrays. Suppose you want to track all of the teams playing in a mixed doubles tennis tournament. You might create an array like this:

```js
> let teams = [['Joe', 'Jennifer'], ['Frank', 'Molly'], ['Dan', 'Sarah']]

// find teams by index:
> teams[2]
= [ 'Dan', 'Sarah' ]

// If you want to retrieve the second element of teams[2], you can append [1] to the expression:
> teams[2][1]
= 'Sarah'
```

## Array Equality

What do you think the following expression returns?

```js
> [1, 2, 3] === [1, 2, 3]

// A reasonable answer is that it returns true. After all, the arrays look identical. JavaScript, however, isn't reasonable in this case: the expression returns false.

> [1, 2, 3] === [1, 2, 3]
= false

// How about the following comparison?
> let a = [1, 2, 3]
> let b = a
> a === b

// Curiously, this comparison evaluates as true. What's happening here?
```

JavaScript treats two arrays as equal only when they are the same array: they must occupy the same spot in memory. This rule holds for JavaScript objects in general; objects must be the same object. For this reason, the second example returns `true` while the first one returns `false`. Assigning `a` to `b` makes `b` refer to the same array as `a`; it doesn't create a new array.

If that last paragraph confused you, come back to this section after you've read Variables as Pointers in the More Stuff chapter. If you want, you can even read it now.

It's important to realize that the previous discussion concerns arrays (and other JavaScript objects). The situation with primitive values is different and less surprising.


At first glance, you might say that the arrays in the first example are also "the same array," but they're not. They're two different arrays that happen to have the same values. However, they occupy distinct positions in memory, so they aren't the same array, and thus aren't equal.

Given this behavior, how do you check whether two arrays have the same elements? One option is to create a function that compares the elements of one array with the corresponding elements in the other:

```js
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));    // => true
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));    // => false
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // => false
```

`arraysEqual` takes two arrays and returns `false` when an element in one array doesn't equal the corresponding element in the other. Otherwise, it returns `true`. It returns `false` right away if the arrays have different lengths; taking care of this case first simplifies the rest of the function.

`arraysEqual` works best when all elements in both arrays are primitive values. If any pair of elements has a non-primitive value (an array or object), `arraysEqual` might not return the result you expect:

```js
> arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5])
= false
```

## Other Array Methods

### `includes`

```js
// The `includes` method determines whether an array includes a given element.
> let a = [1, 2, 3, 4, 5]
> a.includes(2)
= true

> a.includes(10)
= false

// Internally, `includes` uses === to compare elements of the array with the argument. That means we can't use `includes` to check for the existence of a nested array or an object unless we have the same object or array we're looking for:

> let inner = [3, 4];
> let a = [1, 2, inner, 5]

> a.includes([3, 4])
= false

> a.includes(inner)
= true
```

