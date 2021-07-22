/* JS101 - Small Problems > Easy 3 > 2. Bannerizer

Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.

ALGORITHM
declare a function that takes a string as an argument
log '+' followed by '-' 2more times than the length of the string, followed by '+'
log '|' followed by ' ' 2more times than the length of the string, followed by '+'
log '|' followed by ' ', followed by the string, followed by ' ', followed by '+'
log '|' followed by ' ' 2more times than the length of the string, followed by '+'
log '+' followed by '-' 2more times than the length of the string, followed by '+'

*/

function logInBox(string) {
  console.log('+' + '-'.repeat(string.length + 2) + '+');
  console.log('|' + ' '.repeat(string.length + 2) + '|');
  console.log('|' + ' ' + string + ' ' + '|');
  console.log('|' + ' '.repeat(string.length + 2) + '|');
  console.log('+' + '-'.repeat(string.length + 2) + '+');
}

// Examples:
logInBox('To boldly go where no one has gone before.');

// will log on the console:

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// You may assume that the output will always fit in your browser window.

/*
Discussion
This is a fairly straight forward solution To simplify matters, we start out by setting horizontalRule and emptyLine to appropriate values for the top and bottom 2 lines of the box. The expression "-".repeat(message.length + 2) simply creates a string of message.size + 2 hyphens; combined with the + at the beginning and end of the string, this is just wide enough to draw the horizontal lines while leaving room for one blank on either side of the message.

Further Exploration
Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted.

For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.
*/