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

let counter = 0;

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0); 
// Woooot!