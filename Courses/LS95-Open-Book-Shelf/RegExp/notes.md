# Regular Expressions

## Introduction

### What Are Regular Expressions?

Some of the most common tasks in computing involve testing, analyzing, and modifying strings. For example, you may want to change names in a file from "First Last" format to "Last, First," or you may need to search for "Launch School" or "launchschool" in a document. This universe is home to **regular expressions**.

For simplicity, we'll use the term **regex** (pronounced "redj-ex") to refer to regular expressions. We use regex as both a singular and plural form; regexes is a bit of a mouthful.

Regex are **patterns** that we can use to search for information of interest in a set of strings. We can use them to perform conditional tests, extract desired information, or even modify information. If you've ever used wildcards on your computer, you can think of regex as the grown-up version of these simple search patterns.

We sometimes use the terms regex and pattern interchangeably; you'll find this elsewhere as well. For our purposes, we try to use the term "regex" to refer to the final form of a single regular expression used in a program, while "pattern" refers to the individual components that comprise the regex. However, the regex is sometimes called a pattern as well, and we sometimes do that too.

Regex are present all over the place. You'll find them in nearly every programming language that you use. This book concentrates on the Ruby and JavaScript implementations, but much of it applies regardless of which application you use.

### What Are Regex Used For?

Regex have numerous uses; we've given you a mere sampling of the types of problems that you can solve with regex.

* Check whether the pattern `ss` appears in the string `Mississippi`.
* Check whether the letter `i` occurs three or more times in `Mississippi`.
* Find and replace all instances of `Mrs` with `Ms` in a document.
* Does a file name begin with `Bob` and end with `.txt` or `.md`?
* Does a string have any non-alphanumeric characters in it?
* Did the user enter a valid integer?
* Are there any whitespace characters in the string?
* Find and replace all non-alphanumeric characters in a string with `-`.
* Locate all email addresses in a document.
* Split a line of text into fields assuming that each whitespace character delimits two values.

This book will help you deal with these tasks by using regex.

### A First Taste

At their most basic, regex are strings of characters between two `/` characters, e.g., `/cat/`. This regex matches the string cat anywhere it occurs in some text. For example, `/cat/` matches `cat`, `scat`, `catalog`, and even `scatter`. It does not, however, match `Cat` or `c a t`.

Such simple patterns are useful, but you can typically find a more straightforward way to write your code. However, when you go a bit deeper, you run into regex like `/\bhttps?:\/\/\S+\?/` which looks like gibberish. It is useful, though: it matches any web URL that contains a query string, regardless of whether the URL uses the HTTP or HTTPS scheme. This example hints at the expressiveness and power available with regex, and you will soon learn how to write them.

### Do I Have to Know About Regex?

Technically no, but we expect you to know the basics to make your way through the Launch School curriculum. Everything that you can do with regex you can without them. However, that doesn't mean it is easy. There is an incredible amount of expressiveness in regex that is exceptionally difficult to emulate using your language's non-regex facilities.

The more accurate answer is that you must know the basics of regex, and that's what this book teaches. You don't need to be an expert, but you do need to recognize and understand regex when you see them. Knowing regex helps you solve complex pattern matching problems, even without knowing the more advanced details.

### How Often Will I Use Regex?

That depends on the types of programs you work on in the future. If you never do any string processing -- a rare situation -- you won't use regex in your programs often. However, if you do any string processing at all, regex will help you do your job. The more string processing you do, the more you can expect to use regex.

## Preparations

### What Do I Need to Know?

The sole prerequisite for this book is a familiarity with Ruby, JavaScript, or a similar language. It is for students who need to learn about regex in general, so it strives to be language-agnostic and does not rely heavily on knowledge obtained elsewhere. However, some of the examples and exercise solutions use Ruby and JavaScript as the languages of choice. If you have experience with Python, Perl, or PHP, you should be able to get by, even if you don't know Ruby or JavaScript well.

Don't let this stop you if you are learning regex for a different language; regex have some variants, but the basics are compatible across languages. Learning regex for Ruby and JavaScript will help you in any application that supports regex. Read the subsection on Variants in the Conclusion if you must learn regex for another language.

That said, you should find the regex documentation for your software and keep it close by for reference. Once you've learned the basics, use the documentation to gain proficiency with regex. In particular, rubyists should find the documentation for the [Regexp](https://ruby-doc.org/core-3.0.3/Regexp.html) class valuable, while JavaScripters need the [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) documentation (note the capitalization). Both languages provide support for commonplace regex operations with their respective String classes.

### Useful Learning Resources

If you are working in Ruby, [Rubular](https://rubular.com/) is a great way to explore how regex interact with the strings you want to process. If you are working in JavaScript, [Scriptular](https://scriptular.com/) is similar. Both pages let you enter regex and sample strings to test the regex against, alter the regex options, and provide a handy quick reference. These services are so useful that we rely heavily on them to demonstrate how regex work with various strings.

Due to differences in the way Rubular and Scriptular work, we use Rubular for our discussions. Even if you are learning regex for JavaScript, we recommend that you use Rubular while working through this book. If you use Scriptular instead, the results may be confusing. In particular, Scriptular handles newlines differently from Rubular and this alters the results expected with some problems. Scriptular also requires the `/g` option to show multiple matches on a single line.

When we talk of Rubular and Scriptular, we'll often say that a regex **highlights** or **lights up** a particular string or strings. this shorthand is another way of saying that Rubular or Scriptular highlight the indicated items when it applies a regex to some test data.

Summary

With this basic information out of the way, you are now ready to make your first dive into the world of regex. Enjoy!

## Basic Matching

In this section, we'll get our feet wet in the calmer waters of the regex ocean with a quick introduction to regex patterns, namely those that match substrings. We'll also touch on some more intricate patterns, namely those that can match one of two or more subpatterns.

We will run most of our examples through Rubular, so please go ahead and open it now. You can enter each pattern, and see what happens when you attempt to match them against a variety of different strings. Watch for how Rubular highlights matched characters; it shows you what your regex matches. Note that you can enter multiple lines in the test strings area.

JavaScript programmers can use Scriptular instead of Rubular to test regex. However, there are some differences in behavior from Rubular. Our narrative uses Rubular's behavior; avoid confusion and use it for this book even if you're learning regex for JavaScript.

Note that Rubular provides the `/` characters that delimit regex. You shouldn't enter the `/` characters yourself when entering them in Rubular. However, remember that you need them in your programs.

### Alphanumerics

The most basic regex of all is one that matches a specific alphanumeric character. You can construct such a regex by placing the letter or number of interest between two slashes (`/`).

For example, `/s/` matches the letter `s` anywhere it appears inside a string. It matches `s`, `sand`, `cats`, `cast`, and even `Mississippi`. In this last example, `/s/` matches four times, at each of the occurrences of `s` in the string.

When we say that `/s/` matches four times, we refer specifically to how regex work in Rubular. By default, in most languages, a regex matches each string once or not at all; that is, regex matching is a boolean operation. We won't mention this again until near the end of the book.

Note, however, that `/s/` does not match `S` or `KANSAS`. Regex are case sensitive by default, so if you want to match a capital S, you need to specify `/S/`.

Go ahead and give this a try in Rubular: enter the regex `/s/`, then enter the following strings:

```sh
s
sand
cats
cast
Mississippi
S
KANSAS
```

Rubular should highlight all the `s` characters in the "Match result" box, thus showing where the regex matches. However, the regex doesn't highlight the uppercase `S` characters; it doesn't match the last two strings. If you change the regex to `/S/`, Rubular should light up all the `S` characters, but not the `s`-es.

Great. This discussion is interesting, but how do you put it to use in a real program? Regex usage in a program is language dependent, and also dependent upon what you need to do. As a starter, though, we can use the `match` method from the Ruby and JavaScript String classes.

Ruby

```ruby
str = 'cast'
print "matched 's'" if str.match(/s/)
print "matched 'x'" if str.match(/x/)
```

JavaScript

```js
let str = 'cast';
if (str.match(/s/)) {
  console.log("matched 's'");
}

if (str.match(/x/)) {
  console.log("matched 'x'");
}
```

Both of these print `matched 's"` since `str` contains the letter 's', and neither prints `matched 'x'` since `str` does not contain the letter `'x'`.

If you aren't acquainted with `match`, you can learn enough with a few minutes of skimming the documentation. We won't use anything more complex than the basic form of `match` that takes a single regex argument and a String caller. You can ignore the rest of the documentation for now.

### Special Characters

Regex can also match non-alphanumeric characters. However, some of those have special meaning in a pattern and require specialized treatment. Others have no additional interpretation and need no special treatment.

The following special characters have special meaning in a Ruby or JavaScript regex:

`$ ^ * + ? . ( ) [ ] { } | \ /`

We call such characters *meta-characters*. If you want to match a literal meta-character, you must *escape* it with a leading backslash (`\`). To match a question mark, for instance, use the regex `/\?/`. Go ahead and try`/\?/` now with these strings (and some of your own if you aren't sure what will happen):

Inside [square brackets], the rules for meta-characters change. We'll talk about meta-characters in "character classes" a little later.

Some variants of regex have different meta-characters, and some reverse the sense of escaped characters. In `vim`, for example, `\(` and `\)` are meta-characters, while `(` and `)` match literal parentheses. This reversal can be confusing, but you must be aware of it.

In recent years, programs that use regex have begun to support multiple regex styles. `vim`, for instance now has what it calls *extended syntax* which provides enhanced regex, and also lets you swap the way escaped characters work. You can choose to use `(` and `)` for grouping like most other programs, and use `\(` and `\)` for literal parentheses. Check your documentation to see whether your software supports different syntaxes.

```sh
?
What's up, doc?
Silence!
"What's that?"
```

You should find that `/\?/` matches all of the question marks in these strings. Try the same strings using `/?/` - you should see an error message instead:

`Target of repeat operator is not specified.`

The remaining characters aren't meta-characters; they have no extraordinary meaning inside a regex. Both colons (`':'`) and spaces (`' '`) fall into this category. You can use these characters without an escape since they have no special meaning inside a pattern. For example, try `/:/` against these strings:

```sh
chris:x:300
A thought; no, forget it.
::::
```

Try changing the regex to `/ /`.

As of this writing, Rubular does not detect a single space as a regex. Try `/[ ]/` instead - this is equivalent to `/ /`, but it works in Rubular.

Now change the regex to `/./` (that's a period between the `/` characters). Whoa! What happened here? Oh, right, `.` is a meta-character; you must escape it. Change the regex to `/\./` instead. That's better now. (We'll return to `/./` and why everything lit up in a later chapter.)

You don't need to memorize the list of meta-characters. You can escape all non-alphanumerics even when you don't need to. However, it's good to get a feel for which are meta-characters; unnecessary escapes make your regex harder to read. Keep the list of meta-characters handy until you have them fully loaded into your brain.

### Concatenation

You can *concatenate* two or more patterns into a new pattern that matches each of the originals in sequence. The regex `/cat/`, for instance, consists of the concatenation of the `c`, `a`, and `t` patterns, and matches any string that contains a `c` followed by an `a` followed by a `t`.

Give `/cat/` a try using the following strings:

```sh
cat
catalog
copycat
scatter
the lazy cat.
CAT
cast
```

If all went well, the first five strings matched the regex, but the last two did not. `CAT` didn't match since it is uppercase, and `cast` didn't match because `s` isn't part of the pattern.

The fact that we use a fancy name like concatenation should give you a hint that more is going on here than meets the eye. The patterns we concatenated are simple; they each match a single, specific character. We aren't limited to these simple patterns though; in fact, you can concatenate any pattern to another to produce a larger regex. There are no practical limits to the number of concatenations you perform other than the physical limitations of your hardware.

This fundamental idea is one of the more important concepts behind regex; **patterns are the building blocks of regex**, not characters or strings. You can construct complex regex by concatenating a series of patterns, and you can analyze a complex regex by breaking it down into its component patterns.

In theory, your computer's capacity to handle large regex places some limitations on the size and complexity of your regex. In practice, though, your ability to understand and maintain your code places more severe restrictions on it. Your head will reach the breaking point long before your computer does. You'll sometimes hear regex called write-only expressions or line noise because it's easy to write an unreadable and unmaintainable mess. Use regex not because you can; use them because your code demands them. Often, a bit of refactoring will eliminate the need for a complex regex.

### Alternation

In this section, we introduce alternation, a simple way to construct a regex that matches one of several sub-patterns. In its most basic form, you write two or more patterns separated by pipe (`|`) characters, and then surround the entire expression in parentheses. For example, try the regex `/(cat|dog|rabbit)/` with the following strings:

```sh
The lazy cat.
The dog barks.
Down the rabbit hole.
The lazy cat, chased by the barking dog,
dives down the rabbit hole.
catalog
The Yellow Dog
My bearded dragon's name is Darwin
```

As with other patterns, case matters, so the `Dog` in `The Yellow Dog` is not matched.

As with concatenation, there are no built-in restrictions on alternation.

Even though parentheses and pipes are meta-characters that require escaping, we don't do that here. We aren't performing a literal match, but are instead using the "meta" meaning of those characters.

To see the difference, give the regex `/\(cat\|dog\)/` a try with the following strings:

```sh
(cat|dog)
bird(cat|dog)zebra
cat
dog
```

You'll notice this time that we don't match either cat or dog; since we escaped everything, the regex matcher looks for literal instances of those characters and doesn't treat them as an alternation operation.

### Control Character Escapes

Most modern computing languages use control character escapes in strings to represent characters that don't have a visual representation. For example, \n, \r, and \t are nearly universal ways to represent line feeds, carriage returns, and tabs, respectively. Both Ruby and JavaScript support these escapes, as do all regex engines. For example:

Ruby

```rb
puts "has tab" if text.match(/\t/)
```

JavaScript

```js
if (text.match(/\t/)) {
  console.log("has tab");
}
```

Both print `has tab` if `text` contains a tab character.

Note that not everything that looks like a control character escape is a genuine control character escape. For instance:

* `\s` and `\d` are **special character classes** (we'll cover these later)
* `\A` and `\z` are **anchors** (we'll cover these as well)
* `\x` and `\u` are special character code markers (we won't cover these)
* `\y` and `\q` have no special meaning at all

### Ignoring Case

As we've seen, regex are case sensitive by default. If you want to match a lowercase `s`, you need to use a lowercase `s` in your regex. If you want to match an uppercase `S`, you must use an `S` in your regex.

You can change this default behavior by appending an `i` to the close `/` of a regex, which makes the entire regex ignore case. For example, try the pattern `/launch/` against these strings:

```sh
I love Launch School!
LAUNCH SCHOOL! Gotta love it!
launchschool.com
```

You should see one match -- `launch` in the domain name. Now add an `i` option to the regex, i.e., `/launch/i` and try again. This time, Rubular will highlight all three instances of `launch` without regard to their case. Nifty!

There are other useful **options** like `/i`, but the options are language specific. We don't have a dedicated section to discuss any other options, some of which we'll meet later. See the documentation for your language of choice for complete list of available options.

The documentation calls these options **flags** or **modifiers**, but we can use all three terms interchangeably.

### Summary

The discussion so far is straight-forward. You've learned the basic regex syntax, seen an example of using regex, and played around with a few basic regex. You've also learned about one of the fundamental concepts behind regex: **concatenation of patterns**. In the next chapter, we'll explore a little further and examine regex that can match any set of characters.

But, before you proceed, take a little while to work the exercises below. In these exercises, use Rubular to write and test your regex. You don't need to write any code.

### Exercises

1. Write a regex that matches an uppercase K. Test it with these strings:

```sh
Kx
BlacK
kelly
```

Solution: `/K/`.
The correct matches are `K` at the beginning of line 1, and `K` at the end of line 2.

2. Write a regex that matches an uppercase or lowercase `H`. Test it with these strings:

```sh
Henry
perch
golf
```

Solution: `/h/i' or `/H/i'

An alternative solution is to use alternation: `/(h|H)/`
The correct matches are `H` at the beginning of line 1, and `h` at the end of line 2. Can you think of a situation where you might want to use alternation instead of the `i` option.

3. Write a regex that matches the string `dragon`. Test it with these strings:

```sh
snapdragon
bearded dragon
dragoon
```

Solution: `/dragon/`
The regex should match the word `dragon` at the end of lines 1 and 2.

4. Write a regex that matches any of the following fruits: banana, orange, apple, strawberry. The fruits may appear in other words. Test it with these strings:

```sh
banana
orange
pineapples
strawberry
raspberry
grappler
```

Solution: `/(banana|orange|apple|strawberry)/`
The solution matches everything except `raspberry`.

5. Write a regex that matches a comma or space. Test your regex with these strings:

```sh
This line has spaces
This,line,has,commas,
No-spaces-or-commas
```

Solution: `( |,)/`
The expression should match three spaces on line 1 and four commas on line 2.

6. Challenge: Write a regex that matches blueberry or blackberry, but write berry precisely once. Test it with these strings:

```sh
blueberry
blackberry
black berry
strawberry
```

Hint: you need both concatenation and alternation.

Solution: `/(blue|black)berry/`

The key to this challenge is that concatenation works with **patterns**, not characters. Thus, we can concatenate (blue|black) with berry to produce the final result.

The expression matches the first two lines.

How come the regex doesn't match `black berry`? Because of the space.

END Saturday, 20220115 @ 21:01

## Character Classes

Let's move out a little further into the regex waters, knee-deep, by wading into **character classes**, which are patterns that let you specify a set of characters that you want to match. We'll stick to the simple character class information in this section; later, we'll explore some handy shortcut patterns you can use to specify some of the most commonly needed classes. Right now, though, understanding how to *construct elementary classes* yourself is paramount.

### Set of Characters

Character class patterns use a list of characters *between square brackets*, e.g., `/[abc]/`. Such a pattern matches a **single** occurrence of any of the characters between the brackets. Try these regex:

```sh
/[FX]/
/[e+]/
/[abAB]/
/[*+]/
```

against the string `Four score + seven`. You should find that the third regex fails to match at all, while the other regex match at least one character in the string. (We'll come back to why we don't escape `*` and `+`.)

against the string `Four score + seven`. You should find that the third regex fails to match at all, while the other regex match at least one character in the string. (We'll come back to why we *don't escape* `*` and `+`.)

**Character class patterns** come in handy in all kinds of situations. For example, if a program wants a user to choose between five different options by entering a number between 1 and 5, you can validate that input with the regex `/[12345]/`. Likewise, you can validate a `y/n` prompt response with `/[nyNY]/`.

Single-character classes (e.g., `/[a]/`) are possible and even useful, though we won't get into that here. Don't automatically remove the brackets if you encounter one in code you're working on: it's probably there for a reason.

Character classes also come in handy when you need to check for uppercase and lowercase letters, but can't use the `i` flag to make the entire regex case insensitive. For example, `/[Hh]oover/` matches `Hoover` or `hoover`, but not `HOOVER`.

When writing character classes, it's good practice to *group characters by type*: digits, uppercase letters, lowercase letters, whitespace, and non-alphanumeric characters. You can arrange the groups in any order, though typically the non-alphanumerics come first or last in the character class. This practice aids **readability**.

Recall that you can *concatenate* any patterns, and that includes character classes. We did so earlier with `/[Hh]oover/`. You can also concatenate character classes. The regex `/[abc][12]/` matches any two characters where the first character is an `a`, `b`, or `c`, and the second is a `1` or a `2`. Try it with these strings:

```sh
a2
Model 640c1
a1 a2 a3 b1 b2 b3 c1 c2 c3 d1 d2 d3
```

Earlier, we used both `*` and `+` in our character classes; this deserves a bit of explanation. Recall that we said that `*` and `+` are meta-characters, and require a backslash-escape to retain their literal meaning? Well, we told a small lie. In fact, *the number of meta-characters dwindles to a handful inside a character class*:

`^` `\` `-` `[ ]`

Some of these meta-characters are only meta-characters *in certain situations*. For example, you can use `^` as a **non-meta-character** if it *isn't the first character* in the class, and you can use `-` as a **non-meta-character** if it *is the first character in the class*.

You can escape any of the special characters, even if you don't have to. Thus, `/[\*\+]/` is an acceptable, albeit less readable, equivalent to `/[*+]/`. As before, though, you should keep this list of class meta-characters handy until you know it by heart.

### Range of Characters

Sometimes, you'll find that your character class is a natural sequence of characters, such as the letters `a` through `z`. You can abbreviate these ranges inside character classes by specifying the starting character, a hyphen (`-`), and the last character. Thus, `/[a-z]/` matches any lowercase alphabetic character, `/[j-p]/` limits that to the letters `j` through `p`, while `/[0-9]/` matches any decimal digit. You can even combine ranges; suppose you need to match hexadecimal digits. If so, the following method could come in handy:

```rb
# Ruby
def hex_digit?(char)
  char.match(/[0-9A-Fa-f]/)
end
```

In this regex, we string together three separate ranges to produce the final character class that covers all hexadecimal digits, including both upper- and lowercase variants.

While it is possible to construct ranges that cover non-alphanumeric characters, *do not do this*. Stick to the alphanumeric characters. Also, don't try to combine lowercase and uppercase alphabetic characters in a single range: `/[A-z]/` does not do what you probably think it does. To see this, try `/[A-z]/` with the following strings:

```sh
The United Nations
The [eval] method
Some^weird_stuff
```

Rubular should highlight the brackets (`[, ]`), caret (`^`), and underscore (`_`) as matched characters. Change the regex to `/[A-Za-z]/` to highlight the alphabetic characters alone.

### Negated Classes

Another useful feature of character class ranges is **range negation**. Negations look like ordinary character classes, except the first character between the brackets is a caret (`^`). The negated class *matches all characters not identified in the range.*

At its simplest, you can have a negated character range for one character. For example, try `/[^y]/` with these strings:

```sh
yes
a
by
+/-
ABCXYZ
y
yyyyy
yyayy
```

As you can see, Rubular highlights everything in these strings except the `y` characters.

More generally, you can negate multiple characters. For instance, the pattern `/[^aeiou]/` matches any character but `a`, `e`, `i`, `o`, or `u`. Try `/[^aeiou]/` with:

```sh
Four Score And Seven
abcdefghijklmnopqrstuvwxyz
123 hello +/* bye
```

Here, everything except the lowercase vowels lights up.

Importantly, this example shows that *any* character means precisely that. Rubular highlights all the uppercase letters, lowercase consonants, numerics, spaces, and punctuation. It highlights everything but the lowercase vowels. Don't forget this, or you may one day end up learning a lesson the hard way.

In a slightly more subtle vein, what do you think happens in this code?

```rb
# Ruby
text = 'xyx'
puts 'matched' if text.match(/[^x]/)
```

```js
// JavaScript
let text = 'xyx';
if (text.match(/[^x]/)) {
  console.log('matched'); // => 'matched' truthy because there is a match to `y` in the string
}
```

If you said that the code doesn't output anything, you would be... WRONG! `/[^x]/` does in fact match `xyx`, so in both cases, the program outputs `matched`.

Why is that? Rubular (and Scriptular) show you which characters match each regex; what it doesn't show explicitly is that `match` *returns a truthy value when there is a match anywhere in the string*. Though Rubular shows `/[^x]/` matching the `y` in `xyx` and nothing else, `text.match` is still truthy.

Keep this in mind as you're starting out and using Rubular (or Scriptular) often to test your patterns; if you let the highlighted results mislead you, you'll soon find yourself puzzled. We could have pointed this out earlier, but this issue often occurs when using negated character classes.

### Summary of Character Classes

By now, you're probably starting to realize that regex have some unusual features, and you may even see how useful they can be. If you're still wondering where this is all going, though, we're getting there. First, though, we need to look at **shortcuts** for the most commonplace character classes.

Before we do that, we have some exercises for you. In these exercises, use Rubular to write and test your regex. You don't need to write any code, though you may need to use IRB or the JavaScript console for some items. We expect you to use character classes in these exercises; *do not use alternation* when character classes will do the job.

### Exercises in Character Classes

1. Write a regex that matches uppercase or lowercase `K`s or a lowercase `s`. Test it with these strings:

```sh
Kitchen Kaboodle
Reds and blues
kitchen Servers
```

Solution: `[Kks]`

This expression matches two `K`s, one `k`, and three `s` characters. Note that it does not match the uppercase `S` in `Servers`.

2. Write a regex that matches any of the strings `cat`, `cot`, `cut`, `bat`, `bot`, or `but`, regardless of case. Test it with this text:

```sh
My cats, Butterscotch and Pudding, like to
sleep on my cot with me, but they cut my sleep
short with acrobatics when breakfast time rolls
around. I need a robotic cat feeder.
```

There should be nine matches.

Solution: `/[cb][aou][t]/i`

If your pattern is somewhat different, check yourself against these matches:

* Line 1: `cat` in `cats`; `But` and `cot` in `Butterscotch`
* Line 2: `cot`, `but`, `cut`
* Line 3: `bat` in `acrobatics`
* Line 4: `bot` in `robotic`; `cat`

3. Base 20 digits include the decimal digits 0 through 9, and the letters A through J in upper or lowercase. Write a regex that matches base 20 digits. Test it with these strings:

```sh
0xDEADBEEF
1234.5678
Jamaica
plow ahead
```

There should be 28 matches.

Solutions: `/[0-9a-jA-J]/` or `/[0-9a-j]/i`

These patterns match everything in the sample text except:

* `x` on line 1
* `.` on line 2
* `m` on line 3
* `p`, `l`, `o`, `w`, and (space) on line 4

4. Write a regex that matches any letter except `x` or `X`. Test it with these strings:

```sh
0x1234
Too many XXXXXXXXXXxxxxxxXXXXXXXXXXXX to count.
The quick brown fox jumps over the lazy dog
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
```

There should be 82 matches.

Solution: `/A-WYZa-wyz/` or `/[a-wyz]/i`

This solution should match nearly everything in the sample text except:

* the entire first line
* none of the spaces
* none of the `x` or `X` characters
* the `.` at the end of line 2

5. Why is `/[^xX]/` not a valid answer to the previous exercise?

Solution: `/[^Xx]/` matches everything except `x` and `X`. We asked for an answer that matches any **letter** other than `x` or `X`.

6. Write a regex that matches any character that is not a letter. Test it with these strings:

```sh
0x1234abcd
1,000,000,000s and 1,000,000,000s.
THE quick BROWN fox JUMPS over THE lazy DOG!
```

There should be 45-46 matches.

Solution: `/[^a-z]/i`

This regex matches the following characters:

* Line 1: `0`, `1`, `2`, `3`, `4`, and the newline.
* Line 2: Eighteen `0`s, two `1`s, six `,`s (commas), two spaces, a period, and the newline.
* Line 3: Eight spaces, one `!`, and the newline (if present).

7. Are `/(ABC|abc)/` and `/[Aa][Bb][Cc]/` equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

Solution: The patterns are not equivalent. The former *matches nothing but the strings* `ABC` or `abc`; the latter matches any string consisting of the letters `a`, `b`, `c` in sequence, regardless of case. The string `Abc` would match the second pattern, but not the first.

8. Are `/abc/i` and `/[Aa][Bb][Cc]/` equivalent regex? If not, how do they differ? Can you provide an example of a string that would match one of these regex, but not the other?

Solution: The patterns are equivalent as specified; however, that equivalence may not survive a small modification to either pattern. For instance, `/abcd/i` is not equivalent to `/[Aa][Bb][Cc]d/`.

9. Challenge: write a regex that matches a string that looks like a simple negated character class range, e.g., `'[^a-z]'`. (Your answer should match precisely six characters.) Test it with these strings:

```sh
The regex /[^a-z]/i matches any character that is
not a letter. Similarly, /[^0-9]/ matches any
non-digit while /[^A-Z]/ matches any character
that is not an uppercase letter. Beware: /[^+-<]/
is at best obscure, and may even be wrong.
```

There should be three matches.

Solution: `/\[\^[0-9A-Za-z]-[0-9A-Za-z]\]/` or `/[\[][\^][0-9A-Za-z]-[0-9A-Za-z][\]]/`

There are six patterns in each of these regex:

Pattern  | Explanation
---------|------------
`\[` or `[\[]`  | a literal `[`
`\^` or `[\^]`  | a literal `^`
``[0-9A-Za-z]``  | any of the usual character class range starting values
`-`  | a literal '-'
`[0-9A-Za-z]`  | any of the usual character class range ending values
`\]` or `[\]]`  | a literal `]`

The three matches are `/[^a-z]/i`, `/[^0-9]/`, and `/[^A-Z]/`. Technically, the last regex string in our sample text, `/[^+-<]/`, is a valid regex; there is nothing illegal about character class ranges that don't use alphanumeric starting and ending points. However, you should avoid such ranges; think of them as invalid.

END Section Sunday 20220116 @19:15

## Character Class Shortcuts

Let's go a little further out; not too far - waist-deep will do. You're now ready to start exploring character class shortcuts. As we saw in the previous chapter, character class patterns match against a set of characters. We use these simple patterns a lot; in fact, you'll find that nearly every regex you use contains at least one character class pattern. It may not look like the character classes you have already seen, though; we use some character classes so often that most regex engines have built-in shortcuts. We'll explore those shortcuts in this chapter.

### Any Character

The most commonly needed character class is the class that represents *any* character; if you don't care whether a character is alphanumeric, punctuation, whitespace, some control character, or something else entirely, you need a character class that represents any character. That's where the `.` (a period) meta-character comes in. Try matching `/./` against the following strings:

```sh
This text contains letters, numbers, punctuation,
whitespace, and even newline characters. 99988222.
Everything in it should match the /./ pattern.
```

Rubular should highlight every character in this text, including the spaces. The unhighlighted characters - you probably can't see this - are the newline characters at the end of each line.

By default, `/./` does not match newline characters, which is useful: you typically don't want them. Use the `/m`(multiline) option when `.` should match newlines; see the documentation for your language.

Even though `.` is a shortcut for a character class, it does not appear inside square brackets. A `.` inside square brackets is literal; if you want to match "any character", you must move the period outside the square brackets.

### Whitespace

Two additional character class shortcuts that are frequently needed are `\s` for whitespace characters, and `\S` for non-whitespace characters. By definition, the whitespace characters are the space (' '), tab ('\t'), vertical tab ('\v'), carriage return ('\r'), line feed ('\n'), and form feed ('\f'). Thus, `/\s/` is equivalent to `/[ \t\v\r\n\f]/`, while `/\S/` is equivalent to `/[^ \t\v\r\n\f]/`.

Consider these examples:

```rb
# Ruby
puts 'matched 1' if 'Four score'.match(/\s/)
puts 'matched 2' if "Four\tscore".match(/\s/)
puts 'matched 3' if "Four-score\n".match(/\s/)
puts 'matched 4' if "Four-score".match(/\s/)
```

```js
// JavaScript
if ('Four score'.match(/\s/)) {
  console.log('matched 1');
}
if ("Four\tscore".match(/\s/)) {
  console.log('matched 2');
}
if ("Four-score\n".match(/\s/)) {
  console.log('matched 3');
}
if ("Four-score".match(/\s/)) {
  console.log('matched 4');
}
```

The first three examples in each group all print a matched message because the given string contains a whitespace character; the last in each group outputs nothing since "Four-score" doesn't include whitespace.

Similarly:

```rb
# Ruby
puts 'matched 1' if 'a b'.match(/\S/)
puts 'matched 2' if " \t\n\r\f\v".match(/\S/)
```

```js
// JavaScript
if ('a b'.match(/\S/)) {
  console.log('matched 1');
}
if (" \t\n\r\f\v".match(/\S/)) {
  console.log('matched 2');
}
```

prints `matched 1` since `/\S/` matches each of the letters in `'a b'`, but does not print anything for the second match since all of the characters in the string are whitespace characters.

You can use `\s` and `\S` both in and out of square brackets. Outside square brackets, e.g., `/\s/`, it stands for one of the whitespace characters. Inside square brackets, e.g., `/[a-z\s]/`, they represent an **alternative** to the other members of the class. Here, for instance, it represents any lowercase alphabetic character or any whitespace character.

### Digits and Hex Digits

The decimal digits, 0-9, and the hexadecimal digits, 0-9, A-F, and a-f, also show up often in character classes, so we have shortcuts for them:

Shortcut  | Meaning
----------|--------
\d  | Any decimal digit (0-9)
\D  | Any character but a decimal digit
\h  | Any hexadecimal digit (0-9, A-F, a-f) (Ruby)
\H  | Any character but a hexadecimal digit (Ruby)

Try each these shortcuts against the following strings:

```sh
Launch school
July 4th, 1776
0xABCDef12
```

As with `\s` and `\S`, you can use these shortcuts in or out of square brackets.

### Word Characters

This last pair of shortcuts may be confusing. `/\w/` matches "word characters", while `/\W/` matches "non-word characters". At first glance, most people assume that word characters are alphabetic. In fact, the definition of word characters for `\w` is a bit broader than that; they include all alphabetic characters (a-z, A-Z), all decimal digits (0-9), and, oddly, an *underscore* (_). Avoid trouble and commit this to memory.

Try the `/\w/` and `/\W/` patterns against these strings:

```sh
Launch school
July 4th, 1776
one_word_two_words
Don't fence me in.
```

There is no simple shortcut for alphabetic character classes.

As with `\d` and `\D` and some other shortcuts on this page, you can use both `\w` and `\W` in or out of square brackets.

### Summary of Character Class Shortcuts

That's a wrap for character classes and the most basic building blocks of regex. Liberal use of these shortcuts help make your regex easy to type and improve readability. We have one more concept to cover before fully immersing ourselves: anchors.

Before you go, though, we have some exercises for you. In these exercises, use Rubular to write and test your regex. You don't need to write any code, though you may need to use IRB or the JavaScript console for some items.

### Exercises for Character Class Shortcuts

1. Write a regex that matches any sequence of three characters delimited by whitespace characters. Test it with these strings:

```sh
reds and blues
the lazy cat sleeps
```

Solution: `/\s...\s/`

As expected, this regex matches `and` and `cat`, together with the spaces to either side of those words. What might be more surprising is that `the` also matches on Rubular; here, the newline between the first and second lines of text is a whitespace character.

2. Test the pattern `/\s...\s/` from the previous exercise against this text (be sure to delete the previous text first)

```sh
Doc in a big red box.
Hup! 2 3 4
```

Observe that one of the three-letter words in this text match the pattern; it also matches `2 3`. Why is it that this pattern doesn't include the three-letter words `Doc`, `red`, `box`, or `Hup`, but it does match `2 3`?

Solution:
Note that in all of these cases, the "match" is five characters long

* `Doc` doesn't match since `Doc` doesn't follow any whitespace.
* `big` matches since it is three characters with both leading and trailing whitespace.
* `red` doesn't match since the regex engine consumes the space character that precedes `red` when it matches `big` (note the trailing space). Once consumed as part of a match, the character is no longer available for subsequent matches.
* `box` doesn't match since a period follows it.
* `Hup` doesn't match since an exclamation point follows it.
* `2 3` matches since `2 3` is three characters long and it has both leading and trailing whitespace.

3. Write a regex that matches any four digit hexadecimal number that is both preceded and followed by whitespace. Note that `0x1234` is not a hexadecimal number in this exercise: there is no space before the number `1234`.

```sh
Hello 4567 bye CDEF - cdef
0x1234 0x5678 0xABCD
1F8A done
```

There should be four matches (2 on Scriptular).

Solutions:

Ruby: `/\s\h\h\h\h\s/`
JavaScript: /\s[\dA-F][\dA-F][\dA-F][\dA-F]\s/ig`

The real surprise here may be that `cdef` and `1F8A` are matches. If you followed the previous exercise, though, it shouldn't come as a surprise; `cdef` has a trailing white space character in the form of a newline, and `1F8A` has a preceding white space that is a newline.

Note that the JavaScript solution cannot use `\h`, but needs to use `[\dA-F]` instead, or, equivalently, `[0-9A-F]`.

The matches are `4567`, `CDEF`, `cdef`, and `1F8A`. On Scriptular, those last two numbers fail to match.

4. Write a regex that matches any sequence of three letters. Test it with these strings:

```sh
The red d0g chases the b1ack cat.
a_b c_d
```

There should be seven matches.

Solution: `/[a-z][a-z][a-z]/i`

This question was tricky in that it doesn't use any character class shortcuts; recall that there isn't one for letters. Note that `/\w/` matches digits and underscores as well.

If you entered something different, check your work: Rubular should highlight `The`, `red`, `cha`, `ses`, `the`, `ack`, and `cat` if your regex is correct. Note in particular that neither `d0g` (dee-zero-gee) nor `b1a` (bee-one-ay) light up, nor do either of the underscored values.

End 20220119 @21:11

## Anchors

Let's get wet by moving into chest-deep waters. Keep your feet anchored to the bottom, though. That's what we're about to discuss: anchors. Anchors provide a way to limit how a regex matches a particular string by telling the regex engine where matches can begin and where they can end.

Anchors are a bit strange in the world of regex; they don't match any characters. What they do is ensure that a regex matches a string at a specific place: the beginning or end of the string or end of a line, or on a word or non-word boundary.

### 1. Start (`^`) / End (`$`) of Line

If you've ever used regex in any other context, there's a pretty good chance that you are familiar with the `^` and `$` anchors, so we'll start our exploration of anchors there. Don't skip ahead though! There are some subtleties of which you should be aware.

The `^` and `$` meta-characters are **anchors** that fix a regex match to the *beginning* (`^`) or *ending* (`$`) of a line of text. In Ruby, there's some subtlety to that definition which we will circle back to in the next subsection; for now, though, you can think of it as meaning that `^` and `$` anchor a regex to the beginning or end of a string.

Let's see how the `^` anchor works. Try this regex, `/^cat/` against these strings:

```sh
cat
catastrophe
wildcat
I love my cat
<cat>
```

You should find that this regex matches the first two strings, but not the last three. This example demonstrates that `^` forces the `cat` pattern to match at the beginning of each line.

Similarly, you can see the `$` anchor in operation by trying `/cat$/` against those same strings. This time, the regex matches the first, third, and fourth lines; those lines all end with `cat`.

Lastly, you can combine `^` and `$`. Try `/^cat$/` against the five strings shown above. This time, the first string matches, but none of the others do.

### 2. Lines vs Strings

This sub-section is **not relevant in JavaScript**. *Please skip ahead if you're reading this for information on JavaScript regex.*

As we mentioned above, there's some subtlety involved with how ^ and $ work in Ruby. This subtlety arises when the string you are attempting to match contains one or more newline characters that aren't the last character in the string. For example, consider this code:

```rb
TEXT1 = "red fish\nblue fish"
puts "matched red" if TEXT1.match(/^red/)
puts "matched blue" if TEXT1.match(/^blue/)
```

It may surprise you, but this example outputs both `matched red` and `matched blue` since `^` anchors the regex to the beginning of each line in the string, not the beginning of the string. For Ruby's purposes, each new line occurs after a `\n` character, with the beginning of the string marking the beginning of the first line. The line runs through - and includes - the next `\n` character. If no more `\n` characters are available, the last line runs through to the end of the string.

With that in mind, our example using `$` shouldn't be too surprising:

```rb
TEXT2 = "red fish\nred shirt"
puts "matched fish" if TEXT2.match(/fish$/)
puts "matched shirt" if TEXT2.match(/shirt$/)
```

As before, we get a match for both regex. Note in particular that even though the first line in the string ends with a `\n`, `fish` is still said to occur at the end of the line. `$` doesn't care if there is a `\n` character at the end, provided there is no more than one.

### 3. Start/End of String

This sub-section is **not relevant in JavaScript**. Please skip ahead if you are reading this for information on JavaScript regex.

It's not too often that you'll encounter situations where you need to match multi-line strings as shown in the previous sub-section, but they do arise. More often, though, you must match at the beginning or end of the string, not the line. For these matches, use the `\A`, `\Z`, and `\z` anchors (note that there is no `\a` anchor).

The `\A` anchor ensures that a regex matches at the beginning of the string, while `\Z` and `\z` match at the end of the string. The difference between `\Z`and `\z` is somewhat subtle and seldom of concern: `\z` always matches at the end of a string, while `\Z` matches up to, but not including, a newline at the end of the string. As a rule, use `\z` until you determine that you need` \Z`.

```rb
TEXT3 = "red fish\nblue fish"
TEXT4 = "red fish\nred shirt"
puts "matched red" if TEXT3.match(/\Ared/)
puts "matched blue" if TEXT3.match(/\Ablue/)
puts "matched fish" if TEXT4.match(/fish\z/)
puts "matched shirt" if TEXT4.match(/shirt\z/)
```

In contrast to the examples in the previous subsection, this prints matched red and matched shirt.

Even though we recommend using `\A` and `\z` for most anchored matches in Ruby, most examples and exercises in this book use `^` and `$` instead. It is easier to demonstrate certain behaviors when using `^` and `$` on Rubular.

### 4. Word Boundaries

The last two anchors *anchor* regex matches to **word boundaries** (`\b`) and **non-word boundaries** (`\B`). For these anchors, words are sequences of word characters (`\w`), while non-words are sequences of non-word characters (`\W`). A **word boundary** occurs:

* between any pair of characters, one of which is a word
character and one which is not.
* at the beginning of a string if the first character is a word character.
* at the end of a string if the last character is a word character.

A **non-word boundary** matches any place else:

* between any pair of characters, both of which are word characters or both of which are not word characters.
* at the beginning of a string if the first character is a non-word character.
* at the end of a string if the last character is a non-word character.

For instance:

```sh
Eat some food.
```

Here, word boundaries occur before the `E`, `s`, and `f` at the start of the three words, and after the `t`, `e`, and `d` at their ends. Non-word boundaries occur elsewhere, such as between the `o` and `m` in some, and following the `.` at the end of the sentence.

To anchor a regex to a word boundary, use the `\b` pattern. For example, to match 3 letter words consisting of "word characters", you can use `/\b\w\w\w\b/`. Try it with:

```sh
One fish,
Two fish,
Red fish,
Blue fish.
123 456 7890
```

It's rare that you must use the non-word boundary anchor, `\B`. Here's a somewhat contrived example you can try. Try the regex `/\Bjohn/i` against these strings:

```sh
John Silver
Randy Johnson
Duke Pettijohn
Joe_Johnson
```

The regex matches `john` in the last two strings, but not the first two.

`\b` and `\B` do not work as word boundaries inside of character classes (between square brackets). In fact, `\b` means something else entirely when inside square brackets: *it matches a backspace character*.

### 5. Summary

With the use of **anchors**, you now have a great deal more flexibility. These simple constructs provide a degree of control over your regex that you didn't have before -- you can tell the regex engine where matches can occur. If you need it, more is available with look-ahead and look-behind assertions, but that topic is beyond the scope of this book.

In the next chapter, we'll get into **quantifiers**. Quantifiers, more than any other feature, lie at the heart of what makes regex so useful.

But, before you wade out any further, take a little while to work the exercises below. In these exercises, use Rubular to write and test your regex. You don't need to write any code.

### 6. Exercises

1. Write a regex that matches the word `The` when it occurs at the beginning of a line. Test it with these strings:

```sh
The lazy cat sleeps.
The number 623 is not a word.
Then, we went to the movies.
Ah. The bus has arrived.
```

There should be two matches.

Solution: `/^The\b/`

This regex should match the word `The` in the first two lines, but should not match anything on the last two.

If you tried using `/\AThe\b/` on Rubular, the match probably didn't work right. Why not? If you haven't already tried, try it now. In most cases, you should use `\A` instead of `^` in Ruby, but Rubular treats the test string as a single multi-line string, so you need to use `^` instead.

2. Write a regex that matches the word `cat` when it occurs at the end of a line. Test it with these strings:

```sh
The lazy cat sleeps
The number 623 is not a cat
The Alaskan drives a snowcat
```

There should be one match.

Solution: `/\bcat$/`

This regex should match the word `cat` in the second line, but should not match anything else.

If you tried using `/\bcat\z/` on Rubular, the match probably didn't work right. Why not? If you haven't already tried, try it now. In most cases, you should use `\z` instead of `$` in Ruby, but Rubular treats the test string as a single multi-line string, so you need to use `$` instead.

3. Write a regex that matches any three-letter word; a word is any string comprised entirely of letters. You can use these test strings.

```sh
reds and blues
The lazy cat sleeps.
The number 623 is not a word. Or is it?
```

There should be five matches.

Solution: `/\b[a-z][a-z][a-z]\b/i`

As expected, this regex matches `and`, `cat`, `The` (both occurrences), and `not`. Notice that it does not match `623` or `it?`.

4. Challenge: Write a regex that matches an entire line of text that consists of exactly 3 words as follows:

* The first word is `A` or `The`.
* There is a single space between the first and second words.
* The second word is any 4-letter word.
* There is a single space between the second and third words.
* The third word -- the last word -- is either `dog` or `cat`.

Test your solution with these strings:

```sh
A grey cat
A blue caterpillar
The lazy dog
The white cat
A loud dog
--A loud dog
Go away dog
The ugly rat
The lazy, loud dog
```

There should be three matches.

Solution: `/^(A|The) [a-zA-Z][a-zA-Z][a-zA-Z][a-zA-Z] (dog|cat)$/`

The valid matches are `A grey cat`, `The lazy dog`, and `A loud dog`.

This solution employs **alternation** from the first chapter in this section to define the words that occur at the beginning and end of each line and includes a match for a four-letter word in the middle. We have assumed that the middle word can contain both uppercase and lowercase letters, so we have to specify `[a-zA-Z]` for each of the four letters. We don't use `\w` because the problem explicitly asked for four-*letter* words.

As with the other exercises, a proper Ruby solution would use `\A` and `\z` instead of `^` and `$`, but to allow for Rubular limitations, we use `^` and `$` instead.

End 20220120 @ 20:16

## Quantifiers

It's time to get soaked. There's a fascinating world right beneath the surface, the world of quantifiers. Go ahead. Put your facemask on, and take a look around beneath the waves. What you'll see is the real heart of regex.

### 1. Zero or More

We've seen that regex let you *concatenate* multiple patterns that can match sequences of characters. Sometimes, you want to repeat a pattern. For instance, to match all sequences of three **digits**, you can use the regex `/\b\d\d\d\b/` - here we repeat the `\d` shortcut for three times.

Suppose, though, you need to find all sequences of three or more digits. How would you code this? You might try something like:

`/\b(\d\d\d\d\d\d|\d\d\d\d\d|\d\d\d\d|\d\d\d)\b/`

But this matches 3-6 digits, not three or more, and it's already hard to read. You could keep adding additional sequences of `\d`s until you reach some maximum level, but it is limiting and may cause problems in the future.

You could try matching `/\d\d\d/`. It will certainly get all three-digit and longer numbers, but it mixes in results like `XY321Z`.

Regex engines provide a variety of **quantifiers** that you can use to match sequences. The quantifier that gets used most frequently is `*`; it matches zero or more occurrences of the pattern to its left. For example, try `/\b\d\d\d\d*\b/` against these strings in Rubular:

```sh
Four and 20 black birds
365 days in a year, 100 years in a century.
My phone number is 222-555-1212.
My serial number is 345678912.
```

You should see that this pattern matches `365`, `100`, `222`, `555`, `1212`, and `345678912`, but it does not match `20`.

The way you read that regex is that you want to match three consecutive digits beginning at a word boundary, followed by any number of digits, and then another word boundary. The engine reads the regex as six sub-patterns:

Pattern  | Explanation
---------|------------
`\b`  | Starting at a word boundary
`\d`  | A single digit followed by ...
`\d` | a single digit followed by ...
`\d`  | a single digit followed by ...
`\d*`  | Zero or more additional digits
`\b` | Ending with a word boundary

One thing to watch out for is that "zero or more" truly means **zero** or more. The regex `/x*/` matches every string, even an empty string, or a string that contains no `x`s anywhere. If you try this pattern in Rubular, it matches between every character.

When talking about regular expressions that match zero-length strings, imagine an arrow that starts out pointing to the beginning of the string, prior to the first character. When the regex engine goes to work, it moves this imaginary arrow to the right one character at a time until it either finds a match or determines that there is no match. The arrow never points directly at a character, but always points between each pair of characters, and matches typically occur against the character to the right of the arrow. (There are a few exceptions that match the character to the left as well, such as `\b`.)

When you try to match `/x/` for instance, the regex engine looks to the character to the right of the arrow position. If it sees an `x`, it matches. Otherwise, it advances the arrow one position to the right, and again tries to match starting with the next character.

This is why something like `/x*/` matches wherever in the string you're at - with the arrow pointing between characters, the regex is free to say "Nope. There are no `x`'s between me and the next character, so it's a match."

Another way to see this is to try the regex `/co*t/` against these strings:

```sh
ct
cot
coot
cooot
```

The regex matches every one of these strings, including the one without the letter `o`.

Note that *the quantifier always applies to one pattern*; the pattern it finds to the left of the quantifier. If necessary, you can use grouping parentheses to define the pattern to which you want to apply the `*`. For instance, try `/1(234)*5/` against:

```sh
15
12345
12342342345
1234235
```

You should see that the engine treats (`234`) as a single pattern, so the regex matches anywhere zero or more occurrences of `234` separate `1` and `5`.

The regex `*` quantifier looks similar to the `*` wildcard you find in most command line shells, but it is different. The `*` wildcard from a shell is more like the regex `/.*/`; it *matches any sequence of characters*, regardless of what those characters are. Thus, the wildcard `blue*doc` matches any file whose name begins with `blue` and ends with `doc`. `/blue*doc/`, however, matches any sequence of characters that begins with `blu`, ends with `doc`, and contains any number of `e`s between the beginning and end.

### 2. One or More

The `+` **quantifier** is nearly identical to the `*` quantifier, but, instead of matching zero or more occurrences of something, it *matches one or more occurrences* of that thing. Not all regex engines offer the `+` quantifier - some older engines do not - but both Ruby and JavaScript provide it.

We can illustrate the `+` quantifier using our three-or-more digits example from the previous sub-section. In that section, we used `/\b\d\d\d\d*\b/` to match three or more digits. If we replace the `*` with a `+`, `/\b\d\d\d\d+\b/` we get a regex that matches **four** or more digits. Since we want three digits, we can eliminate one of the `\d` patterns, leaving `/\b\d\d\d+\b/`. To see that this still works as desired, try it against these strings from above:

```sh
Four and 20 black birds
365 days in a year, 100 years in a century.
My phone number is 222-555-1212.
My serial number is 345678912.
```

We saw earlier that a regex like `/x*/` matches any string because it matches between every character. There is no similar subtlety to the `+` quantifier; `/x+/` matches any sequence of one or more `x`s; it never matches the empty string between characters. Try it:

```sh
a single x matches.
As is a string of xxxxx like that.
```

### 3. Zero or One

Sometimes, you need an optional pattern in a regex; that is, a pattern that either occurs once or doesn't occur at all. For these situations, you need the `?` quantifier. As with `*` and `+`, `?` applies to the pattern to its left.

Suppose you need to test whether a string contains the words `cot` or `coot`, but don't want to match against `ct` or `cooot`. In this case, you can use `/coo?t/`, which matches a `c` followed by an `o` followed by an **optional** `o` followed by a `t`. Try it:

`Scott scoots but doesn't act cooot.`

One place you might use a `?` would be a pattern where you are trying to match a date whose components may or may not include `-` separator characters. For instance, you have dates formatted as both `20170111` or `2017-01-11`. To match such dates, you can use the regex `/\b\d\d\d\d-?\d\d-?\d\d\b/`. This matches:

```sh
20170111
2017-01-11
2017-0111
201701-11
```

but not:

`2017/01/11`

Note that `?` has the same behavior subtlety as `*`; *it matches zero occurrences*. Thus, `/h?/` matches each of these strings:

```sh
his
is
ish
```

The regex `?` quantifier looks similar to the `?` wildcard you find in most command line shells, but it isn't the same. The `?` wildcard means zero or one occurrence of *any* character, or acts as a placeholder for a single character, depending on what shell you are using. The `?` regex quantifier *means zero or one occurrence* of the pattern to its left. If you allow yourself to become confused by the similarity in appearance, you will have trouble.

### 4. Ranges

The `*`, `+`, and `?` quantifiers *match repeated sequences*. They may provide all the regex functionality you need. However, sometimes you need to specify the repeat count more precisely. For example, you may want to test a phone number to see if contains precisely ten digits, or perhaps you want to look at all words that contain at least seven characters, or you want words that are 5-8 characters long. It's possible to do all this with the patterns and quantifiers you've already learned, but it will be tedious and messy. That's where the **range quantifier** comes in.

The range quantifier consists of a pair of curly braces, `{}`, with one or two numbers and an optional comma between the braces:

* `p{m}` matches *precisely* `m` occurrences of the pattern `p`.
* `p{m,}` matches `m` *or more* occurrences of `p`.
* `p{m,n}` matches `m` or more occurrences of `p`, but not more than `n`.

Let's go through the examples we talked about above.

If you need to test a string to see if it contains precisely ten consecutive digits (perhaps it represents a US-style phone number), you can try it with the regex `/\b\d{10}\b/` and these strings:

`2225551212 1234567890 123456789 12345678900`

You should see that this regex matches the first two numbers: they have ten digits each.

To match numbers that are at least three digits in length, we can use `/\b\d{3,}\b/`. Try it with these strings:

```sh
Four and 20 black birds
365 days in a year, 100 years in a century.
My phone number is 222-555-1212.
My serial number is 345678912.
```

This pattern matches the same six numbers that our earlier three-digits-or-more patterns matched.

If you want to match words of 5-8 letters, use `/\b[a-z]{5,8}\b/i`:

```sh
Bizarre
a
one two three four five six seven eight nine
sensitive
dropouts
```

This pattern matches `Bizarre`, `three`, `seven`, `eight`, and `dropouts`.

### 5. Greediness

The quantifiers we've discussed thus far are **greedy**: they always match the longest possible string they can. For instance, try matching `/a[abc]*c/` against `xabcbcbacy`. You should see that this pattern matches `abcbcbac`, not `abc` or `abcbc` both of which could match the pattern, but are shorter than the final match string. This aspect of regex isn't often a concern, but when it is, it can be highly confusing if you aren't familiar with greediness.

In most cases, greediness is what you want. However, sometimes it isn't, and you need to match the fewest number of characters possible; we call this a **lazy** match. In Ruby and JavaScript, you can request a lazy match by adding a `?` after the main quantifier. For example, `/a[abc]*?c/` matches `abc` and `ac` in `xabcbcbacy`.

See [this article](https://d186loudes4jlv.cloudfront.net/regex/files/greedy-vs-lazy.pdf) for a more visual description of greediness vs. laziness.

### 6. Summary

That concludes our overview of regular expressions. You've now seen most of the patterns you need to use regex proficiently, but you haven't put them to use yet. Now it's time to learn how to use regex in real programs. In the next section, we show you the basics of using regex in your applications.

Before taking that plunge, though, take a little while to work the exercises below. In these exercises, use Rubular to write and test your regex. You don't need to write any code.

### 7. Exercises

#### 1. Write a regex that matches any word that begins with b and ends with an e, and has any number of letters in-between. You may limit your regex to lowercase letters. Test it with these strings.

```sh
To be or not to be
Be a busy bee
I brake for animals.
```

There should be four matches.

Solution: `/\bb[a-z]*e\b/`

The regex should match the words `be` (both instances), `bee`, and `brake`.

#### 2. Write a regex that matches any line of text that ends with a `?`. Test it with these strings:

```sh
What's up, doc?
Say what? No way.
?
Who? What? Where? When? How?
```

There should be three matches.

Solution: `/^.*\?$/`

This regex should match the first, third, and fourth lines, but not the second line. Note the use of `.*`; you'll see this often in regex. It matches any sequence of characters, but, by default, *does not match a newline character*. It's how you ignore everything between two points when matching.

Note that the `?` must be `\`-escaped since we want to match a literal `?`.

#### 3. Write a regex that matches any line of text that ends with a `?`, but does not match a line that consists entirely of a single `?`. Test it with the strings from the previous exercise.

There should be two matches.

Solution: `/^.+\?$/`

This regex should match the first and fourth lines, but not the second or third. The `.+` pattern makes the regex *match at least one character* before it attempts to match the `?`.

#### 4. Write a regex that matches any line of text that contains nothing but a URL. For this exercise, a URL begins with `http://` or `https://`, and continues until it detects a whitespace character or end of line. Test your regex with these strings:

```sh
http://launchschool.com/
https://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello
    http://launchschool.com/
```

There should be two matches.

Solution: `/^https?:\/\/\S*$/`

This regex should match the first and second text lines, but none of the others. The third line doesn't match because of a misspelling; the fourth and fifth don't match because of extra content, and the last doesn't match because of the leading spaces.

The regex begins with a line anchor, `^`, and then the `http` part of the URL followed by an optional `s`. Next, we have the `:`, and two `/` characters (both `/` characters must be `\`-escaped). We then have the rest of the URL, which we achieve by matching a string of non-whitespace characters. We also require an explicit line anchor, `$`, to prevent matching a URL that isn't at the end of the line.

Stop 20220120 @21:45

#### 5. Modify your regex from the previous exercise so the URL can have optional leading or trailing whitespace, but is otherwise on a line by itself. To test your regex with trailing whitespace, you must add some spaces to the end of some lines in your sample text.

```sh
http://launchschool.com/
https://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello
    http://launchschool.com/
```

There should be three matches.

Solution: `/^\s*https?:\/\/\S*\s*$/`

This regex should match the URLs on the first, second, and last lines.

#### 6. Modify your regex from the previous exercise so the URL can appear anywhere on each line, so long as it begins at a word boundary.

```sh
http://launchschool.com/
https://mail.google.com/mail/u/0/#inbox
htpps://example.com
Go to http://launchschool.com/
https://user.example.com/test.cgi?a=p&c=0&t=0&g=0 hello
    http://launchschool.com/
```

There should be five matches.

Solution: `/\bhttps?:\/\/\S*/`

This solution should match all of the URLs above. (Note that the third line is a not a URL.)

#### 7. Write a regex that matches any word that contains at least three occurrences of the letter `i`. Test your regex against these strings:

```sh
Mississippi
ziti 0minimize7
inviting illegal iridium
```

There should be three matches.

Solutions:
1. `/\b[a-z]*i[a-z]*i[a-z]*i[a-z]*\b/i`
2. `/\b([a-z]*i){3}[a-z]*\b/i`
3. `/\b([a-z]*i{3,}[a-z]*\b/i`

Your solution should match `Mississippi`, `inviting`, and `iridium`. We use word boundary anchors in our solution to guard against strings that aren't words, such as `0minimize7`). Each `[a-z]*i` matches a sequence of 0 or more letters followed by the letter `i`. Connecting three occurrences of `[a-z]*i` and then adding one more `[a-z]*` to the end, we get a regex that matches any word with 3 `i`s.

Our alternate solution is similar, but it uses the `{3}` quantifier to perform the 3-occurrences part of the match. The quantifier applies to `([a-z]*i)` which, uses grouping parentheses to treat `[a-z]*i` as a single pattern for use by `{3}`.

The final solution we show uses `{3,}` instead of `{3}`. See if you can determine why both solutions work.

#### 8. Write a regex that matches the last word in each line of text. For this exercise, assume that words are any sequence of non-whitespace characters. Test your regex against these strings:

```sh
What's up, doc?
I tawt I taw a putty tat!
Thufferin' thuccotath!
Oh my darling, Clementine!
Camptown ladies sing this song, doo dah.
```

There should be five matches.

Solution: `/\S+$/`

Your solution should match `doc?`, `tat!`, `thuccotath!`, `Clementine!`, and `dah`.

#### 9. Write a regex that matches lines of text that contain at least 3, but no more than 6, consecutive comma separated numbers. You may assume that every number on each line is both preceded by and followed by a comma. Test your regex against these strings:

```sh
,123,456,789,123,345,
,123,456,,789,123,
,23,56,7,
,13,45,78,23,45,34,
,13,45,78,23,45,34,56,
```

There should be three matches.

Solution: `/^,(\d+,){3,6}$/`

Your solution should match the first, third, and fourth lines.

#### 10. Write a regex that matches lines of text that contain at least 3, but no more than 6, consecutive comma separated numbers. In this exercise, you can assume that the first number on each line is not preceded by a comma, and the last number is not followed by a comma. Test your regex against these strings:

```sh
123,456,789,123,345
123,456,,789,123
23,56,7
13,45,78,23,45,34
13,45,78,23,45,34,56
```

There should be three matches.

Solution: `/^(\d+,){2,5}\d+$/`

Your solution should match the first, third, and fourth lines. In this case, the lack of a comma at each end of the strings complicates our solution slightly - we can't check for 3-6 occurrences of `\d+`,, but have to check for 2-5 occurrences followed by a final `\d+` pattern.

#### 11. Challenge: Write a regex that matches lines of text that contain either 3 comma separated numbers or 6 or more comma separated numbers. Test your regex against these strings:

```sh
123,456,789,123,345
123,456,,789,123
23,56,7
13,45,78,23,45,34
13,45,78,23,45,34,56
```

There should be three matches.

Solutions:

* `/(^(\d+,){2}\d+$|^(\d+,){5,}\d+$)/`
* `/^(\d+,){2}((\d+,){3,})?\d+$/`

Your solution should match the last three lines. Regex provide no simple way to say something like three occurrences, or 6 or more occurrences. We have two approaches we can take instead: either use alternation or use the ? quantifier to make part of the pattern optional.

Our first solution uses alternation. Let's break it up a bit using "extended" syntax:

```sh
/
  (                  # Grouping for alternation
    ^(\d+,){2}\d+$   # Match precisely 3 numbers on a line
    |                # *or*
    ^(\d+,){5,}\d+$  # Match 6 or more numbers on a line
  )                  # All done
/x
```

Our alternate solution uses the `?` quantifier instead. Breaking it down once again, we see:

```sh
/
  ^                  # Start of line
  (\d+,){2}          # 2 numbers at start
  (                  # followed by...
    (\d+,){3,}       #    at least 3 more numbers
  )?                 #    that are optional
  \d+                # followed by one last number
  $                  # end of line
/x
```

Note the use of the 'x' option on these broken out patterns. This **Ruby-specific** option is useful when you have a convoluted regex. It lets you write a regex over several lines, and put comments on each line. See the Ruby Regexp documentation for more information.

In a real program, you may instead choose to use two separate regex:

```rb
if text.match(/^(\d+,){2}\d+$/) || text.match(/^(\d+,){5,}\d+$/)
```

This code is easier to understand, but not always practical.

#### 12. Challenge: Write a regex that matches HTML h1 header tags, e.g.,

```html
<h1>Main Heading</h1>
<h1>Another Main Heading</h1>
<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>
```

and the content between the opening and closing tags. If multiple header tags appear on one line, your regex should match the opening and closing tags and the text content of the headers, but nothing else. You may assume that there are no nested tags in the text between `<h1>` and `</h1>`.

Solution: `/<h1>.*?<\/h1>/`

For this exercise, we need to use a "lazy" quantifier instead of the default greedy quantifier, so we use .*? to match the text in between the <h1> opening tag and its closing tag, </h1>.

What would happen if you omitted the `'?'`? Try both the correct regex and the one with a greedy quantifier (`/<h1>.*<\/h1>/`) against this HTML to see:

```html
<h1>ABC</h1> <p>Paragraph</p> <h1>DEF</h1><p>Done</p>
```

## Using Regular Expressions in Ruby and JavaScript

Now that you're bobbing along atop the waves, it's time to relax and explore your surroundings. Get your swim fins on, and head on out into deeper waters.

Thus far, our explorations have given us a good handle on the different types of patterns that can appear in a regex. You know how to match specific characters, classes of characters, can anchor your matches, and can even match strings of different sizes and content. However, you've seen but a handful of examples that show what this looks like in real code. We're going to rectify that a bit in this section and introduce a handful of Ruby and JavaScript methods that use regex. This discussion won't be comprehensive, but it does provide the tools you'll need in the future. Most developers won't ever need anything more.

Oddly, the `Regexp` (Ruby) and `RegExp` (JavaScript) classes don't provide the regex methods you'll use most often. Instead, the `String` class does.

### Matching Strings

We've already seen `match` in some of our examples. This method returns a value that indicates whether a match occurred, and what substrings matched. This return value is "truthy"; you can test it in a conditional expression in either Ruby or JavaScript to determine whether a given string matched a regex. At its most basic, we use it like this:

```rb
fetch_url(text) if text.match(/\Ahttps?:\/\/\S+\z/)
```

```js
if (text.match(/^https?:\/\/\S+$)) {
  fetchUrl(text);
}
```

Here we call `fetch_url(text)` when `match` returns a value that indicates a match: that is when `text` contains something that looks like a URL.

We won't discuss the return value of `match` in detail -- see the documentation instead. For now, `match` returns an **Array** that contains the string we matched against, along with the capture groups defined in the regex. If we name this Array `capture`, then `capture[0]` represents the entire matched portion of `text`, while `capture[1]`, `capture[2]`, etc. correspond to the capture groups. (We discuss capture groups below.). If the regex doesn't match `text`, then Ruby returns `nil`, while JavaScript returns `null`.

In Ruby, the return value of `match` isn't an Array, but a `MatchData` object that responds to `[0]`, [`1]`, `[2]`, and so on. You cannot apply most Array methods to this object directly.

In Ruby, you sometimes see something like this:

```rb
fetch_url(text) if text =~ /\Ahttps?:\/\/\S+\z/
```

`=~` is similar to `match`, except that it returns the index within the string at which the regex matched, or `nil` if there was no match. `=~` is measurably faster than `match`, so some rubyists prefer to use it when they can. Others dislike it because it is unfamiliar, or solely because `=~` reminds them of the Perl language where it saw widespread use.

Rubyists should also investigate the `String#scan` method; it is a global form of `match` that returns an Array of all matching substrings.

### Splitting Strings

Applications that process text often must analyze data comprised of records and fields delimited by some special characters or delimiters. A typical format has records separated by newlines, and fields delineated by tabs. Such data often needs parsing before you can use it in your program; the `split` method is an often-useful parsing tool.

`split` is frequently used with a simple string as a delimiter:

```rb
record = "xyzzy\t3456\t334\tabc"
fields = record.split("\t")
# -> ['xyzzy', '3456', '334', 'abc']
```

```js
let record = "xyzzy\t3456\t334\tabc";
let fields = record.split("\t");
// => ['xyzzy', '3456', '334', 'abc']
```

As you can see, `split` returns an `Array` that contains the values from each of the split fields.

Not all delimiters are as simple as that, though. Sometimes, formatting is much more relaxed. For example, you may encounter data where arbitrary whitespace characters separate fields, and there may be more than one whitespace character between each pair of items. The regex form of `split` comes in handy in such cases:

```rb
record = "xyzzy  3456  \t  334\t\t\tabc"
fields = record.split(/\s+/)
# -> ['xyzzy', '3456', '334', 'abc']
```

```js
let record = "xyzzy  3456  \t  334\t\t\tabc";
let fields = record.split(/\s+/);
// -> ['xyzzy', '3456', '334', 'abc']
```

Beware of regex like `/:*/` and `/\t?/` when using `split`. Recall that the `*` quantifier matches zero or more occurrences of the pattern it is modifying. In the case of `split`, the result may be totally unexpected:

```rb
'abc:xyz'.split(/:*/)
# -> ['a', 'b', 'c', 'x', 'y', 'z']
```

A six element array instead of the two element array you may have expected. This result occurs because the regex matches the gaps between each letter; zero occurrences of `:` occurs between each pair of characters.

### Capture Groups: A Diversion

Before moving on to the final methods in our whirlwind tour, we need to first talk about **capture groups**. (Note that regex also have **non-capture groups** but we won't cover them here.) You've already encountered these before, though we called them something different at the time: grouping parentheses. We didn't mention it at the time, but these meta-characters have another function: they provide capture and non-capture groups.

Capture groups capture the matching characters that correspond to part of a regex. You can reuse these matches later in the same regex, and when constructing new values based on the matched string.

We'll start with a simple example. Suppose you need to match quoted strings inside some text, where either single or double quotes delimit the strings. How would you do that using the regex patterns you know? You might consider:

`/['"].+?['"]/`

as your first attempt to match quotes, but, you'll soon find that it also matches mixed single and double quotes. This may not be what you want. Instead, you need a way to capture the opening quote and reuse that character for the closing quote. It's time to call on capture groups:

`/(['"]).+?\1/`

Here the group captures the part of the string that matches the pattern between parentheses; in this case, either a single or double quote. We then match one or more of any other character and end with a `\1`: we call this sequence a **backreference** - it references the first capture group in the regex. If the first group matches a double quote, then `\1` matches a double quote, but not a single quote.

It may be more reasonable to use two regex to solve this problem:

```rb
if text.match(/".*?"/) || text.match(/'.*?'/)
  puts "Got a quoted string"
end
```

It's easier to read and maintain when written like this. However, you will almost certainly encounter problems where a single regex with a backreference is the preferred solution.

A regex may contain multiple capture groups, numbers from left to right as groups 1, 2, 3, and so on, up to 9. As you might expect, the backreferences are `\1`, `\2`, `\3`, ..., and `\9`.

Note that there are patterns in Ruby that allow for named groups and named backreferences, but this is beyond the scope of this book. If you find yourself needing multiple groups in Ruby regex, you may want to investigate these named groups and backreferences.

While you can use capture groups in any regex, they are most useful in conjunction with methods that use regex to transform strings. We'll see this in the next two sections.

By the way: did you notice that lazy quantifier in our regex? Why do you think we used that here?

### Transformations in Ruby

* Skipped

### Transformations in JavaScript

While regex-based transformations in Ruby and JavaScript are conceptually similar, the implementations are different. We'll cover these transformations in separate sections.

Transforming a string with regex involves matching that string against the regex, and using the results of the match to construct a new value. In JavaScript, we can use the `replace` method which transforms the matched part of a string. If the regex includes a `g` option, the transformation applies to every match in the string.

Here's a simple example:

```js
let text = 'Four score and seven';
let vowelless = text.replace(/[aeiou]/g, '*');
// -> 'F**r sc*r* *nd s*v*n'
```

Here we replace every vowel in `text` with an `*`. We applied the transformation globally since we used the `g` option on the regex.

We can use backreferences in the replacement string (the second argument):

```js
let text = 'We read "War of the Worlds".';
console.log(text.replace(/(['"]).+\1/, '$1The Time Machine$1'));
// outputs: We read "The Time Machine".
```

One thing to note here is that the backreferences in the replacement string use `$1`, `$2`, etc. instead of `\1`, `\2`, etc.

### Summary of Using Regular Expressions

We now conclude our little dive into the regex ocean. We hope you've learned a lot and enjoyed the experience. We have one more section: it includes a regex cheat sheet and a few other useful tidbits.

But, before you proceed, take a little while to work the exercises below. In these exercises, write your code using your language of choice. Rubyists may want to use IRB to test their methods, while JavaScripters can check their answers in node or their browser's JavaScript console.

### Exercises for Using Regular Expressions

#### 1. Write a method that returns true if its argument looks like a URL, false if it does not.

Examples:

```js
isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false
```

Solution

```js
let isUrl = function(text) {
  return !!text.match(/^https?:\/\/\S+$/);
}
```

Note that we use `!!` to coerce the result of our `match` call to a boolean value. More recent Ruby versions add the `String.match?` method, which we demonstrate in our second Ruby solution.

#### 2. Write a method that returns all of the fields in a haphazardly formatted string. A variety of spaces, tabs, and commas separate the fields, with possibly multiple occurrences of each delimiter.

```js
fields("Pete,201,Student");
// -> ['Pete', '201', 'Student']

fields("Pete \t 201    ,  TA");
// -> ['Pete', '201', 'TA']

fields("Pete \t 201");
// -> ['Pete', '201']

fields("Pete \n 201");
// -> ['Pete', '\n', '201']
```

Solution

```js
let fields = function (str) {
  return str.split(/[ \t,]+/);
};
```

Note that we don't use `\s` here since we want to split at spaces and tabs, not other whitespace characters.

#### 3. Write a method that changes the first arithmetic operator (`+`, `-`, `*`, `/`) in a string to a '?' and returns the resulting string. Don't modify the original string.

```js
mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'
```

Solution

```js
let mysteryMath = function (equation) {
  return equation.replace(/[+\-*\/]/, '?');
};
```

Note that we need to escape the `-` character in our character class to interpret as a literal hyphen, not a range specification. We also must escape the `/` character in the Ruby code; in the JavaScript code, we don't need to escape the `/` character but do so here for consistency.

#### 4. Write a method that changes every arithmetic operator (`+`, `-`, `*`, `/`) to a `'?'` and returns the resulting string. Don't modify the original string.

```js
mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
```

Solution:

```js
let mysteriousMath = function (equation) {
  return equation.replace(/[+\-*\/]/g, '?');
};
```

Note that we now use the `gsub` method in Ruby, and apply the `g` option to the regex in JavaScript.

#### 5. Write a method that changes the first occurrence of the word `apple`, `blueberry`, or `cherry` in a string to `danish`.

```js
danish('An apple a day keeps the doctor away');
// -> 'An danish a day keeps the doctor away'

danish('My favorite is blueberry pie');
// -> 'My favorite is danish pie'

danish('The cherry of my eye');
// -> 'The danish of my eye'

danish('apple. cherry. blueberry.');
// -> 'danish. cherry. blueberry.'

danish('I love pineapple');
// -> 'I love pineapple'
```

Solution

```js
function danish(text) {
  return text.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}
```

Note that `pineapple` is not changed in the last example for each language.

#### 6. Challenge: write a method that changes strings in the date format `2016-06-17` to the format `17.06.2016`. You must use a regular expression and should use methods described in this section.

```js
formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2016/06/17'); // -> '2016/06/17' (no change)
```

Solution

```js
let formatDate = function (originalDate) {
  return originalDate.replace(/^(\d\d\d\d)-(\d\d\)-(\d\d)$/, '$3.$2.$1')
};
```

We use three capture groups here to capture the year, month, and date, then use them in the replacement string in reverse order, this time separated by periods instead of hyphens.

#### 7. Challenge: write a method that changes dates in the format 2016-06-17 or 2016/06/17 to the format 17.06.2016. You must use a regular expression and should use methods described in this section.

```js
formatDate('2016-06-17'); // -> '17.06.2016'
formatDate('2017/05/03'); // -> '03.05.2017'
formatDate('2015/01-31'); // -> '2015/01-31' (no change)
```

Solutions

```js
// 1
let formatDate = function (originalDate) {
  return originalDate
    .replace(/^(\d\d\d\d)-(\d\d)-(\d\d)$/, '$3.$2.$1')
    .replace(/^(\d\d\d\d)\/(\d\d)\/(\d\d)$/, '$3.$2.$1');
};

// 2
let formatDate = function (originalDate) {
  let dateRegex = /^(\d\d\d\d)([\-\/])(\d\d)\2(\d\d)$/;
  return originalDate.replace(dateRegex, '$4.$3.$1');
}
```

The easiest way to approach this problem is to split it into smaller sub-problems, one that handles dates in `2016-05-17` format, and one that handles `2016/05/17` format, which is what both of our primary solutions do. One possible gotcha here is that you must remember to escape the `/` characters in the regex.

You can solve this problem with one regex, as in our alternate solutions, but at the expense of a more complex regex and lowered readability. The regex adds one additional capture group to capture the first `-` or `/`, and uses a `\2` backreference to refer back to that capture in the regex. However, this additional capture group modifies the backreference numbers for the month and day components of the date, so we now need to refer to them as `\4` and `\3` in Ruby, `$4` and `$3` in JavaScript. In Ruby, this might be a good time to look up how to use named capture groups.

Note that our alternate solutions use variables to store the regex. We do this both for readability, and to show that regex are no different than any other object; you can manipulate and pass them around as needed.

## Conclusion

### Overview

With the skills you've learned from this book, you're ready to begin using regex. Whenever you process strings or test, parse, and modify their content, you may find that regex will help. Take these opportunities to think about the problem, and decide whether a regex may help you do the job.

In this book, we've discussed the primary building blocks of regex, patterns, and have discussed the patterns you'll use most often. We've also learned some fundamental concepts:

* **Patterns** are the building blocks of **regex**. You construct regex from patterns using **concatenation** and **alternation**. You then place the resulting pattern between two `/` characters.
* Concatenation and alternation of two patterns create a new pattern.
* The most basic patterns match a single character, a range of characters, or a set of characters.
* We call some special characters **meta-characters**; they have special meaning inside a regex. When you must match one literally, **escape** it with a leading `\` character.
* **Character class** patterns match any character in a set or range of characters of any combination of sets and ranges.
* **Anchors** force a regex to match at a specific location inside a string.
* A **quantifier** matches a pattern multiple times; they always apply to the pattern to the left of the quantifier. Quantifiers are **greedy** by default, but also have **lazy** forms.
* Parentheses let you combine patterns as a series of alternates. They also provide a way to **capture** parts of a match for later reuse; when used this way, we call the groups **capture groups**. We can access captured values with **backreferences**.

We've also learned a bit about using regex in a Ruby or JavaScript program. We learned how to test a string against a regex; how to split strings into multiple items using regex; and how to construct new strings from existing strings by using regex to extract the info we need.

### Cheat Sheet

In the following tables, unescaped `a`, `b`, and `z` characters denote regular characters (letters, digits, punctuation), while unescaped `p` and `q` characters indicate patterns (each pattern may be arbitrarily complex). Other characters are literals.

#### 1. Basic Matching

**Pattern**  | **Meaning**
---------|--------
`/a/`  | Match the character `a`
`/\?/`, `/\./`  | Match a meta-character literally
`/\n/`, `/\t/`  | Match a control character (newline, tab, etc.)
`/pq/`  | Concatenation (`p` followed by `q`)
`/(p)/`  | Capture Group
`/(p|q)/`  | Alternation (`p` or `q`)
`/p/i`  | Case insensitive match

#### 2. Character Classes and Shortcuts

**Pattern**  | **Meaning**
---------|--------
`/[ab]/`  | `a` or `b`
`/[a-z]/`  | `a` through `z`, inclusive
`/[^ab]/`  | Not (`a` or `b`)
`/[^a-z]/`  | Not (`a` through `z`)
`/./`  | Any character except newline
`/\s/`, `/[\s]/`  | Whitespace character (space, tab, newline, etc)
`/\S/`, `/[\S]/`  | Not a whitespace character
`/\d/`, `/[\d]/`  | Decimal digit (0-9)
`/\D/`, `/[\D]/`  | Not a decimal digit
`/\w/`, `/[\w]/`  | Word character (0-9, a-z, A-Z, _)
`/\W/`, `/[\W]/`  | Not a word character

#### 3. Anchors

**Pattern**  | **Meaning**
---------|--------
`/^p/`  | Pattern at start of line
`/p$/`  | Pattern at end of line
`/\Ap/`  | Pattern at start of string
`/p\z/`  | Pattern at end of string (after newline)
`/p\Z/`  | Pattern at end of string (before newline)
`/\bp/`  | Pattern begins at word boundary
`/p\b/`  | Pattern ends at word boundary
`/\Bp/`  | Pattern begins at non-word boundary
`/p\B/`  | Pattern ends at non-word boundary

#### 4. Quantifiers

**Pattern**  | **Meaning**
---------|--------
`/p*/`  | 0 or more occurrences of pattern
`/p+/`  | 1 or more occurrences of pattern
`/p?/`  | 0 or 1 occurrence of pattern
`/p{m}/`  | m occurrences of pattern
`/p{m,}/`  | m or more occurrences of pattern
`/p{m,n}/`  | m through n occurrences of pattern
`/p*?/`  | 0 or more occurrences (lazy)
`/p+?/`  | 1 or more occurrences (lazy)
`/p??/`  | 0 or 1 occurrence (lazy)
`/p{m,}?/`  | m or more occurrences (lazy)
`/p{m,n}?/`  | m through n occurrences (lazy)

#### 5. Meta-characters

**Outside Character Classes**  | **Inside Character Classes**
---------------------------|-------------------------
`$ ^ * + ? . ( ) [ ] { }  | \ /`

#### 6. Common JavaScript Functions for Regex

**Method**  | **Use**
--------|----
`String.match`  | Determine if regex matches a string
`String.split`  | Split string by regex
`String.replace`  | Replace regex match

### Variants

Regex have variants; though most have similarities to each other, the different **engines** also have noticeable differences. For instance, Ruby supports the `\A` and `\z` anchors, while JavaScript does not.

Other languages besides Ruby and JavaScript support regex: Perl, Python, PHP, Awk, C/C++, Java, and more all provide varying levels of support for regex. Even editors like vim, emacs, Atom, and Sublime Text, as well as command line tools like sed and grep use regex. Nearly every language and program has a slightly different take on regex, though.

Every regex engine should support the following features:

* basic single character matches, e.g., `/a/`.
* concatenation, e.g., `/pq/`.
* meta-characters escapes, e.g., `/\*/`.
* character classes, e.g., `/[abc]/` and `/[a-m]/`.
* `*` quantifiers, e.g., `/a*/`.
* `.` matches any character except a newline.
* `^` and `$` line anchors

Other regex engines may not support some of the features we discussed. For instance, `\A`, `\z` and `\Z` aren't available with most older engines. Some features may require escapes to designate meta-characters (the convention today is that we use escapes when we want to match literals). In Ruby and JavaScript, for example, you can use `/(p|q)/` for alternation, but in vim's default mode, you must use `/\(p\|q\)/` instead.

Some programs even let you specify the engine you want to use. Typically, you have a choice between **basic** (the default), **extended**, and **POSIX** engines. You often find this choice with modern versions of ancient programs like `awk`, `sed`, and `grep`.

Most modern programs cover all or most of the features we have discussed, perhaps with slight variations and various levels of custom enhancements.

### Resources

While this book covers almost everything you need to get started with regex, it doesn't pretend to be a reference or complete. There is much more to even the most basic implementations, so read the documentation. Familiarize yourself with the features that your regex engine supports, but don't try to memorize them; that sometimes encourages overuse of regex and the construction of regex with too much complexity. When you find that you need a feature, go ahead and look it up.

Your first place for information should be the documentation for your language's regex implementation. Since regex engines differ, sometimes considerably, ensure you're using the right information. The documentation is the best insurance against misunderstandings.

Despite the engine differences, most have a common subset of features and work in the same general way. Thus, most online discussions of regex are useful regardless of which language you use. Don't avoid sites because they use the wrong engine. Here are a few sites that may be useful:

* [Essential Guide To Regular Expressions: Tools and Tutorials](https://www.smashingmagazine.com/2009/06/essential-guide-to-regular-expressions-tools-tutorials-and-resources/)
* [Regular-Expressions.info](https://www.regular-expressions.info/)
* [Regex Tutorial—From Regex 101 to Advanced Regex](http://www.rexegg.com/)

And don't forget about [Rubular](https://rubular.com/) and [Scriptular](https://scriptular.com/) as well!

Developers frequently recommend two books as good regex resources:

* [Introducing Regular Expressions](https://www.oreilly.com/library/view/introducing-regular-expressions/9781449338879/)
* [Mastering Regular Expressions, 3rd Edition](https://www.oreilly.com/library/view/mastering-regular-expressions/0596528124/)

The former is a thorough introduction to regex and how to use them. It even covers advanced regex features, such as look-ahead and look-behind assertions. The latter assumes that you are familiar with the basics of regex, and takes you out to the deep waters where you can explore, in excruciating technical detail, nearly every facet of regex and their implementations.

### Where to go from here

Congratulations! You've made your first dive into the regex ocean, and returned to shore, unharmed. You should have a good grasp on how to construct regex, and how to employ them in your programs. At the same time, you may be a little doubtful of how much you remember. Fear not. It takes time and practice to learn how to use regex. The more you use them, the less difficulty you will have using them, and the more opportunities you'll find to use them. Skillful use of regex can make for concise, easy-to-read and easy-and-understand programs.

However, don't get carried away; a regex packs a lot of meaning into a small area and can be challenging to understand six months after you write it. If you think a regex that you are writing may be too hard to understand, you may be right. Take a step back and see if you can simplify the problem; sometimes, for instance, it's better to write multiple regex than to write one large one.

Don't forget to use **Rubular** and **Scriptular**; these two sites are incredibly useful when constructing regex. By giving them appropriate test data, you can play with and fine-tune your regex until it does what you want it to do.

Above all, keep practicing!

End 20220121 @22:06
