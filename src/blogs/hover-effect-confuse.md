---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: A link hover effect that confuses some users
description: Removing the underline as a hover effect for links can confuse your mobile users.
date: 2024-12-31
tags:
 - a11y
 - css
copyright:
  year: 2024, 2025
---

{{ description }}

Consider the following scenario: a user uses a Chromium-based mobile browser—like evil Google Chrome or crypto-bloated Brave. The user finds a link to an article and wants to open it in a new tab. The user holds the link. Then, a popup menu appears, and the underline disappears at the same time. But the user decides to do that later. After the user closes the popup, the user changes the decision and decides to open the link now. But the user can not remember the location or the label of the link. Even worse, **the hovered link now looks the same as the normal text**. Luckily, the user randomly taps on the screen—which makes the hovered link go back to the initial state—and makes the underline reappear. In the end, the user finds the hovered link and opens the link in a new tab.

No big deal, right? Wrong. When the hovered link looks the same as the plain text, a mobile user can get confused when trying to find it. If the user forgets the link's location or misses the underline's reappearance, the user needs to check all links on the screen. Even if the user is aware of the hover effect, the user still needs to know how to make the underline appear again.

To make sure everything is fine, the user must

- know how to make the underline appear again; and
- remember the location of the link; and
- notice the reappearance of the underline.

But, you can not guarantee that all your mobile users meet those three conditions all the time.

I believe a user experience (UX) designer does not want some users to experience confusion. Changing the underline color to the same as the background color for a link hover effect can confuse some users. So, it is not a good design decision. Isn't that right, [Piccalilli](https://piccalil.li/)?

This goes to you as well if your link hover effect makes the link's underline disappear.

Use a different hover effect instead.

## Update: 3 January 2025

I emailed the Piccalilli team yesterday. Then, Andy Bell replied that he would fix it.

Now, it has been fixed. The fix is the underline color does not change on the hover effect. Good!
