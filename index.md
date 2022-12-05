---
title: Hello, World!
layout: strata
redirect_from:
    - /about/
    - /ideas/
---
<header class="major">
<h2>Hello, World. I'm Nate Levesque.</h2>
</header>

<p class="featured">I'm a full-stack software engineer with experience in both firmware and cloud
development.</p>

<p class="featured">I also longboard, run long distance, and enjoy taking pictures of sunsets.
Sometimes, I write books about digital rights.</p>


_Opinions expressed are mine alone._

<h3>Featured Articles</h3>
<div class="row">
{% for post in site.posts limit: 2 %}
<article class="col-6 col-12-xsmall work-item">
<a class="image fit thumb" href="{{post.url}}">
<img src="/images/posts/{{post.head-image}}">
</a>
<h3><a href="{{post.url}}">{{post.title}}</a></h3>
</article>
{% endfor %}
</div>
<h4><a href="/blog">More Posts</a></h4>
