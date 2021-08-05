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

let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

// console.log(student.courses);
console.log(student['courses']);
console.log(student.locker); // undefined