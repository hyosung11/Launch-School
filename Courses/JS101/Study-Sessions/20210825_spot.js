/* Marc Hermann (JS230)

Intros
- Marc, Berlin, March 2020, JS track
- Alex, started March 2021
- H
- Jeff, Long Island, JS100 in April, now in JS101 Lesson 3
- Ben Semel, Chicago (from LA), taking JS109 Assessment tomorrow
*/

// What does this log and why?
// let words = [["hunter", "spear"], ["gatherer", "sack"]];

// function pluralize(array) {
//     return array.map(words => {
//         words[0] += "s";
//         words[1] += "s";
//         return words;
//     });
// }

// console.log(pluralize(words)); // => [ [ 'hunters', 'spears' ], [ 'gatherers', 'sacks' ] ]
// console.log(words); // => [ [ 'hunters', 'spears' ], [ 'gatherers', 'sacks' ] ]

/*

On line 12:
  -the variable Words is declared
  -the value of Words references a nested array of strings

On line 14:
  -


let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
numbers.map(() => 10);  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]
*/

/* Discussion
pass-by-reference
point to the same sub-arrays
variable shadowing
pluralize takes a variable called array

Marc's Tip
- one-pager of explanations prepared in advance
- copy and paste the concepts into the answer
- answer the questions in order because they may build on each other
- copy all the questions into markdown and answer the questions and paste back into the editor
the variable words is initialized with a reference to a nested array

*/

// What does this log and why?
const greeting = "Hello!";
function change(greeting) {
    greeting = "Hi!";
    return greeting;
}

console.log(change()); // => 'Hi!'
console.log(greeting); // => 'Hello!'

/* Discussion
variable shadowing
function without passing an argument - parameters automatically assigned to `undefined`

scope
shadowing
pass-by-reference */

// What is going on here?

const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

console.log(myFunction());

// console.log(a); // => { firstName: 'Jane', lastName: 'Doe' }

/* Discussion
variables as pointers

scope - global

*/