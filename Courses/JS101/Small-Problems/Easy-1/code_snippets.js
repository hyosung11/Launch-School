// use brackets for flow control
// if (x === 3);
//   console.log('x is 3');
//   console.log('x is an odd number');
// ReferenceError: x is not defined

// from inside a function we can reassign
// the global variable
let greetingMessage = 'Good Morning!';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage("Let's eat breakfast");
greetPeople();