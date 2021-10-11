/* SPOT Study Session with Iuliu

Introductions
- Iuliu
- Tristan (Edward)
- Edris
- Emma
- Laurent
- Jason
- Laurent
- H
- Chris, Phoenix, AZ, JS100

Answer Structure
- Answer the question directly => explain main points why
- detailed explanation of relevant lines
- Conclude with concept and specific aspect/rules illustrated

*/

// What will the `log` method call on line 7 output to the terminal and why? What is the underlying concept?

let pets = ['dragon', 'turtle'];

let newPets = pets;

pets = [];

console.log(newPets); // =>

/* This will log `[ 'dragon', 'turtle' ]`. Here, reassignment of an object's values without mutation doesn't change the value of the original variable. The variable `pets` is declared and assigned to the array `[ 'dragon', 'turtle' ] on line 1. On line 3 the variable `newPets` is assigned to the value of `pets`, so both variables point to the same array. On line 5 `pets` is reassigned to `[]`, but this reassignment doesn't affect the value of `newPets`. Thus, `console.log(newPets)` logs [ 'dragon', 'turtle' ].
*/

let pets = ['dragon', 'turtle']

let newPets = pets

pets = []

console.log(newPets)

/*

Set structure:
Answer directly the question => explain main points why

Detailed explanation of relevant lines.

Conclude with concept and specific aspect/rule illustrates

https://www.dmytronaida.com/2020/05/27/js109-written-assessment.html

*/

/*
Pauline's answer

Line 7 will log `[ 'dragon', 'turtle' ]` to the console

The reason is that newPets is pointed to the value of `['dragon', 'turtle']`

Line 1, we declare variable pets and it points to an array of pets
Line 3, we declare variable newPets and assign it to the value of variable pets
Line 5, we re-assign the value of pets to an empty array. This does not effect the value of newPets

This illustrates variables as pointers

IULIU

Line 1, we declare variable `pets` and assigned to an array.
Line 3, we declare variable `newPets` and assign it to the array value referenced by variable `pets`
Line 5, we re-assign the value referenced by `pets` to an empty array. This does not effect the value of newPets.

This illustrates variables as pointers

On line 1, the global variable `pets` is initialized to an array value. On line 2, the global variable `newPets` is initialized to the value referenced by the global variable `pets`. Now, each variable references the same array object in memory. On line 5, `pets` is reassigned to an empty array. The reassignment of `pets` doesn't affect what `newPets` references. Each variable points to a value and reassigning either one doesn't affect the other. So, on line 7, when the value referenced by `newPets` is

*/

/* EDWARD's ANSWER
Line 7 of the code logs ['dragon', 'turtle'] and returns undefined because re-assignment of a variable pointing to an array does not affect another variable pointing to the same array.

Specifically line 1 declares the global variable pets and initializes it to a value referencing/pointing to the array  ['dragon', 'turtle’].
Line 3 declares the global variable newPets and initializes it to a value also pointing to the array  ['dragon', 'turtle’].
Line 5 re-assigns pets to a reference to an empty array [].
Because re-assignment of pets does not affect the the reference stored in newPets, Line 7 outputs  ['dragon', 'turtle'] and returns undefined. */

/* emma

On line 7, `console.log` will log `['dragon', 'turtle']`. On line 5, we reassigned the `pets` variable to a new empty array, but this has no impact on `newPets`, which is still pointing at the original array created on line 1.

This is an example of variables as pointers. In JavaScript, a variable can be thought of as a name for a particular space in memory where information can be stored - the variable acts as a pointer to the memory address. For primitive data types, what's stored at the memory address is the value itself (like the number `56` or the string `lorem ispum`), whereas for objects what's stored is not the actual object but a pointer or reference to it. If you declare a variable and assign an array (or other object) to it, what's stored in the memory location indicated by the variable isn't the actual array, but a reference to it - essentially a second pointer. So when we reassign `pets` in the example above, we're merely pointing the variable at a new array, not actually mutating the original array from line 1. Meanwhile, `newPets` is still pointing at the original array, so it's not affected by the reassignment of `pets`.

*/

/*
Laurent's answer
This code will output `['dragon', 'turtle']` as the re-assignment of pets will not affect what `newPets` points to. It demonstrates the fact that variable act as pointers.

On line 1, we declare the variable `pets` and assign it an array `['dragon', 'turtle']`. On line 2, we declare the variable `newPets` and assign it the variable `pets`, which value is the pointer to `pets`. Then, online 3, we re-assign `pets` to a new array, so that it does not point to the original `['dragon', 'turtle']` array. But `newPets` still points to this original array, therefore, on line 4, we will log `['dragon', 'turtle']`.
*/

/* HyoSung
This will log `[ 'dragon', 'turtle' ]`. Here, reassignment of an object's values without mutation doesn't change the value of the original variable. The variable `pets` is declared and assigned to the array `[ 'dragon', 'turtle' ] on line 1. On line 3 the variable `newPets` is assigned to the value of `pets`, so both variables point to the same array. On line 5 `pets` is reassigned to `[]`, but this reassignment doesn't affect the value of `newPets`. Thus, `console.log(newPets)` logs [ 'dragon', 'turtle' ].
*/

/*
Jason's Answer:
THe code will log `['dragon', 'turtle']` to the console.

On line 1, the variable `pets` is initialized the array `['dragon', 'turtle']`. On line 2, the variable `newPets` is initialized the reference contained within the variable `pets`. This reference points to the array object `['dragon', 'turtle']`.

On line 5, the pets variable is reassigned a reference that points to a new array object of value `[]`.

This demonstrates that the reassignment operation on `pets` does not affect the `newPets` variable hence the reference pointing to the object defined in line 1 is not lost and is logged in line 7.
*/


/*
- Edris

-  The array that the `newPets` variable points to is logged to the console on line 7. An empty array is returned on line 5 as a reassignment of the `pets` variable. The concept being demonstrated is `Variables as Pointers`, and how if you reassign the value of 1 variable, it does not affect the value of the other. Since `pets` is reassigned, the `newPets` variables pointer is not reassigned along with it, and still points to the original `pets` array.
*/



/*
Chris answer: The log method on line 7 will call the original array value of ['dragon', 'turtle']
Reassigning a new value on line 5 for the variable pets does not change the value of the variable newPets on line 3.
This is because variables are not deeply linked to each other.

Iuliu Pop (JS239)  2 hours ago
Here's my full revised answer:
Line 7, `log` method call with the value referenced by the `newPets` global variable passed in as an argument will output `[ 'dragon', 'turtle' ]`, because:
1) `newPets` is initialized to the value referenced by the global variable `pets`
2) `newPets` isn't reassigned to another value
On line 1, the global variable `pets` is initialized to an array value. On line 2, the global variable `newPets` is initialized to the value referenced by the global variable `pets`. Now, each variable references the same array object in memory. On line 5, `pets` is reassigned to an empty array. The reassignment of `pets` doesn't affect what `newPets` references. Each variable points to a value and reassigning either one doesn't affect the other. On line 7, when the value referenced by `newPets` is passed as an argument to the `log` method call, `newPets` still references the array `['dragon', 'turtle']`.
This illustrates the concept of variables as pointers. A variable cannot point to another variable. Variables always point to values in memory. If a variable is assigned to another variable, it points to the value referenced by the other variable. When a variable is reassigned, it is reassigned without affecting what other variables point to. (edited)
*/