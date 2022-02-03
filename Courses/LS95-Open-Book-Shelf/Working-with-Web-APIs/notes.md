# Working with Web APIs

by Launch School

This book covers the basics of how web APIs work, how to interact with them, and what to think about when building your own. After reading this book and finishing its associated course, you will be able to work with web APIs in your own projects and even build your own APIs. This book is required reading as part of the course work at Launch School.

## Introduction

### What this Book Covers

Modern web applications of the so-called "Web 2.0" era can be defined in terms of an increased focus on user participation and content creation, but also by how interconnected these applications have become. Today it isn't uncommon to log into a site using a Twitter or Facebook account, access images from one service in another, or share content from one service in a variety of others. There is a large ecosystem of web software built entirely on top of other web applications, providing new functionality to users or integrating multiple systems together.

This development, which has created a landscape where programmers can leverage specialized services to build quality software faster, is all possible thanks to the rise of web APIs.

This book covers the basics of how web APIs work, how to interact with them, and what to think about when building your own. After reading this book and its associated course, you will be able to work with web APIs in your own projects and even build your own APIs.

### Who This Book is For

- This book is for beginning developers who have some experience programming and a familiarity with using the web through a web browser.
- This book assumes you have already read through our book on HTTP, or are working your way through it concurrently to this book.

Some of the examples will involve the command line, but entering and editing commands is all that is required. Other examples will use a graphical HTTP tool.

### How to Read This Book

In general, this book is best read linearly, from beginning to end. Later topics typically build on earlier ones.

### Examples

Parts of this book use command-line examples to show the input and output from programs. Here is an example:

```sh
$ date
Sun Oct 12 11:33:07 PDT 2014
```

In these examples, $ is the terminal prompt, and lines beginning with $ are typed at the prompt. All other lines are the output from the command.

In cases where the output is too long to include, an ellipsis indicates that the output has been truncated:

```sh
$ cat  /usr/share/dict/words
A
a
aa
aal
aalii
aam
Aani
aardvark
aardwolf
Aaron
...
```

## Preparations

We'll be using two different tools to interact with APIs in this book: [HTTPie](https://github.com/httpie/httpie), which is a command line application, and [Postman](https://www.postman.com/), a Google Chrome application. Most of the examples can be accomplished using either tool. Feel free to use any other HTTP tool you are familiar with, including those mentioned in our HTTP Book.

### Installing HTTPie

Installing and running HTTPie requires a working Python installation. Most Macs and Linux machines will already have a usable version of Python installed and can simply follow [the instructions on the HTTPie site](https://httpie.io/docs/cli/pypi).

macOs

```sh
# Install httpie
brew update
brew install httpie

# Upgrade httpie
brew update
brew upgrade httpie
```

Windows users can install Python if they don't already have it using the installers released by the Python Software Foundation, and then proceed to install HTTPie using the directions for Windows.

Once you have completed the installation, make sure everything is working by running the following command:

```sh
$ http --version
3.0.2 # 20220203
```

The installed version of HTTPie should print out its version.

If you see `command not found` or another error message, go back and make sure the installation completed successfully.

This book is written using HTTPie version 0.8.0. Newer versions should be OK, but it is possible that some of the options will have changed.

#### HTTPie Option Reference

This book will include detailed examples for using the http program provided by HTTPie. The following options for the http command will be used throughout the examples:

Option  | What it does
--------|-------------
-p  | What to output:H and B for request headers and body, h and b for response headers and body
-a  | Authenticate with this username:password combination
--help  | View command options and documentation

HTTPie's built-in help can be viewed by running it with the --help flag:

```sh
$ http --help
usage: http [--json] [--form] [--pretty {all,colors,format,none}]
            [--style STYLE] [--print WHAT] [--verbose] [--headers] [--body]
            [--stream] [--output FILE] [--download] [--continue]
            [--session SESSION_NAME_OR_PATH | --session-read-only SESSION_NAME_OR_PATH]
            [--auth USER[:PASS]] [--auth-type {basic,digest}]
            [--proxy PROTOCOL:PROXY_URL] [--follow] [--verify VERIFY]
            [--timeout SECONDS] [--check-status] [--ignore-stdin] [--help]
            [--version] [--traceback] [--debug]
            [METHOD] URL [REQUEST_ITEM [REQUEST_ITEM ...]]

HTTPie - a CLI, cURL-like tool for humans. <http://httpie.org>

...
```

We'll be going over how to use HTTPie to make requests when we review HTTP.

### Installing Postman

You will need to have Google Chrome installed. Then, visit the Postman page on the Chrome store and install Postman.

To open Postman, find and click its icon in the list of installed Chrome apps.

## Using Postman

### Making a Request

### Checking the Weather

### Summary

- Postman makes it easy to make HTTP requests from a web browser.
- Because it runs in a web browser, Postman has few dependencies and is easy to install on almost any computer.

We'll be using some of the more advanced features of Postman when we look at the Twitter API. In the meantime, you can use Postman for working through any of the examples, even those this book uses other tools for.
