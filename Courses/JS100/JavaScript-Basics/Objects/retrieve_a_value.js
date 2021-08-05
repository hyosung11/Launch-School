/* JS100 - JavaScript Basics > Objects > 1. Retrieve a Value (Part 1)

Retrieve a Value (Part 1)

Write the code necessary to retrieve the value of the courses property of our student object.

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

*/

// let student = {
//   name: 'Carmen',
//   age: 14,
//   grade: 10,
//   courses: ['biology', 'algebra', 'composition', 'ceramics'],
//   gpa: 3.75,
// };

// // console.log(student.courses);
// console.log(student['courses']);
// console.log(student.locker); // undefined

/* JS100 - JavaScript Basics > Objects > 2. Retrieve a Value (Part 2)

Retrieve a Value (Part 2)

Given the below object jane, write code that retrieves the country in which Jane is located.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

*/

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus',
  },
  occupation: 'engineer',
};

console.log(jane.location.country); // Denmark
console.log(jane['location']['country']); // Denmark
