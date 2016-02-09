---
title: Blogging with Git and Jekyll
layout: post
author: Nate Levesque
---

With most blog platforms, the process of creating a blog post is pretty similar. It usually looks something like: log into your blog, click the "create post" or equivalent button, fill out the title, write the post, add tags, and click save. Of course, it varies a little bit and some platforms support drafts, other platforms don't, a few platforms support sharing drafts and accepting comments on them... The point is, other than a few niceties here and there, blogging using most platforms is pretty much the same. The workflow for a static site usually looks something like: open a new file in a text editor, write a few pieces of data at the top, write your post, save it, and use your tool to regenerate your site. It's a departure from the typical workflow and far more simple which makes it easier to make the flow your own.

Since my website is hosted on Github Pages it's also version controlled using Git. Git, and version control in general keeps track of everything you noted that you changed in whatever you're tracking with it, effectively allowing you to time travel and "undo" back to the very beginning of the project if need be. In addition, Git uses what are referred to as "branches" which allow you to essentially go on a tangent to try something, and either keep it or not depending how it works out. Github provides some tools for making this nice to use although I usually just work out of a console and do things manually.

So, let's tie this back into writing a blog.

I'll note first that Jekyll itself supports drafts of blog posts, I've just found that I don't like how it works in context of my workflow. Using Jekyll's draft functionality involves creating a draft in a draft folder, then moving it to the folder your blog posts are in when you want to publish it. This works perfectly well, but when Git is involved, it feels messy.

When I draft a new blog post, I draft it in place where it will be published. Before I commit (officially log its existence and changes) in Git, I create a new branch for it. I can work on multiple drafts at a time, each on their dedicated branches. This is great because each time I go back to work on a draft, I don't have the distraction of other drafts laying around (they're invisible when I'm not on their branch). If I want, I can even push these branches to Github as well where I can share text from draft posts without actually publishing anything on my site. Once I'm done with a draft, I can merge it into my real website and Git does all the work for me.

Here's how this post came into existence:

```
git checkout -b blogging-with-git
vim blog/_posts/2016-02-blogging-with-git.md
(write the post)
git commit -m "Create blogging with git post" blog
```

And how it got published:

```
git checkout master
git merge blogging-with-git
git push
```

It's a super simple workflow that mirrors closely how I develop software, which means that even though blogging with Jekyll is new to me, the process itself is something I can do in my sleep. I can even write blog posts with little more than a console (which is great, because I live there).
