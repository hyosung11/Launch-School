/* JS101/109 210/211 SPOT Study Session

Introductions
- Antonina, Greece
- Elaine, JS109, Toronto
- Michael, JS101, Santa Cruz
- Lucas, Jackson Mississippi, JS210 Lesson 3
- H
- Marcos Avila, NYC, JS210
- Edris, JS109, Tracy, CA
- Jeff Lovell, Long Beach
- Edward
- Ainaa

35 Prepared Questions
*/

/* =======
Edward Q24

What are the three ways to define a function in JS? Give an example for each.

function declaration
function expression
arrow function

declaring a variable `greeting` initializing it to the function expression
*/

// (function greeting ( ) {
//     console.log()
// })

// let greeting = function () {
//   console.log()
// }

// let greeting = a => a + b

// let greeting = (a,b) => {
//   return
// }

/* ======
Jeff Q21

When do we say that a function has side effects? Give an example to demonstrate it.

side effect is anything

function greeting () {
 console.log('Hi');
}

// undefined

function sum (a,b) {
  console.log(a+b);
  return a+b;
}

Five Side Effects
1. logging to the terminal (obtaining user input or logging to the console)
2. mutating objects that are not local to the function
3. reassignment of a variable in an outer scope
4. raises an exception without handling
5. calls another function that causes a side effect
*/

/* =====
Edris Q7

What does this code log and what's the principle being demonstrated?
*/

// let animal = "dog";

// const speak = animal => {
//   if (animal) {
//     console.log("Bark");
//   } else {
//     console.log("Meow");
//   }
// };

// speak();

/* Answer

HyoSung
This will log 'Meow'. While the global variable `animal` is declared and initialized to the string "dog" on line 1, it is shadowed by the `animal` variable used as the parameter of the arrow function `speak` and is therefore inaccessible to the function. When `speak` is called it doesn't pass an argument, so by default it passes `undefined`. Within the function speak, `undefined` evaluates to false in the `if` condition, so the else block gets executed and `'Meow'` is logged.

Laurent
It will log 'Meow' and the concept demonstrated is variable shadowing, Because the parameter of the function speak has the same name as the animal in the global scope Moreover, it shows that a function with an argument will set the parameter to undefined if not passed-in any parameter when called. On line 12, we call the function speak without any arguments. Since it has been declared on line 4 with an argument 'animal', animal within the speak function will be 'undefined', it will not look in the outer scope for an 'animal' variable. Then, as 'undefined' is evaluated to false by the if statement, the speak call will return 'Meow'.

Alex
The code logs 'Meow'. Because the parameter animal of the function expression on line 18 shadows the global variable of the same name, the global variable is inaccessible within the function. Moreover, speak() is invoked on line blah without an argument. In JS, the function will still execute, but will be passed undefined as its argument. Since speak() makes use of an if conditional that evaluates the truthiness of the parameter animal, and since undefined was passed in as an argument, the conditional evaluates as false and the else branch of the conditional is executed, logging 'Meow' to the console.

variable shadowing of the global variable animal with the variable
variable scope
nothing is passed into the function

speak()
- `undefined` evaluates to a falsy value
initialized to undefined which is a falsy value, so the else block gets executed
*/

/* =====
H Q11

What is the output and why? */

let name = 'nina';

function outer() {
  let name = 'jill';

  function inner() {
    return name[0].toUpperCase() + name.slice(1);
  }

  return inner();
}

outer();
console.log(name);

/*
The global variable `name` is declared and initialized to the string 'nina'.
The `console.log` method on line 15 logs 'nina' because it passes in the global variable name. The call of the `outer` function returns 'jill'. This is an example of variable shadowing.

/*Alex
This code will log nina. This is because name is re-declared with let within the outer () function. This results in whats called variable shadowing, wherein the inner scope does not have access to the global variable , only the local variable of the same name. Therefore, invoking outer() on the second-to-last line has no impact on the global variable name, which is logged as it originally appeared on line 1 in the console.log on the last line.

Laurent
This code will log 'nina' as the global scope 'name' variable has not been modified by the inner function. We declare a name variable and assign 'nina' to it. We then define the outer function that gets called on line 14 without any argument. When we run outer(), a second variable named 'name' is declared and assigned to 'name' ; this variable in the inner scope will shadow the global scope variable 'name'. When we run inner(), it will return 'Jill' as it will look for the first variable in its outer scope.

HyoSung
The global variable `name` is declared and initialized to the string 'nina'.
The `console.log` method on line 15 logs 'nina' because it passes in the global variable name. The call of the `outer` function returns 'jill'. This is an example of variable shadowing.

locally scoped to the inner function
the inner function can access the outer function

variable shadowing

function scoping rules

name is a primitive value

all string methods return new strings because all strings are immutable

pass by value
*/

/* ====
Lucas Q3
*/
// let array = [1, 2, undefined, {1:2}, <2 empty items>, null, '-1': 2]
// console.log(array.length); // What will this line return and why?

/* =======
Marcus Q35

What do we mean when we say that functions in JS are first-class values?
Give an example that demonstrates that.


Another Q30
Describe the difference between the array `map` and the `filter` method.
- both return new arrays

When would you use each?

selection and transformation

==========
Ainaa Q28

Give an example of explicit and one of implicit type coercion.
- Explicit when the programmer writes the coercion into the code
- Implicit is leaving the JavaScript engine to coerce the values


=========
Elaine Q2

Explain the concept of pass-by-reference and give an example to demonstrate it.

Pass by Reference
Is when we pass an argument to a function, and the argument is a variable that stores a reference/pointer to an object in memory. When we pass by reference, since we are passing the ACTUAL POINTER, IF our function MUTATES the variable, it has a permanent or persistent on the object itself. */

// let arr = [1, 2, 3];

// function mutateThis(array) {
//   array.push(5);
// }

// console.log(arr);

// mutateThis(arr);

// console.log(arr);

/* ======
Michael Q6

What is output and why? */

let firstName = 'John';

const getName = (name) => {
  name.concat(' Doe');
  name = name.toLowerCase();
  return name;
};

getName(firstName);
console.log(firstName);

/*
`console.log` logs 'John' because the string is passed by value and is immutable

why return 'john' and not 'John Doe'

`concat`

initialized initially
`name` is reassigned to `name.toLowerCase()`

*/