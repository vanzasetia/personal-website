---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Alternative text for informative images must be clear
description: Learn how to write helpful alternative text so your users do not miss your message. Helpful alternative text is for everyone, including users without significant disabilities.
date: 2026-06-30
tags:
 - a11y
 - html
copyright:
  year: 2026
---

## Do you even need to write alternative text?

Not all images need alternative text. Background patterns, for example, should be displayed through the CSS `background-image` property instead of through the `img` element. [Stock images](/blog/stock-images/) do not need alternative text in most cases.

Simply, decorative images must have [empty alternative text](/blog/blank-alt/) while informative ones must have it.

## Why do you want to write alternative text?

You write alternative text to provide an alternative way for your users to understand *essential* information in an image. Users often read the alternative text when they can not comprehend an image. Some websites, like [Mastodon](https://mastodon.social/@timopixel@pixelfed.social/116837865988811261), are kind enough to allow seeing the alternative text with the image.

Alternative text also offers an insight into what the author wants to highlight from an image. Sometimes, users fail to understand an image, and alternative text helps them. But it only helps if you write good alternative text.

## How do you write great alternative text?

Write alternative text for content graphics. Those graphics are part of the content, and without them, your users will lose information. Thus, when those graphics fail to load, alternative text will be visible as an alternative way to understand the graphic. For example, you post a *tweet* with an image of your keyboard. You write the following for your post:

> Hey, folks! I have just bought a new keyboard. It's so cool.

Then, you write alternative text explaining the keyboard. Otherwise, if the image fails to load, your followers will not know that you are buying an RGB keyboard. If that is me, I will just write "An RGB keyboard with black color." Since I am not an expert at the keyboard, I can not add more description. But if you know a lot about the keyboard, you may add more explanation. For example, you write, "MageGee Mini 60% Gaming Keyboard, RGB Backlit 61 Key Ultra-Compact Keyboard, TS91 Ergonomic Waterproof Mechanical Feeling Office Computer Keyboard." (I found *this* randomly.)

**Make sure that your alternative text is not too long.** You want to provide comparable info when writing alternative text. This means you do not write an essay about your new keyboard inside the `alt` attribute, explaining all its great features. Instead, you ask yourself, "What do I want people to know from the image?" To answer the question accurately, **consider the context**.

You should not use words like "image," "icon," "graphic," "picture," and any similar words that tell the image is an image. The HTML `img` element already has the semantic meaning to tell users that an image is an image. You do not need to repeat such info in the alternative. But I can think of an exception. If the alternative text is about a person holding a photo, your alternative text can be the following: a young boy smiling and holding a photo of his family. The word "photo" is okay in such cases. Shortly, **be smart and do not repeat information**.

**For social media icons, the alternative text should be just the name of the social media.** If you want to use a Facebook icon and link your Facebook account, you had better delete your Facebook account. That is not what I mean. You only need to write "Facebook" as your alternative text. The same as when you write a link text in a footer. You do not need to write "Visit my Facebook." People know that when you put a link, you want them to visit it. Do not repeat that info again. **Treat your users with respect.** They are not so stupid.

Writing great alternative text takes practice. You will make mistakes. I was also bad at writing alternative text. Now I am still learning to get better. We need to be patient and keep learning. I learn about alternative text by reading alternative text from a working website. Learn from both bad and good alternative text.

## What is the most stupid way to write alternative text?

Alternative text *must not* be phrases that

- tells the image fails to load; or
- shows the name of the file.

You must not do those things. Hide your stupidity.

Use your common sense.

---

Always remember the following, folks:

> **Every** image should have an `alt` attribute, even if it's `alt=""` (sometimes called "null" alternative text).
>
> —[web accessibility in mind (WebAIM)](https://webaim.org/techniques/alttext/)
