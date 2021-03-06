--- 
layout: post
title: What's Up With Secure Boot
head-image: laptop-keyboard.jpg
tags: [computer, linux, microsoft, security, windows]
---

If not for the Microsoft/Linux rivalry, Microsoft's new Secure Boot
would probably not have made a huge splash in headlines until it was
advertised as a feature of Windows 8 certified hardware.  However, the
implications of Secure Boot could be much farther reaching than
Microsoft likes to admit, should it be implemented in a - and the Linux
fan in me comes out - typical Microsoft fashion as far as Linux is
concerned.

The advertised idea of Secure Boot is to eliminate some of the security
issues with not locking down the boot process of Windows, as some
malware takes advantage of this time to get itself past other security. 
This takes a very similar approach as a lot of mobile devices (think-
iPhone), which makes said devices extremely difficult to hack since the
software is locked down on a hardware level.  Secure Boot enabled
systems would do something very similar, by only allowing software with
keys that have been whitelisted (the installed operating system), to run
at boot.  There is nothing that would prevent alternative operating
systems from also being whitelisted by the user, in theory, but if
Microsoft has its way then that will likely not be an option.

While unquestionably improving security, Secure Boot has some concerning
aspects, particularly with Microsoft's typical practices with competing
software.  Windows 8 will require hardware manufacturers to lock down
systems before selling them, which would lock the future owner of the
system out of changing any aspect of the system outside of Windows. 
This would prevent owners from installing any Windows alternative,
either in place of or in addition to Windows, such as Linux, Mac OS X
(for those who like to run it on PC hardware), and the like.  This
lock-in may not concern the majority of people, who likely won't change
anything drastic about their PC, but for those who do, it could be
extremely bad news.  It also brings about a new situation in the tech
world as the average consumer is put at the mercy of Microsoft; made
worse by the fact that Secure Boot could drive up the cost of computers
since the new system could require individual attention for each system
shipped.

With that said, Secure Boot could, if done right, significantly improve
security without screwing over any consumers.  Canonical (Ubuntu),
Novell, and Red Hat are taking on Microsoft's Secure Boot not to make
sure it never sees the light of day, but to instead change some of its
specifications.  Ideally, Secure Boot would solve some security issues
without completely locking hardware owners into Windows 8, giving more
control over what happens at boot.
