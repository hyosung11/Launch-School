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

