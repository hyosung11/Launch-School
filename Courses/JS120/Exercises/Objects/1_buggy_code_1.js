/* JS120 - Object Oriented JavaScript > Objects > Buggy Code 1

Buggy Code 1

The code below is expected to output the following when run: */

// > let helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning'); // ReferenceError: morning is not defined
// Good Morning Victor

/* However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results? */

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function (timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning'); // Good Morning Victor
helloVictor.name = 'Vic';
helloVictor.greet('afternoon'); // Good Afternoon Vic

/* Solution

The problem is that this code didn't use the `this` keyword to access the properties of the object returned by the `createGreeter` function.

Bob Rodes

To take the concept of closures a little further, this is yet another solution: 

*/

// function createGreeter(name) {
//   let morning = 'Good Morning';
//   let afternoon = 'Good Afternoon';
//   let evening = 'Good Evening';

//   return {
//     greet: function (timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

/* One way of describing a closure is that whatever an object can see when it is created, it can see for its lifetime, no matter where it goes. The object runs about the application wrapped in the context in which it's created, if you will. So the three variables morning, afternoon and evening can be seen by the timeOfDay method no matter where it gets called from. The name parameter is also part of the closure, since the returned object can see it.

It isn't possible to directly change the greetings from outside the object in this version, because the object hasn't exposed them as properties, the way it has in the given solution. It is possible to allow consumers to change them, though, by exposing methods that change them. For example, you could add this method to the returned object: */

// function createGreeter(name) {
//   // etc.

//   return {
//     greet: function (timeOfDay) {
//       // etc.
//     },

//     changeGreeting(which, newMessage) {
//       switch (which) {
//         case 'morning':
//           morning = newMessage;
//           break;
//         case 'afternoon':
//           afternoon = newMessage;
//           break;
//         case 'evening':
//           evening = newMessage;
//       }
//     },
//   };
// }

/* (By the way, changeGreeting(which, newMessage) is shorthand for changeGreeting: function(which, newMessage).) */

/* And then: */

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning'); // Good Morning Victor
// helloVictor.changeGreeting('morning', 'There you are! Good Morning');
// helloVictor.greet('morning'); // There you are! Good Morning Victor

/* You can do the same with the name argument.

This is one way to have control over what properties can be set to; you can use the method to set conditions on what values are allowed. (Passwords requiring eight or more characters, for example.) If you just expose them as properties, consumers can set them to anything they like. */

/* Andy Pratt

The reason that `name` works by itself is because the value of `name` is hard-coded into the `greet()` method by the function. Any changes to `helloVictor.name` after the object is created would not be reflected in `helloVictor.greet()` as a result.

Jason Aricheta

Nice one! I didnt' think about its implications when wanting to then change the `name` property and the effect it has on not supplying `this` in the further exploration!

Michael Singhurse

Further Exploration:

The alternative solution, which uses `name` rather than `this.name`, demonstrates the use of closure, which is a topic introduced in JS130. (I only know this because I'm in JS130 now, and I remembered that I couldn't figure out why this problem worked at the time.)

This solution would pose a problem if you ever wanted to change the `name` property on the object after creating it. For instance, say Victor wanted to go by his nickname, Vic. The function would still log his name as Victor. */

// let helloVictor = createGreeter('Victor');
// helloVictor.name = "Vic";
// helloVictor.greet('morning'); // "Good Morning Victor"

