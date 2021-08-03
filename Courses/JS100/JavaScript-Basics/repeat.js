/* JS100 - JavaScript Basics > Strings > 3. Repeat

Repeat

Implement a function repeat that repeats an input string a given number of times, as shown in the example below; without using the pre-defined string method String.prototype.repeat().
*/

function repeat(number, string) {
  let repetitions = ''

  while (number > 0) {
    repetitions += string;
    number -= 1;
  }
  return repetitions;
}

console.log(repeat(5, 'happy as fuck! ')); // fuck! fuck! fuck! fuck!