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

Inside square brackets, the rules for meta-characters change. We'll talk about meta-characters in "character classes" a little later.

Some variants of regex have different meta-characters, and some reverse the sense of escaped characters. In `vim`, for example, `\(` and `\)` are meta-characters, while `(` and `)` match literal parentheses. This reversal can be confusing, but you must be aware of it.

In recent years, programs that use regex have begun to support multiple regex styles. `vim`, for instance now has what it calls *extended syntax* which provides enhanced regex, and also lets you swap the way escaped characters work. You can choose to use `(` and `)` for grouping like most other programs, and use `\(` and `\)` for literal parentheses. Check your documentation to see whether your software supports different syntaxes.

```sh
?
What's up, doc?
Silence!
"What's that?"
```

You should find that `/\?/` matches all of the question marks in these strings. Try the same strings using `/?/` - you should see an error message instead.