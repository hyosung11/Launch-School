# Algorithm Clinic

## Welcome! Take a moment to read the instructions and tips below. Have fun, and feel free to ask Katarina or Missy questions at any time during the event

We will be using the video chat platform [gather.town](http://gather.town) to host this event.

## Instructions

1. When the event starts, you will be assigned a partner with which to swap algorithms.
2. The two of you should go to either of the two breakout rooms in Gather Town where you will see tables and chairs.
3. Choose a table, and move your avatar to the chair at one end of the table while your partner does the same.
4. You and your partner will only be able to hear each other so you won't have to worry about disturbing others.
5. Press 'x' in front of the "computer" at your side of the table to open up a memo pad with a link.
6. The link will take you to a google doc where your problem will be pasted
7. Start your PEDAC process, but 🛑 **stop** 🛑 when you finish your algorithm (don't code up the solution!)
8. Once you and your partner are finished with your algorithms, move your avatars to each other's computers to access each other's algorithms.
9. Open Coderpad, [repl.it](http://repl.it) or a code editor of your choice.
10. Using your partner's algorithm, code up a solution to the problem!
    a. If you aren't sure what to do based on the algorithm, ask them to modify it instead of hacking and slashing.
    b. Follow your partner's lead and solve the problem in the way that they prescribed rather than taking your own route.

***Note that you and your partner will be working on different problems, so it will be essential to provide your partner with a detailed algorithm in order to finish on time ;-D***

## Algorithm Tips

- Strive to write **language agnostic** algorithms. Instead of planning exactly what method to use when you code, describe what you need to do in plain English. Remember that you may be paired with a student who codes in a different language from you! For example:

```ruby
# use each_cons to get every 2 elements <- not ideal

# iterate through original array, populating the results array with subarrays containing every combination of two consecutive elements <- good
```

If it turns out `each_cons` isn't the right method, the first approach might not provide enough detail for you to form a plan B on the fly. Plus, the second approach reminds you what kind of collection you are working with (a nested array of two-element subarrays)

- Before moving on to the next step, ask yourself if you **know exactly how to execute the step you just wrote**. If there is any fuzziness, stay on the current step and break it down into smaller tasks until you find clarity.

```ruby
# get all substrings 
# check if any are in the 2nd arg array
```

If you don't know how to get all substrings, don't move on! Break the problem into smaller tasks.

```ruby
# get all substrings
 # break string into array of chars
 # iterate from 0 to index of last character (represents starting index)
 # iterate from starting idx to index of last character (represents ending index)
 # take slice of the original str from starting index to ending index
 # add that slice to results arr
```

Much better!

- Feel free to test pieces of your logic in `irb`.
- When troubleshooting with your partner, ask them to modify their algorithm instead of modifying the code together. Say something like "could you elaborate a little more on line 14?" instead of "what method should I use?"

---

Introductions
- where in curriculum
- ruby or javascript

Aryan RB109
Chris RB109, prep for assessment
Cory RB130
Dana JS230
Elaine RB101
Felicia RB track
H
Marc JS230 Germany
Mike RB
Sarah RB109
Stan RB109 Netherlands
Sulaiman RB track LS170 Nigeria

write the algorithm in the google doc
use the approach given to you by your partner

- ask clarifying questions
- language agnostic
- ruby left / javascript right

Algorithm Clinic

End
