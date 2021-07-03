# Introduction to Programming: The Basics

## Data Types

JavaScript has five so-called **primitive data types:**

1. String
2. Number
3. Undefined
4. Null
5. Boolean

All other data types are **object type**. (ES6 introduces two additional primitive types: Symbol and BigInt.)

Data type values can be represented by **literals**. A literal is any notation that lets you represent a fixed value in source code. For instance, all of the following are literals in JavaScript:

    'Hello, world!'     // string literal
    3.141528            // numeric literal
    true                // boolean literal
    { a: 1, b: 2 }      // object literal
    [ 1, 2, 3 ]         // array literal
    undefined           // undefined literal

### Strings
- note that the quotes are syntactic components, not part of the value.

    > 'He said, "Hi there!"'    // with single quotes
    = 'He said, "Hi there!"'

    > "He said, \"Hi there!\""  // with double quotes and escaping
    = 'He said, "Hi there!"'

- Note that Node displays the return values with double quotes here. It ordinarily uses single quotes, but it switches to double quotes when the string's value contains any single quotes.

A similar technique works when the string contains a double-quote character: put the entire string inside single quotes or escape the double-quote characters.

    > 'He said, "Hi there!"'    // with single quotes
    = 'He said, "Hi there!"'

    > "He said, \"Hi there!\""  // with double quotes and escaping
    = 'He said, "Hi there!"'
- This time Node uses single quotes; that's the default.

Template Literals (backticks) enable an operation called **string interpolation**
    > `5 plus 5 equals ${5 + 5}`
    = '5 plus 5 equals 10'

String interpolation syntax:
`Blah ${expression} blah.`