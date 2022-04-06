/* 11.5 What will the code below output and why? */

// let obj = {
//   a: 'Amazebulous!',
// };

// let otherObj = {
//   a: "That's not a real word!",
// };

// function foo() {
//   console.log(this.a);
// }

// let bar = foo.bind(obj); // line 13

// bar.call(otherObj); // line 15

/* The code will log "Amazebulous".

On line 13, `bar` is assigned to the return value of the `foo` function being bound via the `bind` method to the `obj` object. This makes `obj` the explicit and permanent execution context for `bar`. So even though on line 15 `bar` is invoked with the `call` method setting `otherObj` as the execution context, this is ignored because `bar` has been permanently bound to `obj`.

LS Solution

Once a function's context gets bound using `bind`, its context can't be changed, even with `call` or `apply`. Thus, the last line of our code outputs "Amazebulous!" because the function `bar`'s context has been permanently bound to `obj`.
*/

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     );
//   },
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription);


/* The code will output `undefined undefined is a undefined.`

When we pass `turk.getDescription` as a argument to `logReturnVal`, we remove the method from its context object `turk`. So, when we execute it as `func`, this points to the global object rather than `turk`. Since `global` doesn't have properties defined for `firstName`, `lastName`, or `occupation`, the output isn't what we expect.
` */

/* Modify the program from the previous problem so that logReturnVal accepts an additional context argument. If you then run the program with turk as the context argument, it should produce the desired output. */

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//     return (
//       this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.'
//     );
//   },
// };

// function logReturnVal(func, context) { // add second context argument
//   let returnVal = func.call(context); // invoke call on func and pass `context` as argument
//   console.log(returnVal);
// }

// logReturnVal(turk.getDescription, turk); // pass `turk` as context argument

// // apply
// let returnVal = func.apply(context);

/* It's also possible to use bind, but given the condition that logReturnVal must accept a context argument, that solution leads to this slightly odd code:
// let returnVal = func.bind(context)();

/* This code is slightly unclear since it implies that we want the binding to be permanent. Use `call` or `apply` instead. */

/* Suppose that we want to extract getDescription from turk, but we always want it to execute with turk as its execution context. How would you modify your code to do that? */

// let turk = {
//   firstName: 'Christopher',
//   lastName: 'Turk',
//   occupation: 'Surgeon',
//   getDescription() {
//       return this.firstName + ' ' + this.lastName + ' is a '
//                                   + this.occupation + '.';
//   }
// };

// function logReturnVal(func) {
//   let returnVal = func();
//   console.log(returnVal);
// }

// let getTurkDescription = turk.getDescription.bind(turk);
// logReturnVal(getTurkDescription);

/* 4. Consider the following code: */

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

/* Will this code produce the following output? Why or why not? */

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim
/*

The code will not produce the desired output. Instead it logs the following:

nested function not using the surrounding context */

/* 4. Consider the following code: */

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

/* Will this code produce the following output? Why or why not? */

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim
/*

The code will not produce the desired output. Instead it logs the following:

undefined: Arena
undefined: Daggerfall
undefined: Morrowind
undefined: Oblivion
undefined: Skyrim

Since functions lose their surrounding context when used as arguments to another function, the context of line 6 is not the `TESgames` object. Instead, it is the global objec. Thus, `this.seriesTitle` resolves to `undefined` rather than `"The Elder Scroll"`.

5. Use let self = this; to ensure that TESgames.listGames uses TESGames as its context and logs the proper output.*/

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     let self = this;
//     this.titles.forEach(function(title) {
//       console.log(self.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

// Use `bind`
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }.bind(this));
//   }
// };

// TESgames.listGames();

// Use an arrow function
// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(title => {
//       console.log(this.seriesTitle + ': ' + title);
//     });
//   }
// };

// TESgames.listGames();

/* 6. The forEach method provides an alternative way to supply the execution context for the callback function. Modify the program from the previous problem to use that technique to produce the proper output: */

// const TESgames = {
//   titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
//   seriesTitle: 'The Elder Scrolls',
//   listGames: function() {
//     this.titles.forEach(function(title) {
//       console.log(this.seriesTitle + ': ' + title);
//     }, this);
//   }
// };

// TESgames.listGames();

/* ### 4.2 Rewrite the following code to use the object literal syntax to generate the returned object */

// function makeObj() {
//   let obj = {};
//   obj.propA = 10;
//   obj.propB = 20;
//   return obj;
// }

// function makeObj() {
//   return {
//     propA: 10,
//     propB: 20,
//   }
// }

// console.log(makeObj())

/* 3. In this problem and the remaining problems, we'll build a simple invoice processing program. To get you started, here's the code to process a single invoice: */

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

/* To process multiple invoices, we need a factory method that we can use to create invoices. The requirements for the factory function are as follows:

1. It returns an invoice object, with phone and internet properties, and a total method.
2. The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
3. The function takes an object argument whose attributes override the default values.

Your function should work with the following code:
*/

// function createInvoice(services) {
//   // implement the factory function here
// }

// function invoiceTotal(invoices) {
//   let total = 0;

//   for (let index = 0; index < invoices.length; index += 1) {
//     total += invoices[index].total();
//   }

//   return total;
// }

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({ internet: 6500 }));
// invoices.push(createInvoice({ phone: 2000 }));
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));

// console.log(invoiceTotal(invoices)); // 31000

/* 3. In this problem and the remaining problems, we'll build a simple invoice processing program. To get you started, here's the code to process a single invoice: */

// let invoice = {
//   phone: 3000,
//   internet: 6500
// };

// let payment = {
//   phone: 1300,
//   internet: 5500
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);         // => 6800
// console.log(remainingDue);         // => 2700

/* To process multiple invoices, we need a factory method that we can use to create invoices. The requirements for the factory function are as follows:

1. It returns an invoice object, with phone and internet properties, and a total method.
2. The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
3. The function takes an object argument whose attributes override the default values.

Your function should work with the following code:
*/

function createInvoice(services = {}) {
  // implement the factory function here
  let phoneCharge = services.phone;
  if (phoneCharge === undefined) {
    phoneCharge = 3000;
  }

  let internetCharge = services.internet;
  if (internetCharge === undefined) {
    internetCharge = 5500;
  }

  return {
    phone: phoneCharge,
    internet: internetCharge,

    total() {
      return this.phone + this.internet;
    }
  }
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000