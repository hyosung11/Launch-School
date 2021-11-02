# JS109 Written Assessment Answers

Total Points = 73

## Question 1 3 Points

Examine the two code examples below. Explain, with particular reference to line 3 of each example, why Example 1 logs the same values for `arr1` and `arr2`, but Example 2 logs different values.

Example 1

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1.push(4);

console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3, 4 ]
```

Example 2

```js
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr1 = arr1.concat([4]);

console.log(arr1) // [ 1, 2, 3, 4 ]
console.log(arr2) // [ 1, 2, 3]
```

Your Answer
Example 1 demonstrates variables as pointers and that when two objects point to the same place in memory any changes to one are reflected in the other. the `push` method mutates the calling array and this is reflected in both variables because they reference the same array.

In example 2 the `concat` method doesn't mutate the calling array. It returns a new array and  is a non-mutating method.

Responses

Jessica Chang (TA)
about 16 hours ago

  > when two objects point to the same place in memory any changes to one are reflected in the other.

I'm chalking this up to a typo, but there's some imprecision with this statement. Can you re-phrase more precisely?

Revised Answer
Example 1 demonstrates variables as pointers and what happens with a mutating operation like the `push` method. On line 2, `arr2` is declared and initialized to reference the same array that `arr1` points to, so both variables reference the array `[1, 2, 3]`. On line 3, the `push` method accesses and mutates the array referenced by `arr1` by adding the element `4` to it. Since `arr2` also points to the same array, both `arr1` and `arr2` reflect the updated content of the array which is `[ 1, 2, 3, 4 ]`.

> In example 2 the concat method doesn't mutate the calling array. It returns a new array and is a non-mutating method.

And can you explicitly explain how the fact that the `concat` method is non-destructive plays a role in why lines 5 and 6 of Example 2 log the values we see? Specifically, what is happening on line 3 of this example?

Revised Answer
Example 2 also demonstrates variables as pointers, and what happens with a non-mutating operation like the `concat` method. On line 2, `arr2` is declared an initialized to reference the same array that `arr1` points to. On line 3, the `concat` method returns a new array that contains a copy of the original array combined with the additional element `4`. Since `concat` creates a copy of the original array and then mutates the copy, it leaves the original array intact. Thus, the calls to `console.log` on lines 5 and 6 return two different arrays.

## Question 2 3 Points

What does the following code log? Explain how you arrived at your answer.

```js
let num = 1;

const addOne = () => {
  num += 1;
};

addOne;
console.log(num); // 1
```

The code logs `1`. On line 1, the global variable `num` is declared and initialized to the value of `1`. One line 3, the function `addOne` is declared without a parameter but the function is never called because on line 7, `addOne` does not get invoked because it lacks `()`. The reassignment of `num` within the function `addOne` never happens, so the call to `console.log` on line 8 logs the value of the global `num` which is `1`.

## Question 3 3 Points

Examine the code example below. Explain why line 7 logs 5, but line 8 raises a ReferenceError.

```js
let num1 = 5

if (num1 > 4) {
  let num2 = 10;
}

console.log(num1); // 5
console.log(num2); // ReferenceError
```

Line 7 logs `5` because the `console.log` method can only access the `num1` variable from the global scope on line 1 because outer scope cannot access inner scope.

Line 8 raises a `ReferenceError` because the `console.log` method attempts to access the local variable `num2` which is only accessible within the `if` block. Once the block ends, the variable `num2` is destroyed. Thus, on line 8, `num2` does not exist, so a `ReferenceError` is raised.

## Question 4 3 Points

What does the following code log? Explain how you came up with your answer.

```js
let score = 23;

function updateScore(points) {
  let score;
  score += points;
}

updateScore(5); // undefined
console.log(score); // 23
```

The code logs `23`. On line 1, the global variable `score` is declared and initialized to `23`. On line 3, the function `updateScore` is defined with the parameter `points`. On line 8, the function `updateScore` is called with `5` passed as an argument. However, the return value of function `updateScore` is `undefined` because the function lacks a `return` statement. The declaration of `score` with the `let` keyword defines a new variable that is different from the global variable `score` on line 1. Thus, the call to `console.log` on line 9 logs the value of the global variable `score` which is `23`.

no `return` statement in function `updateScore

## Question 5 5 Points

Examine the following code carefully. Which variable names are in the global scope, and which are local to the scope inside function `add`? Explain how you came up with your answer, making sure to name the variables in each of the two scopes.

```js
let num1 = 5;
let num2 = 10;
let num3 = 12;

function add(num1, num2) {
  let total = num1 + num2;
  return total;
}
```

The variable names in the global scope are `num1`, `num2`, `num3` as these variables are declared outside of any functions or blocks.

The variable names local to the scope inside function `add` are `num1`, `num2` and `total`. Functions create local scope and the parameters of functions are locally scoped to the function. So the parameters `num1` and `num2` are local scope to the function `add` as is `total` as it is declared with a `let` keyword inside the function `add`. Here, the `let` keyword scopes the variable to the function.

Responses
Jessica Chang (TA)
about 16 hours ago

> The variable names in the global scope are num1, num2, num3 as these variables are declared outside of any functions or blocks.

There is one more variable in the global scope that's not mentioned. Can you give a shot at identifying it?

Revised Answer
`add` as the name of the function is also a variable in the global scope.

## Question 6 3 Points

The `timesTwo` function is successfully invoked on line 3, but attempting to invoke the `timesThree` function on line 4 raises an error. Explain why the `timesTwo` invocation is successful, but the invocation of `timesThree` is not. Be precise about why these two functions have such different behavior.

```js
let num = 1;

timesTwo(num);
timesThree(num);

function timesTwo(number) {
  console.log(number*2);
};

const timesThree = num => console.log(num*3);
```

The `timesTwo` function is successfully invoked because it was written as a function declaration. A function declarations always begin with the keyword `function`. A function written as a function declaration can be called before it is declared.

The `timesThree` invocation is unsuccessful because the function was written as an arrow function expression and an arrow function expression cannot be called before declaration.

## Question 7 4 Points

What does the following code log? Explain how you came up with your answer.

```js
let bottles = 10;

function decrementBottles(bottles) {
  bottles -= 1;
}

decrementBottles(); // undefined
console.log(bottles); // 10
```

The code logs `10`. On line 1, the global variable `bottles` is declared and initialized to `10`. On line 3, the function `decrementBottles` is declared with the parameter `bottles`. The parameter `bottles` shadows the global variable `bottles` from line 1 and makes it inaccessible within the function `decrementBottles`. On line 7, the function `decrementBottles` is called without an argument, so the implicit value passed to the parameter `bottles` is `undefined`. Furthermore, the function `decrementBottles` does not have a `return` statement, so the function's return value is `undefined`. On line 8, the `console.log` method only has access to the global variable `bottles` and logs its value which is `10`. This example demonstrate variable scope, variable shadowing and that a function called without an argument implicitly returns `undefined`.


Responses
Jessica Chang (TA)
about 16 hours ago

> a function called without an argument implicitly returns undefined.

I won't deduct here, because I feel you've touched on the core idea of this question, but this statement above isn't quite accurate - can you re-phrase?

Revised Answer
When a function is called without an argument, the parameter is initialized with the value `undefined`.

## Question 8 3 Points

Identify all of the variables, primitive values, and objects in the following code:

```js
let letters = ['a', 'b', 'c'];
let numbers = [3, 4, 5];
let num;
const double = num => num * 2;
```

The variables are `letters`, `numbers`, `num` and `double` and the parameter `num`
The primitive values are `'a'`, `'b'`, `'c'`, `3`, `4`, `5`.
The objects are  `['a', 'b', 'c']` and `[3, 4, 5]`.

Responses
Jessica Chang (TA)
about 17 hours ago

> The variables are letters, numbers, num and double

There's another variable that needs to be explicitly called out here.

> The primitive values are 'a', 'b', 'c', 3, 4, 5

There's at least one more primitive value in the code that needs to be identified.

> The objects are ['a', 'b', 'c'] and [3, 4, 5].

There's also another object that needs to be identified.

Can you give this another shot?

Revised Answer
The variables are `letters`, `numbers`, `num`, `double`, and the parameter `num`.

The primitive values are `'a'`, `'b'`, `'c'`, `3`, `4`, `5`, and `2`.

The objects are  `['a', 'b', 'c']`, `[3, 4, 5]`, and the function `double`.

## Question 9 3 Points

Examine the code below:

```js
let word = 'transform'; // returns undefined
word[0] = 'a' // returns 'a'
word; // returns 'transform'

let arr = [1, 2, 3]; // returns undefined
arr[0] = 5; // returns 5
arr; // returns [5, 2, 3]
```

We say that primitive types like the String on line 1 are immutable, and that object types like the Array on line 2 are mutable. Explain the difference between mutable and immutable types. Add some more code to the code example above in order to illustrate your explanation.

Objects are usually (but not always) mutable, meaning you can add, remove, and change their various component values. Operations on **mutable** values (arrays and objects) may or may not return a new value and may or may not mutate data.

Primitive values are **immutable**. That means their values never change: operations on immutable values always return new values.

## Question 10 3 Points

Explain why line 8 below logs `A sentence is a set of words put together with meaning.` rather than `Asentenceisasetofwordsputtogetherwithmeaning.`. What does this demonstrate about what happens on line 2?

```js
function squash(string) {
  string = string.replaceAll(' ', '');
}

let sentence = "A sentence is a set of words put together with meaning.";
squash(sentence);

console.log(sentence); // => A sentence is a set of words put together with meaning
```

Line 8 logs `A sentence is a set of words put together with meaning.` On line 1, the function `squash` is declared with the parameter `string`. On line 5, the global variable `sentence` is declared and initialized to the string `"A sentence is a set of words put together with meaning."` which is a primitive value. Strings as primitive values are immutable, so when function `squash` is called on line 6, a copy of the value of `sentence` is passed to function `squash` and the original value of `sentence` is unchanged. On line 2, the value of `sentence` is passed to the variable `string` and reassigned to the return value of `string.replaceAll(' ', '')` but the function `squash` has no `return` statement so it returns `undefined`. On line 8, the `console.log` method logs the value of `sentence` from line 5 which remains unchanged.

## Question 11 4 Points

The following code is similar to that from the previous question. What does it log to the console and why?

```js
function squash(array) {
  array[0] = array[0].replaceAll(' ', '');
}

let sentence = ["A sentence is a set of words put together with meaning."];
squash(sentence);

console.log(sentence[0]); // Asentenceisasetofwordsputtogetherwithmeaning.
```

The code logs `Asentenceisasetofwordsputtogetherwithmeaning.` This example demonstrates pass by reference of an array as an object value into a function and variables as pointers. On line 1, the function `squash` is declared with the parameter `array`. On line 5, the global variable `sentence` is declared and initialized to reference the array `["A sentence is a set of words put together with meaning."]`. On line 6, the function `squash` is called with the argument `sentence`. At this point, both the variables `sentence` and the parameter `array` point to the same array in memory. Within function `squash` the value of `array` is mutated via `array[0] = array[0].replaceAll(' ', '')` and since `array` and `sentence` point to the same object in memory, the mutation to `array` is reflected in the value pointed to by the variable `sentence`.

## Question 12 5 Points

Assume that you've written the following function that other developers are going to use:

```js
function swapEnds(arr) {
  let first = arr[0];
  let last = arr[arr.length - 1];

  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}
```

Describe this function for those other developers. Your description should avoid talking about the implementation details. It should be suitable as something that documents the purpose and use of the function, not a line-by-line description of the code. The code may change one day and you don't want to update the documentation if that happens. Be sure to discuss what kinds of arguments the function expects and what values it returns, as well as a general description of what the function is supposed to do.

Does this function have side effects?

Responses
Jessica Chang (TA)
about 17 hours ago

> This function does not have side effects.

This is incorrect. Can you explain why?

The function mutates the value of variable `arr` and mutating an array argument is a side-effect.

(It mutates the value of any object referenced by a non-local variable. Mutating an array or object argument, for instance, would be a side-effect.)

## Question 13 5 Points

In the following code, the first two lines log `false`, while the third `logs` true. Shouldn't it be the other way around? Why does the code behave the way it does?

```js
console.log([] === []);  // false
console.log([] == []);   // false
console.log([] == '');   // true
```

On line 1, the strict equality operator compares two array objects and returns `false` because the arrays point to two separate locations in memory and not to the same array. If they pointed to the same array the comparison would return `true`.

On line 2, the loose equality operator compares two arrays and returns `false` because it considers two objects equal only when they're the same object.

On line 3, the loose equality operator coerces the array `[]` to an empty string `''` and the comparison returns `true`.

Responses
Jessica Chang (TA)
about 17 hours ago

> On line 3, the loose equality operator coerces the array [] to an empty string '' and the comparison returns true.

Can you elaborate a bit further here? Why would '' == '' return true, but [] == [] return false?

Revised Answer
The comparison of `'' == ''` returns `true` because the loose equality operator is comparing two primitive values to check whether both operands are equal. On the other hand, the comparison of `[] == []` returns `false` because the loose equality operator compares two arrays to see if they are the same object, but here each array on either side of `==` resides in a different memory location.

## Question 14 3 Points

In your own words, describe, in detail, what the `Array.prototype.forEach` method does and how it is used. Be sure to describe the argument passed to forEach, how it uses that argument, and what values forEach returns. Do not copy/paste from documentation.

You may assume that the callback function only uses one argument; you don't have to talk about the optional second and third arguments. You also don't have to talk about the optional second argument for forEach.

Your Answer
The `Array.prototype.forEach` method performs simple iteration and returns undefined. The `forEach` method is called on an array, and the callback function is passed as an argument into `forEach`. `forEach` iterates over each element of the array. `forEach` does not use the return value of the callback. In the end `forEach` returns `undefined`.

Jessica Chang (TA)
about 17 hours ago

> `forEach` iterates over each element of the array. `forEach` does not use the return value of the callback.

Can you elaborate a bit further here, and explicitly explain how `forEach` and the elements of the array it is called on interact with the callback function?

Revised Answer
`forEach`, during each iteration, invokes the callback with the element's value as an argument.

## Question 15 4 Points

In your own words, describe, in detail, what the Array.prototype.filter method does and how it is used. Be sure to describe the argument passed to filter, how it uses that argument, and what values filter returns. Do not copy and paste from documentation.

You may assume that the callback function only uses one argument; you don't have to talk about the optional second and third arguments. You also don't have to talk about the optional second argument for filter.

The `Array.prototype.filter` method is called on an array. It takes a callback function as an argument and returns a new array. Each element is passed to the callback as an argument. The return value of the callback is evaluated for its truthiness by `filter` and if a truthy values is returned, the element is added to the new array.

## Question 16 4 Points

Some people don't fully understand the difference between `Array.prototype.map` and `Array.prototype.filter`, and try to use `filter` as they would `map`. However, they likely won't get the result they expected. What value gets logged by `console.log(arr)` on line #5? Explain why the code outputs that specific value. Be sure to be precise in your explanation about exactly how `Array.prototype.filter` works.

```js
let arr = [1, 2, 3].filter(function (n) {
  return n - 2;
});

console.log(arr); // [ 1, 3 ]
```

Your Answer
On line 5, the `console.log(arr)` method logs `[ 1, 3 ]`. Here, the `filter` method is called on the array `[1, 2, 3]` and executes the callback function `n - 2` on each element of the calling array. On the first iteration, the return value of the callback is `-1`. This is considered a truthy value in JavaScript, so it is added to the new array. On the second iteration, the return value is `0` which is considered a falsy value. So this element is discarded. On the third and final iteration, the return value is `1` which is a truthy value. Thus `3` is added to the new array.

Responses
Jessica Chang (TA)
about 18 hours ago

> executes the callback function n - 2 on each element of the calling array

This is a bit imprecisely worded - can you re-phrase?

> This is considered a truthy value in JavaScript, so it is added to the new array.

And to be clear here, the current element on this iteration, not the return value -1 of the callback function, is selected for the new array.

Revised Answer
On line 5, the `console.log(arr)` method logs `[ 1, 3 ]`. The `filter` method returns a new array that includes all elements from the calling array for which the callback returns a truthy value. Here, `filter` is called on the array `[1, 2, 3]`. During each iteration, it invokes the callback function, using the value of the current element as an argument. On the first iteration, the return value of the callback is `-1`. This is considered a truthy value in JavaScript, so the current element on this iteration which is `1` is added to the new array. On the second iteration, the return value is `0` which is considered a falsy value. So the element `2` in the calling array is discarded. On the third and final iteration, the return value is `1` which is a truthy value. Thus the element `3` is added to the new array.

## Question 17 5 Points

Line #3 in the following code outputs `[ 1, 2, 3 ]`. Explain why it outputs that information. Are the arrays in `arr` and `newArr` the same array? Write some code that demonstrates the truth of your claim about whether the two arrays are the same array.

```js
let arr = [ 1, 2, 3 ];
let newArr = arr.map((num) => num);
arr[0] = 5
console.log(newArr); // [ 1, 2, 3 ]

console.log(arr); // [1, 2, 3]
```

The arrays in `arr` and `newArr` are not the same array. This example illustrates variables as pointers. On line 1, the global variable `arr` is declared and initialized to reference the array `[ 1, 2, 3 ]`. On line 2, the global variable `newArr` is declared and initialized to the return value of the array `arr` transformed via the `map` method. Since `map` returns a new array, `arr` and `newArr` no longer point to the same array in memory.

```js
let arr = [1, 2, 3];
let newArr = arr.map((num) => num);
arr[0] = 5;
console.log(newArr); //  [1, 2, 3]
console.log(arr); //  [5, 2, 3]
```

On line 3 above, the expression `arr[0] = 5` mutates `arr` but since `newArr` points to a different array, it is not mutated.

## Question 18 5 Points

Examine the initial order of the values in array1 below and the order of the array, array2, returned by Array.prototype.sort.

```js
let array1 = [23, 9, 157, 1507, 4, 21];
let array2 = array1.sort();
console.log(array2); // => [ 1507, 157, 21, 23, 4, 9 ]
```

Explain why this code logs the result it does. Be sure to discuss how sort determines the resulting sequence. That is, how does sort determine which values come before other values?

Modify the above code so that it logs the results in numerical order, i.e., [4, 9, 21, 23, 157, 1507].

`Array.prototype.sort` without arguments arranges the values in the array by comparing the values of each element as strings. The resulting array contains all of the elements arranged in ascending lexicographic order based on UTF-16 codepoints. If two strings have the same value up to the length of the shorter string, `sort` positions the shorter string before the longer one.

Without arguments, `Array.prototype.sort` compares the values as strings, coercing the strings as needed. The comparisons are lexicographic; lengths only play a part when two strings match up to the length of the shorter one. In that case, sort positions the shorter value before the longer one.

## Question 19 5 Points

The following function is in an application. The function should return `1` when the named property exists in the specified object, and it should return `2` if the property does not exist. The development team has determined that there is a bug in this code.

Explain **precisely** why this code isn't functioning correctly. Update the code to show how you would fix it.

```js
function objectHasProperty(object, property) {
  return object[property] ? 1 : 2;
}

let obj = {
  something: 3,
  enabled: false,
  result: undefined,
};

objectHasProperty(obj, 'something'); // returns 1
objectHasProperty(obj, 'active');    // returns 2
```

Note that both of the invocations shown above work correctly. It's up to you to identify at least one situation that doesn't work correctly, explain why it (or they) don't work, and then fix the code.

Your Answer
The code isn't functioning correctly because it doesn't take into account that passing the falsy values false and undefined from obj into the ternary operator will always return 2 even though those values exist in the object.

Responses
Jessica Chang (TA)
about 18 hours ago

> The code isn't functioning correctly because it doesn't take into account that passing the falsy values false and undefined from obj into the ternary operator will always return 2 even though those values exist in the object.

I can see what you're trying to say here, but there's some imprecision and lack of clarity - do you mind elaborating a bit further as to why this code isn't functioning correctly?

> Update the code to show how you would fix it.

I suspect you may have run out of time here to properly fix the code, but can you adjust it accordingly?

