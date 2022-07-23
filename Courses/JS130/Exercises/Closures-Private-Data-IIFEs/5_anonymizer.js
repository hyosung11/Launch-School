/* JS130 - JavaScript Exercises > Closures, Private Data, and IIFEs > Anonymizer

Anonymizer

Using OLOO create an `Account` prototype object that anonymizes user objects on `init`. The created object should not have access to the function that anonymizes a user other than through the `init` and `reanonymize` methods. The function that anonymizes creates a 16 character sequence composed of letters and numbers. The following are the properties and methods on the `Account` object:

- `init`: The init method sets the `email`, `password`, `firstName`, `lastName`, and `displayName` of user. The `displayName` is a 16 character sequence generated for the user. It's used as the display name of a user.

- `reanonymize`: This method generates a new 16 character sequence and reassigns it to the `displayName` property if the password provided is valid. Returns `true` if successfully re-anonymized. Returns `'Invalid Password'` if the password provided is not valid.

- `resetPassword`: This method asks the user for a new password and reassigns it to the `password` property. To reset the password, the user must provide the current password. Returns `'Invalid Password' `if the password provided is not valid. Returns `true` if the password is successfully reset.

- `firstName`: This method returns the first name of the user if the password provided is valid. Returns `'Invalid Password'` if the password provided is not valid.

- `lastName`: This method returns the last name of the user if the password provided is valid. Returns `'Invalid Password'` if the password provided is not valid.


- `email`: This method returns the email name of the user if the password provided is valid. Returns `'Invalid Password'` if the password provided is not valid.

`displayName`: This property returns the `displayName` — the 16 character sequence.

Other than the above properties, methods, and properties inherited from `Object.prototype`, no other method or property should exist on the object returned by the `Account` prototype object. */

// let Account = (function () {
//   let userEmail;
//   let userPassword;
//   let userFirstName;
//   let userLastName;

//   function isValidPassword(testPassword) {
//     return userPassword === testPassword;
//   }

//   function getRandomLetterNumber() {
//     let randomIndex = Math.floor(Math.random() * 62);
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ1234567890'[
//       randomIndex
//     ];
//   }

//   function anonymize() {
//     let result = '';

//     for (let i = 0; i < 16; i += 1) {
//       result += getRandomLetterNumber();
//     }

//     return result;
//   }

//   return {
//     init: function (email, password, firstName, lastName) {
//       userEmail = email;
//       userPassword = password;
//       userFirstName = firstName;
//       userLastName = lastName;
//       this.displayName = anonymize();
//       return this;
//     },

//     reanonymize: function (password) {
//       if (isValidPassword(password)) {
//         this.displayName = anonymize();
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     resetPassword: function (currentPassword, newPassword) {
//       if (isValidPassword(currentPassword)) {
//         userPassword = newPassword;
//         return true;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     firstName: function (password) {
//       if (isValidPassword(password)) {
//         return userFirstName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     lastName: function (password) {
//       if (isValidPassword(password)) {
//         return userLastName;
//       } else {
//         return 'Invalid Password';
//       }
//     },

//     email: function (password) {
//       if (isValidPassword(password)) {
//         return userEmail;
//       } else {
//         return 'Invalid Password';
//       }
//     },
//   };
// })();

// Here's a sample for your reference:
// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName); // returns the firstName function
// console.log(fooBar.email); // returns the email function
// console.log(fooBar.firstName('123456')); // logs 'foo'
// console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
// console.log(fooBar.displayName); // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc')) // logs 'Invalid Password';
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc'); // returns true
// console.log(displayName === fooBar.displayName); // logs false

/* Discussion

The key part of this solution is the use of an IIFE to create a private scope that is only accessible to the object returned when executing `Object.create(Account)`.

Further Exploration

This solution works but it only works for one set of private data.

Modify the solution so that it can accommodate creating multiple objects with their own private data. */

/* Laurence Cua
4 days ago

Didn't use IIFE, but relied on closures. Kept the anonymizer function outside of the Account object. */

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let anonymize = function () {
  let string16 = '';
  for (let i = 0; i < 16; i += 1) {
    string16 =
      string16 + [...CHARS][Math.round(Math.random() * CHARS.length) - 1];
  }
  return string16;
};

let Account = {
  init(email, password, firstName, lastName) {
    // why are the parameters automtically returned? (because of closure)
    let displayName = anonymize();
    return {
      displayName,
      email(pw) {
        if (pw === password) return email;
        else return 'Invalid Password';
      },
      firstName(pw) {
        if (pw === password) return firstName;
        else return 'Invalid Password';
      },
      lastName(pw) {
        if (pw === password) return lastName;
        else return 'Invalid Password';
      },
      reanonymize(pw) {
        if (pw === password) {
          this.displayName = anonymize(); // why do we need to use `this` here? (Because this property is returned)
          return true;
        } else return 'Invalid Password';
      },
      resetPassword(oldPW, newPW) {
        if (oldPW === password) {
          password = newPW; // but don't need to use `this` here? (because password is in the closure/backpack)
          return true;
        } else return 'Invalid Password';
      },
    };
  },
};

//  Here's an extended version of the example run:

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName('123456')); // logs 'foo'
console.log(fooBar.firstName('abc')); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc')) // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');  // returns true
console.log(displayName === fooBar.displayName); // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'