/* JS101 - Small Problems > Easy 6 > Reverse It (Part 1)

Reverse It (Part 1)

Write a function that takes a string argument and returns a new string containing the words from the string argument in reverse order. */

function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

// Examples:
console.log(reverseSentence('')); // ""
console.log(reverseSentence('Hello World')); // "World Hello"
console.log(reverseSentence('Reverse these words')); // "words these Reverse"

/* Discussion

The solution uses one `String` method and two `Array` methods: `String.prototype.split`, `Array.prototype.reverse`, and `Array.prototype.join`. The `split` method converts the `string` argument into an array of words. The `reverse` method returns the words in reverse order. Finally, the `join` method joins the words back together into a space separated string, which is returned by the function.

For this exercise, the main thing to be careful of is making sure that the separator argument passed to `split` and `join` is a space, not an empty string; otherwise the `string` would be split into an array of characters instead of words, and the array would be joined together without any spaces. */