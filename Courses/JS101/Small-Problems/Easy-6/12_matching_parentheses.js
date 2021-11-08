/* JS101 - Small Problems > Easy 6 > 12. Matching Parentheses?

Matching Parentheses?

Write a function that takes a string as an argument and returns `true` if all parentheses in the string are properly balanced, `false` otherwise. To be properly balanced, parentheses must occur in matching `'('` and `')'` pairs.

- input: string
- output: boolean

ALGORITHM
- initialize `parens` to 0
- loop through string
  - check for ( at index and add 1
  - check for ) at index and subtract 1
- if `parens` < 0 return false
- return parens === 0 */

function isBalanced(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

// Examples:
console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);

// The tests above should log `true`.
// Note that balanced pairs must each start with a `(`, not a `)`.

/* Discussion

This is one problem that seems very difficult, but is actually quite easy to solve. A string is balanced if for each left parentheses we have a matching right parentheses.

We can keep track of this by keeping a tally of the total parentheses count. Left parentheses are +1 and right parentheses are -1. If our string is balanced, then the total, `parens` will always be zero after parsing `string`.

Notice how we have `if (parens < 0) return false`;. This is used to account for cases where a right parentheses occurs before a left parentheses, and that right parentheses doesn't have a matching left parentheses.

Here is an example: `isBalanced(')Hey!(')`. If we should ever have a negative value for `parens`, then we know that our left and right parentheses are reversed, and that this isn't a balanced string.

Further Exploration

There are a few other characters that should be matching as well. Square brackets and curly brackets normally come in pairs. Quotation marks(single and double) also typically come in pairs and should be balanced. Can you expand this function to take into account those characters? */