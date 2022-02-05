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

**Public APIs** are intended for consumption outside the organization that provides them. Twitter, Facebook, Instagram, and many other social media sites provide public APIs that enable third-party programs to interact with their services. This is the type of web API this book deals with.

**Private APIs** are intended only for internal use. These APIs are subject to change at any time. The Google search page uses a private API to get a list of search suggestions to display while a user is entering search terms. Sometimes it is possible to call private APIs, but in general, doing so is a bad idea for a variety of technical, ethical, and even potentially legal reasons.

Companies and services that provide public APIs are usually not shy about doing so, as offering a good API can be a competitive advantage. Look for *API or Developers* links at the bottom of websites which will usually lead to useful information about that site's APIs.

Providers of public APIs can and will dictate the conditions of using their API. Just because an API is public doesn't mean that access will be granted to anyone, or that there aren't any rules around how the API can be used. Many APIs require consumers to have accounts with the provider's service and verify this by requiring requests to include authentication data or parameters.

### Terms and Conditions

The data accessed via APIs carries with it ethical and legal responsibilities. Many API providers require developers to agree to terms and conditions of use before they are granted access. While these documents are usually written in legalese and can be a bit dense, it is important to understand what is and isn't allowed with respect to API data. In particular, keep in mind the following:

- **What restrictions does the API place on your use of its data?** For example, data from the Amazon Product Advertising API can not be used on mobile devices or TV set top boxes, nor can it be stored for more than 24 hours.
- **Is the API exposing any data that could be linked back to a person?** Many social applications allow access to a user's personal information, and by accessing it, you are taking on the responsibility of keeping this information safe and secure.
- **Does the API have rate limits, and if so, what are they?** Many APIs limit how many requests can be sent from a single user or application within a given time frame. Such restrictions can have an impact on the design of programs that interact with their APIs.

### Accessibility Summary

- APIs come in two flavors, *public* and *private*. You will generally work with public APIs. Using private APIs is most common when they are your own.
- API usage is often conditional on the acceptance of a set of terms set by the API provider.

## A Review of HTTP

This chapter will review the basics of how HTTP works, but only as much as is needed to discuss concepts related to web APIs. The next chapter will cover URLs, and following that will be a discussion of data serialization. Just as humans use names to identify each other, speech to create sounds and language to interpret those sounds into meaning, computers use these technologies to communicate with each other: URLs describe what resource is being targeted, HTTP defines how systems send messages about these resources, and data formats allow these messages to be converted into data that is then acted on.

The technologies of the web enable collaboration between systems. Let's start with the backbone of these communications, HTTP.

Note: For a more thorough look at HTTP, we have an entire book dedicated to the subject.

### Request and Response

Web APIs are based on the same technologies that allow websites, web browsers, and web servers to work: **HTTP**.

HTTP, or **Hypertext Transfer Protocol**, describes how a client program (such as a web browser) interacts with servers. These interactions are based on a **request-response** pattern, where the client asks the server for something it wants (the **request**) and the server then sends something back (the **response**.) The web, as complicated as it can seem, is almost entirely built on top of this model of sequential requests and responses.

For example, if a person types `http://google.com` into the address bar of their browser, the browser will request a page from the server at `google.com`. The server's response is then interpreted by the browser and displayed to the user. Each image, stylesheet, and script file referenced in the rendered page is loaded in the same way: the browser makes a request to the server, receives a response, and then does something with it. In this way, multiple requests and responses are used together to achieve a larger goal (in this case, the display of an entire webpage).

APIs work in basically the same way, only instead of a human making requests through a web browser, API requests are usually made from one computer program to another. As a developer, you can call APIs from your own programs. This can enable your programs to do all kinds of things that would be difficult or impossible to do by themselves.

We've already looked at how requests can be made with Postman. It is also possible to explore some APIs from the command line, and we will use that as an example to review some important HTTP concepts.

### Making a Simple Request

Entering the following command in a terminal will retrieve the country name (and other information) for the IP 161.185.160.93:

```sh
$ http https://api.ip2country.info/ip?161.185.160.93 --json
```

The `--json` isn't strictly required here, but we include it just in case the API gets updated.

Like most of the web, the request and response are text-based, which makes things fairly easy for us to look at and understand as humans. We can break the response into three main parts: *the status code*, *the headers*, and *the body*.

```sh
# response:
HTTP/1.1 200 OK
CF-Cache-Status: BYPASS
CF-RAY: 6d800d583832e704-EWR
Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Fri, 04 Feb 2022 01:16:11 GMT
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
NEL: {"success_fraction":0,"report_to":"cf-nel","max_age":604800}
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=xogq2OvHOwbnL2QtwGXgAV153m80x%2BAqKT%2FNNbfaucZipdbU%2Fo5EkZIS0j1ZZzArgcEUGjjRpwd0QUqQfSTNEK94lo98MQHc9cbe8iHRHgbAIPM%2BDQ%2BWNTgr%2FH5XIG1q%2FbJu6ejM"}],"group":"cf-nel","max_age":604800}
Server: cloudflare
Transfer-Encoding: chunked
Vary: Accept-Encoding
access-control-allow-methods: GET, HEAD
access-control-allow-origin: *
alt-svc: h3=":443"; ma=86400, h3-29=":443"; ma=86400
cache-control: max-age=0, private, must-revalidate
strict-transport-security: max-age=31536000
x-cache-status: MISS
x-content-type-options: nosniff
x-frame-options: deny
x-robots-tag: noindex
x-xss-protection: 1; mode=block

{
    "countryCode": "US",
    "countryCode3": "USA",
    "countryEmoji": "🇺🇸",
    "countryName": "United States"
}

```

### Status Code

The first line of the response looks like this:

```sh
HTTP/1.1 200 OK
```

The important part of this line is the last part, 200 OK. All HTTP responses will start with a three digit numeric code and message that summarize the result of the preceding request. There are a lot of status codes, and there is no need to try to remember them all because they are [easy to look up](https://httpstatuses.com/) as needed. There are, however, a few basic rules to interpreting these codes that will come in handy:

- If a status code is in the format 2xx, such as `200` or `201`, it means that **everything is fine** and the request was handled successfully.
- A status in the form 3xx, such as `303`, means that the request was handled successfully, but the response to the request is *located at a different URL*, which is usually provided in a header (we'll talk about headers next.) `3xx` statuses are commonly used by a server to respond to a HTML form POST submission. They are much less commonly used when working with HTTP APIs.
- A status in the form 4xx, such as `404`, means that the client did something in the request that the server didn't like. It often means that a required parameter was forgotten or that the URL is incorrect.
- A status code in the form 5xx, such as `500`, means that the server encountered an error processing the request. Usually this means that the system you are connecting to is having issues that need to be resolved by those who run it before you can continue, although sometimes it can also be the result of a bad request.

It's worth noting that *servers don't always return the correct status code*, often as a result of a programming oversight. This will be covered in depth in a future course; for now, know that it is sometimes necessary to look at the entire response for clues as to what is happening when you have received a status code that doesn't make sense.

### Headers

The next section of the response includes a lot of detailed information, such as when the response was created, the name of the server handling the request, and a lot more:

```sh
Access-Control-Allow-Methods: GET, HEAD
Access-Control-Allow-Origin: *
CF-Cache-Status: BYPASS
CF-RAY: 5f581e324a538d39-PDX
Cache-Control: max-age=0, private, must-revalidate
Connection: keep-alive
Content-Encoding: gzip
Content-Type: application/json; charset=utf-8
Date: Sat, 21 Nov 2020 05:47:47 GMT
Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
NEL: {"report_to":"cf-nel","max_age":604800}
Report-To: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report?s=A9pqHyo5wkDoUv3kD0aV%2FJw98TTNH542ziarGlMtEzSad831AiFA5ElekrwCUMbydIzgWOrr%2FGAuYIpw9gxaxDcM8sbpUr%2BJ9Du4mqL36IDT4rv0"}],"group":"cf-nel","max_age":604800}
Server: cloudflare
Set-Cookie: __cfduid=d456dafe3419cc30d128676411cc9737c1605937666; expires=Mon, 21-Dec-20 05:47:46 GMT; path=/; domain=.ip2country.info; HttpOnly; SameSite=Lax
Strict-Transport-Security: max-age=31536000
Transfer-Encoding: chunked
Vary: Accept-Encoding
X-Cache-Status: HIT
X-Content-Type-Options: nosniff
X-Frame-Options: deny
X-Robots-Tag: noindex
X-XSS-Protection: 1; mode=block
cf-request-id: 068af1337000008d3958a9e000000001
```

The most important line is the one that defines the response's Content Type:

```sh
Content-Type: application/json; charset=utf-8
```

The content type describes the format of the rest of the response's content. This response's content type is `application/json`, which means we can interpret the body as JSON. It also says that the body is written in UTF-8, which tells us that the characters in the body are in the UTF-8 encoding. UTF-8 is a very common encoding on the internet, and in general, you don't need to do anything special to work with it. It is the default encoding in many programming languages and tools.

We'll spend more time on media types in a later section.

The rest of the headers specify other pieces of information about the response. There are a lot of headers that can be used, and systems can even define their own. We will cover some additional headers as we encounter them throughout our exploration of APIs, and there is a list of some common ones in the [appendix](https://launchschool.com/books/working_with_apis/read/http_response_headers).

### Body

By looking at the content type of the response body, we know that the rest of the response is in JSON format. HTTPie notices this and prints out the response body in a way that is more suitable for human consumption:

```sh
{
    "countryCode": "US",
    "countryCode3": "USA",
    "countryEmoji": "🇺🇸",
    "countryName": "United States"
}
```

If you run the command with an IP from a different country, you will, of course, see different data. The structure of the data should be the same, though.

A program that is making a call to an API such as this one would probably pull a few pieces of data out of this payload and do something with it. An app that displayed the current value of a stock portfolio might just need the current price and maybe the high and low values to display to a user. To do this, the app could **parse** the JSON and then access the parts it cared about.

*Parsing* is the process of converting data from one format (often one that is designed to transfer or persist the data) into a representation that is easier to work with for a computer. When a web browser loads an HTML page, one of the first things it does is parse the HTML text into an internal representation used to draw the page on a screen

### A Review of HTTP Summary

- Web APIs are built on top of HTTP, the technology that makes the web work.
- HTTP Responses have 3 main parts: status code, headers, and body.
- The *Content-Type* header describes the format of the response body.

## A Review of URLs

### URL or URI?

It is common to come across the acronyms URL and URI used throughout technical literature. Part of the cause for confusion stems from how they seem to be used interchangeably.

**URI**, or **uniform resource identifier**, is a name used to identify a resource. **The resources represented by URIs can be anywhere.**

**URL**, or **uniform resource locator**, is the location where a resource can be found.

*URIs are like social security numbers*: every US citizen has a unique number, and as a result, these numbers could be used to reference specific individuals in a computer system (and in fact, they often are used for exactly this purpose in the medical and health insurance industry). But if you needed to have a face to face conversation with a person, just knowing their social security number would do little to tell you where to find them.

*URLs, on the other hand, are like street addresses*. Given the street address of a person, it is possible to actually find and interact with that person. These identifiers also uniquely identify a resource, which means that a URL is a kind of URI.

URLs also include *how* to access the resource. All the URLs we will be working with in this book (and that you'll work with on most projects) begin with *http://* or *https://*, which signify the resource can be accessed using the HTTP protocol. When the scheme is *https://*, it is an HTTP connection over a secure connection.

When it comes to deciding to use URI or URL, The thing to remember is this: **if you are working with resources on the internet, just use URL.**

### The Parts of a URL

URLs are made up of a few components:

- A **scheme**, such as *http*
- *://*, a colon and two slashes
- A **hostname**, usually a domain name such as *blogs.com*
- An optional colon and **port**, such as *:81*
- The **path** to the resource, such as */api/v1/pages/1*
- An optional **query string**, such as *?query=term*

Put together, the example values above would construct the URL *http://blogs.com:81/api/v1/pages/1?query=term*. Ports are relatively uncommon in the URLs used when interacting with public APIs, and we won't go into them further.

This book will discuss a lot on URLs. It will also reference paths quite a bit, as they are shorter and make the relevant sections more obvious. If you have a full URL and need to know what its path is, just remove everything from the beginning to the end of the domain name, leaving the slash.

### Identifiers in Paths

Some of the paths used in API documentation or when discussing APIs include identifiers for specific resources. Take, for example, the path `/products/42`. The final segment of the path, `42`, is a value that is used to identify a specific product.

When referring to this path in the general sense and without a particular product in mind, it would be written `/products/:id`. The final segment, `:id`, is a placeholder for a value to be filled in later. Any value in a path that begins with a colon in this book should be considered a **placeholder**. Here are a few other examples:

- `/api/:version/products/:id`
- `/api/v1/users/:id/profile`

It is possible for paths to include multiple placeholders. If a product could have many comments, and the product's path was `/products/:id`, it is possible that an individual comment's path could be `/products/:product_id/comments/:id`. This form of path can be referred to as *nested*, because the route for comments, `/products/:product_id/comments`, is nested underneath the path for a product, `/products/:id`.

The specific placeholder used within a path isn't important as long as it is unique within the path. It is common for the final identifier to be named `:id`, while other placeholders have names prefixed with the resource they map to.

### A Review of URLs Summary

- Working with web APIs involves working with *URLs*.
- URLs represent *where* a resource is and *how* it can be accessed.
- URLs typically contain a *scheme*, *hostname*, *path*, and sometimes a *query string*.
- Paths (and URLs) can include *placeholders* when they are written generically.

## Media Types

### What is a Media Type?

In the same way that humans have developed shared languages to facilitate communication, the internet has given rise to a set of shared markup languages and data formats for transferring information between computers. One example of this is **HTML**, the markup language used to create all web pages, including this one. Because nearly all computers (and now most phones, tablets, and even televisions) can understand HTML and display it, the web is extremely accessible for people using a wide range of devices.

HTML is one of many different **media types** (also called **content types** or sometimes **MIME types**) supported by modern web browsers. It is represented in an HTTP response as the `Content-Type:` header as `text/html`.

```sh
Content-Type: text/html
```

This tells the browser to interpret the content as HTML and render it graphically on the screen.

Most web servers also include a `charset` for certain text media types, so a real world response header would look more like this:

```sh
Content-Type: text/html; charset=UTF-8
```

The `charset` (or character set) tells the browser which set of characters the response is using. The charset for most requests will be `UTF-8` or `ISO-8859-1`. For the purposes of this book, and for the work we'll be doing with APIs, we don't need to get into the difference between these or other character sets. If at some point you are seeing strange characters when working with an API, you should check the response charset to make sure it is something compatible with the tools you are using.

Other media types include `text/plain` for plain text responses, `text/css` for CSS stylesheets, `application/javascript` for JavaScript files, and many, many more. There are media types for PDF documents, sound files, videos, ZIP archives, and many, many, more.

It is possible to use HTTPie to look at the content type of a variety of URLS and see some of the different media types. Using the `--headers` switch tells `httpie` to only print out the response's headers (in the following listings, some headers have been omitted for brevity):

```sh
$ http --headers www.google.com
HTTP/1.1 200 OK
Cache-Control: private, max-age=0
Content-Encoding: gzip
Content-Length: 6250
Content-Type: text/html; charset=ISO-8859-1
Date: Sat, 05 Feb 2022 20:12:16 GMT
Expires: -1
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
Set-Cookie: 1P_JAR=2022-02-05-20; expires=Mon, 07-Mar-2022 20:12:16 GMT; path=/; domain=.google.com; Secure
Set-Cookie: NID=511=nQ8d-ttl54xJ6bvdYASDoaKm41e4XQkL1N1pC0qtm9ua3uBowFY_e6zLeGjI6LWbDHg17N65DtvRD5WVJIybUvCgNUMXRTOdmVaBXB84yHX5wcLvupho8NuH7GQW2IOKMbvbBzS0V7CIylTSMaqdWjIG0jdtqDsAnKDsjP5Hu8g; expires=Sun, 07-Aug-2022 20:12:16 GMT; path=/; domain=.google.com; HttpOnly
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 0
```

The Google homepage has a media type of `text/html`, which makes sense: it is a basic web page.

Many other parts of the web are built with text as well, such as the CSS used to tell a browser how to display HTML. Google Fonts provides CSS files that enable browsers to display text in specific fonts using the media type `text/css`:

```sh
$ http --headers http://fonts.googleapis.com/css\?family\=Open+Sans
HTTP/1.1 200 OK
Access-Control-Allow-Origin: *
Cache-Control: private, max-age=86400
Content-Encoding: gzip
Content-Type: text/css; charset=utf-8
Cross-Origin-Opener-Policy: same-origin-allow-popups
Cross-Origin-Resource-Policy: cross-origin
Date: Sat, 05 Feb 2022 20:16:46 GMT
Expires: Sat, 05 Feb 2022 20:16:46 GMT
Server: ESF
Timing-Allow-Origin: *
Transfer-Encoding: chunked
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 0
```

The media type returned by loading a photo URL from Flickr is `image/jpeg`, which tells the browser to display the request's body as an image.

```sh
✗ http --headers https://c2.staticflickr.com/4/3913/15095210318_930069f3d6_c.jpg
HTTP/1.1 200 OK
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Origin: *
Cache-Control: public, max-age=31536000
Connection: keep-alive
Content-Type: image/jpeg
Date: Sat, 05 Feb 2022 20:18:28 GMT
ETag: "f9bf1c34c2d1c60b123229a47ed855d1.1"
Edge-Control: public, max-age=31536000
Expires: Sun, 05 Feb 2023 20:18:29 GMT
Hiring: Change the world of photography with us. https://www.flickr.com/jobs/
ImageHeight: 800
ImageWidth: 530
Last-Modified: Sun, 17 Feb 2019 04:11:29 GMT
MiB: 2
OriginType: X
OurValues: Grow Together (#1 of 5)
P3P: CP="This is not a P3P policy. We respect your privacy."
Powered-By: Mutation/1.0
Quote: "I'm not a kid anymore, I'm one of you, one of the X-Men. It means more to me than anything in the world."
Server: Jubilee
Streaming: false
Surrogate-Control: public, max-age=31536000
Transfer-Encoding: chunked
Via: 1.1 4a124e8b579c1eb5bfcb198db51e61fe.cloudfront.net (CloudFront)
X-Amz-Cf-Id: YSxamPymIFeSokxWfdPYE4Jji46N4tMp-ExzJToO08ZAJTdZxifw2g==
X-Amz-Cf-Pop: PHL50-C1
X-Cache: Miss from cloudfront
X-Env: a=live, b=jubilee, c=4cf206a9, e=5017319cdd8b6f0e8ca83f5d61e011f0dc7d4baa
X-Frame-Options: DENY
X-Request-Id: 53e976b2
X-TTDB-L: 113957
X-TTFB: 0.1405
X-UA-Compatible: IE=edge
```

### Data Serialization

APIs are generally used to allow systems to communicate by passing structured data back and forth. The content of most requests will use a format and media type that *works well for representing hierarchical data*. These formats are known as data serialization formats.

A **data serialization format** describes a way for programs to convert data into a form which is more easily or efficiently stored or transferred. The stored or transferred data can then be converted back into the original data at any time by the original program or any other program that can understand its format.

In 1915, the artist Kazimir Malevich created his now well known piece Black Circle to go along with his manifesto From Cubism to Suprematism . It looks like this:

![Black-Circle](tealeaf-black-circle-original.jpg)

Now let's imagine a world where Malevich was born one hundred years later, in 1979 instead of 1879. In this reality, it is conceivable that *Black Circle* would have been created in a vector graphics program instead of on canvas. In this world, it looks more like this:

![Black-Circle-Vector](tealeaf-black-circle-vector.png)

When it came time for Malevich to save his creation to a disk or perhaps send it to another system, the graphics program might save a representation of the circle into a file using some SVG code:

```xml
<svg viewBox="0 0 55 54">
  <circle cx="32.5" cy="22" r="21.3" fill="black"/>
</svg>
```

This SVG code is written using XML, which is an older data serialization format that is sometimes used by APIs. By serializing data that represented the circle, the drawing program could more easily store the information or transfer it to another system. The data could also be read back into another application, which could display the circle on the screen, send it to a printer, or allow a user to make additional modifications.

### XML

### JSON

### Media Types Summary

