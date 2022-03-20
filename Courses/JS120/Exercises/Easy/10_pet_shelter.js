/* JS120 - Object Oriented JavaScript > Easy > 10. Pet Shelter

Pet Shelter

Consider the following code: */

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding = new Pet('cat', 'Pudding');
// let darwin = new Pet('bearded dragon', 'Darwin');
// let kennedy = new Pet('dog', 'Kennedy');
// let sweetie = new Pet('parakeet', 'Sweetie Pie');
// let molly = new Pet('dog', 'Molly');
// let chester = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/* Write the classes and methods that will be necessary to make this code run, and log the following output:

P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.

The order of the output does not matter, so long as all of the information is presented.

*/

// class Pet {
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//   }

//   info() {
//     return `a ${this.animal} named ${this.name}`;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }

//   printPets() {
//     this.pets.forEach(pet => console.log(pet.info()));
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = {};
//   }

//   adopt(owner, pet) {
//     owner.addPet(pet);
//     if (!this.owners[owner.name]) {
//       this.owners[owner.name] = owner;
//     }
//   }

//   printAdoptions() {
//     for (let name in this.owners) {
//       console.log(`${name} has adopted the following pets:`);
//       this.owners[name].printPets();
//       console.log("");
//     }
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding = new Pet('cat', 'Pudding');
// let darwin = new Pet('bearded dragon', 'Darwin');
// let kennedy = new Pet('dog', 'Kennedy');
// let sweetie = new Pet('parakeet', 'Sweetie Pie');
// let molly = new Pet('dog', 'Molly');
// let chester = new Pet('fish', 'Chester');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);

// shelter.printAdoptions();

// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

/*  Discussion

This is a somewhat contrived example of an animal shelter's adoption records. Our solution isn't the only solution, nor is it necessarily the best solution; it is simply a possible solution that isn't too difficult to comprehend in one sitting.

Our example code provides most of the details we need, such as class and (most) method names, and what the output is supposed to look like. Some details are left to your imagination.

We start by defining our `Pet` class, which is extremely simple. All we need is a `constructor` method that sets the pet's type and name to the properties `animal` and `name`. We also provide an `info` method that returns some basic information about pet; this will be useful for `printPets`.

Next comes the `Owner` class, which, based on the example code, only needs to support 2 methods: `constructor` and `numberOfPets`. Since `numberOfPets` is going to be an `Owner` instance method, we decide that we will also store a list of each owner's adopted pets in the `Owner` object. So, we initialize `pets` property and a method `addPet` to add a newly adopted pet to the owner record. Finally, we will also need a `printPets` method so we can print the list of the owner's pets.

The `Shelter` class needs `constructor`, `adopt` and `printAdoptions` methods to match the example code. The `adopt` method adds a new pet to the owner record, and then adds the owner record to our `owners` property, but only if the owner is not already listed. (We assume here that there are no owners with matching names, and that we will never create multiple `Owner` objects for the same owner.) Finally, `printAdoptions` iterates through our owner list, printing their name and a list of the pets the owner has adopted.

This exercise is about collaborator objects; instance variables don't have to be simple variables like numbers and strings, but can contain any object that might be needed. In our solution, the `Pet` class has two String collaborator objects, `Owner` has a String and an Array of `Pet` objects, and `Shelter` has an Object of `Owner` objects.

Further Exploration

Add your own name and pets to this project.

Suppose the shelter has a number of not-yet-adopted pets, and wants to manage them through this same system. Thus, you should be able to add the following output to the example output shown above:

The Animal Shelter has the following unadopted pets:
a dog named Asta
a dog named Laddie
a cat named Fluffy
a cat named Kat
a cat named Ben
a parakeet named Chatterbox
a parakeet named Bluebell
   ...

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
The Animal shelter has 7 unadopted pets.

Can you make these updates to your solution? Did you need to change your class system at all? Were you able to make all of your changes without modifying the existing interface?

Coen van Steijn

All animals brought to the shelter with `receive()` are added to the `animals` array, a property on the `shelter` instance object. Whenever an owner adopts one of them, the animal is removed from the shelter (`animals` array) and added to the owner's `pets` array. If the animal the owner tries to adopt doesn't exist, the corresponding message is logged to the console. */

// class Pet {
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//   }

//   petInfo(pet) {
//     return `a ${this.animal} named ${this.name}`;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//   }

//   printPets() {
//     this.pets.forEach(pet => console.log(pet.petInfo()));
//   }

//   printNumberOfPets() {
//     console.log(`${this.name} has ${this.pets.length} adopted pets.`);
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = [];
//     this.animals = [];
//   }

//   receive(pet) {
//     this.animals.push(pet);
//   }

//   printNumberOfAnimals() {
//     console.log(`The animal shelter has ${this.animals.length}` +
//                 ` unadopted animals.`)
//   }

//   adopt(owner, petName) {
//     let pet = this.animals.filter(animal => animal.name === petName)[0];
//     let petIdx = this.animals.indexOf(pet);

//     if (petIdx > -1) {
//       owner.addPet(this.animals[petIdx]);
//       this.removeAnimalFromShelter(petIdx);
//       this.addOwnerToDatabase(owner);
//     } else {
//       console.log(`I'm sorry, we don't have an animal called ${petName}.`);
//     }
//   }

//   removeAnimalFromShelter(petIdx) {
//     this.animals.splice(petIdx, 1);
//   }

//   addOwnerToDatabase(owner) {
//     if (!this.owners.includes(owner)) this.owners.push(owner);
//   }

//   printAdoptions() {
//     this.owners.forEach((owner) => {
//       console.log(`${owner.name} has adopted the following pets:`);
//       owner.printPets();
//       console.log('');
//     });
//   }
// }

// let shelter = new Shelter();

// let asta = new Pet('dog', 'Asta');
// let laddie = new Pet('dog', 'Laddie');
// let fluffy = new Pet('cat', 'Fluffy');
// let kat = new Pet('cat', 'Kat');
// let ben = new Pet('cat', 'Ben');
// let chatterbox = new Pet('parakeet', 'Chatterbox');
// let bluebell = new Pet('parakeet', 'Bluebell');

// // Bring new animals to shelter
// shelter.receive(asta);
// shelter.receive(laddie);
// shelter.receive(fluffy);
// shelter.receive(kat);
// shelter.receive(ben);
// shelter.receive(chatterbox);
// shelter.receive(bluebell);

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');

// shelter.adopt(phanson, 'Asta');
// shelter.adopt(phanson, 'Laddie');
// shelter.adopt(phanson, 'Max'); // I'm sorry, we don't have an animal called Max.
// shelter.adopt(bholmes, 'Fluffy');
// shelter.adopt(bholmes, 'Kat');
// shelter.adopt(bholmes, 'Asta'); // I'm sorry, we ... => Asta already taken

// shelter.printAdoptions();
// // P Hanson has adopted the following pets:
// // a dog named Asta
// // a dog named Laddie

// // B Holmes has adopted the following pets:
// // a cat named Fluffy
// // a cat named Kat

// shelter.printNumberOfAnimals(); // The animal shelter has 3 unadopted animals.
// phanson.printNumberOfPets(); // P Hanson has 2 adopted pets.

/* laurentstaub

Further Exploration

All pets are stored on the Pet constructor as a static property. All pets now have an `adopted` status that is either `true` or `false`. When we add a pet to an owner, the `adopted` status is re-assigned to `true`. The `Shelter` class has a method `unadoptedAnimals` to count the unadopted animals based on the `adopted` status. */

// class Pet {
//   static pets = {};

//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//     this.adopted = false;
//     if (!Pet.pets[name]) {
//       Pet.pets[name] = this;
//     }
//   }

//   getsAdopted() {
//     this.adopted = true;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }

//   addPet(pet) {
//     this.pets.push(pet);
//     pet.getsAdopted();
//   }

//   numberOfPets() {
//     return this.pets.length;
//   }

//   printPets() {
//     this.pets.forEach(function (pet) {
//       console.log(`a ${pet.animal} named ${pet.name}`);
//     });
//   }
// }

// class Shelter {
//   constructor() {
//     this.owners = {};
//   }

//   unadoptedAnimals() {
//     return Object.keys(Pet.pets).filter(function (key) {
//       return Pet.pets[key].adopted === false;
//     }).length;
//   }

//   adopt(owner, pet) {
//     owner.addPet(pet);
//     if (!this.owners[owner.name]) {
//       this.owners[owner.name] = owner;
//     }
//   }

//   printAdoptions() {
//     for (let name in this.owners) {
//       console.log(`${name} has adopted the following pets:`);
//       this.owners[name].printPets();
//       console.log('');
//     }
//   }
// }

// let butterscotch = new Pet('cat', 'Butterscotch');
// let pudding = new Pet('cat', 'Pudding');
// let darwin = new Pet('bearded dragon', 'Darwin');
// let kennedy = new Pet('dog', 'Kennedy');
// let sweetie = new Pet('parakeet', 'Sweetie Pie');
// let molly = new Pet('dog', 'Molly');
// let chester = new Pet('fish', 'Chester');
// let huahua = new Pet('cat', 'Huahua');
// let xiaobai = new Pet('cat', 'Xiaobai');
// let asta = new Pet('dog', 'Asta');
// let laddie = new Pet('dog', 'Laddie');
// let fluffy = new Pet('cat', 'Fluffy');
// let kat = new Pet('cat', 'Kat');
// let ben = new Pet('cat', 'Ben');
// let chatterbox = new Pet('parakeet', 'Chatterbox');
// let bluebell = new Pet('parakeet', 'Bluebell');

// let phanson = new Owner('P Hanson');
// let bholmes = new Owner('B Holmes');
// let lstaub = new Owner('L Staub');

// let shelter = new Shelter();

// shelter.adopt(lstaub, huahua);
// shelter.adopt(lstaub, xiaobai);
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${lstaub.name} has ${lstaub.numberOfPets()} adopted pets.`);
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
// console.log(
//   `The Animal shelter has ${shelter.unadoptedAnimals()} unadopted pets.`
// );

/*  Bob Rodes

Further exploration

- Can you make these updates to your solution? Yes.
- Did you need to change your class system at all? Yes, making `Shelter` extend `Owner`
- Were you able to make all of your changes without modifying the existing interface? I could have: it was possible to modify `listPets` to list unadopted pets in a `Shelter` object. But it made more sense to me to add a `listPets` method to `Shelter` to list them out.

These questions are hinting at making `Shelter` extend `Owner`. Is there a way to make all these changes without adding new methods and properties? Yes, there is. If you subclass `Shelter` in this way, you can make the changes without having to further alter the existing interface (i.e. add properties or methods). Most of the added functionality of adding pets is already there in the `Owner` class. Using `Owner` as a base class means that you can access `Owner`'s methods and `pets` property without having to do any extra fiddling. (And a shelter "is an" owner, with some additional state and behavior. So it passes that test.)

The required changes are:

- Have `Shelter` extend `Owner`.
- Modify `Shelter.prototype.adopt` to include the additional step of removing the adopted pet from the `pets` array.
- Implement a way to list out pets available for adoption.

There's also a required usage change implied, because you have to add pets to the shelter object when you create them.

I added a `listPets` method to the `Shelter` object to list out the pets. (It was possible to modify `Owner.prototype.printPets` to do this, but I think it's better to go ahead and modify the interface in this case by adding another method, rather than cluttering up the `printPets` method with checks to see whether we're dealing with a `Shelter` object or not.) I also added a further modification to `Shelter.prototype.adopt` to prevent adoptions of pets that weren't in the shelter's pet inventory.

Here's an implementation, with some additional testing: */

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(`a ${pet.type} named ${pet.name}`));
  }
}

class Shelter extends Owner {
  constructor(name) {
    super(name);
    this.owners = {};
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.owners[owner.name]) {
      this.owners[owner.name] = owner;
    }
    this.pets = this.pets.filter(p => p !== pet);
  }

  listPets() {
    if (this.pets.length === 0) {
      console.log(`${this.name} currently has no pets available.`)
    } else {
      console.log(`${this.name} has the following pets available:`)
      this.printPets();
    }
    console.log();
  }

  printAdoptions() {
    for (let owner in this.owners) {
      console.log(`${owner} has adopted the following pets:`);
      this.owners[owner].printPets();
      console.log();
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter('The Animal Shelter');
[butterscotch, pudding, darwin, kennedy, sweetie, molly, chester]
  .forEach(pet => {shelter.addPet(pet)});

console.log(`${shelter.name} has ${shelter.numberOfPets()} pets available for adoption.`)

shelter.listPets();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.printAdoptions();
shelter.listPets();
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
shelter.listPets();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`${shelter.name} has ${shelter.numberOfPets()} pets available for adoption.`)

// The Animal Shelter has 7 pets available for adoption.
// The Animal Shelter has the following pets available:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin
// a dog named Kennedy
// a parakeet named Sweetie Pie
// a dog named Molly
// a fish named Chester

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// The Animal Shelter has the following pets available:
// a dog named Kennedy
// a parakeet named Sweetie Pie
// a dog named Molly
// a fish named Chester

// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Kennedy
// a parakeet named Sweetie Pie
// a dog named Molly
// a fish named Chester

// The Animal Shelter currently has no pets available.

// P Hanson has 3 adopted pets.
// B Holmes has 4 adopted pets.
// The Animal Shelter has 0 pets available for adoption.