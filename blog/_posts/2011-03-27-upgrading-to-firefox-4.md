---
layout: post
title: Upgrading to Firefox 4
head-image: lego-technician.jpg
tags: [browsers, computer, internet, review]
---

Firefox 4, as I mentioned in my previous review of it where I slated it
against Chromium (the open-source clone of Google Chrome browser), took
me by surprise with its speed and apparent improvements over its
previous versions and my old browser of choice, Chromium. So much so, in
fact, that I've now adopted Firefox as my browser of choice and have
migrated all of my settings to the new browser. In the process, I
discovered a few quirks that, due to the 'newness' of 4, will likely be
fixed soon or that are Mozilla avoiding alienating some of its older
users. Just to be clear, I don't mean problems; I've actually had far
fewer issues with Firefox 4 than I had with Chromium.

Upgrading is, as always, fairly easy. The new browser showed up in the
Arch repositories shortly after its release, and was available for
download to Windows and Mac users as well. Some Linux distros (such as
Ubuntu) haven't released it \[yet\], so they require a little tweaking
to get it, which is as simple as adding Mozilla's repository and running
an upgrade.

Firefox 4 will keep the preferences from any older version of the
browser that was formerly installed, as usual. However, this creates a
little confusion with some of the new features, such as the "Firefox
Button," the new unified menu. Firefox gives users the option to have
the classic menubar or the button; new installs will see the Firefox
button, but upgraded installs will continue to see the menubar.
Whichever you prefer, it's simple to switch between the two.

The "new browser smell" (it's like that "new car smell") is still
around, and as such, some of the Firefox add-ons aren't compatible with
4 yet. I was very disappointed to find that Adblock Plus will not run on
Firefox 4, and I had some issues with a couple others that I downloaded
to play with. Over the next few weeks these are problems that will
probably be fixed by the developers of the add-ons.

Coming from Chrome/Chromium, I've gotten accustomed to where things are,
such as the bookmarks menu, refresh and home buttons and such, which are
in slightly different places in Firefox. Right clicking on any empty
area on the tab bar or the navigation bar opens a context menu with a
"customize" option, which lets you drag your buttons to wherever you
prefer them to be, as well as add or remove things as well. Migrating
bookmarks is just as easy; simply export them as an html/txt file from
the respective browser, then go to bookmarks -&gt; show all bookmarks,
and from there is the option to import an html file of bookmarks.

Also, particularly for computers with less memory, there is a nice
option for changing the memory usage, which boosts performance
significantly, at least on low-memory Linux machines. Visit about:config
in the address bar, find *browser.cache.disk.capacity*, and lower the
number associated with it. I turned it down to 10500 on the old Ubuntu
laptop I have, which made it noticeably faster, and 15000 is suggested
for systems with 512Mb to 1Gb of memory. Firefox 4 already has a very
small memory footprint and good performance, but this helps to step it
up and make it perform even better.
