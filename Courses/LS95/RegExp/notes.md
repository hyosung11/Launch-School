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
