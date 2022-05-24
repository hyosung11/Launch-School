// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {
//       console.log(`Solving`);
//     }
//   }
// }

// function createHumanoid(intelligence, model) {
//   let newHumanoid = createRobot(intelligence, model);
//   newHumanoid.walk = function() {
//     console.log(`Walking`);
//   }

//   newHumanoid.talk = function() {
//     console.log(`Talking`);
//   }

//   return newHumanoid;
// }

// let humanoid = createHumanoid('high', 'Ray');
// console.log(humanoid.model);
// humanoid.solve();
// humanoid.talk();
// console.log(Object.getPrototypeOf(humanoid));
// console.log(humanoid instanceof createRobot);

// function createToy(color, model) {
//   return {
//     color,
//     model,

//     move() {},
//   };
// }

// function createCar(color, model) {
//   let newCar = createToy(color, model);
//   newCar.drive = function () {
//     console.log(`Driving`);
//   };
//   newCar.fly = function () {
//     console.log(`Flying`);
//   };
//   return newCar;
// }

// let car = createCar('Black', 'Bone Breaker');
// car.drive();

function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {}
  }
}

const walk = {
  walk() {
    console.log('Walking');
  }
}

const talk = {
  talk() {
    console.log('Talking');
  }
}

function createHumanoid(intelligence, model) {
  let newHumanoid = createRobot(intelligence, model);
  Object.assign(newHumanoid, walk, talk);
  return newHumanoid;
}

let humanoid = createHumanoid('super', 'Michael');
humanoid.talk();

function createHuman(name, age) {
  let newHuman = {
    name,
    age,
  }
  Object.assign(newHuman, walk, talk);
  return newHuman;
}

let human = createHuman('Oliver', 49);
console.log(human.name); // Oliver
human.talk(); // Talking