/* Reversing and Combining Text - 6 kyu

Your task is to Reverse and Combine Words. It's not too difficult, but there are some things you have to consider...
So what to do?

Input: String containing different "words" separated by spaces

1. More than one word? Reverse each word and combine first with second, third with fourth and so on...
   (odd number of words => last one stays alone, but has to be reversed too)
2. Start it again until there's only one word without spaces
3. Return your result...

Some easy examples:

Input:  "abc def"
Output: "cbafed"

Input:  "abc def ghi 123"
Output: "defabc123ghi"

Input:  "abc def gh34 434ff 55_eri 123 343"
Output: "43hgff434cbafed343ire_55321"

PROBLEM
- input: string of words separated by spaces
- output: one long string

Rules
- return a contiguous string of chars
  - if one word, return word
  - if two words, reverse each word and combine first with second
  - if three words (odd number) reverse each word, combine first and second and join with third
  - if more than three words, reverse each word, combine first and second, third with fourth and so on and join all together
- implicit that words are separated by spaces
- nonletters and numbers are parts of words

EXAMPLES
- 'abc def' --> 'cba fed' => 'cbafed'
- 'abc def ghi jkl' --> 'cba fed ihg lkj' -> fedcba
  */

function reverseAndCombineText(str) {
  let words = str.split(' ').filter((word) => word);
  // console.log(words); [ 'abc', 'def', 'ghi', 'jkl' ]

  while (words.length > 1) {
    words = words.map((word) => word.split('').reverse().join(''));
    // console.log(words)
    // [ 'cba', 'fed', 'ihg', 'lkj' ]
    // ['defabc', 'jklghi'];
    let newWords = [];
    for (let idx = 0; idx < words.length; idx += 2) {
      if (idx === words.length - 1) newWords.push(words[idx]);
      else newWords.push(words[idx] + words[idx + 1]);
    }

    words = newWords;
  }

  return words[0];
}

console.log(reverseAndCombineText('dfghrtcbafed') === 'dfghrtcbafed');

console.log(reverseAndCombineText('abc def') === 'cbafed');

console.log(reverseAndCombineText('abc def ghi jkl') === 'defabcjklghi');

console.log(
  reverseAndCombineText('234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44') ===
    'trzwqfdstrteettr45hh4325543544hjhjh21lllll'
);

console.log(reverseAndCombineText('sdfsdf wee sdffg 342234 ftt') === 'gffds432243fdsfdseewttf'
);
