/* Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".

-Function input: String contains only letters, uppercase letters are unique.

Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

11:08 start
11:13 algo
11:32 ?

Problem
- input string
- output new string

Rules
- return a new string where the capital letter is followed by its lowercase equivalents in alphabetical order
- there is only one of each capital letter
- just letters

Examples
- 'beeeEBb' => 'BbbEeee'

Data Structure
- input string
- inside: array (sort in alphabetical order)
- output new string

Algorithm
- declare `findChildren` with `string` parameter
- init `array` to split string into chars by lowercase
- sort array in alphabetical order // ['b', 'b', 'b', 'e', 'e', 'e', 'e']

- init `result` string to empty string
- iterate through sorted array
  - if char at idx is not equal to char at idx - 1
    - uppercase char at idx
    - increment result with char
  - else increment result with char
- return `result`

*/

function findChildren (string) {

  let result = '';
  let array = string.toLowerCase().split('').sort();

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] !== array[idx - 1]) {
      result = result + array[idx].toUpperCase();
    } else {
      result = result + array[idx];
    }
  }

  return result;
}

// with `forEach` need to reference the `array`
function findChildren(string) {
  let result = '';
  let array = string.toLowerCase().split('').sort();

  array.forEach((letter, index, array) => {
    if (array[index] !== array[index - 1]) {
      result = result + letter.toUpperCase();
    } else {
      result = result + letter;
    }
  });

  return result;
}

console.log(findChildren('beeeEBb')); //BbbEeee
console.log(findChildren('uwwWUueEe')); //"EeeUuuWww"
