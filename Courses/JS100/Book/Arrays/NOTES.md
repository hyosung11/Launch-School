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

