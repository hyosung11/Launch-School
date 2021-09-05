/* study session with Alex, Edris, Shane and H

*/

// What happens here?
// console.log([[1, 2], [3, 4]].map(arr => console.log(arr[0])));

/* Discussion
This logs 1 and 3 to the console
the return value is a new array [ undefined, undefined ]
there is no explicit return statement
`map` uses the return value of the callback to perform a transformation


*/
//What happens here?
// console.log([[1, 2], [3, 4]].map(arr => 5));


/*
Alex
This will return the array [undefined, undefined]. This is because map(), which is called on an array, returns a new array in which each element of the original array is replaced by the return value of the callback function. Since console.log always returns undefined, that is the value of the callback function for every iteration. The excerpt also has the side effect of logging the first element of each subarray.
*/

/*
Edris
Problem 1
  - [[1, 2], [3, 4]].map(arr => console.log(arr[0])); - What happens here?
  - the `map` method is called on the `array literal` object.
  - The callback function then logs the index at position 0 to the console
  - there is no return value from the callback
  - `map` adds values to the new array based on the return value of the callback, so with nothing being returned, the new array is a nested array with undefined as values
*/


/*
shane
We start with the nested array [[1,2],[3,4]]
The map method is run on that array which creates a new array
Each sub array element is passed to the callback function which is console.log(arr[0])
console.log outputs the first element of the subarray - 1 and 3
console.log returns undefined which is put in the new array created by the .map method
[undefined, undefined] is returned by the .map method
*/

/* Discussion
This logs 1 and 3 to the console
the return value is a new array [ undefined, undefined ]
there is no explicit return statement
`map` uses the return value of the callback to perform a transformation on the elements of the array at index position 0 of each subarray

*/

// Example 6
console.log([
  { a: 'ant', b: 'elephant' },
  { c: 'cat', d: 'dog' },
].filter((object) => {
  return Object.keys(object).every((key) => object[key][0] === key);
}));

/* Discussion
This code logs [ { c: 'cat', d: 'dog' } ]. The `filter` method is called on the object and evaluates the truthiness of each element of calling the `Object.keys` method on the object. `Object.keys` uses the `every` method to evaluate whether the first letter of the value is strictly equal to the key's value
*/

/*Alex
This will return  [ { c: 'cat', d: 'dog' } ]. The .filter() method returns a new array including all values of the original array for which the return value of the callback function is truthy. The callback function calls .every() on the array of each object's keys. .every() returns true if all of the elements of the array return a truthy value--in this case, it tests whether every key in the object has a value that starts with the same first letter as the key. It evaluates as truthy for {c: cat, d: dog} and that is the only element selected for the returned array.
*/

/*
shane

We start with the array literal `[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }]` which contains two object elements.  Each object has
two elements.  The `filter` method is performed on the array.  The callback function block `return Object.keys(object).every(key => object[key][0] === key);`
is passed to the `filter`method.  The objects keys are passed to the `every` method which has a callback function that finds the elements that have the
first character of their string which is strictly equal to the key and `every` returns a truthy value for those.  `filter` returns an array of [ { c: 'cat', d: 'dog' } ]
*/

/*
Edris
In this problem, the `filter` method is called upon the `array literal` object, which contains 2 nested `Objects`.
the `filter` callback is now iterating over each of these objects. The operation going on within the callback calls the `Object.keys` method on each object to get an array of keys of the object. The `every` method is then chained with this method call to get an array, to further filter out the return value. the `every` method is checking the array of keys, and comparing each value of that array to the origin parameter of the `filter` callback above `object`. This comparison finds the property of the `object` parameter for `key` and compares that with the `key` value of the Object.keys(object) array. The return value is an array with the properties whose key matches the first letter of its value.
*/


/* LS
The first thing to notice here is the use of the every method within the filter callback. Since filter specifically cares about the truthiness of the callback's return value, using a method that returns a boolean value works well. every will return true if the callback passed to it returns a truthy value for the array of keys. We're using object[key][0] === key to test whether all keys match the first letter of all their associated values. Note that the only object that meets this criterion is {:c => 'cat', :d => 'dog'}, and the return value is an array.
*/

/* Can you take this code apart, just like before? What will it output and what will the value of myArr be? Check the solution below once you have tried this on your own. */

let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});


console.log(myArr);

/* This code will output the numbers 18, 7, 12. The `forEach` method is called on the array and returns undefined. The `map` method takes each number in the nested subarrays and within its callback function evaluates whether it's value is greater than 5. If true, it logs that number. The value of myArr will be undefined. */

/*
Edris
in this problem, the variable `myArr` is declared using `let`. The variable acts as a pointer to the array expressed. The `forEach` method is called on that array, and the callback of the `forEach` call is returning the return value of the nested `map` method. `map` is called on each sub array of the original array, and checks each element with an `if` conditional, for whether that element is greater than 5. If the condition is true, it returns a console.log(num) statement, which logs to the console that number and returns `undefined`. The final value of `myArr` is an array of undefined, undefined.
*/

/* MyArr will be assigned to undefined since forEach always returns undefined. It will log 18, 7, 12. The return value of the callback will be: [undefined, undefined] for each element: .map() will explicitly return undefined for all elements greater than 5 (console.log() always returns undefined) and will implicitly return undefined otherwise, as there is no return value in those other cases. However, forEach doesn't do anything with the return values of the callback function.
*/

/* This code will output the numbers 18, 7, 12. The `forEach` method is called on the array and returns undefined. The `map` method takes each number in the nested subarrays and within its callback function evaluates whether it's value is greater than 5. If true, it logs that number. The value of myArr will be undefined. `map` and `console.log`

*/


/*
shane

The variable `myArr` is assigned the value undefined because `.forEach' returns undefined.  We iterate through the nested array object literal.
Each subarray is passed to a `map` method which has a callback function that logs the elements that are greater than 5 to the console.  The callback
function in the `map` method returns undefined for each sub array, which is not used.  The output to the console is 18 7 12.

*/
