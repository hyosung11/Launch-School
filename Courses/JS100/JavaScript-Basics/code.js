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

console.log(trees[trees.length - 1]);
console.log(trees.pop());
console.log(trees[trees.length - 1]);