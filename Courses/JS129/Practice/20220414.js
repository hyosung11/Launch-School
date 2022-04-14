// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   myName() {
//     return this.name;
//   }
//   myAge() {
//     return this.age;
//   }
// }

// class Person extends Human {
//   constructor(name, age) {
//     super(name, age);
//   }

//   toString() {
//     return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
//   }
// }

// let will = new Person('William', 28);
// // will.name = 'William';
// // will.age = 28;
// console.log(will.toString()); // => My name is William and I'm 28 years old.

let Person = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}.`);
  }
};

let Student = class extends Person {
  constructor(name, age, semester) {
    super(name, age);
    this.semester = semester;
  }

  enrollInCourse(courseNumber) {
    console.log(`${this.name} is ${this.age} and has enrolled in course ${courseNumber} for the ${this.semester} semester.`);
  }
};

let student = new Student('Kim', 22, 'Fall');
student.sayName(); // logs 'My name is Kim.'
student.enrollInCourse('JS120'); // => 'Kim has enrolled in course JS120.'