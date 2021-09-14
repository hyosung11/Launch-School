/* SPOT Study Session with Mark Hermann

Introductions
- Marc Hermann
- HyoSung
- Ainaa Azman, JS211, preparing for assessment
- Emma Story, JS109 preparing for written assessment, been away for a week
- Marcos Av, came from Ruby track

Study Guide
- Marc reordered the study guide
- Wrote out the concepts in his own words
- every concept was in his study guide in a markdown document
- copy and paste from the study guide
- explain code
- answer the questions in the order presented
*/

// What does this log to the console and why?
// const a = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// function myFunction() {
//   a.firstName = 'Jane';
// }

// myFunction();

// console.log(a);

/* Discussion
- can run the code to see what happens?
- no explicit return
- const `a`
the object is mutable
a is not the object it's just a reference to the object
*/

// How many scopes are in the code below?
// What is the return value of the function? Why?

// function printSomething(string) {
//   let printString = string => console.log('=> ' + string);
//   let length = i => i.length;
//   for (let i = 0; i < 3; i++) {
//     console.log(printString);
//   }
//   if (string.length > 5) {
//     printString(`Wow, this is a long string. It consists of ${length(string)} characters.`);
//   }
// }

// console.log(printSomething('longWord'));

/*
Starting in the global scope
*/

// How many scopes are in the code below?
// What is the return value of the function? Why?
// does this count as a scope

// 1 global

// function printSomething(string) {  // 2 function

//   let printString = string => console.log('=> ' + string); // 6
//   let length = i => i.length; // 3
//   for (let i = 0; i < 3; i++) { // 4 block
//     console.log(printString);
//   }
//   if (string.length > 5) { // 5 block
//     printString(`Wow, this is a long string. It consists of ${length(string)} characters.`);
//   }
// }

// printSomething('longWord');

/*
Variable shadowing
Scope
pass by reference
pass by value
primitive and non-primitive values
falsiness vs truthiness
falsy vs truthy
true and false
*/

// What gets logged and why?
let words = [
  ['hunter', 'spear'],
  ['gatherer', 'sack'],
];

function pluralize(array) {
  return array.map((words) => {
    words[0] += 's';
    words[1] += 's';
    return words;
  });
}

console.log(pluralize(words));
console.log(words);

/*
declare a variable `words` and assign it to nested array
line 13 calling the function `pluralize` and passing the argument `words`

word still points at the same array
only the subarrays have changed
map always returns a new array

the map method is called on the array
takes a callback function as its argument
for the respective elements of its calling array
the returned array has the same length as the calling array

pass by reference vs pass by values
return values
variable shadowing - if variable names in multiple places check for variable shadowing
*/