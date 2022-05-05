function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype = {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  communicate() {
    console.log('Communicating');
  },

  eat() {
    console.log('Eating');
  },

  sleep() {
    console.log('Sleeping');
  },
}

function Doctor(firstName, lastName, age, gender, specialization) {
  // Use `Function.prototype.call` to have the subclass `Doctor` inherit properties from the `Person` parent class
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

// Use `Function.prototype = Object.create(obj)` to inherit methods from the parent class.
Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}
// Use `Function.prototype.constructor` to manually reset the property to point back to the appropriate constructor
Doctor.prototype.constructor = Doctor;

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
  console.log('Studying');
}

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.research = function() {
  console.log('Researching');
}
GraduateStudent.prototype.constructor = GraduateStudent;

// let person = new Person('foo', 'bar', 21, 'male');
// console.log(person instanceof Person);
// person.eat();
// person.communicate();
// person.sleep();
// console.log(person.fullName());

// let doctor = new Doctor('Sohee', 'Bidol-Lee', 49, 'female', 'Internal Medicine');
// console.log(doctor.specialization);
// console.log(doctor instanceof Person);     // logs true
// console.log(doctor instanceof Doctor);     // logs true
// doctor.eat();                              // logs 'Eating'
// doctor.communicate();                      // logs 'Communicating'
// doctor.sleep();                            // logs 'Sleeping'
// console.log(doctor.fullName());            // logs 'foo bar'
// doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('Omi', 'Bidol-Lee', 10, 'female', 'BS Industrial Engineering', 'MS Industrial Engineering');

console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();
graduateStudent.communicate();
graduateStudent.sleep();
console.log(graduateStudent.fullName());
graduateStudent.study();
