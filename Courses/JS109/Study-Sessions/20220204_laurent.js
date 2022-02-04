/* 1180. Count Substrings with Only One Distinct Letter

Given a string s, return the number of substrings that have only one distinct letter.

Constraints:
  1 <= s.length <= 1000
  s[i] consists of only lowercase English letters.

PROBLEM
- input a string
- output a number

Rules
- return the number of substrings that have only one distinct letter
- input is lowercase letters

EXAMPLES
- 'aaaba' => 8

Explanation: The substrings with one distinct letter are "aaa", "aa", "a", "b".
"aaa" occurs 1 time.
"aa" occurs 2 times.
"a" occurs 4 times.
"b" occurs 1 time.
So the answer is 1 + 2 + 4 + 1 = 8

DATA STRUCTURE
- input string
- intermediary: array
- output: number

ALGORITHM
- input string
- get all substrings of string with helper function
- iterate through substrings
  - initialize `count` to 0
  - if every char in substring 

getSubstrings
- input string
- initialize `substrings` to empty array
- iterate through string
- split string into chars
  - slice string into substrings
  - append substrings to `substrings`
- join 
- return `substrings`

Declare a helper function `numberOfsubstrings` that would take a string an return the number of substrings = summing index from 1 to string.length

** Slice the string for each letter change, put all strings in an array **

for each string, the number of substrings through the helper function (map)
Then sum the number of substrings
*/

// "aab" => ["aa", "b"]

function countLetters(string) {
  let result = [];
  let current = '';

  for (let idx = 0; idx <= string.length; idx++) {
    current += string[idx];

    if (string[idx + 1] !== string[idx]) {
      result.push(current);
      current = '';
    }
  }

  return result
    .map((substring) => numberOfSubstrings(substring))
    .reduce((sum, num) => sum + num, 0);
}

function numberOfSubstrings(string) {
  let sum = 0;

  for (let number = 1; number <= string.length; number += 1) {
    sum += number;
  }

  return sum;
}

// version getting all substrings
function countLetters(string) {
  let substrings = getSubstrings(string); // [ 'a', 'aa', 'aab', 'a', 'ab', 'b' ]
  return substrings.filter((substring) => {
    return substring.split('').every((char, _, array) => char === array[0]);
  }).length;
}

function getSubstrings(string) {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx++) {
    for (let jdx = idx + 1; jdx <= string.length; jdx++) {
      substrings.push(string.slice(idx, jdx));
    }
  }

  return substrings;
}

console.log(countLetters('aab')); // 4
console.log(countLetters('aaaba')); // 8

console.log(countLetters('')); // 0
console.log(countLetters('a')); // 1   1
console.log(countLetters('ab')); // 2
console.log(countLetters('aa')); // 3   1 + 2
console.log(countLetters('aaa')); // 6    1 + 2 + 3
console.log(countLetters('aaaa')); // 10    1 + 2 + 3 + 4
console.log(countLetters('aaaba')); // 8
console.log(countLetters('aaaaaaaaaa')); // 55

// console.log(numberOfSubstrings("aaaaaaaaaa"));  //55  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

/*
Solution
Approach 1: Arithmetic Sequence
Intuition

Note that given a string s, there are:

substrings with size 1: len(s);

substrings with size 2: len(s) - 1;

...

substrings with size len(s) - 1: 2;

substrings with size len(s): 1.

Therefore, the number of substrings of s is 1 + 2 + ... + (len(s) - 1) + len(s), which is an Arithmetic Sequence. If you are familiar with the Sum Equation of Arithmetic Sequence, it's obvious that the number of substrings is (1 + len(s)) * len(s) / 2. If not, I'll also provide a rough analysis here for your reference.

Given a list of numbers 1, 2, 3, ..., n-1, n, an interesting fact is that:

1 + n = n + 1
2 + (n - 1) = n + 1
3 + (n - 2) = n + 1
...
If n is an even number, there would be n / 2 pairs of numbers summed to n + 1. Hence the sum of all numbers is simply (1 + n) * n / 2. Moreover, this applies to cases when n is an odd number!

Notice that, if a string contains only one distinct letter, all of its substrings are formed by one distinct letter as well. For example, all substrings of aaa contain only one distinct letter a: a, aa, and aaa. Therefore, to find the number of substrings that contain only one distinct letter, we can first find the longest continuous segments with only one distinct letter; then we can apply the formula mentioned above to calculate the number of substrings of each segment.

Recursion Tree Figure

Figure 1. Find the longest continuous segments with one distinct letter and count the substrings.

Algorithm

Initialize an integer variable total to count the number of substrings along with the iteration; initialize two pointers left and right which mark the beginning and the end of the substring that contains only one distinct letter.
Iterate through S:
If we do not reach the end and the new character S[right] is the same as the beginning one S[left], increment right by 1 to keep exploring S;
otherwise, calculate the length of the substring as right - left and apply the Sum Equation of Arithmetic Sequence; remember to set right as left to start exploring the new substring.

Complexity Analysis

Time Complexity: \mathcal{O}(N)O(N), where NN is the length of S. This is because we iterate through S once.
Space Complexity: \mathcal{O}(1)O(1). This is because we do not use additional data structures.
Approach 2: Dynamic Programming
Intuition

Given a string S, we may define an integer array substrings[] with a length of len(S), such that substrings[i] is the number of substrings ending with S[i] which contains only one distinct letter S[i]. Therefore, if S[i] == S[i - 1], substrings[i] would be substrings[i - 1] + 1 where 1 refers to the substring containing only S[i]; else if S[i] != S[i - 1], substrings[i] would be 1.

Current
1 / 10
For those who like mathematical definitions, you may find the state transition function as follows. Otherwise, feel free to skip this part.

\text{substrings}(i)=\begin{cases} \text{substrings}(i - 1) + 1, & \text{if $\text{S}[i - 1] == \text{S}[i]$}\\ 1, & \text{otherwise} \end{cases}substrings(i)={ 
substrings(i−1)+1,
1,
​
  
if S[i−1]==S[i]
otherwise
​
 

Algorithm

Initialize an integer total to count the number of substrings during the iteration, and an integer array substrings to record the number of substrings ending with S[i] containing only one distinct letter S[i].
Initialize substrings[0] to 1.
Iterate S skipping the first element as we've initialized substrings[0]:
if S[i-1] == S[i], set substrings[i] to substrings[i-1] + 1;
else, set substring[i] to 1.
increment total by substrings[i].

Note that substrings[i] only depends on substrings[i - 1], therefore instead of using an array, we can use an integer variable count to keep track of substrings[i] to improve the space complexity from \mathcal{O}(N)O(N) to \mathcal{O}(1)O(1).


Complexity Analysis

Time Complexity: \mathcal{O}(N)O(N), where NN is the length of S. This is because we iterate through S once.
Space Complexity: \mathcal{O}(1)O(1). The original implementation of this dynamic programming approach takes \mathcal{O}(N)O(N) space complexity as it uses an array with a size of len(S). With the optimization, we achieve \mathcal{O}(1)O(1) space complexity because we do not use additional data structures.
*/

