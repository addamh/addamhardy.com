---
layout: post
title: "Deploying Jekyll With Git"
description: ""
tags: [jekyll, git, blog]
comments: true
---

My very first tech blog on my own personal site! We'll see what comes of this. I have a bit of a problem on focusing on things and sticking to it, but I'm going to do my best to keep a semi-sort-of-regular-kind-of-occasional routine of tech blogs going.<!--more-->

* * *

It wasn't so long ago that I started using [Capistrano](http://capify.com) for deployments and that it was a gift directly from the spaghetti monster himself. Now after using [Heroku](http://heroku.com) for a year or so, I am even more spoiled. Spoiled by git deployments. Commit and push and then deployment is done. Like magic. A few weeks ago I decided to make this site for my work and to start doing some occasional tech blogging. I went through a few different possibilities for what to use but decided on Jekyll. A lot of people use [Jekyll](http://jekyllrb.com) and deploy to Github pages on their Github account. I already had an idle [Linode](http://linode.com) sitting around and I wanted to use that. So I came to a decision: use Jekyll and a automated git deployment workflow on my own server. That lead me to Jekyll and [Gitolite](http://github.com/sitaramc/gitolite). Jekyll is essentially a parser or a static site generator -- not really a blog engine. It parses through files and generates all the flat html files needed for a site. So instead of managing a database and everything, you can just write your blog posts in markdown. It's a really brilliant set up and is easy as hell. Since it is all flat files, it is also really convenient to keep your blog on Github so that it is always backed up.

Using Gitolite and Jekyll you can be auto-deploying within minutes.

**Gitolite Installation**

* Create a user named 'git' and login with this user
{% highlight bash %}
$ adduser git
$ su - git
{% endhighlight %}

* Copy your ssh pubkey from the workstation you wish to deploy from and put it in the home directory for the git user. Rename the key to your_name.pub. (Of course using your name... not "your_name")
{% highlight bash %}
$ gl-setup /home/git/your_name.pub
{% endhighlight %}

* Run these commands
{% highlight bash %}
$ git clone git://github.com/sitaramc/gitolite
$ gitolite/src/gl-system-install
$ gl-setup -q ~/your_name.pub
{% endhighlight %}

That will complete the install. If you have problems with it though, there is a [more extensive installation](http://sitaramc.github.com/gitolite/install.html#insttrouble) guide to solve problems.

You do *not* install repositories directly on the server. You clone the gitolite-admin repository on the workstation that you will deploy from in order to administer the gitolite installation. You can manage users, groups and repository access from this repository.

{% highlight bash %}
$ git clone git@my-server:gitolite-admin
{% endhighlight %}

After you have cloned the admin respository, edit gitolite-admin/conf/gitolite.conf to add in your new repository and user permissions.

{% highlight bash %}
repo blog
RW+ = username
{% endhighlight %}

In this example, *blog* is the name of the repository you want to create and *username* is the name you put on the public key you uploaded. So if you uploaded a key named addam.pub you will need to put *addam* here.

Add the new files to the git repository *(git add .)* and commit. Push it back to the remote repository (the server you are deploying to) with *git push origin master*.

**Managing a Jekyll-Bootstrap Blog**

I really liked how Jekyll-Bootstrap has a lot of things good to go instead of me building it all by myself so I decided to go with Jekyll-Bootstrap. After you clone Jekyll-Bootstrap and modify a few config files, you will have a no-database Jekyll blog running straight-away.

{% highlight bash %}
$ git clone https://github.com/plusjade/jekyll-bootstrap.git name_of_blog
$ cd name_of_blog
$ git remote set-url origin git@my-server:blog
{% endhighlight %}

In this example: *my-server* is the hostname of the server you set up Gitolite on and *blog* is whatever you named your repository in the Gitolite config file.

You can modify files and test them in real time by running *jekyll --server* inside the blog directory. This will run a WEBrick instance so that you'll be able to access your blog from http://localhost:4000. You can leave this running while you edit your files and it will regenerate the files as you edit them.

I personally use Nginx to host my Jekyll site on my server but you can use any web server. Just point it to the directory you want it to be served from and then you can create an auto-update script that will run upon each push. So when you push your new blog that you have tested locally to your server, the post-receive hook will fire and update your blog. Completely automated deployment courtesy of Git, Gitolite and Jekyll.

On the your deployment server navigate to */home/git/repositories/blog.git/hooks* and edit the *post-receive* file. Paste this inside the file:

{% highlight bash %}
GIT_REPO=$HOME/repositories/blog.git
TMP_GIT_CLONE=$HOME/tmp/blog
PUBLIC_WWW=/var/www/blog

git clone $GIT_REPO $TMP_GIT_CLONE
cd $TMP_GIT_CLONE && jekyll --no-auto $TMP_GIT_CLONE $PUBLIC_WWW
cd ~ && rm -rf $TMP_GIT_CLONE

find $PUBLIC_WWW -type f -print0 | xargs -0 chmod 666
find $PUBLIC_WWW -type d -print0 | xargs -0 chmod 777

exit
{% endhighlight %}

*Ensure that you set PUBLIC_WWW to wherever you have your web server pointing*

After you save this file, commit a small change to test it. Upon pushing, the server should fire the post-receive hook and regenerate your site. This is an example of what a successful push should look like:

{% highlight bash %}
addam@Hera:~/blog  (master): $> git push origin
Counting objects: 17, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 3.02 KiB, done.
Total 9 (delta 3), reused 0 (delta 0)
remote: Cloning into /home/git/tmp/blog...
remote: done.
remote: Configuration from /home/git/tmp/blog/_config.yml
remote: Building site: /home/git/tmp/blog -> /srv/www/addamhardy.com
remote: Successfully generated site: /home/git/tmp/blog -> /srv/www/addamhardy.com
To git@addamhardy.com:blog
   be9793b..9d6b73f  master -> master
addam@Hera:~/blog  (master): $>
{% endhighlight %}

And there you go. git auto-deloy awesomeness. In order to create a blog post you just do:

{% highlight bash %}
rake post title="Hello World"
{% endhighlight %}

and then edit the file in markdown or html. Jekyll is a create platform for creating a static website. Execute the command *rake -T* to see all the possible rake tasks.

The benefit of using [Jekyll-Bootstrap](http://jekyllbootstrap.com/usage/jekyll-quick-start.html) is having a lot of things baked in and ready to go like themes. This simple setup is much easier than me setting up and maintaining a wordpress blog and database, and it enables you to create a basic, simple and clean static website and/or blog.

Looking forward to doing more blog posts using this system.

***

Still getting the hang of technical writing/blogging. So bear with me as I learn the ropes! Hope this post helped you set up an easy Jekyll deployment system.
