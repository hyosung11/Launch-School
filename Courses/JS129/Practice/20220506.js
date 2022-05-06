// class Vehicle {
//   constructor(year) {
//     this.year = year;
//   }
// }

// class Truck extends Vehicle {
//   constructor(year) {
//     super(year)
//     this.startEngine();
//   }

//   startEngine() {
//     console.log('Ready to go!');
//   }
// }

// let truck = new Truck(2003);
// console.log(truck.year); // 2003

let Person = class {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  communicate() {
    console.log('Communicating');
  }

  eat() {
    console.log('Eating');
  }

  sleep() {
    console.log('Sleeping');
  }
}

// let omi = new Person('Omi', 'Bidol-Lee', 10, 'female');
// console.log(omi instanceof Person);
// console.log(omi.fullName());
// omi.eat();
// omi.communicate();
// omi.sleep();

// let Doctor = class extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//     super(firstName, lastName, age, gender)
//     this.specialization = specialization;
//   }

//   diagnose() {
//     console.log('Diagnosing');
//   }
// }

// let sohee = new Doctor('Sohee', 'Bidol-Lee', 49, 'female', 'Internal Medicine');
// console.log(sohee instanceof Person);
// console.log(sohee instanceof Doctor);
// sohee.eat();
// sohee.communicate();
// sohee.sleep();
// console.log(sohee.fullName());
// sohee.diagnose();

let Student = class extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender)
    this.degree = degree;
  }

  study() {
    console.log('Studying');
  }
}

let GraduateStudent = class extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }
}

let sungOh = new GraduateStudent('SungOh', 'Bidol-Lee', 6, 'male', 'Math', 'Calculus');

console.log(sungOh instanceof Person);