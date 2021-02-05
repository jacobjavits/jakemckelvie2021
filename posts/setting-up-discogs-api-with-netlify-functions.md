---
layout: posts.njk
title: Setting Up Discogs API with Netlify Functions
slug: 
tags: post
---

One of the small projects I've had in mind for a while was to set up the [Discogs API](https://www.discogs.com/developers/) on my site to pull in all the records from my [collection](https://www.discogs.com/user/jacobjavits/collection). This isn't something that would be considered especially challenging by most seasoned developers' standards, but it's something that I've had to do a surprisingly little amount of in my career. The specific challenge in this case was figuring out how to pass my API token in the request on a static website with no real back-end. 

I spent a good while searching with such queries as "keep API key secret in javascript fetch" with no real satisfying results. Some solutions proposed using <code>.env</code> variables and passing the variable to the API. The problem with this is that the variable is still rendered in plain text on the front-end, so it's ultimately not much different than passing in the key directly. I was going to start learning about setting up an Express server or something of the like, when I somehow came across this [Learn with Jason video with Joyce Lin](https://www.youtube.com/watch?v=55yiBkD88oo) which explains exactly how to do what I was trying to do on exactly the same hosting platform that I was already using.

Jason explains the process of setting up a [Netlify Function](https://docs.netlify.com/functions/overview/) to make the API call. You then leverage Netlify's [environment variables](https://docs.netlify.com/configure-builds/environment-variables/#app) to store the API key. I don't quite know what's going on under the hood with those variables, but I do know that when used with the functions tool, that data is never exposed on the client-side, thus being a perfect solution for this sort of thing. 

This still took me a good chunk of a Sunday afternoon to figure out, but I'm glad I came across Jason's video because it was a really helpful way to learn about something I didn't fully understand. 

I still have a lot of updates to make to the [Records](/records) page to make it more functional and cool, but I at least got something off the ground that has been stationed purely in the "that would be cool to do" part of my brain forever.