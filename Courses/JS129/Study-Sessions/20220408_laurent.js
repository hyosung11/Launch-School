// Mixin
// const Speed = {
//   goFast() {
//     console.log(`I'm a ${this.constructor.name} and going super fast!`);
//   },
// };

// class Car {
//   goSlow() {
//     console.log(`I'm safe and driving slow.`);
//   }
// }

// Object.assign(Car.prototype, Speed);

// class Truck {
//   goVerySlow() {
//     console.log(`I'm a heavy truck and like going very slow.`);
//   }
// }

// Object.assign(Truck.prototype, Speed);

// let car = new Car();
// let truck = new Truck();

// car.goFast();
// truck.goFast();

// console.log('goFast' in car);

/* 3. Ben and Alyssa are working on a vehicle management system. Thus far, they have created classes named Auto and Motorcycle to represent automobiles and motorcycles. After they noticed that the information and calculations performed was common to both vehicle types, they decided to break out the commonality into a separate class named WheeledVehicle. Their code, thus far, looks like this:
*/

class Vehicle {
  constructor(kmTravelledPerLiter, fuelCapInLiter) {
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
  
  range() {
    return this.fuelCap *  this.fuelEfficiency;
  }
}

let wheeledVehicle = { // mixin
  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  },

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  },
};

class Auto extends Vehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super(50, 25.0);
    this.tires = [30,30,32,32];
  }
}

let automobile = new Auto();
console.log(automobile);

Object.assign(Auto.prototype, wheeledVehicle);
console.log(automobile.tirePressure(2));  // 32

class Motorcycle extends Vehicle {
  constructor() {
    // array represents tire pressure for two tires
    super(80, 8.0);
    this.tires = [20,20];
  }
}

Object.assign(Motorcycle.prototype, wheeledVehicle);

let motorcycle = new Motorcycle();
console.log(motorcycle.tirePressure(0)); // => 20


/* Their boss now wants them to incorporate a new type of vehicle: a Catamaran. */

class Catamaran extends Vehicle {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic
    super(kmTravelledPerLiter, fuelCapInLiter);
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
  }
}

let boat = new Catamaran(2, 2, 1, 1000);
console.log(boat.range()); // 1000

/*
This new class doesn't fit well with our existing class hierarchy: Catamarans don't have tires, and aren't wheeled vehicles. However, we still want to share the code for tracking fuel efficiency and range. Modify the class definitions and move code into a mix-in, as needed, to share code between the Catamaran and the wheeled vehicle classes.
*/

/* LS Solution */
const Moveable = {
  range() {
    return this.fuelCap * this.fuelEfficiency;
  }
};

class WheeledVehicle {
  constructor(tirePressure, kmTravelledPerLiter, fuelCapInLiter) {
    this.tires = tirePressure;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}

Object.assign(WheeledVehicle.prototype, Moveable);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32], 50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20], 80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount, kmTravelledPerLiter, fuelCapInLiter) {
    // catamaran specific logic

    this.propellerCount = propellerCount;
    this.hullCount = hullCount;
    this.fuelEfficiency = kmTravelledPerLiter;
    this.fuelCap = fuelCapInLiter;
  }
}

Object.assign(Catamaran.prototype, Moveable);

/* Testing Object Equality

In JavaScript, comparing two objects either with == or === checks for object identity. In other words, the comparison evaluates as true if it's the same object on either side of == or ===. This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false depending on whether the objects have the same key/value pairs.

Algorithm
- define `objectsEqual()` with `obj1` and `obj2` parameters
- initialize `stringObj1` to Object.entries of obj1 sorted and joined
- initialize `stringObj2` to Object.entries of obj2 sorted and joined
- return stringObj1 strictly equal to stringObj2
*/

function objectsEqual(obj1, obj2) {
  return Object.entries(obj1).sort().join('') === Object.entries(obj2).sort().join('');
  // const toString = obj => Object.entries(obj).sort().join('')
  // return toString(obj1) === toString(obj2);
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'})); // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})); // false
console.log(objectsEqual({}, {})); // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1})); // false
