---
layout: post
title: "Hiding Your Desktop Icons For A Presentation On OS X"
date: 2013-05-25 00:51
comments: true
categories:
tags: [osx, applescript, protips]
---

You know when your house is really dirty and you avoid having people come over until you get it clean? I often feel the same way when I'm using my machine and I need to show someone something. A lot of the time my desktop is a complete disaster. I go through cycles really. It gets dirtier and dirtier for a few weeks and then once a month or so I do a deep clean and clear it all out. And then restart the process. <!--more-->(Much like my house unfortunately..) But I have to show people stuff on my machine all the time! Just showing a coworker something in the office is usually passable but this week I had to give a presentation and a live demo on my machine and my desktop was a disaster. I didn't really feel like going through and deleting everything on my desktop just yet. What else could I do? I knew there had to be a way with AppleScript.

## How do I quickly get from this:
<br />
<img src="/assets/images/hidingicons/before.png" />

## To this:
<br />
<img src="/assets/images/hidingicons/after.png" />

There is help! Instead of deleting all of your files you have on your desktop, you can use an applescript to temporarily hide everything on your desktop.

Follow these steps:

* Open up AppleScript Editor
* Copy and paste the script below into the editor
* Hit Run

## The Applescript:

{% highlight applescript %} hide_desktop.applescripts
display dialog "Desktop icons visible or hidden?" buttons {"Visible", "Hidden"} with icon 2 with title "Switch to presentation mode" default button 1
set switch to button returned of result
if switch is "Hidden" then
  do shell script "defaults write com.apple.finder CreateDesktop -bool FALSE;killall Finder"
else
  do shell script "defaults delete com.apple.finder CreateDesktop;killall Finder"
end if
{% endhighlight %}

After you hit run you'll be presented with a dialog, hit "Hidden" and it'll hide everything on your Desktop! Run the script again and hit "Visible" to return everything to normal. It'll look just like this

<img src="/assets/images/hidingicons/runninghidescript.png" />

Fire this off right before your presentation and you'll be good to go. Save the script somewhere -- maybe not on your desktop ;) -- and just double click and run whenever you need it. Hope this helped you out as much as it helped me!
