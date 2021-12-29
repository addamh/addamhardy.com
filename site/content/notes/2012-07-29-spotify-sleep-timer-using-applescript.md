---
emoji: ✏️
title: Spotify Sleep Timer Using AppleScript
tags: [spotify, applescript, DIY]
modified: 2012-07-29
---
Like most of the technology addicted masses, I sleep with my Macbook Pro either on, near or around my bed. I can quickly check emails or IMs that come in or just generally waste my life away and prevent myself from going to sleep, but I can't help it. That's why it's called an addiction. It also allows me to take advantage of some apps while sleeping. Like alarm clocks or listening to music while going to sleep. I have a great Rachmaninov playlist on Spotify that I often listen to while going to sleep, but Spotify plays on forever unless you stop it and going to sleep with music is fine but having music drone on for hours and hours in my sleep isn't what I want.  
  
   So there I lay in bed wishing Spotify had a sleep timer. Alas it did not. But! I do have a tiny bit of ingenuity and know-how so I decided to take matters into my own hands. Apple provides a platform for developers to expose functionality of their app programmatically through AppleScript. This allows a very low entry point for anyone to write small scripts to accomplish tasks with the apps they use that those apps may not take care of themselves.  
  
I wanted a Spotify sleep timer. So I made a Spotify sleep timer.  
   5 minutes later I had a perfectly functional sleep timer for Spotify on Mac. It's an incredibly simple script that just asks the user how many minutes would they like Spotify to play until the script tells Spotify to stop. You could modify this script to go by hours if you want. I'll leave that up to you to figure out. The script can be run through the Services menu in the Spotify toolbar.  
  
The steps to install this script are pretty straight forward:

*   Open Automator
*   Create a new "Service" project
*   (1) Add the "Run an AppleScript" action to the workflow by finding it in the search bar and then double clicking the result
*   (2) Select "no input" from the "Service receives" drop box.
*   (3) Select "other" from the application drop box and select Spotify from your applications folder.
*   (4) Copy and paste the code above in the box.
  
![](/assets/images/spotify_timer/automator-walkthrough.png)  
*   Save as Spotify Sleep
  
![](/assets/images/spotify_timer/automator.png)  
*   Restart Spotify
*   Click "Spotify" in the toolbar and go down to "Services" and select "sleepSpotify"  
    ![](/assets/images/spotify_timer/spotify_services.png)
*   Follow prompts
![](/assets/images/spotify_timer/prompt.png)*   Go to sleep listening to music
  
Hope you enjoy this little script! If you use it, leave me a comment on this post and let me know. Thanks! And don't forget, if you want something done that someone else hasn't done yet, DO IT YOURSELF!