---
layout: post
title: "Automate All The Things: Continuous Integration and Deployment at RevUnit"
date: 2013-09-28 16:17
comments: true
categories:
tags: [ci, continuous integration, process, travis ci]
---

We are strong believers in the agile method of software development. We break down key features into user stories, do sprint planning, track velocity, unit and integration testing; all that good stuff. But we’ve had a few key pillars of agile development missing for a while and we recently rectified that. <!--more-->RevUnit’s process now fully incorporates continuous integration and continuous deployment. This enables us to automate more of our process which frees us up to focus on the important things — like implementing and shipping features!

##Automate all the things!

Automating your workflow is vital for a streamlined development process. There are so many small tasks that a developer has to do in addition to their core duties that it can really drain not only the time the developer has but also their focus on the more important tasks at hand. With so much to do just to enable the ability to do the things we have to do, how do we get anything done at all?

> "Progress isn’t made by early risers. It’s made by lazy men trying to find easier ways to do something." - Robert A. Heinlein

All development organizations should have the mindset of automating their workflow but it is especially important for smaller start ups. You’re not going to have a QA team or a deployment team. You have one team to do all the things. There are many ways to automate your workflow. We even have a chat bot in our company chatroom that can interface with our GitHub repositories, our project planning system, our production error reporting system, as well as many other integrated systems we use for our planning and development workflow end to end. It even has automated photos of kitties or animated gifs for when we are feeling down.

![Kitty](http://media.tumblr.com/8d186ad810c901ac2f826780a395a4a1/tumblr_inline_mtp64v3iQP1qze6ud.jpg)

Specifically for this post, I’ll talk about how we automated our integration testing and deployment using Continuous Integration and Continuous Deployment.

##What Is Continuous Integration?

Continuous Integration is a software development practice where members of a team integrate their work frequently. This integration is trigged by every push of new commits to GitHub. Each time a developer pushes new code to GitHub our CI system clone’s that branch and runs all of the entire unit and integration test suite.

This is all done automatically on a post-receive hook on GitHub without any manual intervention from a developer. This enables the team to rapidly find integration errors or regression failures in the test suite. This tightens the feedback loop and not only enables more defect free code, but greatly speeds up our process.

Developer A may have a completely green (passing) test suite on their local machine at the same time that Developer B also has a completely green test suite on their machine. Without this continuous integration process, the tests from those separate developers would not be run together (integration testing) until further down the line; and even then by some manual intervention by a developer.

The instance where CI really shines is in rapidly exposing regression failures. Without a thorough test suite and CI, a feature that was complete in week 2 of development and was destroyed by a feature that was completed in week 12 of development will never be exposed until the very end in a formal QA process. Obviously that is less than ideal. We need to know about defects immediately or it could really derail the speed and fluidity of our process and our ability to quickly deliver results to a client. This is especially important for defects in features that we already completed and tested thoroughly.

##What Is Continuous Deployment?

So we’ve automated our integration testing and building, what’s the final step? Deployment. This step of the process can take the longest time depending on the complexity of your application. I’ve even worked in a large corporate environment wherein if you wanted a deployment to the staging servers you had to contact a deployment team which could take up to a week to finally get deployed. That’s crazy!

Traditionally you plan development which leads into testing and QA which ultimately leads into a planned deployment. You need this planned/tiered (WATERFALL!) approach to development and release when you don’t have CI or even further don’t have any unit or integration tests. You don’t want to deploy an app that you’re not positive is working 100% as it should. Someone call the QA team and tell them we’re ready! Ain’t nobody got time for that.

At this point we’ve ensured the integrity of our application through ongoing continuous integration. So what is stopping us from automating the final step? Continuous Deployment (sometimes referred to as Continuous Delivery) fills in this gap.

Continuous Deployment (CD) is a software development practice that triggers an automated deployment of the application after passing all tests and builds in the continuous integration process. This means that as soon as a build is successful on the staging branch, it is automatically deployed to the staging application. Enabling the client to see the most up-to-date feature complete code at any given time. This should happen several times a day. You can take it even further to automate your deployments to production! Once a feature has gone through local unit testing, code review in a pull request, and multiple integration builds through CI, you can push it directly to your production servers giving your users immediate benefit rather than waiting for weekly or biweekly planned and scheduled deployments. Your calendar shouldn’t have anything to do with shipping features to your users. Ship it early and ship it often.

> Your calendar shouldn’t have anything to do with shipping features to your users.

GitHub is fantastic at this and reported that their busiest day yet (as of a blog post in 2012 so I bet they’ve blown past this by now) was on 23 August 2012 with 563 builds and 175 deploys. [blog post by GitHub] That’s 175 deployments to production in a single day on an extremely active application with millions of concurrent users worldwide! No “Under Maintenance” pages. No scheduled outages or deployments. Just ship, ship, ship.

##Why Is All Of This Important?

As small teams that seem to always be increasing the requirements and expectations, we have to find ways to increase our speed while not decreasing our quality. A tough task. Just not decreasing the quality and maintaining the status quo almost isn’t even an option either. We need to be increasing speed and increasing quality.

How is that even possible? Delegate work to the machines.

Using a rigid and well thought out process for your development can help reduce unknowns which will decrease defects, improve overall quality of your codebase, and enable you to rapidly iterate and deliver to your users. Automating that workflow will speed it up even further. It will also turn your development process from a passive process to an active process. Let the process tell you if things are working or breaking. This allows issues or roadblocks to bubble up to the top sooner and takes the responsibility off a single person to remember to accomplish many separate small tasks.

> We have the technology.

![6 million dollar man](http://media.tumblr.com/f5a498a1efcb2d367f23932456b5b1e0/tumblr_inline_mtp63c5ua31qze6ud.jpg)

Make life easier for yourself and your team at the same time as delivering better products to your users! It is possible.

##Our Workflow

We use GitHub for our source control and Travis CI as our hosted continuous integration system. HipChat keeps us connected and aware of action happening within our system and workflow. We also use a modified form of git flow for our branching strategy.

Here is a quick and dirty overview:

* Master branch is the latest production release.

* Staging branch is the latest feature complete code that has been deployed to the staging application servers and not deployed to production yet.

* A feature branch is branched off of the staging branch and worked on until it is feature complete with accompanying unit and integration tests that verify functionality.

After a developer has finished the feature in their private feature branch, they initiate a Pull Request on GitHub to merge their feature branch back into the staging branch.

Travis CI captures the pushes to GitHub and the initiation of a Pull Request and runs the tests on the branch. With Travis CI’s great GitHub integration, we can see right there on the Pull Request view whether or not the tests are passing or failing.

If tests are passing, we do a team wide code review on GitHub by commenting inline on all of the code that will be committed to the staging branch. We cycle through these comments and revisions until everything is good to go and we’re ready to merge into the staging branch.

Throughout this entire process, pushes to GitHub, comments on code for the code review, passing or failing builds on Travis CI, and every other action related to our code/application/process is pushed to the chatroom in HipChat related to that specific project. Everyone is always up-to-date on what is happening with the project and there are no surprises.

Once the feature branch has passed a code review, has passing tests in CI and has been acceptance tested and accepted by the product owner, we merge it back into staging which then fires off another cycle of integration testing with our CI system.

Once this final build and test cycle completes with a passing status, Travis CI initiates and automatic deploy of the application to our staging environments.

If it is a Rails application, it kicks it off to our staging servers hosted on Heroku and notifies the applicable project room in HipChat of a successful build and Heroku deploy. Enabling the clients to see the latest feature complete build of their application on the web immediately after the feature has been completed.

If it is an iOS or Android application, it will build a binary and automatically deploy to TestFlight and send emails to all of the users on the beta-testing distribution list for that application. Enabling them to download the latest successful build immediately.

It’s really a fantastic process!

As you can see, there are many checks for quality and functionality from the very beginning of the process all the way to the end. As well as backward/redundant checks to be sure everything that once was still is. And while it seems like a lot of steps, it is all automated! A great process should get out of your way and let you do your work.

##It’s Been A Long Journey

We are really excited about this process and it really enables us to stand by our commitment to delivering quality code to our clients and their users. This process executed well almost completely removes the need for a QA period prior to production release which cuts time and cost for our clients.

Our development process is really what sets us apart from our competitors in the region and we’re always trying to improve it. If you have a similar process or have any questions or comments, leave us some comments below and we’d love to talk to you about it.

Ways I see to improve it in the future:

* I am going to develop some dashboards that will always be displayed on a large tv in the office. So we can always see at a glance if a project’s builds are failing. Or alternately, look up and see green across the board and know we are kicking ass at our job. :)

* We use Hubot by GitHub as our chat bot and we’ll be building more Hubot scripts to further automate our workflow.

##Notes:

* Of course I didn’t invent the term “Automate all the things!” so credit to whoever that person is.

* Martin Fowler’s original essay on Continuous Integration: http://www.martinfowler.com/articles/continuousIntegration.html

* ‘Automate All The Things’ may become a running column on our blog about various ways to speed up and improve your workflow.

[cross post from my company blog]
