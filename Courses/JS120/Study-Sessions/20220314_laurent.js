/* Review Lesson 2 Quiz 1

the global object is the implicit execution context
*/

let obj = {
  name: 'Laurent',
  callMeTwoTimes: function twoTimes() {
    [1, 2].forEach(function (number) {
      console.log('Hey, ' + this.name);
      console.log(this);
    });
  },
};

obj.callMeTwoTimes();

let obj = {
  name: 'Laurent',
  callMeTwoTimes: function twoTimes() {
    let self = this;
    [1, 2].forEach(function (number) {
      console.log('Hey, ' + self.name);
      console.log(self);
    });
  },
};

obj.callMeTwoTimes(); 

// Hey, Laurent
// { name: 'Laurent', callMeTwoTimes: [Function: twoTimes] }
// Hey, Laurent
// { name: 'Laurent', callMeTwoTimes: [Function: twoTimes] }
// Hint: hit control+c anytime to enter REPL.

 let obj = {
   name: 'Laurent',
   callMeTwoTimes: function twoTimes() {
     [1, 2].forEach(
       function (_) {
         console.log('Hey, ' + this.name);
         console.log(this);
       }.bind(this)
     );
   },
 };

 obj.callMeTwoTimes();

//  Hey, Laurent
// { name: 'Laurent', callMeTwoTimes: [Function: twoTimes] }
// Hey, Laurent
// { name: 'Laurent', callMeTwoTimes: [Function: twoTimes] }
// Hint: hit control+c anytime to enter REPL.
//  

// Question 8 
function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

obj.foo();

// question 9
function bar() {
  console.log('good morning');
}

global.inner = {
  bar() {
    console.log('good afternoon');
  },
};

let obj = {
  inner: {
    bar() {
      console.log('good night');
    },

    foo() {
      bar();
    },
  },

  bar() {
    console.log('wake up');
  },

  foo() {
    this.inner.bar();
    inner.bar();
    bar();
  },
};

let foo = function () {
  console.log('go to sleep');
};

function go(foo) {
  foo();
}

go(obj.foo);

// properties are not variables
