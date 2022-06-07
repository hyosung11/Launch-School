// Suppose an application that we're writing needs two kinds of objects: robots and humanoids. Robots have an intelligence level, a model number, and they can solve problems. Humanoids have all the same characteristics and behaviors that a robot has, but they can also walk and talk. Using factory functions, write code that automates the creation of these two types of objects while reusing as much code as possible. Do not use prototypal or pseudo-classical inheritance.

function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {
      console.log(`Solving`);
    },
  };
}

function createHumanoid(intelligence, model) {
  let humanoid = {
    walk() {
      console.log('Walkin');
    },
    talk() {
      console.log('Talkin');
    },
  };

  Object.assign(humanoid, createRobot(intelligence, model));

  return humanoid;
}

let H = createHumanoid('good', '32');

H.solve();
H.walk();


// Suppose we introduced a new type of object to our application: humans. Humans have a name and age and they can also walk and talk. Using factory functions, write the code needed so that human objects can reuse the `walk` and `talk` methods that humanoids use. Both humanoids and humans should get the methods from the same source. As with the previous question, do not use prototypal or pseudo-classical inheritance.

let humanLikeMethods = {
  walk () {
    console.log('Walkin');
  },
  talk () {
    console.log('Talkin');
  }
}

function createHuman(name, age) {
  let human = {
    name,
    age
  }

  Object.assign(human, humanLikeMethods);
  return human;
}

let alex = createHuman('Alex', 42);
alex.talk();

function createRobot(intelligence, model) {
  return {
    intelligence,
    model,

    solve() {
      console.log(`Solving`);
    },
  }
}

function createHumanoid (intelligence, model) {
  let humanoid = {};

  Object.assign(humanoid, createRobot(intelligence, model), humanLikeMethods);

  return humanoid;
}


let H = createHumanoid('good', '32');

H.solve();
H.walk();
