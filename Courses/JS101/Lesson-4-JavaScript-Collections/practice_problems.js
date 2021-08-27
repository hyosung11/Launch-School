// What is the return value of the filter method call below? Why?
// [1, 2, 3].filter(num => 'hi');

/* Answer

The filter method will return a copy of the original array containing all its elements. The filter method takes a callback function as its argument and for each element for which the callback function evaluates as true, adds that element to the new array. Therefore, since 'hi' is returned by the callback function for each element and 'hi' always evaluates as true, each element will be filtered into the new array */

// What is the return value of map in the following code? Why?
[1, 2, 3].map((num) => {
  num * num;
});

/* Answer

The return value will be `[undefined, undefined, undefined]`. The `map` method returns a new array that transforms each element of the original array into the return value of the callback function for that element. Since the callback function has no explicit return statement, it always returns `undefined`. Therefore, each element in the original array is transformed into `undefined` in the new array.

*/
