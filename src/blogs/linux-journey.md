---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: I have a stressful Linux journey
description: Learning about dual-boot, solving unexpected errors, learning new things, and other hard things can be stressful for users who want something that works easily without having to do many searches on the internet. Thanks to GNU/Linux distros. I got a headache.
date: 2026-07-18
tags:
 - diary
 - 'windows 10'
 - linux
copyright:
  year: 2026
banner: false
advert: false
---

## Making my dream of using GNU/Linux come true

I have always wanted to try Linux or GNU/Linux. I wanted to know how it feels to run Linux because Windows 10 is not for users who prioritize privacy or even performance.

I prioritize performance over anything else because I only have an old laptop. I hear from people on the internet that GNU/Linux is fast and can revive old laptops or computers.

I had never used GNU/Linux before. I did not know anything about it. I am not a student of computer science either. I am just a regular Windows 10 user. I do not use Windows 11, by the way, because my laptop is really old: **Lenovo ThinkPad T470 with an i5-6300U processor**. Windows 10 is already heavy, so upgrading it to Windows 11, I believe, will only make my poor laptop slower than ever before.

The only thing I knew was that installing a new OS is very dangerous because an error during the installation process or choosing the wrong disk can freeze a computer. The error can be fatal. I did not want my files to get deleted. I did not make a backup because I had too many files. More importantly, I still wanted to be able to use my laptop with Windows 10.

But I decided that the time had arrived to get out of my comfort zone and to install the GNU/Linux operating system (OS).

## Optimizing Windows 10

I had been using the script from [privacy.sexy](https://privacy.sexy/) to debloat my Windows 10 and to disable all updates and to disable as much telemetry as possible while still keeping it convenient to use. I stopped using it because I noticed that it had not been updated for more than a year. The script also caused a bug where my keyboard kept typing the number 3 non-stop. That was a strange bug. So I needed to find a better solution.

I found [Windows Utility (WinUtil)](https://christitus.com/windows-tool/) by Chris Titus. This is very easy to use. Just click, click, and click, and I could switch to the **Ultimate Performance** power plan and activate **Hyper-V Virtualization** to boost my laptop's performance.

Now I still use WinUtil whenever I need it instead of the script from privacy.sexy.

You know how I improve my Windows 10 so that it runs as fast as possible. When choosing which Linux distro I should use, my standard is that it must be faster than my optimized Windows 10 and lighter in terms of RAM usage.

## Installing Q4OS on Windows 10 easily

At first, I searched online for the most lightweight Linux distros, and I found [Q4OS](https://www.q4os.org/). Not only was it lightweight, but surprisingly, it allowed Windows users to install it just like any Windows application with just a few clicks. The installation went smoothly, although it took more than 20 minutes.

I could run Q4OS with KDE Plasma, which I had no idea what that was. All I cared about was that Q4OS would run all applications that I currently used faster than a reasonably optimized Windows 10.

After three days of trying it, I did not feel Q4OS ran faster than Windows 10. I wrote a blog post, *[Windows 10/11 Does Not Show 'UEFI Firmware Settings'](/blog/secure-boot-unsupported/)*, and I did not feel that it was faster than Windows 10.

But I did not think that this was normal because I knew there was something called "dual boot." Additionally, I refused to believe that GNU/Linux is slower than Windows 10. Q4OS should be faster. So I decided to learn about dual-booting with the hope that I would not break my computer and would not lose my files.

## Trying Kicksecure OS and failing to install it

The next day, I changed my mind. I did not want a blazingly fast operating system. I wanted a secure, beginner-friendly, and privacy-focused operating system. This means I do not need to spend lots of time learning the OS just to get going with web development.

I visited [Privacy Guides](https://www.privacyguides.org/) and [Privacy Tools](https://privacytools.io/), and I decided to use Kicksecure because I wanted to stay with Debian.

I chose Debian because of Q4OS. Plus, I liked the idea of typing `sudo apt install WHATEVER` because I was using [Termux, a terminal for Android](https://f-droid.org/packages/com.termux/) for [doing web development](/blog/guide-develop-websites-android/). Installing packages without creating an account, like on the Google Play Store or Microsoft App Store, is amazing. Upgrading apps was expected to be easy because I only needed to type `sudo apt update && sudo apt upgrade`.

Anyway, I chose [Kicksecure](https://www.kicksecure.com/) because [its installation guideline](https://www.kicksecure.com/wiki/ISO) clearly shows me how to do it. I studied its installation process first, and I thought, "This is straightforward. I think I can do it without breaking anything."

I installed [balenaEtcher](https://etcher.balena.io/) on Windows. I tried following the instructions from Kicksecure's website, and I could run Kicksecure in Live mode on my old laptop smoothly. Yay!

I really like that Kicksecure can randomize the MAC address every time it connects to a Wi-Fi. This means that every connection, even with the same Wi-Fi, Kicksecure will generate a random MAC address. I do not remember whether I needed to activate the feature manually, but I did not need to get a headache to make it work.

I decided to install it on my hardware. But during the installation process, I faced an issue: it failed to create a partition.

Now I do not remember the error message. So I completely forgot what the issue is.

## Testing Q4OS with the live ISO

Thanks to the [Kicksecure installation guideline](https://www.kicksecure.com/wiki/ISO), I can now easily boot any GNU/Linux distro I want.

But I realized that I did not know how to replace the existing Linux on my USB. I could not open it through a file manager on Windows. I did not have permission to change (or write) the USB. I could not format it, although Windows kept telling me to format my USB before I could use it.

I was stuck.

Then I found [Etcher User Documentation](https://etcher-docs.balena.io/USER-DOCUMENTATION). It gave me the [instructions on how to clear my USB](https://etcher-docs.balena.io/USER-DOCUMENTATION#windows).

I was ready to flash Q4OS to my cleaned USB.

But I still could not do it because balenaEtcher did not work. It gave me an error about metadata and `h()`, which I did not understand. "Why does this happen to me?" I said to myself.

To solve balenaEtcher's error, I uninstalled it and installed it. Then it worked again.

Finally, I was ready to flash Q4OS to my cleaned USB.

I installed Q4OS with the Trinity desktop environment.

Again, Q4OS ran smoothly without any lag. I did not need to wait forever to open the pre-installed applications.

I decided to dual-boot Q4OS with Windows.

## Trying to dual-boot Q4OS with Windows and regretting it

At this moment, I still want to use Windows 10 and learn Linux. More importantly, all my data was and is still in Windows, so I can not fully replace Windows with Linux.

After a while, I decided to delete Q4Os because I only wanted one operating system on one computer, and I thought it was going to be as easy as deleting a partition through **Control Panel** with just a few clicks. But I was wrong.

I deleted the partition for Q4OS through the **Disk Management**, also known as **Create and format hard disk partitions**.

But unfortunately, after I restarted my computer, GRUB (GNU GRUB or GNU Grand Unified Bootloader) interrupted me. I could not get out of GRUB. I could only run `ls` and that was it. I could not run any other commands that I found on the internet. GRUB did not recognize anything except `ls`.

That was bad. I could not access my Windows. I got stuck.

Desperate for a solution, I kept searching on the internet. One article suggested that I should boot into Windows and open Command Prompt. But I could not even boot to Windows! Another article suggested running several commands in Grub to find Windows. But Grub only knew the `ls` command. What should I do!?

In the end, I found an answer: reinstall Linux. Okay. I installed Q4OS again.

Now I am stuck with Q4OS and Windows 10.

Just to let you know that my laptop does not have **UEFI Firmware Settings**. This means I can not delete Linux as tutorials say. Some of the Command Prompt's commands do not work at all. One of the examples is the following command:

```bat
C:\WINDOWS\system32>shutdown /fw /r
Boot to firmware UI is not supported by this system's firmware.
```

## Praising and complaining about antiX Linux

For [antiX Linux](https://antixlinux.com/), I tried it on another laptop, which is not mine. I installed antiX Linux and replaced Windows 10.

Wow! antiX Linux booted so quickly on a Toshiba dynabook T451/58ER. It is a laptop from 2012. antiX Linux ran nicely. I was liking it until I realized the true meaning of a "free-systemd operating system."

I immediately installed [VSCodium](https://vscodium.com/), Git, Node.js, [yt-dlp](https://github.com/yt-dlp/yt-dlp), and other programs that I commonly used on a daily basis.

I wanted to use VLC media player. So I tried installing VLC with the command: `sudo apt install vlc`. It did not work. antiX Linux gave me an error that said VLC depends on systemd. This was terrible.

In addition to that, it looked like I can not install `systemd` and whatever the other dependencies are.

I also could not install Inkscape. Then I found an article that said I also could not have a Chromium web browser.

I thought that antiX Linux was free software. This means I can run anything I want. But without `systemd`, I can not run everything I want.

Anyway, after doing more research, more searching again, I found out that I could still run those applications if I could get the AppImage file for each app that I desire. To keep this section short, I could find Ungoogled Chromium, Inkscape, and VLC, and learned how to run those properly so that antiX Linux executes the AppImage files instead of installing them. I knew this thanks to this video: [antiX 22 Configuration & Theming [Step by step]](https://redirect.invidious.io/watch?v=6gW_MVl9A_8).

## Gathering key points

Anyway, lots of things happened last week. Now I want to gather my thoughts.

- I have tried the following Linux distros:
  - Q4OS Andromeda, Plasma;
  - Q4OS Andromeda, Trinity;
  - Kicksecure; and
  - antiX Linux.
- I have learned that `systemd` is an important program, so without it, mainstream software does not work.
- I have learned how to boot Linux from a USB.
- I have learned that free-systemd Linux distros have limitations that I was not aware of.
- balenaEtcher works only once. To make it work again, I need to reinstall it.

Okay. I am now using Windows 10, Q4OS, and antiX. I have learned a lot.

Let me know what you think. Take a look at my [X's](https://x.com/VanzaSetia) and [Bluesky's posts](https://bsky.app/profile/vanzasetia.bsky.social) if you want.

Have a nice day/distro!
