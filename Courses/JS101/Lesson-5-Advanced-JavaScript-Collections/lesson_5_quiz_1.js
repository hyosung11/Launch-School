/* =======
Question 2
Given the following code, select the code snippets that return the value for the object property key three. */

// const ARR = [
//   { one: '1', two: 2 },
//   [{ four: 5, three: 6 }, 'three'],
//   'three',
//   { 2: 'two', 3: 'three' },
// ];

// console.log(ARR[1][0]['three']);
// console.log(ARR[1][0].three);

/* =======
Question 3

Given the following nested data structure, and without running the code, select all of the code snippets that will change the string 'Apple Juice' to 'Orange Juice'. */

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false },
    ],
  },
];

// console.log(todoLists[0].todos[2] = 'Orange Juice');

// // console.log(todoLists.todos[2]['name'] = 'Orange Juice');

// console.log(todoLists[0]['todos'][2]['name'] = 'Orange Juice');

// console.log(todoLists[0]['todos'][2].name = 'Orange Juice');

function evenValues(array) {
  let evens = [];

  array.forEach((value) => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));