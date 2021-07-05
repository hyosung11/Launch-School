// console.log("hello");
// console.log("hi");
// console.log("how do you do");
// console.log("Quite all right");

// Update say.js with this code:

// function say(words) {
//   console.log(words);
// }

// say("hello");
// say("hi");
// say("how are you");
// say("I'm fine");

// We've extracted the logic to display text in a way that makes our program more flexible. If we later need to change how we show some text, we can make the change in one place: the say function. We don't have to change any other code to get the updated behavior.

// When we call the say function, we must provide a value, an argument, for the words parameter. For instance, on line #12 we pass the value "hello" to the function, which it uses to initialize words. The function can use the value in any way it needs to. Note that the parameter's scope is the function definition; you can't use it outside of say.

// function add(left, right) { // left & right are parameters here
//   let sum = left + right;   // left & right are arguments here
//   return sum;
// }

// let sum = add(3, 6); // 3 and 6 are arguments
// console.log(sum);

// As mentioned earlier, one benefit that functions give us is the ability to make changes in one location. Suppose we want to add a ! to the end of every string we send to say. All we have to do is change one line of code no matter how often we call say:

// function say(words) {
//   console.log(words + "!");
// }

// say("hello"); // => hello!
// say("hi"); // => hi!
// say("how are you"); // => how are you!
// say("I'm fine"); // => I'm fine!

function add(a, b) {
  return a + b;
}

// add(2, 3); // returns 5

let twoAndThree = add(2, 3);
console.log(twoAndThree); // => 5