/* JS120 - Object Oriented JavaScript > Object Creation Patterns > 1. Ancestors

Ancestors

Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. Here's an example output: */

// // name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

// Recursive Solution
// Object.prototype.ancestors = function ancestors() {
//   let ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

// Iterative Solution
Object.prototype.ancestors = function() {
  let object = Object.getPrototypeOf(this);
  let array = [];

  while (object.name) {
    array.push(object.name);
    object = Object.getPrototypeOf(object);
  }

  array.push('Object.prototype');
  return array;
}


console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

/* Discussion

The problem lends itself well to a recursive solution. The resulting array is incrementally built by recursively calling on the `Object.prototype.ancestors` method. The base case is when `ancestor` does not have a `name` property anymore because it means that `ancestor` is `Object.prototype` already. When this is the case, there are no more prototype objects to add. The key for this solution is recognizing that the value of `this` is the calling object and that we have to add the `ancestors` method on `Object.prototype` so that all objects have access to it.

Be mindful when adding methods to built-in Objects (e.g, `String.prototype`, `Object.prototype`. It may lead to confusing code and can have unintended consequences. */

/* Edris Atamy - Procedural Solution */
// Object.prototype.ancestors = function ancestors() {
//   let protoArr = [];
//   let proto = Object.getPrototypeOf(this);

//   while (true) {
//     if (!proto.hasOwnProperty('name')) {
//       protoArr.push('Object.prototype');
//       break;
//     }
//     protoArr.push(proto.name);
//     proto = Object.getPrototypeOf(proto);
//   }

//   return protoArr;
// };

/* Elaine Vuong

Iterative Solution

Input/Output - We want to return an array of ancestors. Initialize ancestors as an empty array.

1) Base Case - if the current object has a Prototype Object that is equal to Object.prototype - that's it! This means that the current object only has one ancestor, which is Object.prototype. Therefore, since the while loop condition is NOT met, add Object.prototype to the ancestors array, and return ancestors

2) Non-Base Case - otherwise, if the current object does NOT have a Prototype Object that is equal to Object.prototype - then we have more ancestral history to go through! Add the name of the current prototype object to the ancestors array, and now we're going to re-set what we're calling our currObj - we'll have our currObj now become the proto. Essentially, we will continue to add the name of prototype object of the current object to the ancestors array, and then each time we want to 'reset' what the current object refers to - we want the current object to refer to its prototype object, UNTIL the prototype object is Object.prototype. Once that happens, we break out of our loop and add Object.prototype to our ancestors array.
*/

// Object.prototype.ancestors = function () {
//   let ancestors = [];
//   let currObj = this;
//   while (Object.getPrototypeOf(currObj) !== Object.prototype) {
//     let proto = Object.getPrototypeOf(currObj);
//     ancestors.push(proto.name);
//     currObj = proto;
//   }
//   ancestors.push('Object.prototype');
//   return ancestors;
// };

/* Recursive Solution

When working with recursion for me, I find it easier to think through the solution if I have 'default' parameters in place. It's easier for me to think this way, especially if the recursive call needs access to some Object that stores data from the previous call. By being able to pass in parameters to my recursive call, I know that the Object being passed will store some data from its previous execution, which I can use to 'add on' with my current recursive function execution.

Named Function Expressions and Recursion - One important thing to remember - when working with function expressions, is if the function expression is named - we can access the named function expression from WITHIN the function definition of the function expression. In this example - the named function expression history can actually be accessed from within the function definition of history, which is useful for recursion. If we did NOT name our function expression, we would have to access it by using its handle which is Object.prototoype.ancestors

Set Up - We start with a default parameter currObj, which is originally initialized to be this, and since the function is invoked with method call syntax, this refers to the calling object. We also initialize ancArr to an empty array. We then declare a variable protoObj that stores a reference of the prototype object of the currObj,

Base Case - if our protoObj references Object.prototype - then we are at the end of the ancestral chain! Add Object.prototype to ancArr, and return ancArr.

Recursion - otherwise, let's add the name of the current protoObj to our ancArr, let's RESET what currObj refers to (so that it now refers to protoObj) AND - since we have set up our recursive history function to accept two arguments, we can now pass currObj (which now refers to its prototype) AND the current ancArr into the next recursive call. */

// Object.prototype.ancestors = function history(currObj = this, ancArr = []) {
//   let protoObj = Object.getPrototypeOf(currObj);
//   if (protoObj === Object.prototype) {
//     // Base Case
//     ancArr.push('Object.prototype');
//     return ancArr;
//   } else {
//     ancArr.push(protoObj.name); // Add the name of the Prototype Object to the ancArr
//     currObj = protoObj; // Reset the currObj
//     return history(currObj, ancArr); // Call the named history Function Expression recursively
//   }
// };

/* Bob Rodes

I thought about adding ancestors to foo as well, so as to avoid monkey-patching the Object object, but I decided that if the method were to be callable by "a calling object" as the directions ask, then that couldn't presuppose the existence of a foo object.

Another loop-based solution.
*/

// Object.prototype.ancestors = function () {
//   let ancestors = [];
//   let currentPrototype = Object.getPrototypeOf(this);

//   while (currentPrototype !== Object.prototype) {
//     ancestors.push(currentPrototype.name);
//     currentPrototype = Object.getPrototypeOf(currentPrototype);
//   }

//   return ancestors.concat('Object.prototype');
// };