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






console.log('-'.repeat());
