---
title: Blogging with Git and Jekyll
layout: post
author: Nate Levesque
head-image: laptop-keyboard.jpg
---

With most blog platforms, the process of creating a blog post is pretty similar. It usually looks something like: log into your blog, click the "create post" or equivalent button, fill out the title, write the post, add tags, and click save. Of course, it varies a little bit across platforms because some platforms offer niceties that others don't. However, other than a few niceties here and there blogging using most platforms is pretty much the same. The workflow for a static site is a departure from that: open a new file in a text editor, write a few pieces of data at the top, write your post, save it, and use your tool to regenerate your site. The simplicity is great because it means you can adjust the process and the tools to make it your own.

My website is hosted on Github Pages which means it's version controlled using Git. Git, and version control in general, keeps track of everything you noted that you changed, effectively allowing you to time travel and "undo" back to the very beginning of your project if need be. In addition, Git has what are referred to as "branches" which allow you to go on a tangent to try something new and either keep it or not depending how it works out. Github provides some tools for making this prettier to use but I usually work out of a console and do things manually.

So, let's tie this back into writing a blog.

It's worth noting that Jekyll itself supports drafts of blog posts. Drafting a post in Jekyll involves creating the draft in a draft folder and later moving it to the folder where your published blog posts live. This works perfectly well, but when Git is involved it feels messy since Git branches provide a different concept of drafting that doesn't require moving files to their final location.

When writing a new blog post, I draft it in place (in my published posts folder) where all of my published posts live. Before I commit (officially log changes) in Git, I create a new branch for it. I can work on multiple drafts on different branches which helps remove the temptation to multitask because when on one branch, drafts on other branches are invisible. I can work on and commit to my draft as much as I want and even push it to Github if I want to share it without publishing it. Once I'm done with a draft, I merge it into the master branch of my website where it goes live when I push to Github.

Here's how this post came into existence:

1. Create a new branch<br />
`git checkout -b blogging-with-git`
2. Write the post<br />
`vim blog/_posts/2016-02-09-blogging-with-git.md`
3. Commit the post to Git<br />
`git commit -m "Create blogging with git post" blog`

And how it got published:

1. Switch to the master branch of the website<br />
`git checkout master`
2. Merge the draft in<br />
`git merge blogging-with-git`
3. Push the changes to Github<br />
`git push`
4. Github Pages then runs jekyll build and the post goes live!

For me, it's a great experience. It's super lightweight so I can do it on any system that has Git installed, it's very similar to my process of writing software, and it's really easy to avoid distractions while I write. It's also flexible which makes adapting it to different needs or habits really easy.
