---
layout: post
title: A Warning to DSi Users with SD Cards
head-image: circuit-trace.jpg
tags: [data, mobile]
---

After spending a fair amount of time with my DSi (and 100 pictures
later) I decided it would be a good time to grab an SD card just to back
up all my data on it. Naturally, rather than buying myself a new one, I
grabbed the card from my occasionally-used Palm TX and copied the data
from my DSi onto it.

Not so long after, I tried to access my SD card from my computer because
I needed some files from it and I found a file called "Private". Being
used to my devices creating folders for themselves with the device name
on them (ie. Palm, Olympus, Brother), I went to investigate and
attempted to open it. Linux's file manager worked for a minute then
froze (all other data on the card is intact).

After some investigating it appears that the DSi stores its information
in a file called "Private" on the SD card. For those who have a
dedicated card for their DSi this isn't a problem but for those like me
who move it from gadget to gadget it turns out that it is an issue for
some devices. Linux is unable to deal with the DSi file, any attempt at
opening or deleting it causes some errors and sometimes a frozen file
manager.

The Brother MFC420CN scanner also no longer recognizes the card due to
the DSi data on it; when inserted it says that the card cannot be
accessed. Presumably, this would have a similar effect on other devices
as well, so use caution when using an SD card with the DSi.

I would speculate that the DSi does something similar to OPIE Linux for
the Palm (old OS 5 devices). OPIE Linux would rely on pseudo partitions
on an SD card which were treated as files (albeit large ones). These
files were only accessible to OPIE although attempting to open them on
other devices had less severe effects than the DSi files. The DSi, for
all intents and purposes from what I see does the same thing; creating a
file to act as its own partition which unfortunately interferes with
some other devices that accept SD cards.
