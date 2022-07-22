// function Child(age) {
//   this.age = age;
// }

// Child.prototype.setAge = function (newAge) {
//   age = newAge; // line 6
// };

// let leigh = new Child(5);
// leigh.setAge(6);
// console.log(leigh.age); // 5; expected 6

// 'use strict';

// function Child(age) {
//   this.age = age;
// }

// Child.prototype.setAge = function (newAge) {
//   age = newAge; // ReferenceError: age is not defined
// };

// let leigh = new Child(5);
// leigh.setAge(6);
// console.log(leigh.age);

// "use strict";

// console.log(1234567);   // 1234567
// console.log(0);         // This is okay
// console.log(0.123);     // So is this
// console.log(-0.123);    // So is this
// console.log(01234567);  // SyntaxError: Octal literals are not allowed in strict mode.
// console.log(089);       // SyntaxError: Numbers can't begin with 0
// console.log(01.23);     // SyntaxError: Numbers can't begin with 0
// console.log(-01234567); // SyntaxError: Octal literals are not allowed in strict mode.
// console.log(-089);      // SyntaxError: Numbers can't begin with 0
// console.log(-01.23);    // SyntaxError: Numbers can't begin with 0

// The following code runs in sloppy mode:
// SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
// RANKS = [
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   'Jack',
//   'Queen',
//   'King',
//   'Ace',
// ];

// function createDeck() {
//   allCards = () => {
//     return this.SUITS.reduce((deck, suit) => {
//       this.RANKS.forEach((rank) => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (counter = 0; counter < 0400; counter += 1) {
//     randomIndex1 = randomCardIndex();
//     randomIndex2 = randomCardIndex();
//     tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * this.deck.length);
//   }
// }

// console.log(createDeck());
// [
//   'Ace of Clubs',
//   'King of Hearts',
//   'Jack of Hearts',
//   'Jack of Clubs',
//   '5 of Clubs',
//   '4 of Hearts',
//   'Queen of Clubs',
//   '5 of Spades',
//   '4 of Clubs',
//   '10 of Clubs',
//   '7 of Diamonds',
//   '3 of Clubs',
//   '6 of Diamonds',
//   'Ace of Hearts',
//   '7 of Hearts',
//   'Queen of Hearts',
//   '8 of Hearts',
//   '8 of Diamonds',
//   '2 of Hearts',
//   'Queen of Diamonds',
//   '2 of Diamonds',
//   '3 of Spades',
//   'King of Clubs',
//   'Ace of Spades',
//   '3 of Hearts',
//   '8 of Clubs',
//   '6 of Clubs',
//   'Jack of Diamonds',
//   'Queen of Spades',
//   '2 of Clubs',
//   '6 of Spades',
//   'King of Spades',
//   '10 of Diamonds',
//   '4 of Diamonds',
//   '4 of Spades',
//   '3 of Diamonds',
//   '9 of Spades',
//   '9 of Hearts',
//   'Jack of Spades',
//   '8 of Spades',
//   '5 of Hearts',
//   '7 of Clubs',
//   '9 of Clubs',
//   'King of Diamonds',
//   '10 of Hearts',
//   '10 of Spades',
//   'Ace of Diamonds',
//   '7 of Spades',
//   '5 of Diamonds',
//   '2 of Spades',
//   '6 of Hearts',
//   '9 of Diamonds',
// ];

// Rewrite the code to run in strict mode:

// 'use strict';

// const SUITS = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
// const RANKS = [
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   '10',
//   'Jack',
//   'Queen',
//   'King',
//   'Ace',
// ];

// function createDeck() {
//   const allCards = () => {
//     return SUITS.reduce((deck, suit) => {
//       RANKS.forEach((rank) => deck.push(`${rank} of ${suit}`));
//       return deck;
//     }, []);
//   };

//   let deck = allCards();
//   shuffle(deck);

//   return deck;
// }

// function shuffle(deck) {
//   for (let counter = 0; counter < 256; counter += 1) {
//     let randomIndex1 = randomCardIndex();
//     let randomIndex2 = randomCardIndex();
//     let tempCard = deck[randomIndex1];
//     deck[randomIndex1] = deck[randomIndex2];
//     deck[randomIndex2] = tempCard;
//   }

//   function randomCardIndex() {
//     return Math.floor(Math.random() * deck.length);
//   }
// }

// console.log(createDeck());

function test() {
  console.log("Sometimes, syntax isn't intuitive!");
}();