/* JS101 - Small Problems > Easy 3 > 6. Madlibs

Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle. */

let readlineSync = require('readline-sync');

console.log('Enter a noun:');
let noun = readlineSync.prompt();

console.log('Enter a verb:');
let verb = readlineSync.prompt();

console.log('Enter an adjective:');
let adjective = readlineSync.prompt();

console.log('Enter an adverb:');
let adverb = readlineSync.prompt();

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);

/* Discussion

In this exercise, we make use of the `readlineSync.prompt()` method to get various inputs from the user. We then construct the madlibs sentences using template strings. Using string interpolation in the templates instead of concatenation makes it more readable in the sentences. */