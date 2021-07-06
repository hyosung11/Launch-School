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

