---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Use HTML semantic markup first, probably
description: You may have heard, 'Use semantic markup first.' I disagree. Use the right markup for the right job, and let me tell you that doing it is not always easy.
date: 2026-06-20
tags:
 - a11y
 - html
copyright:
  year: 2026
---

To set the context, let us say we want to make a card component. It will have a QR code and a headline with a paragraph right below it. This card will be the entire website. We are making a website with a card component that consists of a QR code, a headline, and a paragraph.

By the way, the context is inspired by one of the Frontend Mentor challenges: [QR code component](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

I will write the following HTML markup:

```html
<main>
  <div class="card">
    <img src="/images/qr-code.png" alt="QR code for vanzasetia.xyz" />
    <h1>
 Get a free course to start developing your own amazing personal website
    </h1>
    <p>
 Scan the QR code to visit my website. I write various topics and help new
 developers without drama.
    </p>
  </div>
</main>
```

What element will you use for the card component? Will you use the `div` element?

A guy tells a beginner developer who uses the `div` element:

> Make using the `<div>` element your last resort, cuz it doesn't carry any semantic meaning.
>
> Swap `<div class="card">` for the `<article>`.

I do not provide a link because this guy is still learning as a beginner. The lack of knowledge is clearly shown in his feedback. I do not want people to make fun of him, and we are here to discuss and learn together.

First of all, does the `article` element have any semantic meaning? No, it does not. It is useless. [It has no useful meaning.](/blog/div-section-article/)

> These [`<article>` and `<section>`] have no useful semantics unless given an ARIA label (which is not typically recommended).
>
> —[WebAIM](https://webaim.org/resources/htmlcheatsheet/)

I agree with that statement. The `article` and `section` elements do not have semantic meaning. In fact, I have heard that they make unnecessary noise for screen reader users. I prefer using the `div` markup instead. At least, too many `div` elements will not make assistive technologies go crazy.

If we want to highlight a part of the content, we can use either the `section` or `article` element with the `aria-label` or `aria-labelledby` attribute. But before we highlight a section, we need to ask ourselves: why do we need to highlight it? I do not have any reasons for doing so.

A good example of labelling content is to label two navigation landmarks. The navigation landmark (`<nav>`) in the header and the one in the footer need to be labelled because they need to be distinguished. Without labels, both will appear as repeated navigation landmarks for assistive technology users. For a great example, you can look at [The A11Y Project](https://www.a11yproject.com/) website. Open your dev tool and inspect the navigation landmarks.

Do we need to highlight the `section` and `article` elements? Often, the answer is that we do not need to highlight them. Thus, use the `div` element instead.

> In terms of accessibility, writing an introductory heading for our `<article>` is a lot more important than using the `<article>` element itself. Since headings already implicitly mark sections of a document, so-called sectioning elements are often redundant or add very little.
>
> —[Heydon Pickering](https://heydonworks.com/article/the-article-element/)

Heydon tells us that we are better off using the heading elements instead of the `article` element.

If we rely only on using the `article` or even `section` to structure our content, we make a mistake. Those elements are useless and potentially make unnecessary noise for screen reader users.

Now we get the points:

- The `article` and `section` elements are useless for improving [web accessibility](/blog/easy-accessibility/) and are not meaningful.
- Use the `div` element for layout purposes.
- Use heading elements to structure content.
- If we do not use the `aria-label` or `aria-labelledby` for the `section` and `article` elements, replace them with the `div` elements.
