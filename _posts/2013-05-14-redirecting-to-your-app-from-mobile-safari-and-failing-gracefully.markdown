---
layout: post
title: "Redirecting to your app from Mobile Safari. And failing gracefully."
date: 2013-05-14 19:39
comments: true
categories: 
---

It's been too many months since the last blog. And I really mean to start it up regularly again. Today I finally had a topic that popped up that I could easily write a quick post about and I'm hoping that getting a post out will get the ball rolling and I can get back into the groove of blogging again. Today I needed to have a mobile website have a link to the native app on the iPhone. IF they have it installed. This proved to be a bigger pain in the ass than you'd think. 
<!-- more -->
For those who haven't used custom URL schemas with iOS projects, you are able to register a custom URL with the operating system on iOS and have that URL, wherever it is called, open your app. I am currently finishing up development on a client project, http://btiques.com, and I need this functionality. But they don't make it easy on you. 

## My desired result:

  A user Facebook sees a shared product from the btiques iPhone application. This could have been shared by a friend who has the app and really liked some shirt they found or it could have been shared by the boutique when they put the product on sale. When they click on that link in Facebook or Twitter or even an email, it takes them to a mobile web site that shows a preview of the product. Up to to this point everything has been easy. Just links to mobile websites. We're good. The problem then arises: currently they're not able to buy the products from the website. They need to have the app. So using the iOS custom URL schemes, I can call something to the effect of btiques://product/{product_id} and it would open the app and bring them right to that product in the app. But what about people who don't have the app you say? There is the issue. 

## The problem: 
  
  <img src="/assets/images/detect_app/unknownurl.png"/ style="width:200px; float: right; margin-left: 15px;">

  When a user without the app clicks a link with this custom URL scheme and they don't have the app installed, and therefore don't have the custom URL scheme registered with the operating system on the device, they get this really ugly alert message. Ideally we'd say something like "Oops looks like you don't have the app installed" or something, but since iOS has no idea what that URL even is until you tell it what it is, it just says this: "Safari cannot open the page because the address is invalid."

  Now that's really informative! The user now has no idea what is really happening. We want them to think, "Doh, I don't have the app. I should go download it," but they really have no idea what is going on. This is a fault with the website for all they know. A bug. So how do we gracefully deal with this? It's a little dumb, but there is a way. Sometimes, most of the time really, when approached with stupid OS/memory/processing power/language capability/anything you can imagine constraints, we have to get creative with our solutions. And this situation definitely required a creative solution. 

<h2 style="clear: both">The Solution:</h2>

First off, here is the code: 

```javascript (app.exist?) ? open_app() : open_appStore()
    $(".open_app").click(function(e){
        var id = $(e.target).data("product-id");
        
        var n = [],
        i = !1;
        
        $(window).on("pagehide", function () {
            n.map(window.clearTimeout)
        });

        window.location = "btiques://?salesid=" + id;

        n.push(window.setTimeout(function () {
            n.splice(0), i = !1, window.location = "http://phobos.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=641292705&mt=8"
        }, 250));

        n.push(window.setTimeout(function () {
            i && window.location.reload()
        }, 500))
    });
```

So you don't have to do it exactly how I did it, but the key factors of the script are changing the window location to the desired custom URL scheme for your app, and then setting a function to fire off on a timeout in 100-300ms that will redirect them to the iTunes page for your app. If you send them to the itunes page for your app while on the phone, it will send them to your app in the AppStore app. 

What is happening: You fire off a command to go to your app and a command to go to your itunes page in 200ms. If it successfully goes to your app, it cancels that delayed function and just goes to your app and all is right in the world. If in 200ms you still haven't successfully gone to your app, the delayed function fires and sends you to the AppStore. And dealing in milliseconds this all happens very quickly and the user hardly notices all these hoops you're having to jump through. Get it? 

Here I push functions onto an array on timeout delays. If the safari switches views, firing a pagehide event, I go through the array and cancel out the timeouts. This would happen if the window.location redirect to btiques:// worked. If it did not work, the corresponding functions set on delays would fire. 

This results in the following flow:

* User presses 'OPEN IN APP': 
  * User has app:
    * Opens app
  * User does not have app:
    * Tries to open app and fails. Immediately sends the user to the AppStore page for your app

It shows that ugly alert screen for a few milliseconds and then, virtually immediatly, redirects the user to the AppStore. While this isn't perfect-world-ideal, it is very smooth given our constraints with the OS. 

Have you had to solve this problem before? It was pretty aggravating in the beginning while realizing this was "impossible" to do, but pretty rewarding to find that loop hole solution to circumvent the "impossible." :) 

