/* Format a string of names like 'Bart, Lisa & Maggie' - 6 kyu

Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

PROBLEM
- input array objects containing names
- output: string of names with an & between the second to last and last name

Rules
- return a string of names separated by commas with the second to last and last name in the string separated by an ampersand
- all objects are pre-validated and will only contain only A-z, a-z, '-' and '.'
- does return order matter?
- empty array returns empty string

EXAMPLES
- list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie' => 'Bart' then a comma, then 'Lisa' then & then 'Maggie' as one string

DATA STRUCTURE
- input an array of objects of names
- intermediary: array
- output: string

ALGORITHM
- input an array of objects that contain names
- if array length is 0, return an empty string
- initialize `names` to empty array
- iterate over the array
  - initialize `object` to array element at the idx
  - append the value from each object's value for the key `name' to `names` array
- if `names` length is 1, return names at idx 0
- if `names` length is 2, join `names` with &
- if `names` length is more than 2, slice `names` at 0 to end of names (exclusive), join with a ',' concatenate to '&' concatenate with `names` at end of the array

*/
// function list(array) {
//   if (array.length === 0) return '';
//   let names = [];

//   array.forEach(object => names.push(object.name));

//   if (names.length === 1) return names[0];
//   if (names.length === 2) return names.join(' & ');
//   return `${names.slice(0, names.length - 1).join(', ')} & ${names[names.length - 1]}`

// }

function list(array) {
  if (array.length === 0) return '';
  let names = [];

  array.forEach((object) => names.push(object.name));

  if (names.length === 1) return names[0];
  if (names.length === 2) return names.join(' & ');
  return `${names.slice(0, -1).join(', ')} & ${names[names.length - 1]}`;
}

console.log(list([]));
// returns ''

console.log(list([ {name: 'Bart'} ]));
// returns 'Bart'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'} ]));
// returns 'Bart & Lisa'

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));
// returns 'Bart, Lisa & Maggie'





