/* JS120 - Object Oriented JavaScript > Easy > 7. What Will This Do?

What Will This Do?

What will the following code log? */

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

/* Solution

ByeBye
HelloHello

*/

/* Discussion

Here we see two methods named `dupdata` in the `Something` class. However, one is defined as `dupdata`, and is thus an instance method. The other has the `static` keyword in front of its name and so it is a static method. The two methods are different, and are completely independent of each other.

Our code first creates a `Something` object, and then logs the result of `Something.dupdata`, and then `thing.dupdata`. The former invocation calls the static method (`dupdata`), and so logs "ByeBye". The latter invocation calls the instance method, and so prints "HelloHello".

============
Elaine Vuong

This code snippet demonstrates instance methods and static methods. Instance methods are methods defined in a `class` definition WITHOUT the `static` keyword and static methods are methods defined in a `class` definition that begin with the `static` keyword.

Line 16 logs 'Byebye' and Line 17 logs 'HelloHello' to the console.

On Line 16 we invoke the `dupData` static method on the `Something` constructor, which causes `ByeBye` to be returned and logged to the console.

On Line 17 since `thing` is an instance of the `Something` class, this results in `thing.dupData` invoking the `dupData` instance method on the `thing` instance. Since `dupData` is invoked using method call syntax, then the execution context is the calling object, or `thing` (in other words - `this` contains a reference to the object thing). When we created `thing`, we created it with the `new` keyword and the `Something` constructor. Recall - within the context of a Constructor Function invocation, `this` refers to the new object, and as a result `thing` has a property `data` that contains the value 'Hello'. Therefore, since `thing` is the instance of the `Something` class, then `this.data` evaluates to `'Hello'` resulting in the string `'HelloHello'` being returned and logged to the console.

*/

