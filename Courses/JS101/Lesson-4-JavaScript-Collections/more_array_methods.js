let animals = { a: 'ant', b: 'bear', c: 'cat' };
console.log(Object.values(animals).some(animalName => animalName.length > 4));
// => false
console.log(Object.values(animals).some(animalName => animalName.length > 3));
// => true
