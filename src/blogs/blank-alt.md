---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Alternative text for decorative images must be empty
description: At first, you may feel tempted to fill the `alt` attribute with some text. But you have to change that before it becomes a bad habit.
date: 2026-06-18
tags:
 - a11y
 - html
copyright:
  year: 2026
---

You must leave the `alt` attribute empty for decorative images. Here are the reasons:

- [Alternative text](/blog/guide-html-image/) is an alternative way for people to understand information in the form of an image. But decorative images do not present any information to the users. Thus, you do not give an alternative way for people to enjoy your website's decoration.
- Decorative graphics, when they do not exist, will not reduce the amount of information the users need to know. Some common decorative graphics are background patterns, [stock images](/blog/stock-images/), and icons with text. Leave the `alt` attribute empty.
- Icons with text *usually* do not need alternative text or labels. If you add alternative text, you are like a broken radio that keeps repeating the same thing. For example, a button has a trash bin icon and the word "Delete" next to it. Do not add `alt="Delete"` for the icon since the text already explains the button's purpose.
- Screen reader users want your content only. They do not need to know how many [background patterns](/blog/background-image/) exist on your website. They do not want to hear the word "delete" twice on a delete button. Believe me. Thus, leave the `alt` attribute empty.
- Use your common sense. Ask yourself, "If I am the user, why in the world do I need to know that there are star icons all over your website?" You do not need to tell your users that you use all kinds of graphics to decorate your website.

If you follow this advice, you are already a step closer to becoming a better developer for a better world.

---

Hold on. Make sure you do not write "the image fails to load" as the alternative text because if the image fails to load, the browser will not show it, and your users are **not** stupid. Do you *understand*?
