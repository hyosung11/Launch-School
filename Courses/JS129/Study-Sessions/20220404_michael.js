/* ### 15.1 The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference. */

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return (
      this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
    );
  },
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription.bind(turk));

/* 

The code will output 

`undefined undefined is a undefined`

When we pass `turk.getDescription` as an argument to `logReturnVal`, we remove the method from its context. Then when we execute it as `func` this sets the execution context to the global object rather than the `turk` object. Since the global object doesn't have the properties `firstName`, `lastName`, or `occupation` the output isn't what we expect. 

To get the desired output, we must expliclity set the execution contex to the `turk` object. 
*/

// let john = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greetings() {
//     console.log('hello, ' + this.firstName + ' ' + this.lastName);
//   },
// };

// john.greetings();         // context is john
// let foo = john.greetings; // Strips context
// foo(); // context is now the global object

// You could use `foo.call(john)` to restore the original context, but suppose you don't execute the function right away or you need to pass it to another function for execution? By the time `foo` gets called, `john` may be out of scope.

// function repeatThreeTimes(func, context) {
//   func.call(context); // can't use func.call(john); john is out of scope --> ReferencError: john is not defined
//   func.call(context);
//   func.call(context);
// }

// function foo() {
//   let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greetings: function() {
//       console.log('hello, ' + this.firstName + ' ' + this.lastName);
//     },
//   };

//   repeatThreeTimes(john.greetings, john); // Strips context
// }

// foo();

// => hello, undefined undefined
// => hello, undefined undefined
// => hello, undefined undefined

/* ### 15.1 The code below should output "Christopher Turk is a Surgeon". Without running the code, what will it output? If there is a difference between the actual and desired output, explain the difference. */

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

let bindedDescription = turk.getDescription.bind(turk)
logReturnVal(bindedDescription);

/* 

### 15.3 Suppose that we want to extract `getDescription` from `turk`, but we always want it to execute with `turk` as its execution context. How would you modify your code to do that? */

/* ### 15.4 Consider the following code: */


const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title); // line 6
    });
    
  }
};

TESgames.listGames();

/* Will this code produce the following output? Why or why not?

The Elder Scrolls: Arena
The Elder Scrolls: Daggerfall
The Elder Scrolls: Morrowind
The Elder Scrolls: Oblivion
The Elder Scrolls: Skyrim 

*/