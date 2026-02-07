---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Is there a maximum number for media queries?
description: This is a simple question you may ask, and the answer can be simple. But we will dive in and discuss this question to understand it and to hopefully get a solution.
date: 2026-02-07
tags: css
copyright:
  year: 2026
---

No, there is not. You can add as much as possible. You can even decide to develop a website with zero media queries.

The better answer for the question is that **it depends on the context**. For example, if you make a personal website with links and with a simple and straightforward layout and with one theme, you do not need a media query. But when you want to use the empty space on large screen sizes, you may need a media query to make the website responsive. After that, you want your website to adapt to the user's preferences, such as dark/light theme, reduced animations, and more/less contrast. This means you need to be specific and know what you are doing.

Then, you can write your first messy style sheet. Improve your style sheet. Use modern CSS layout techniques like CSS Grid and CSS Flexbox to reduce the use of viewport media queries, for example, `@media screen and (width >= 900px)`. Improve it again until you are satisfied with it.

Simply, you can have too many media queries. But to get the exact answer, **your knowledge and the website you develop will determine the ideal number of media queries**.

Of course, this question is often asked by beginners. And this question is not a good question because nobody can give you the exact number of media queries. There is no right or wrong number of media queries.

To attempt to find the answer yourself, open a developer tool in a responsive mode and ask a simple question: on this screen size, is there anything broken? Broken means

- the content—text or images— is not fully visible;
- the size of the elements is weirdly too big or too small; and
- the horizontal scrollbar shows up when the website should not have it.

I can not cover every "broken" website scenario. You can get the feel of a broken website after you get enough experience developing websites—yes, it takes time and effort.

I hope this helps. Happy coding!
