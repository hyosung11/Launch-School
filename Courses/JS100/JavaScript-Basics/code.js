// let word = 'mountain';
// console.log(word.charAt(0).toUpperCase() + word.substring(1));
// => Mountain

// function capitalize(word) {
//   return word[0].toUpperCase() + word.slice(1).toLowerCase();
// }
// console.log(capitalize('mountain'));

let dinner = ['fish', 'and', 'chips'];


// console.log(dinner[10]);

let trees = ['birch', 'pine', 'sequoia', 'palm tree'];

// console.log(trees[trees.length - 1]);
// console.log(trees.pop());
// console.log(trees[trees.length - 1]);

// console.log(Date.now()) // 1625775081676

// SyntaxError example
// let speedLimit = 60;
// let currentSpeed = 80;

// if (currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5) {
//   console.log('"People are so bad at driving cars ' +
//     'that computers don\'t have to be that good to be much better." ' +
//     '-- Marc Andreessen');
// }

// SyntaxError Fixed version
// let speedLimit = 60;
// let currentSpeed = 80;

// if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
//   console.log('"People are so bad at driving cars ' +
//     'that computers don\'t have to be that good to be much better." ' +
//     '-- Marc Andreessen');
// }

// TypeError
// let tweet = 'Woohoo! :-)';

// if (tweet.length() > 140) {
//   console.log('Tweet is too long!');
// }

// TypeError: tweet.length is not a function

// TypeError fixed
// let tweet = 'Woohoo! :-)';

// if (tweet.length > 140) {
//   console.log('Tweet is too long!');
// }

// Countdown
// for (let i = 10; i > 0; i -= 1) {
//   console.log(i);
// }

// console.log('Launch!');

// Alternative
// for (let i = 10; i >= 0; i -= 1) {
//   if (i === 0) {
//     console.log('Launch!');
//   } else {
//     console.log(i);
//   }
// }

// Triple Greeting

// Write a loop that logs greeting three times.
// let greeting = 'Aloha!';

// let greeting = 'Aloha!';

// for (let count = 0; count < 3; count += 1) {
//   console.log(greeting);
// }

// let greeting = 'Aloha!';
// let count = 1;

// while (count <= 3) {
//   console.log(greeting);
//   count += 1;
// }

// Take Two
// Write a for loop that iterates over all numbers from 1 to 100, and outputs the result of multiplying each element by 2.

// for (let num = 1; num <= 100; num += 1) {
//   console.log(num * 2);
// }

// Using the code below as a starting point, write a while loop that logs the elements of array at each index, and terminates after logging the last element of the array.

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length) {
//   console.log(array[index])
//   index += 1;
// }

// Continue
// write a for loop that loops over the elements of the array cities and logs the length of each string to the console. If the element is null, skip forward to the next iteration without logging anything to the console.

// let cities = [
//   'Istanbul',
//   'Los Angeles',
//   'Tokyo',
//   null,
//   'Vienna',
//   null,
//   'London',
//   'Beijing',
//   null,
// ];

// for (let i = 0; i < cities.length; i += 1) {
//   if (cities[i] === null) {
//     continue
//   }
//   console.log(cities[i].length);
// }

// for (let i = 0; ; i += 1) {
//   console.log('and on');
// }

// for (let i = 0; ; i += 1) {
//   console.log('and on');
//   break;
// }

// Write a while loop that logs all odd natural numbers between 1 and 40.

// let num = 1;

// method 1
// while (num < 40) {
//   console.log(num);
//   num += 2;
// }

// method 2
// let num = 1;

// while (num <= 40) {
//   if (num % 2 === 1) {
//     console.log(num);
//   }

//   num += 1;
// }

// method 3
// let num = 1;

// while (num <= 40) {
//   if (num % 2 !== 0) {
//     console.log(num);
//   }

//   num += 1;
// }

// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let i = 0; i < fish.length; i += 1) {
//   console.log(fish[i]);

//   if (fish[i] === 'Nemo') {
//     break;
//   }
// }

// let counter = 0;

// while (counter > 0) {
//   console.log('Woooot!');
//   counter -= 1;
// }

// let counter = 0;

// do {
//   console.log('Woooot!');
//   counter -= 1;
// } while (counter > 0); 
// Woooot!


// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

let randomNumber = Math.round(Math.random());

// if (randomNumber === 1) {
//   console.log('Yes!');
// } else {
//   console.log('No')
// }

// Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.

// version 1
// let randomNumber = Math.round(Math.random());

// randomNumber ? console.log('Yes!') : console.log('No');

// version 2
// let randomNumber = Math.round(Math.random());

// console.log(randomNumber ? 'Yes!' : 'No.');

// Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

// Write an if statement that logs:

// "It's a beautiful day!" if weather is assigned to the string "sunny",
// "Grab your umbrella." if weather is assigned to the string "rainy", and
// "Let's stay inside." otherwise.
// Test your code with different values for weather.

// let weather = 'sunny';

// if (weather === 'sunny') {
//   console.log("It's a beautiful day!");
// } else if (weather === 'rainy') {
//   console.log('Grab your umbrella');
// } else {
//   console.log("Let's stay inside.");
// }

// switch

// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// }

// neigh
// tweet tweet
// *cricket*

// corrected with break statements
// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//     break;
//   case 'horse':
//     console.log('neigh');
//     break;
//   case 'bird':
//     console.log('tweet tweet');
//     break;
//   default:
//     console.log('*crickets*');
// }

// Check the Weather, Part 2 using switch

// let weather = 'windy';

// switch (weather) {
//   case 'sunny':
//     console.log("It's a beautiful day!");
//     break;
//   case 'rainy':
//     console.log('Grab your umbrella');
//     break;
//   case 'windy':
//     console.log('It feels great on my face.');
//     break;
//   default:
//     console.log("Let's stay inside.");
// }

// if (false || true) {
//   console.log('Yes!');
// } else {
//   console.log('No...');
// }

let speed = 0;
let acceleration = 24;
let brakingForce = 19;

let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

console.log(isMoving); // true
```


