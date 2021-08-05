/* JS100 - JavaScript Basics > Functions 2 > 7. Arrow Functions (Part 1)

Arrow Functions (Part 1)

Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.

*/

// const template = 'I VERB NOUN.';

// let sentence = (verb, noun) => template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);

// console.log(sentence('like', 'birds')); // logs: I like birds.
// console.log(sentence('eat', 'algorithms'));

// ================================================================

/* JS100 - JavaScript Basics > Functions 2 > Arrow Functions (Part 2)

Arrow Functions (Part 2)

The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = function () {
  return {
    level: 1,
    score: 0
  }
};

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

*/

// version 1
// let initGame = () => {
//   return {
//     level: 1,
//     score: 0,
//   };
// };

// 2 LS version
// let initGame = () => ({
//   level: 1,
//   score: 0,
// });

// 3
// let initGame = () => {
//   level: 1,
//   score: 0
// };
// SyntaxError: Unexpected token ':'

// 4
// let initGame = () => { level: 1, score: 0 };
// SyntaxError: Unexpected token ':'

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);