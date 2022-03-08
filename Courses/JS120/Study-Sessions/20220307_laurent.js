/* OLOO patterns to solve some of the issues with factory functions

Review Lesson 1 Quiz 1

a static method is a method on the constructor
- not delegated to the instance

Question 4 review again


*/

/* Without running the code, what value does Object.getPrototypeOf({}) return? */

console.log(Object.getPrototypeOf({}))

let object = {};
let object2 = {"a": 1};

let object3 = Object.create({});

console.log(Object.getPrototypeOf(object))

console.log(Object.getPrototypeOf(object2))

console.log(Object.getPrototypeOf(object3)) // 

console.log(Object.getPrototypeOf(Object.getPrototypeOf(object2)))

/*
[Object: null prototype] {}
[Object: null prototype] {}
[Object: null prototype] {}
{}
null
*/