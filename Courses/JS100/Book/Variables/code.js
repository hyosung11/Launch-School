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

let name = 'Victor';
console.log('Good Morning, ' + name);   // => Good Morning, Victor
console.log('Good Afternoon, ' + name); // => Good Afternoon, Victor
console.log('Good Evening, ' + name);   // => Good Evening, Victor

name = 'Joe';                           // no error!
console.log('Good Morning, ' + name);   // => Good Morning, Joe
console.log('Good Afternoon, ' + name); // => Good Afternoon, Joe
console.log('Good Evening, ' + name);   // => Good Evening, Joe

