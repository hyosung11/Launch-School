/* Ask questions during the interview

constructor function passed into a function to make an instance
*/

let tim;

function foo(klass, arg){
  tim = new klass(arg)
}

class constructorFunction {
  constructor(arg){
    this.arg = arg
  }

  dosomething() {
    return this.arg + 3
  }
}

foo(constructorFunction, 2) // 5
// foo(constructorFunction, 5) // 8

console.log(tim.dosomething()) //5
// 8

// 14:45 time to get the kids