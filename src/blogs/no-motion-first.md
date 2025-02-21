---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-SA-4.0
title: No-motion-first approach
date: 2024-07-07
tags:
  - a11y
  - css
copyright:
  year: 2024
license:
  name: Creative Commons Attribution-ShareAlike 4.0 International License
  url: https://creativecommons.org/licenses/by-sa/4.0/
---

For animations and transitions, take a no-motion-first approach. That means you write all the animations and transitions inside the `@media (prefers-reduced-motion: no-preference)`.

This way, the users who choose to see them will be able to see them. Then, if the users' browsers do not support the `prefers-reduced-motion` media query, they will not see them, and that is fine—as long as the animations are not needed to understand the page. As a result, all users of old browsers do not see any animations and transitions, and users of modern browsers can see the animations if they choose to.

Using this approach, you are doing a progressive enhancement and making the website accessible at the same time.

As a side note, the idea is not coming from me. It is coming from "[Taking a no-motion-first approach to animations](https://www.tatianamac.com/posts/prefers-reduced-motion)."
