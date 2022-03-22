/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 2. Create the Class

Create the Class

Create an empty class named Cat. */

// Solution
// class Cat {

// }

/* Discussion

The simplest way to create classes in JavaScript is with the class declaration which begins with the `class` keyword followed by the name of the class and open and closed curly braces. */

/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 3. Create an Instance

Create an Instance

Using the code from the previous exercise, create an instance of Cat and assign it to a variable named kitty.

Code: */

// class Cat {

// }

// let kitty = new Cat();

/* Discussion

To instantiate a new `Cat` object, we use the keyword `new` in front of the function call. This keyword turns the function call into a constructor call.

To make use of this new `Cat` object, we need to assign it to a variable. In the solution, we assign the object to a variable named `kitty`. This variable can be used to interact with the object in various ways. We'll expand on this topic in the next few exercises. */

/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 4. What are you?

What are you?

Using the code from the previous exercise, add a constructor method that logs to the console I'm a cat! when a new Cat object is initialized.

Code: */

// solution
// class Cat {
//   constructor() {
//     console.log("I'm a cat!");
//   }
// }

// let kitty = new Cat();

// Expected output:

// I'm a cat

/* Discussion

When defining a class, you usually need to define the `constructor` method.

Adding this method lets us execute certain statements when a new `Cat` object is initialized. In this case, we want to log `I'm a cat!`. We accomplish this by using `console.log()`. */

/* JS120 - Object Oriented JavaScript > OO Basics: Classes > 5. Hello, Sophie! (part 1)

Hello, Sophie! (part 1)

Using the code from the previous exercise, add a parameter to `constructor` that provides a name for the `Cat` object. Assign this parameter to a property called `name` and use it to log a greeting with the provided name. (You can remove the code that displays `I'm a cat!`.)

Code: */

// Solution
// class Cat {
//   constructor(name) {
//     this.name = name;
//     console.log(`Hello! My name is ${this.name}!`);
//   }
// }

// let kitty = new Cat('Sophie');

// Expected output: 'Hello! My name is Sophie!'

/* Discussion

The `Cat` constructor expects one parameter: `name`. When it is called with the `new` keyword, it assigns the received parameter to the `name` property of the current instance. The property `name` can be accessed anywhere within the class using the `this` keyword.

To appease the exercise requirements, we only need to reference property `name` immediately following  its initialization. We use `console.log()` to log `Hello! My name is Sophie!` to the console. In this object, `Sophie` is dynamic, which means we used the property `name` to print the value. `Sophie` could just as easily be `Oliver` if that string was passed instead of `Sophie`, like this: */

class Cat {
  constructor(name) {
    this.name = name; // => Oliver
    console.log(`Hello! My name is ${this.name}!`);
  }
}

let kitty = new Cat('Oliver');