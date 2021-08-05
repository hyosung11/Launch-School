/* JS100 - JavaScript Basics > Objects > 3.Add a Property

Add a Property

Below is a simple object representing our dog, Fido. On lines 8 and 9, write code to add properties 'age' and 'favorite food' to the fido object.
*/

let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

// Add property 'age'.
// Add property 'favorite food'.
fido['age'] = 3;
fido['favorite food'] = 'steak';

console.log(fido);

// {
//   name: 'Fido',
//   species: 'Labrador Retriever',
//   color: 'brown',
//   weight: 16,
//   age: 3,
//   'favorite food': 'steak'
// }