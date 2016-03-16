---
title: Explaining Software to Non-Engineers
layout: post
author: Nate Levesque
head-image: source-matrix-tree.jpg
---

If certain stock images are to be believed, software engineering is equivalent to reading the source code of the Matrix. It's not tremendously surprising to see it depicted that way. Software is a very abstract concept that is frequently communicated very poorly by the people who build it.

As we learn about the world, we develop what are called mental models, [which are thought processes surrounding how something works](http://www.ecologyandsociety.org/vol16/iss1/art46/). When we learn about something new, we look for ways to apply our existing mental models to it, sometimes incorrectly. A great example of a mis-applied mental model is someone experienced with film cameras equating a digital camera's memory card to film and replacing it when full. Mental models are usually functional so they don't work as well when applied to something abstract such as software construction. Most people also don't have a mental model that can be applied to software so they're more inclined to use something they know such as the Matrix, hence amusing stock images.

Not only is software an abstract concept, it's surrounded by a lot of jargon. To a fellow software engineer, a statement such as "The API call to the MySQL database throws a null pointer exception" is perfectly understandable. To a non engineer, that sentence likely has absolutely no meaning at best, and at worst makes technology seem far more intimidating than it actually is. It's okay to just say that something broke. If more information than that is needed, the person is probably at least slightly technical but even saying that "when the program tries to get data, it doesn't get anything and crashes" conveys information without saying something that [sounds like television static](https://www.youtube.com/watch?v=HjDeXPXaRJo). Real world analogies can also be helpful since it's [easier to fit a mental model to things that can be pictured](https://www.nngroup.com/articles/mental-models/).

I've seen a lot of engineers take a "tell me more" or a "how does that work" as a cue to give tons of details and watched the eyes of the person they're talking to glaze over. A lot of people will smile and nod no matter what is said as soon as the technical details are completely incomprehensible to them, in hopes of seeming like they understand. It can also start an interesting game of Telephone if they try to explain it to someone later. Eventually, we end up with magic and aliens.

Most of the time, we don't need to explain the low levels of how an application works to someone who asked about it but it can be hard to gauge how technical to go. Unless someone asks, it's better to keep it simple and explain the idea behind it like you're trying to sell it as something cool. Maybe the messaging framework your microservices use to talk to each other is super cool, but your grandma probably doesn't need to know about it. In fact, she probably doesn't even need to know about the microservices, just the end goal that your application fulfills.
