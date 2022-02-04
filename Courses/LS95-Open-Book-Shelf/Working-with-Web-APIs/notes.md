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

It is fairly easy to make an HTTP request with postman.

You can think of Postman as a specialized web browser that allows a little more manual control and has more buttons and switches as a result. We'll take advantage of these features throughout the course of this book, but we won't need most of them to make some simple requests.

Let's start with loading some web pages you are probably familiar with. Enter www.google.com where it says Enter request URL here and press the Send button. You should see a screen that looks like this:

The HTML code of this page is heavily optimized to be as small as possible, and as a result, it is very difficult for a human to interpret it. Luckily, we have computers and web browsers to do that for us. If we were to dig into this HTML, eventually we would find the form and input elements, from which we could figure out how to build the query to perform a search.

Instead of spending time on that, though, it's better to just tell you that the **path** for searches is `/search` and the **query parameter** that needs to be sent is `q`. Let's put this knowledge to use by appending this path to `www.google.com` to build the **URL** `www.google.com/search` and adding a parameter with a search term. Click Send again to send this new request.

Assuming the **response code** is *200 OK*, the response is the markup used to display a typical Google search result page. You might look at this mess of HTML, CSS, and JavaScript and wonder how anything useful could be done with it. Scroll around and take a look at how much code there is just to display this web page. Due to the complexity and structure of the code (and how it is optimized for size), it would be difficult to do anything other than display this code in a web browser. If you consider how this page really just displays ten or so links and summaries, it seems inefficient to bury that information in such a mountain of markup, styles, and scripts.

The response is so large not because of the size of the data itself, but all of the other information about how to display it that is included. The page includes instructions on what color and size the links should be, some JavaScript code that adds mouse-over effects, and so on. Assuming we just wanted the list of search results for some other use and didn't want to deal with all of the other content, wouldn't it be nice to just get the data?

Web APIs can do a lot of the same things that a user can do through a web browser, but since they are intended to be used by computer programs, there is no need to specify how the data should be presented. API responses are typically just data, represented in a way that makes it easy to put to use.

Let's see what happens when we make a request to a web API that is designed to return simple, cleanly formatted responses. DuckDuckGo provides an API to access its instant answers functionality. This API returns a list of links similar in structure to the kind of results a search engine would return. We'll use the same search term, the URL https://api.duckduckgo.com, and an additional query parameter format (which should have the value json).

This request returned a response that is designed for consumption by a computer, and only the data itself is represented. Unlike the previous responses, there is no HTML, CSS, or JavaScript in the response; there is nothing to describe how to display the data other than its structure. The response is in JSON format, which is a way to represent data that was derived from the JavaScript language. This format is commonly used when formatting data for consumption by other computers as it has a very well defined structure and is widely supported by both servers and clients. We'll be working with JSON throughout this book, but it isn't important to understand everything about how it works right now.

You might have noticed the URL we just used started with https://. Just like a web browser can load pages securely using HTTPS, APIs can be accessed using these secure URLs as well. Postman assumes any URL that doesn't begin with a scheme (http:// or https://) actually starts with http:// and adds that to the URL when making a request.

### Checking the Weather

If you wanted to build an application that displayed a user's current weather, how would you go about doing it? Where would you find out what the weather actually is in a given location? This is the kind of problem web APIs can help solve, by enabling a program to use information provided by a service anywhere on the internet.

Let's assume this application has a user that lives in Portland, Oregon. We need to get the current conditions for this location. OpenWeatherMap provides a f[ree API that returns the current conditions for anywhere on Earth](https://openweathermap.org/current). The URL for the service is <http://api.openweathermap.org/data/2.5/weather> and the parameter used to specify the location is *q*. We'll use Portland,OR,US as the value for this parameter.

The OpenWeatherMap API started requiring an API key since this book was written. If you'd like to follow along with the requests made in this session, [sign up for a free API key](http://api.openweathermap.org/data/2.5/weather) and add it as an additional parameter, APPID, to any requests you make. [More details are available on the OpenWeatherMap site](https://home.openweathermap.org/users/sign_up).

![screenshot not included]

This screenshot was taken before the country was required to search for a city in the United States. `,US` is required now.

While we don't know the exact meaning of all of the data in the response, we can take a decent guess at what it means based on the keys in the JSON. Keys are the description of each piece of data, and the piece of data itself is referred to as the value. In this case, we have a value for the key temp that is `259.59`, which isn't a temperature you'll find on earth outside of a volcano, fire, or an oven.

Let's take a look at the [documentation for the API we're using](https://openweathermap.org/weather-data#current) and see if there is any information there that explains this incredibly high value.

The documentation looks a little different now, but this image still applies.

The temperature value is in Kelvin. This explains why it was so high.

This brings up an important point about working with APIs: it is very important to read any documentation for the API in order to be able to interpret the values in a response. The same documentation will hopefully also list out what parameters can be sent to the API as a part of the request.

In the case of this weather API, the documentation mentions that by sending the parameter units with a value of imperial along with the request, the data values will be represented in imperial units.

### Postman Summary

- Postman makes it easy to make HTTP requests from a web browser.
- Because it runs in a web browser, Postman has few dependencies and is easy to install on almost any computer.

We'll be using some of the more advanced features of Postman when we look at the Twitter API. In the meantime, you can use Postman for working through any of the examples, even those this book uses other tools for.

## Defining API

### What is an API?

An **API** or **Application Programming Interface**, provides a way for computer systems to interact with each other. There are many types of APIs. Every programming language has a built-in API that is used to write programs. Mobile devices provide APIs to give access to location or other sensor data, such as the device's GPS location or the orientation of the device. Operating systems themselves have APIs used by programs to open files, access memory, and draw text on the screen. While the types of uses for APIs are vast, the one thing all APIs have in common is **providing functionality for use by another program**.

### Web APIs

This book is going to focus on APIs that are built with web technologies and that work in a similar way to the web. These are often called **web APIs** or **HTTP APIs** because, like the web, they operate over HTTP. We'll use the term *web APIs* most often as it is shorter and potentially more common in discussion. There will be more detail about how APIs relate to HTTP as we work through the rest of this book as we delve into *how* web APIs work.

### Provider and Consumer

When discussing APIs and how systems interact using them, distinguish between the system that the API belongs to and the external service (or user) that will use this API.

- An API **provider** is the system that provides an API for other parties to use. GitHub is the *provider* of the GitHub API, and Dropbox is the *provider* of the Dropbox API.
- An API **consumer** is the system that uses the API to accomplish some work. When you check the weather on your phone, it is running a program that is *consuming* a weather API to retrieve forecast data.

Throughout the course of this book, we will be manual consumers of the web store API. The web store server will be the provider for our initial investigation, and the following chapters will move on to working with some real world API providers.

### What about Clients and Servers?

*Client* and *server* are rather overloaded terms, with server conjuring up images of racks and racks of computers in massive server farms, and clients as being small or mobile computers. In this way, client and server are often used to indicate the location or size of a computer and not its role in communicating with another machine.

When we speak of clients and servers in the context of APIs, the server is generally going to be the API provider and the client will be the consumer (technically, a client is the side of a communication that initiates the connection.) As a result of this, the terms are sometimes used as if they were synonyms.

As a result, it is best to stick to using *provider* and *consumer* when discussing APIs, as this makes the relationship of the computer to the API much clearer.

### Defining API Summary

- *Web APIs* allow one system to interact with another over HTTP (just like the web).
- The system offering the API for use by others is the *provider*.
- The system interacting with the API to accomplish a goal is the *consumer*.
- It is best to prefer the terms *provider* and *consumer* over client and server.

With all of this terminology out of the way, let's get into why you might use an API when writing a program.

## What APIs Can Do

### Sharing Data

Perhaps the most common use case for web APIs is simply **sharing data between systems**. Consider a web application for creating birthday cards. Instead of requiring a user to enter the names and birthdays for each of their friends, the application could use an API provided by Facebook to fetch data about a user's friends automatically.

At a certain level, all APIs are used to transfer data between systems. This basic capability offers many benefits to application developers and users alike. An extremely common case would be providing data to a mobile application that needs to access data from a web-based service. The Netflix mobile application (and actually all of the various Netflix apps that run on different devices) need to be able to access your same Netflix account. Since this data is kept on a central server, it can be exposed to the mobile and other apps using an API.

### Enabling Automation

Imagine a hat manufacturer who is really working on making its customers happy. Let's call this company HatCo. HatCo has a web store where their entire catalog of hats is available for shipment anywhere in the world. As part of a new customer happiness campaign, HatCo has announced that each order enters the purchaser into a drawing for a free custom hat.

HatCo needs to make sure that every person who places an order through the website is entered into a sweepstakes for a daily drawing. Right now the company is a year old and only fills a few orders each day. It is one of the employees' responsibilities to manually enter each customer's information into the sweepstakes system.

Fast-forward a few years into the future. After several years of steady growth, hundreds of orders are now placed on the HatCo web site each day. It takes hours for a human to copy the customer information into the sweepstakes system, and there are plenty of typos and mistakes made along the way that corrupt some of the data as it is transferred.

Luckily, both the HatCo web store and their sweepstakes system provide APIs. The store's API grants access to information about orders and customers, and the sweepstakes' API offers a way to add or remove entries from a drawing. The company hires a developer to write a program that fetches a days' worth of orders from the web store and enters the customers who placed those orders into the sweepstakes system. This program is set up to run at midnight every night. It copies the data from one system to the other without making any mistakes and allows a now happy HatCo employee to use their time for something more fun.

**APIs allow users of a service to make use of it in new and useful ways.**

### Leverage Existing Services

NearPhoto is a new (imaginary) mobile application startup with plenty of VC funding. This company is dedicated to *changing the way nearby photos are found*.

NearPhoto is working on an app that, not surprisingly, displays photos taken near a mobile device's current location. Their founder has drawn up a plan to ship this application by the end of the year:

1. Create a large data set of images from all over the world and associate each with the geographic location where it was taken.
2. Build a way to search all this data spatially in order to find images taken near a given point.
3. Build an app that sends queries to this system and displays the results.

After consulting with the CTO, the founder learns that the proposed plan is going to be a whole lot of work, take a really long time, and require huge amounts of disk space to store all the photos. Luckily, the CTO has a different idea of how to proceed with development:

1. Get access to an existing photo dataset that includes geographic search functionality, such as that of Instagram, Facebook, or Flickr.
2. Build an app that sends queries to this system and displays the results.

This new plan is easily accomplished using existing APIs. By following this path, the company is well on its way to a profitable exit for everyone involved.

The number of things a modern web application is expected to do is vast. Even fairly simple sites will need to process credit card payments, send emails, fetch information about books, or call cell phones and read messages to the recipient. While it is possible to write all of the code to perform these tasks oneself, it usually doesn't make sense to, especially for smaller companies with basic needs.

**APIs enable application developers to build their applications on top of a variety of other specialized systems, allowing them to focus on their actual objectives and not worry about all the complexities of every part of the system.** In a way, it's like hiring a team of specialists for a construction project. While it would be possible to do everything, it makes a lot more sense to delegate certain responsibilities to a specialist. A project will have better results if it is built by a plumber, an electrician, and a carpenter than if it was all done by a single person. Plus, the team effort will likely result in a higher quality product in less time.

### What APIs Can Do Summary

- APIs break down the walls between systems, allowing them to share data.
- APIs provide an "escape hatch" enabling service users to customize the software's behavior or integrate it into other systems if required.
- Many modern web applications provide an API that allows developers to integrate their own code with these applications, taking advantage of the services' functionality in their own apps.

## Accessibility

### Public and Private

### Terms and Conditions

### Accessibility Summary

- APIs come in two flavors, *public* and *private*. You will generally work with public APIs. Using private APIs is most common when they are your own.
- API usage is often conditional on the acceptance of a set of terms set by the API provider.


