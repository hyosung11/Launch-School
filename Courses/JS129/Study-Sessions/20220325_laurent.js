/* 8. Practice Problems: Objects and Factories

In these problems, we will develop a factory function for objects that represent books.

The following three books should give you an idea of what our first book object should look like:

```sh
Attributes
  Title: Mythos
  Author: Stephen Fry

Behavior:
  Get Description

-----------------------------
Attributes
  Title: Me Talk Pretty One Day
  Author: David Sedaris

Behavior:
  Get Description

-----------------------------
Attributes
 Title: Aunts aren't Gentlemen
 Author: PG Wodehouse

 Behavior:
   Get Description
```

### 1. Create three objects that represent the three books shown above. The method for the "Get Description" behavior should return a string like the following:

### 2. Think about the code you wrote for problem #1. Is there any unnecessary code? Does it have duplication?

### 3. Given our observations about the code so far, implement a factory function for our book objects that we can use with the following code: 

### 4. We now want to track which books we have and haven't read. Update the factory function so that it returns a book object that includes a property `read` that has an initial value of `false`.

### 5. Suppose that we want to add a book that we've already read. Modify the factory function to use an optional `read` parameter with a default value of `false`. 

### 6. Let's add a method, `readBook`, that marks a book object as read by setting the `read` property to `true`: 

### 7. Finally, let's update `getDescription` function to reflect the `read` state directly, For instance:
*/

// "Me Talk Pretty one day was written by David Sedaris."

function createBook(title, author, read = false) {
  return {
    title,
    author,
    read: false,
    getDescription() {
      //return this.read ? `${this.title} was written by ${this.author}. I have read it.` : `${this.title} was written by ${this.author}. I haven't read it.`
      return `${this.title} was written by ${this.author}. I ${
        this.read ? 'have' : "haven't"
      } read it.`;
    },
    readBook() {
      this.read = true;
    },
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

book1.getDescription(); // "Mythos was written by Stephen Fry."
book2.getDescription(); // "Me Talk Pretty One Day was written by David Sedaris."
book3.getDescription(); // "Aunts aren't Gentlemen was written by PG Wodehouse"

// console.log(book1.read); // => false
// console.log(book2.read); // => false
// console.log(book3.read); // => false

console.log(book1.read); // => false
book1.readBook();
console.log(book1.read); // => true

console.log(book2.getDescription()); // Mythos was written by David Fry. I haven't read it.
book2.readBook();
console.log(book2.getDescription()); // Mythos was written by David Fry. I have read it.

// ## 1. What does this code log and why?


// let qux = { foo: 1 }; // Object constructor [[Prototype]]: Object.prototype
// let baz = Object.create(qux);  // [[Prototype]]: qux 
// console.log(baz.foo + qux.foo);

// /* This code will log 2. 

// [[Prototype]] => qux */

// console.log(baz.hasOwnProperty('foo'))

// console.log(baz.hasOwnProperty('foo'))

// console.log(Object.getPrototypeOf(baz));

/* ### 2. What will the following code log to the console? Explain why it logs that value. Try to answer without running the code. */


let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2; // line 3

console.log(baz.foo + qux.foo);
console.log(baz.hasOwnProperty('foo'));

/* This code logs 3. 

prototypal chain
 it will look for the property on the object itself
 
 */


/*
This code will log 3 because `baz` acesses it own property `foo` with a value of 2 and adds it to the value of `foo` on `qux` which is 1.

On line 1, we declare a variable `qux` and assign it an object with a property `foo` with a value of 1. Then, we declare a variable `baz` and assigned it the return value from the `Object.create(qux)` statement that will return an empty object that will inherit from `qux`. Then on line 3, we create a `foo` property on the object referenced by `baz` and sets its value to 2. On line 5, as `baz` has its own property `foo`, `foo.baz` will evaluate to 2 and will not look up in the prototypal chain for the value of the property `foo`. `qux.foo` will evaluate to 1 and the total will evaluate to 3.
*/

// Answer: 3. The value of `baz.foo` returns `2` on line 3. `qux.foo` returns `1` on line 1. The assignment of `baz.foo` on line 3 does not mutate the `qux` object because when assigning a property on an object, JavaScript always treats the property as an "own" property. That is, it assumes that the property belongs to the object named to the left of the property name. Even if the prototype chain already has a property with that name, it assigns the "own" property. Here, `foo` becomes an "own" property of `baz`

/* ### 4. As we saw in problem 2, the following code creates a new property in the baz object instead of assigning the property in the prototype object. */

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;


/* Write a function that searches the prototype chain of an object for a given property and assigns it a new value. If the property does not exist in any of the prototype objects, the function should do nothing. The following code should work as shown: */


/*
function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    } else {
      obj = Object.getPrototypeOf(obj);
    }
  }

}
*/

function assignProperty(obj, property, value) {
  if (obj === null) return;
  
  if (obj.hasOwnProperty(property)) {
    obj[property] = value;
  } else {
    assignProperty(Object.getPrototypeOf(obj), property, value);
  }
}



let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

/* ### 5. Consider the following two loops: */

// Object.keys(foo).forEach(property => {
//   console.log(`${property}: ${foo[property]}`);
// });


/* If `foo` is an arbitrary object, will these loops always log the same results to the console? Explain why they do or do not. If they don't always log the same information, show an example of when the results differ. */

let boo = {a: 1, b: 2};
let foo = Object.create(boo);
foo.c = 3

// for (let property in foo) {
//   console.log(`${property}: ${foo[property]}`)
// }

Object.keys(foo).forEach(property => {
  console.log(`${property}: ${foo[property]}`);
});

/* ### 6. How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype? */

let noPrototypeObject = Object.create(null)

console.log(Object.getPrototypeOf(noPrototypeObject));

let noPrototypeObject2 = {};
Object.setPrototypeOf(noPrototypeObject2, null);

console.log(Object.getPrototypeOf(noPrototypeObject2));

/* ### 6. How do you create an object that doesn't have a prototype? How can you determine whether an object has a prototype? */

let noPrototypeObject = Object.create(null)

console.log(Object.getPrototypeOf(noPrototypeObject));

let noPrototypeObject2 = {};
Object.setPrototypeOf(noPrototypeObject2, null);

console.log(Object.getPrototypeOf(noPrototypeObject2));