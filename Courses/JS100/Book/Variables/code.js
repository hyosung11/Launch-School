// Exercises

// 3. What happens when you run the following program? Why do we get that result?

// {
//   let foo = "bar";
// }

// console.log(foo); // ReferenceError: foo is not defined

// The program outputs an error since foo is out of scope: the let statement creates variables with block scope, which limits the visibility of the variable to the block. Even though console.log(foo) comes after the declaration and initialization of foo, we still get an error since we declared foo inside the block. Outside the block, foo doesn't exist.

// 4. What happens when you run the following code? Why?

// const NAME = "Victor";
// console.log("Good Morning, " + NAME);
// console.log("Good Afternoon, " + NAME);
// console.log("Good Evening, " + NAME);

// NAME = "Joe"; // TypeError: Assignment to constant variable.
// console.log("Good Morning, " + NAME);
// console.log("Good Afternoon, " + NAME);
// console.log("Good Evening, " + NAME);

// The program first greets Victor 3 times. It then encounters an error on line 20, which prevents it from greeting Joe. The problem is that constants are, well, constant. You can't reassign a constant after defining it. You must use regular variables instead:

// let name = 'Victor';
// console.log('Good Morning, ' + name);   // => Good Morning, Victor
// console.log('Good Afternoon, ' + name); // => Good Afternoon, Victor
// console.log('Good Evening, ' + name);   // => Good Evening, Victor

// name = 'Joe';                           // no error!
// console.log('Good Morning, ' + name);   // => Good Morning, Joe
// console.log('Good Afternoon, ' + name); // => Good Afternoon, Joe
// console.log('Good Evening, ' + name);   // => Good Evening, Joe

//5. Take a look at this code snippet:

// let foo = 'bar';
// {
//   let foo = 'qux';
// }

// console.log(foo); // => bar 

// The program logs bar.

// Line 39 initializes a variable named foo with the value'bar'. Line 40 starts a block, which creates a new scope for let variables. The variable on line 39 is still visible at this point, but line 41 declares a new variable named foo that shadows (hides) the variable from line 39. This second variable gets initialized to 'qux', but it goes out of scope on line 42 when the block ends. That brings foo from line 39 back into scope, so line 46 logs its value: bar.

// 6. Will this program produce an error when run? Why or why not?

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO); // => bar

// For much the same reason as the previous exercise, this program doesn't raise an error, and it logs bar on line 6. One key difference, though, is that we are using const instead of let, which may have led you to believe an error would occur on line 3. However, since the two const variables are separate entities, no error occurs.