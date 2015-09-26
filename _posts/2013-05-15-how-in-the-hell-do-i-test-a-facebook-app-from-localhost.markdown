---
layout: post
title: "How In The Hell Do I Test A Facebook App From localhost?"
date: 2013-05-15 19:57
comments: true
categories: 
tags: [facebook, api, networking, security, opengraph]
---

So no shit, there you are, building a web app that is using the Facebook SDK/API. You've followed all the integration tutorials. You've got all the code in place. You're ready to go. You fire up the Sidekiq and your Rails server with Foreman, and you finally click on your pretty little Facebook login button. And then...
<!-- more -->

<img src="/assets/images/facebook-localhost/localhost-error-noauth.png"/>

---

##DOH, right?

Then you want to punch yourself. Why didn't I put localhost into the app domains? I better go ahead and do that. You log into Facebook and put localhost in there. And then...

<img src="/assets/images/facebook-localhost/localhost-error.png"/>

---

## Ok Facebook... So WHAT THE HELL DO I DO THEN?

Scratched my head for a few minutes. Started thinking about how soon until it was drinking time, and then had a thought. Why not just locally redirect the production URL to my machine? The app will then send requests with a production URL referrer and will be authorized by Facebook's dumb ass security schemes. (Ok maybe not dumbass but certainly inconvenient. I'm trying to work here!)

Solution: 

* Add the production URL to your /etc/hosts file and redirect back to localhost

```bash /etc/hosts
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1         localhost
255.255.255.255   broadcasthost
::1               localhost 
fe80::1%lo0       localhost
127.0.0.1 app.btiques.com
```

After you change your hosts file on a Mac you always have to flush the cache and force OSX to re-query the DNS servers. Run this command and you should be good to go. 


```bash Run this to clear your cache
dscacheutil -flushcache 
```


Now, have a beer and relax before you kill somebody. This shit can get stressful. 