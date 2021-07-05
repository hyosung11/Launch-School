// Global Variable Example

// let greetingMessage = "Good Morning!";
// console.log(greetingMessage); // => Good Morning!

// Let's change our program slightly by writing a function that uses greetingMessage:

// let greetingMessage = "Good Morning!";

// function greetPeople() {
//   console.log(greetingMessage);
// }

// greetPeople();

// This program produces the same output as before. However, here we use greetingMessage from within the function. We can do that since greetingMessage is a global variable, which means we can use it anywhere. We can even reassign global variables from inside a function.

// let greetingMessage = "Good Morning!";

// function greetPeople() {
//   console.log(greetingMessage);
// }

// function changeGreetingMessage(newMessage) {
//   greetingMessage = newMessage;
// }

// changeGreetingMessage("Good Evening");
// greetPeople(); // => 'Good Evening'

// We've added a changeGreetingMessage function to our program that reassigns greetingMessage to a new string supplied as an argument. Line 11 invokes the function, passing in the 'Good Evening' string, which becomes the new value for the global greetingMessage.

// function greetPeople() {
//   let greetingMessage = "Good Morning!";
//   console.log(greetingMessage);
// }

// greetPeople();
// console.log(greetingMessage); // ReferenceError: greetingMessage is not defined

// This discussion raises a question: how can we ask greetPeople to output a different greeting message if we've hard-coded our greeting message on line 2? The answer is function arguments, of course:

// function greetPeople(greetingMessage) {
//   console.log(greetingMessage);
// }

// greetPeople("Good Morning!");

// The greetingMessage parameter acts like a local variable. It is, in fact, a local variable. The chief difference is that we initialize it from the argument passed to the function. Parameters have local scope within a function.

let name = "Pete Hanson";
console.log(name.toUpperCase()); // => PETE HANSON
console.log(name);               // => Pete Hanson