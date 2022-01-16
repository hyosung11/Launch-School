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

