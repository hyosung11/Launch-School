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

// function createRobot(intelligence, model) {
//   return {
//     intelligence,
//     model,

//     solve() {}
//   }
// }

// const walk = {
//   walk() {
//     console.log('Walking');
//   }
// }

// const talk = {
//   talk() {
//     console.log('Talking');
//   }
// }

// function createHumanoid(intelligence, model) {
//   let newHumanoid = createRobot(intelligence, model);
//   Object.assign(newHumanoid, walk, talk);
//   return newHumanoid;
// }

// let humanoid = createHumanoid('super', 'Michael');
// humanoid.talk();

// function createHuman(name, age) {
//   let newHuman = {
//     name,
//     age,
//   }
//   Object.assign(newHuman, walk, talk);
//   return newHuman;
// }

// let human = createHuman('Oliver', 49);
// console.log(human.name); // Oliver
// human.talk(); // Talking

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }

  rollDice() {
    return Math.floor(Math.random() * 11) + 2;
  }

  heal(amount) {
    this.health += amount;
  }

  hurt(amount) {
    this.health -= amount;
  }
}

const armor = {
  attachArmor() {
    console.log(`Armor attached.`);
  },

  removeArmor() {
    console.log(`Armor removed.`);
  },
}

const spell = {
  castSpell(spell) {
    console.log(spell);
  }
}

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.strength = this.rollDice() + 2;
  }
}

Object.assign(Warrior.prototype, armor);

// Not changing anything from the parent, so I don't need to use the constructor function
class Paladin extends Character {}
Object.assign(Paladin.prototype, armor, spell);

class Magician extends Character {
  constructor(name) {
    super(name);
    this.intelligence = this.rollDice() + 2;
  }
}

Object.assign(Magician.prototype, spell);

class Bard extends Magician {
  createPotion() {
    console.log(`Potion created.`);
  }
}

let warrior = new Warrior('Bruce Lee');
console.log(warrior.name);
console.log(warrior.health);
console.log(warrior.strength)
console.log(warrior.intelligence)
warrior.attachArmor();
warrior.removeArmor();
console.log(warrior.health);
warrior.hurt(10);
console.log(warrior.health);
warrior.heal(10);
console.log(warrior.health);

let paladin = new Paladin('Barney');
console.log(paladin.name);
paladin.castSpell('Flash');
paladin.attachArmor();
console.log(paladin.health);
paladin.hurt(50);
console.log(paladin.health);