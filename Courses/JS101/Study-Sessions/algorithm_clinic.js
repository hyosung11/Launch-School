/* Use the PEDAC process to get a start on solving the problem below...
# ... but STOP when you finish writing your algorithm.
# Then let your partner know you're done.
# Once each of you finish, switch "computers" by moving your avatar across the table
# Copy and paste your partner’s algorithm to your own repl or code editor
# Code up a solution to the problem that your partner was given
# If you have any trouble interpreting their algorithm, ask them to adjust it
# Good luck!!

ANAGRAM

# Given a string and array of subarrays that could contain string elements, return an integer representing the number of times an anagram of the given string occurs in the collection. Two words are anagrams if they contain the same letters in the same quantities; in other words, to create an anagram from a word, you must scramble the word’s letters but not add or delete any letters. Note that two words are not considered anagrams if they are the same word.

# Javascript test cases:
console.log(anagramCounter('reap', [['scram', 'beat', 45, null, 'pear'], [true, 'reap']]) == 1);
console.log(anagramCounter('meat', [['meat', 'mate', 'meaty', 'matey'], ['tame', 'team']]) == 3);
console.log(anagramCounter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3);
console.log(anagramCounter('veil', [['VILE', 'evil'], []]) == 2);

# Ruby test cases:
p anagram_counter('reap', [['scram', 'beat', 45, nil, 'pear'], [true, 'reap']]) == 1
p anagram_counter('meat', [['meat', 'mate', 'meaty', 'matey'], ['tame', 'team']]) == 3
p anagram_counter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3
p anagram_counter('veil', [['VILE', 'evil'], []]) == 2

==============================================================

# PEDAC => process the problem (PEDA) and code with intent (C)

PROBLEM
Identify expected input and output

- input: string and array of subarrays
- output: integer

Problem Domain (including implicit requirements)

Make the requirements explicit (clarifying questions)
- return an integer representing the number of times an anagram of the given string occurs in the collection

Identify rules
- anagram if the contain the same letters in the same quantities
- scramble word's letters but not add or delete any letters
- two words that are the same word are not anagrams

Mental model of the problem (optional)

EXAMPLES / TEST CASES
Validate understanding of the problem

Examples:
# Javascript test cases:
console.log(anagramCounter('reap', [['scram', 'beat', 45, null, 'pear'], [true, 'reap']]) == 1);
console.log(anagramCounter('meat', [['meat', 'mate', 'meaty', 'matey'], ['tame', 'team']]) == 3);
console.log(anagramCounter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3);
console.log(anagramCounter('veil', [['VILE', 'evil'], []]) == 2);

Edge Cases?

DATA STRUCTURE
How we represent the data that we will work with when converting the input to output.

- input: string, array with subarrays
- intermediary: string
- output: integer

ALGORITHM
1. Declare a function with two parameters, a string and an array with subarrays.
2. Initialize variable to capture the string argument
3. Initialize variable to count the number of anagrams in the array
4. Loop through the array to see if any combination of letters matches the string to make an anagram
  - An anagram contains the same letters in the same quantities as the string
  - anagram has same letters but no added or deleted letters
  - two words that are the same words are not anagrams
5. If any elements in the array match the string, increase the count of anagrams.
6. Return the count as an integer representing the number of anagrams in the array.

Revised by Stan
ALGORITHM
1. Declare a function with two parameters, a string and an array with subarrays.
2. Initialize variable to capture the string argument
3. Initialize variable to count the number of anagrams in the array
4. Loop through the elements of the flattened array
For each element (word) of the subarray that is an anagram, increase the count by 1.
  - Return false if word is same as string
  - Return true if sorted word is same as sorted string
    - Sort alphabetically
  - Else return false
5. Return the count as an integer representing the number of anagrams in the array.

CODE
Implementation of Algorithm

- test code while programming

console.log(
  anagramCounter('reap', [
    ['scram', 'beat', 45, null, 'pear'],
    [true, 'reap'],
  ]) == 1
);
console.log(
  anagramCounter('meat', [
    ['meat', 'mate', 'meaty', 'matey'],
    ['tame', 'team'],
  ]) == 3
);
console.log(anagramCounter('VEIL', [['VILE', 'vile', 'evil'], []]) == 3);
console.log(anagramCounter('veil', [['VILE', 'evil'], []]) == 2);
*/

/* PUNCTUATION ALGORITHM

Stan's Exercise

# Use the PEDAC process to get a start on solving the problem below...
# ... but STOP when you finish writing your algorithm.
# Then let your partner know you're done.
# Once each of you finish, switch "computers" by moving your avatar across the table
# Copy and paste your partner’s algorithm to your own repl or code editor
# Code up a solution to the problem that your partner was given
# If you have any trouble interpreting their algorithm, ask them to adjust it
# Good luck!!

# Given an array of strings in which each string may or may not contain punctuation, return a copy of the array in which the alphabetical characters are in reverse order, but the punctuation stays in the same place. 

# Javascript test cases:
console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'"])) // ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"];
console.log(preservePunctuation(["'eard", "why??", "peter", "rabbit", ''])); // ["'drae", "yhw??", "retep", "tibbar", ''];

# Ruby test cases:
p preserve_punctuation(["shan't", "won't", "y'all'rn't", "fixin'"]) == ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"]
p preserve_punctuation(["'eard", "why??", "peter", "rabbit", '']) == ["'drae", "yhw??", "retep", "tibbar", '']

### Algo

loop through given array and use return value as transformation of each element
  for each word
    Create an array of the characters in word
    find indices of all letters
      iterate through characters and add index to indices array if it is a letter
    collect all letters belonging to those indices (collected_letters)
      iterate through indices array and use the character at that index as return value
    reverse the collected letters
    loop through each character of the word
      if it is a letter, reassign this element to first letter in the collected_letters collection
        and remove that letter from the collection
    end
    join the array with the reassigned elements to a string
  end
end
*/

function preservePunctuation(array) {
  let reversedArray = [];


}


// Javascript test cases:
console.log(preservePunctuation(["shan't", "won't", "y'all'rn't", "fixin'"])) // ["tnah's", "tno'w", "t'nrl'la'y", "nixif'"];
console.log(preservePunctuation(["'eard", "why??", "peter", "rabbit", ''])); // ["'drae", "yhw??", "retep", "tibbar", ''];