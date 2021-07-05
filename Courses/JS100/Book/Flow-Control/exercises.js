// Flow Control Exercises

// 1. What values do the following expressions evaluate to?

// false || (true && false); // false
// true || 1 + 2;  // true
// 1 + 2 || true; // 3
// true && 1 + 2; // 3
// false && 1 + 2; // false
// 1 + 2 && true; // true
// 32 * 4 >= 129; // false
// false !== !true; // false
// true === 4; // false
// false === (847 === "847"); // true
// false === (847 == "847"); // false
// !true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true

// Remember that expressions involving the logical operators of || and && use short-circuit evaluation; they also return truthiness values.

// The last expression needs some explanation:

// !true || !(100 / 5) === 20 || 328 / 4 === 82 || false; // true

// 1. !true is false
// 2. !(100 / 5) === 20) is also false because !(100 / 5) is a boolean value, and === always returns false when the operands have different types.
// 3. ((328 / 4) === 82) is true
//4. Put together, items 1-3 combine with || as (false || false || true), which is true.
// 5. Using the value from item 4 results in true || false, which is true.

