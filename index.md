---
title: Hello, World!
layout: strata
---

<h2>Who am I?</h2>

I'm a software engineer. In layman's terms, that means I enjoy writing code,
designing software, and generally making cool ideas into nifty applications.

Since I was young, I've had a strong appreciation for technology. I looked in
awe at the things that were built around me and wanted to know how they worked.
I could spot a burnt out bulb on a string of lights in seconds, and was more
concerned about how things worked than I was concerned about why I was there.
That same passion and curiosity followed me to the world of software where I
find being involved with building better and more powerful software incredibly
exciting.

Offline, I run long distance, explore the outdoors, and enjoy picking up new
skills through a variety of side projects. If there’s something new I can
learn, I want to learn it. I also enjoy taking pictures of sunsets.

_Opinions expressed are mine alone._

---
<h2>Recent Posts</h2>
<div class="row">
{% for post in site.posts limit: 4 %}
<article class="6u 12u$(xsmall) work-item">
<a class="image fit thumb" href="{{post.url}}">
<img src="/images/posts/{{post.head-image}}">
</a>
<h3><a href="{{post.url}}">{{post.title}}</a></h3>
</article>
{% endfor %}
</div>
<h4><a href="/blog">More Posts</a></h4>
