/* JS100 - JavaScript Basics > Objects > 6. Is it true?

Is it true?

We are experimenting with some code to get more comfortable working with objects. Run the snippet below and explain why "It's true!" is never output.

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

*/

let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function () {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/* Discussion

Object property names are always strings. When we omit quotes around our property names, JavaScript implicitly converts the name to a string. So true is not a property defined on obj, but 'true' is. You can check this for example as follows:
*/

for (let prop in obj) {
  console.log(`${prop} (${typeof prop})`);
}

// logs:
// num (string)
// property name (string)
// true (string)
// fun (string)

// In order for our code to log "It's true!", we need to compare obj's properties to 'true':

for (let prop in obj) {
  if (prop === 'true') {
    console.log("It's true!");
  }
}