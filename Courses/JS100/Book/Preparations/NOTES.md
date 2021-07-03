# Exercises Notes

## 5. Identify the Constructors for each of the following methods and classify each method as either a "Static" or a "Prototype" method:

| Method Name  | Constructor | Method Type      |
| :---         | :----       |:---              |
| `substring`  | `String`    | Prototype Method |
| `create`     | `Object`    | Static method    |
| `fromCharCode`|`String`    |Static method     |
| `slice`| `Array`, `String` | Prototype method |
|`toString` | `String`, `Object`, `Array`,`Number` | Prototype method|

## 6. Which of the following names satisfy the style guidelines for variable names? For the purposes of this question, constants are not variables.

Acceptable names: `index`, `lazyDog`, `operand2`

## 7. Which of the following names satisfy the style guidelines for function names?

Acceptable names: `index`, `lazyDog`, `operand2`, `CatName` —variable names and function names generally have the same guidelines, but constructor functions can use PascalCase names like `CatName`.

## 8. Which of the following names satisfy the style guidelines for constants used to represent magic numbers?

Acceptable names: `BIG_NUMBER`.

## 9. Which of the following names don't satisfy the style guidelines for naming variables, functions, or constants?

Unacceptable names: `snake_case` and `quick_Fox` contain underscores; underscores are permitted in constant names, but these aren't constant names since they use lowercase letters. `1stCharacter` isn't valid at all: names may not begin with a digit.