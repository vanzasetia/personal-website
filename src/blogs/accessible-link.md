---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Some accessible links do not need an underline
description: The most annoying part about web development is its flexibility. Rarely are things wrong or bad. In the case of links, some links need underlines, and some don't. All depends on the context.
date: 2026-06-22
tags:
 - a11y
 - css
copyright:
  year: 2026
---

Links make the web great. Without them, the web will not be any different from plain text files. But some web developers make bad links. Some of those [links do not have the unique identifier](/blog/text-decoration/) that is *an underline*.

A link needs to be underlined. True! But I can not say that all links must have underlines, because users have gotten used to web patterns. One of the patterns is navigation links. If they do not have an underline, the users will know that they are links. Those links are okay without an underline.

But inline link text needs an underline. Those links are inside a paragraph. They mingle in a block of text. How do the users differentiate between normal text and link text? The answer is that link text has an underline, while normal text does not have an underline.

You may argue, "What if I just give the link text a different color?" Not all people have the same eyes as you do. There are people who are color blind. [Web Content Accessibility Guidelines version 2.2](https://www.w3.org/TR/WCAG22/), [Success Criterion (SC) 1.4.1 Use of Color](https://www.w3.org/TR/WCAG22/#use-of-color), states that we should not use color alone as a way to convey meaning. This means link text must not be displayed through color alone.

If you use [the HTML `u` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/u) within a block of text, you should get rid of them. Delete all of them because your users may confuse the underlined text with links, **unless you know what you are doing.**

By the way, underlined text is not always a link. A headline on a landing page can have underlined text to emphasize value.

In summary, there is no simple truth like, "All links must be underlined" or "All links do not need to be underlined anymore." The fact is that **some links in a certain context need an underline, while some do not need it.** By the way, I am not being politically correct. I am just saying that **context matters very much in web development.**

To sum up:

- Underline links if they are inside a block of text.
- *All* links do not need to be underlined.
- Context matters very much.
