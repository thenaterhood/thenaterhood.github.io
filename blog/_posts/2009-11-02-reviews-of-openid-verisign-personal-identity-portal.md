---
layout: post
title: 'Reviews of OpenID: Verisign Personal Identity Portal'
head-image: data-key.jpg
tags: [internet, personal, review, security]
---

Most avid Internet users have heard of Verisign or at least seen their
logo on secure sites. Verisign provides security certificates to web
sites that it reviews and certifies as being secure and is highly
reputable and recognised for doing it

A bit more recently, Verisign introduced the [Verisign Personal Identity
Portal](http://pip.verisignlabs.com/), providing secure file storage and
sign-in. The features:

-   **Encrypted file storage**. Of all the OpenID providers I tried,
    Verisign's is the only one that provides secure file storage.
    There's not much to say about it, online file storage is online file
    storage for the most part.
-   **No Multiple Identities.** This is a feature of most OpenID
    providers. Put simply, it allows you to set up separate 'identities'
    to share with sites with different degrees or or different types of
    information. Verisign does NOT provide this feature directly, but
    allows you to select what information to share when initially
    signing up for a site.
-   **Multiple OpenID URLs.** I have not seen any other providers that
    have this option. Verisign allows you to tie multiple Verisign PIP
    urls to your single OpenID with separate identities.
-   **PIP One-Click.** This is a truly unique and really very useful
    feature. Simply put, it provides OpenID type functionality to
    non-OpenID sites. You set up a secure encryption key, enter in
    usernames for any number of sites, then add a bookmarklet to your
    browser. While signed into VerisignLabs, it allows you to visit any
    site's login page that you have an account on and have set up with
    PIP One-Click, click the bookmarklet, and it fills in your username,
    password, and logs you in.
-   **Enhanced Security.** Verisign offers (for a price) key generators
    that you can buy. The idea of a key generator is that it uses an
    algorithm to create a semi-random number, which you then use to log
    into a site. Because it's offline, there is no way to hack it. These
    can be used to log into Verisign's PIP.

Unfortunately, Verisign's OpenID url is a bit long to remember-
[http://KaminL.pip.verisignlabs.com](http://kaminl.pip.verisignlabs.com/).
(Feel free to click the link and look at my Identity page). The other
unfortunate fact about VerisignLabs PIP is that at times the site itself
can be a bit slow and a bit difficult to navigate so it can take a
little while to learn your way around.

Out of all the providers I tried, I have to say that while I trusted
Verisign the most, due to its reputation, I liked it the least because
of the long URL and difficulty in navigation. *The technical director of
Verisign's PIP pointed out an important detail in the comments: many
users of Verisign's PIP actually delegate their identity to a blog or
other website they manage, which is a way around the long URL.*
