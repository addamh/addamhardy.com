---
emoji: 💡
title: "Good Commit Messages And Enforcing Them With Git Hooks"
modified: 2013-06-05
tags: [git]
---

Git provides a very valuable feature that many developers seem to either overlook or blatantly not care about; it enables you to add distinct sections to a commit message. Specifically, it allows you to add a short summary for the commit and a long and detailed body.

A great commit message:

```markdown
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.

Further paragraphs come after blank lines.

- Bullet points are okay, too

- Typically a hyphen or asterisk is used for the bullet, preceded by a
  single space, with blank lines in between, but conventions vary here

- Use a hanging indent
```

Key points of a well formed commit message:

  * Must have a summary line
  * Summary line must be 50 characters or less
  * Should have a well thought out and meaningful description
  * No line in the description should be over 72 characters long

Format breakdown:

  * First line is summary
  * Second line is empty
  * Third line starts the in-depth description

Be sure to write your summary in the present tense imperative. For example, instead of `Adds new copy to homepage` use `Add new copy to homepage` or instead of `Fixes bug #234234` use `Fix bug #234234`. This folows the convention that git itself uses. Have you ever noticed when you merge a branch the commit message is `Merge [branch]` and not `Merges [branch]` or `Merged [branch]`?

## Why?

A lot of this info comes from a [great blog post](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) by Tim Pope in 2008. I didn't make the rules I just follow them™. Various git commands pull the summary automatically and will just truncate your commit message if it is too long. This makes scanning the commit history very cumbersome and annoying. Commit summaries allow you to quickly convey the full intent of the commit in a single and succinct line. Think of it like the subject line of an email.

Yesterday I was needing a break from normal work and decided to work on some git hooks that would make me follow these rules.  

Git provides several hooks into git events for you to do some pre-defined action prior to or immediately after a commit.

{% highlight bash %}
[master][~/dev] ls .git/hooks
applypatch-msg.sample     post-update.sample        pre-commit.sample         prepare-commit-msg.sample
commit-msg.sample         pre-applypatch.sample     pre-rebase.sample         update.sample
{% endhighlight %}

I want to validate the commit message after the user creates the message but prior to it being committed to the repository. The specific hook I need for this is the `commit-msg` hook. If you remove the `.sample` from these files git will run them at their appropriate times. They are shell scripts and I could have written my message checker in a shell script like bash but I'm really not good at awk and sed and all that crazy shell scripting voodoo. So I just use the commit-msg shell script to call my own python script.

```bash
commit-msg
#!/bin/sh

exec < /dev/tty
.git/hooks/validate-commit.py $1
```

What I want this script to do:

* Verify I have a summary line on my commit
* Verify the summary line is not over 50 characters
* Verify no line is over 72 characters
* If there are any errors, reject my commit and ask me to reformat
* If I choose to reformat my commit, bring me back into the commit editor and show me what exactly was wrong with my commit in comments on the commit message

After a few beers and some tinkering I ended up with this messy bit of python code:

```python
#!/usr/bin/python

import sys, os
from subprocess import call

print os.environ.get('EDITOR')

if os.environ.get('EDITOR') != 'none':
  editor = os.environ['EDITOR']
else:
  editor = "vim"

message_file = sys.argv[1]

def check_format_rules(lineno, line):
    real_lineno = lineno + 1
    if lineno == 0:
        if len(line) > 50:
            return "Error %d: First line should be less than 50 characters " \
                    "in length." % (real_lineno,)
    if lineno == 1:
        if line:
            return "Error %d: Second line should be empty." % (real_lineno,)
    if not line.startswith('#'):
        if len(line) > 72:
            return "Error %d: No line should be over 72 characters long." % (
                    real_lineno,)
    return False


while True:
    commit_msg = list()
    errors = list()
    with open(message_file) as commit_fd:
        for lineno, line in enumerate(commit_fd):
            stripped_line = line.strip()
            commit_msg.append(line)
            e = check_format_rules(lineno, stripped_line)
            if e:
                errors.append(e)
    if errors:
        with open(message_file, 'w') as commit_fd:
            commit_fd.write('%s\n' % '# GIT COMMIT MESSAGE FORMAT ERRORS:')
            for error in errors:
                commit_fd.write('#    %s\n' % (error,))
            for line in commit_msg:
                commit_fd.write(line)
        re_edit = raw_input('Invalid git commit message format.  Press y to edit and n to cancel the commit. [y/n]')
        if re_edit.lower() in ('n','no'):
            sys.exit(1)
        call('%s %s' % (editor, message_file), shell=True)
        continue
    break
```

Now if I try to commit a badly formed commit message like this:

```bash
COMMIT_EDITMSG
Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
elit. Cras mattis consectetur purus sit amet fermentum. Maecenas
faucibus mollis interdum. Etiam porta sem malesuada magna mollis
euismod. Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit
sit amet non magna.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#>      new file:   31234
#
diff --git a/31234 b/31234
new file mode 100644
index 0000000..e69de29
```

It will kick me back to the shell prompt me with this message: `Invalid git commit message format.  Press y to edit and n to cancel the commit. [y/n]`

Once you press `y` to edit your commit it will kick you back to your commit and allow you to fix the bad formatting **and** even tell you which lines were incorrect and why!

```bash
COMMIT_EDITMSG
Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis
ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
elit. Cras mattis consectetur purus sit amet fermentum. Maecenas
faucibus mollis interdum. Etiam porta sem malesuada magna mollis
euismod. Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo
cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Maecenas sed diam eget risus varius blandit
sit amet non magna.

# GIT COMMIT MESSAGE FORMAT ERRORS:
#    Error 1: First line should be less than 50 characters in length.
#    Error 2: Second line should be empty.
#    Error 7: No line should be over 72 characters long.

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#>      new file:   1234098
#
diff --git a/1234098 b/1234098
new file mode 100644
index 0000000..e69de29
```

This tells us that we have errors on line 1, 2 and 7 of our commit. I've accomplished everything I set out to and now I'll be forced to follow good practices on my commit messages.


I actually wrote this initially in Ruby, if you know me you know I am definitely not a python programmer, but had some problems I couldn't figure out with forking subprocesses for the editor after a second commit rejection. I needed it to stay in the error loop and check the message again but if you rejected your commit and then tried to use the exact same message with the errors again, it would succeed and commit to the repository. Someday soon I'll dig into that more but for now this python script will certainly do!

Do you follow any guidelines on commit message format?
