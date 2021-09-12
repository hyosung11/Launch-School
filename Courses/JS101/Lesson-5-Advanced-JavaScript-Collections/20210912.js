/* Study Session with Alex

What does this code return and why?
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));

/*
This code will log the numbers 1 and 3. The forEach() method executes a callback function once for each array element. Here, it iterates through the array passed to it and uses the `console.log` method to select the first element of each subarray. The return value of `forEach` is undefined.

Alex
forEach() is used to iterate through an array and pass each element to the callback function as a parameter--but crucially, forEach does not use the return value of the callback function and always returns undefined. In the callback function, console.log() is called on arr[0], which itself returns the first element in each subarray. Therefore, the code logs 1 and 3, the first elements of each subarray. The return value of each iteration is undefined because console.log() returns undefined, but as mentioned, forEach() does not use these return values of the callback.


Launch School
We use the multi-dimensional array [[1, 2], [3, 4]] to call forEach. Each inner array is passed to the callback, in turn, and assigned to the parameter arr. We then use the element reference operator, [], to get the value at index 0 of the array. On the first invocation of the callback, arr[0] returns 1, and on the second, it returns 3. In each invocation, console.log outputs a string representation of the value returned by arr[0]. Since this is a single statement callback, the callback's return value is the return value of console.log(arr[0]), which is undefined. forEach doesn't do anything with that returned value though. Finally, no matter what the callback returns, forEach always returns undefined.
*/

// Example 2
console.log([[1, 2], [3, 4], [5, 6]].map(arr => console.log(arr[0])));

/*
H
The `map` method is called on the multi-dimensional array [[1, 2,], [3, 4]]. Each subarray is passed to the callback. `map` uses the return value of the callback to transform the elements passed in by the element reference operator []. The `console.log` method logs the values 1 and 3. `console.log` returns undefined. `map` returns [undefined, undefined].

Alex
This returns a new array, [undefined, undefined]. map() is called on an array and returns a new array in which each element in the original array is transformed into the return value of the callback function for that element. In this case, since the callback function is a single statement, it will return console.log(arr[0]) -- since console.log() always returns undefined, every invocation of the callback function will return undefined. Moreover, in each invocation of the callback function, the element reference operator [], is used to access the value of the first element of each subarray -- first 1, and then 3.

Points
1. what does map do 
and what does it return
2. What does console.log log and what does it return?
3. What does element access do?

*/
