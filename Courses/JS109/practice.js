let person = {
  // line 1
  name: 'Jane',
  age: 24, // line 3
}; // line 4

function changeName(name) {
  // line 6
  person[name] = name;
  console.log(person); // line 8
  return person;
} // line 10

changeName('Jessie');
