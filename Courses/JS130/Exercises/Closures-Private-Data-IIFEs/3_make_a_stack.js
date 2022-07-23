/* JS130 - JavaScript Exercises > Closures, Private Data, and IIFEs > Make a Stack

Make a Stack

A stack is a compound data type like an array. The difference between an array and a stack is that in an array you can insert and remove elements in any order you want, but a stack has a rule whereby you can only add new elements at the end and remove the last inserted element.

Create a function `newStack`, that, when called, returns a stack object with three methods: `push`, `pop`, and `printStack`. `push` takes a value and appends it to the stack. `pop` removes and returns the last element from the stack. `printStack` logs each remaining element of the stack on its own line, starting with the item that was last recently added to the stack and ending with the most recently added item.

Internally, use an array to implement the stack. Make sure that the array is not accessible from outside the methods. */

// function newStack() {
//   let stack = [];

//   return {
//     push(value) {
//       stack.push(value);
//     },

//     pop() {
//       return stack.pop();
//     },

//     printStack() {
//       stack.forEach(value => {
//         console.log(value)
//       });
//     }
//   };
// }

/* Discussion

The detail to watch out for in this exercise is keeping the array from being accessible from the outside. The solution achieves this by using the concept of closures to create the stack array that is only accessible to the returned objects of the `newStack` function. */

// function newStack() {
//   let stack = [];

//   return {
//     // stack: [], this kind of declaration will make it publicly accessible
//     push(value) {
//       stack.push(value);
//     },
//     pop() {
//       return stack.pop();
//     },
//     printStack() {
//       stack.forEach((element) => console.log(element));
//     },
//   };
// }

// Using IIFE to create stack object:

let myStack = (function newStack() {
  let stack = [];

  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((item, _) => {
        console.log(item);
      });

    },
};
})();

myStack.push('one')
myStack.push('two')
myStack.printStack() // one, two
myStack.pop()
myStack.printStack() // one
console.log(myStack.stack) // undefined

// Eamon O Callaghan
function newStack() {
  let stack = [];

  return {
    push: (ele) => stack.push(ele),
    pop: () => stack.pop(),
    printStack: () => stack.forEach((ele) => console.log(ele)),
  };
}