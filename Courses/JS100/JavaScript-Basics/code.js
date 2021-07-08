// let word = 'mountain';
// console.log(word.charAt(0).toUpperCase() + word.substring(1));
// => Mountain

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
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
let tweet = 'Woohoo! :-)';

if (tweet.length > 140) {
  console.log('Tweet is too long!');
}