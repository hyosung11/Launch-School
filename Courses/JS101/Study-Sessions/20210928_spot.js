/* JS101/210 Study Session with Iuliu Pop

Introductions
- Iuliu Pop, based in Montreal, born in Romania, 10 day silent meditation retreats, planned to become a monk in Myanmar
- H
- Adhitiani, originally from Indonesia, moved to Hungary ten years ago with her husband
- Marcos, NYC, Ruby Track in JS210 now, new SPOT moderator
- Michael, Santa Cruz, JS101 Lesson 5, graduated spring 2021
- Elaine Vuong, started programming in October 2020, former accountant at Deloitte, focus on creation, mastery and smart people to make impactful change
- Lucas Bonner, Jackson, MI, started LS during pandemic
- Ainaa, Malaysian living in Japan for 10 years, went to coding bootcamp, awkward coding interviews, worked as a project manager, likes system design

variables as pointers
pass by reference and pass by value

pets references this array
the value the variable references get
local to the function body
assigned to the same object in memory

Variables are Pointers
*/

// let pets = ['cat', 'dog', 'goldfish'];

// function getPets(arr) {
//   arr =[];
//   console.log(arr);
// }

// console.log(getPets(pets)); // => undefined because no explicit return statement in the `getPets` function

// console.log(pets);

/*
pets -> ['cat', 'dog', 'goldfish'] <- arr
*/

// let pets = ['cat', 'dog', 'goldfish'];

// function getPets(arr) {
//   arr.pop(); // the return value of this call is 'goldfish' but we don't do anything with it because no `return` statement
// }

// console.log(getPets(pets)); // undefined
// console.log(pets);

// let pets = ['cat', 'dog', 'goldfish'];

// function getPets(arr) {
//   return arr.pop();
// }

// console.log(getPets(pets)); // goldfish

// console.log(pets); // => [ 'cat', 'dog' ]

// Adhitiani
// function say(word) {
//   console.log(word)
// }

// say(word); // ReferenceError: word is not defined

//
// function say(word) {
//   console.log(word);
// }

// say(); // undefined

/*
primitive -> value

object -> { property: value }
*/

let turtle = {
  name: 'Cutie',
  hide: function() {
    console.log('Turtle shell escape!')
  }
}

// Set all the values in the turtle object to the number of 10
let turtleKeys = Object.keys(turtle); // => return an array of the keys within the turtle object ['name', 'hide']

turtleKeys.forEach((key) => {
  turtle[key] = 10;
});

// for ... of
// for ... in

for (let prop in turtle) {
  turtle[prop] = 10;
}

console.log(turtle);