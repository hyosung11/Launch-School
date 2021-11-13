/* JS101 - Small Problems > Medium 2 > 8. Longest Sentence

Longest Sentence

Write a program that prints the longest sentence in a string based on the number of words. Sentences may end with periods (.), exclamation points (!), or question marks (?). You should treat any sequence of characters that are not spaces or sentence-ending characters as a word. Thus, -- should count as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output, and be sure you preserve the punctuation from the end of the sentence. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

ALGORITHM
- input string
- output string */

function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);

  let longest = sentences.reduce(
    function(longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return { text: sentence, length: length };
      } else {
        return longest;
      }
    },
    { text: '', length: 0 }
  );

  console.log(longest.text + '\n');
  console.log('The longest sentence has ' + longest.length + ' words.\n');
}

// Example:
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

/* Discussion

The chief point of interest in this solution is this statement:

let sentences = text.match(/\w.*?[.!?]/g);

Note the use of String.prototype.match. Some people try to solve this problem with String.prototype.split, but split usually loses punctuation unless you use some advanced regex features that few people understand. String.prototype.match, on the other hand, doesn't lose the punctuation. The challenge, though, is describing a regex that matches each sentence.

That said, let's go over the pattern used in the solution. The solution leverages the lazy quantifier (*?) to restrict the match to the shortest possible string: a single sentence. Given the pattern, a match:

- \w - starts with any word character
- .*? - may contain any number of characters in the middle (even zero characters)
- [.!?] - ends when the first ., !, or ? after the starting word character is reached

If you haven't used regex before, check out our Introduction to Regular Expressions book.

Further Exploration

Can you modify your solution to find the longest paragraph (you can embed newlines in your string to mark paragraphs). How about the sentence with the longest word? */