/* 28. Implement strStr() - Easy

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:

Input: haystack = "", needle = ""
Output: 0

Constraints:

    0 <= haystack.length, needle.length <= 5 * 104
    haystack and needle consist of only lower-case English characters.

*/

function strStr(haystack, needle) {
  if (needle === '') return 0;
  if (haystack.includes(needle)) return haystack.indexOf(needle)
  return -1;
};

console.log(strStr('', ''));
// Output: 0

console.log(strStr("hello", "ll"));
// Output: 2

console.log(strStr("aaaaa", "bba"));
// Output: -1

/* Success Details >

Runtime: 60 ms, faster than 99.61% of JavaScript online submissions for Implement strStr().

Memory Usage: 42.4 MB, less than 10.92% of JavaScript online submissions for Implement strStr().

Next challenges:
- Shortest Palindrome
- Repeated Substring Pattern

Time Submitted | Status | Runtime | Memory | Language
02/03/2022 14:24| Accepted | 60 ms | 42.4 MB | javascript */