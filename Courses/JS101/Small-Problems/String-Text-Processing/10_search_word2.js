/* JS101 - Small Problems > String and Text Processing >Search Word (Part 2)

Search Word (Part 2)

The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

For this exercise, write a function that takes a word and some text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks (`'**'`) on each side and change every letter of the word to uppercase (e.g., `'**HIGHLIGHTEDWORD**'`). */

// Example:
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

// function searchWord(word, text) {
//   let regex = new RegExp(`\\b${word}\\b`, 'gi');
//   return text.replace(regex, `**${word.toUpperCase()}**`);
// }

function searchWord(word, text) {
  let ucWord = word.toUpperCase();
  let wordsInText = text.split(' ');
  let highlightedText = [];

  for (let idx = 0; idx < wordsInText.length; idx += 1) {
    let currentWord = wordsInText[idx];
    if (currentWord.toUpperCase() === ucWord) {
      currentWord = `**${word.toUpperCase()}**`;
    }

    highlightedText.push(currentWord);
  }

  return highlightedText.join(' ');
}

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? blasedbla"

/* Discussion

Solution 1 breaks the text into words, then iterates through those words looking for the ones that match the desired word. When there is a match, we highlight the word as desired, and push it to the `highlightedText` array. If there is no match, we add the current word to `highlightedText` without any changes. Once we've processed all the words, we simply join them together to produce the modified text.

The second solution uses regular expressions and the `String.prototype.replace` method instead to find and replace all of the words. Note that we need to match word boundaries, so we want to use the `\b` anchor. However, since we're using a string to describe the regex, we have to escape the `\` character with an extra `\`.

If you're not familiar with regular expressions yet, that's fine. We'll talk about them in a later course. */