---
title: Blogging with Git and Jekyll
layout: post
author: Nate Levesque
head-image: laptop-keyboard.jpg
---

With most blog platforms, the process of creating a blog post is pretty similar. It usually looks something like: log into your blog, click the "create post" or equivalent button, fill out the title, write the post, add tags, and click save. Of course, it varies a little bit across platforms because some platforms offer niceties that others don't. However, other than a few niceties here and there blogging using most platforms is pretty much the same. The workflow for a static site is a departure from that: open a new file in a text editor, write a few pieces of data at the top, write your post, save it, and use your tool to regenerate your site. The simplicity is great because it means you can adjust the process to make it your own.

My website is hosted on Github Pages which means it's version controlled using Git. Git, and version control in general, keeps track of everything you noted that you changed, effectively allowing you to time travel and "undo" back to the very beginning of your project if need be. In addition, Git has what are referred to as "branches" which allow you to go on a tangent to try something new and either keep it or not depending how it works out. Github provides some tools for making this nice to use although I usually just work out of a console and do things manually.

So, let's tie this back into writing a blog.

I'll note first that Jekyll itself supports drafts of blog posts. Creating a draft in Jekyll involves creating a draft in a draft folder then moving it to the folder your blog posts live in when you want to publish it. This works perfectly well, but when Git is involved it feels messy since Git permits a different concept of drafting that doesn't require moving files to their final location.

When writing a new blog post, I draft it in place (in my posts folder) where all of my published posts live. Before I commit (officially log changes) in Git, I create a new Git branch for it. I can work on multiple drafts on different branches which helps remove the temptation to multitask because when on one branch, drafts on other branches are invisible. I can work on and commit to my draft as much as I want and even push it to Github if I want to share it. Once I'm done with a draft, I can merge it into my real website where it gets published once I push my master branch to Github.

Here's how this post came into existence:

```
git checkout -b blogging-with-git
vim blog/_posts/2016-02-blogging-with-git.md
# (write the post)
git commit -m "Create blogging with git post" blog
```

And how it got published:

```
git checkout master
git merge blogging-with-git
git push
# (Github Pages then runs jekyll build)
```

For me, it's a great experience. It's super lightweight so I can do it on any system that has Git installed, it's very similar to my process of writing software, and it's really easy to avoid distractions while I write. It's also flexible which makes adapting it to different needs or habits really easy.
