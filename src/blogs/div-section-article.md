---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: The div, the section, and the article
description: The div element has a bad reputation in web accessibility because some developers see it as "meaningless." Is meaningless equal to bad?
date: 2025-04-25
tags:
  - html
  - a11y
copyright:
  year: 2025
---

There are three controversial HTML elements: the div, the section, and the article. Ignorant developers use the section and the article elements to avoid using the div elements. This is a wrong approach.

The div element is meaningless. The section element is a bit meaningful. The article element is *probably* meaningful. Thus, too many div elements will not cause any screen readers to announce those elements. But too many article or section elements can *potentially* make lots of noise for screen reader users.

Web Accessibility in Mind ([WebAIM](https://webaim.org/resources/htmlcheatsheet/)) states the following for the semantic meaning of both the article and section elements:

> These have no useful semantics unless given an ARIA label (which is not typically recommended).

:::note The ARIA attributes
If you are new to web accessibility, ARIA stands for Accessible Rich Internet Applications. There are many ARIA attributes to give HTML elements more extensions beyond their accessibility capabilities. For example, if you make a button for a hamburger menu, you can use the button element with an `aria-expanded` attribute. The attribute tells the users the state whether the menu is expanded or collapsed.

ARIA attributes will not make your application accessible and make you rich. In fact, they can make you spend lots of money because of legal issues if you do not use them correctly.
:::

WebAIM suggests using the heading elements to identify each section of the page. This is the right approach.

Next, I read another article. Bruce Lawson, a person with a bad look according to [Smashing Magazine](https://www.smashingmagazine.com/author/bruce-lawson/) (no offense), wrote an article arguing to [choose the article element over the section element](https://www.smashingmagazine.com/2020/01/html5-article-section/)—at least based on the title.

He stated the following:

> So a homepage with a list of blog posts would be a `<main>` element wrapping a series of `<article>` elements, one for each blog post.

I do not do this. I prefer using `<ul>` markup to list my articles. For me, the HTML list elements are used for listing items—as simple as that.

He then explained about the section element. He mentioned about "the document outline algorithm." I do not care about it since no browsers have implemented it.

Additionally, Adrian Roselli—an incredible web accessibility expert—wrote a great article about the [document outline algorithm](https://adrianroselli.com/2016/08/there-is-no-document-outline-algorithm.html). This is a nice piece of information so that you should not bother about it:

> The Document Outline Algorithm is now gone from the WHATWG HTML specification.

Moreover, Scott O'Hara—another awesome accessibility expert—wrote about [the section element](https://www.scottohara.me/blog/2021/07/16/section.html). The `<section>` markup is the same as `<div role="region">`. The section element has an implicit ARIA `role` attribute. Also, we need to programmatically label it to expose it to the screen readers. But do not use the section elements and label them. He stated if most elements are landmarks, users will have a hard time finding the *real* meaningful part of a website. We should not overuse semantic HTML elements or ARIA attributes.

For those reasons, I conclude that the section element is less meaningful than the article element. The section element is almost the same as the div element.

If the div element is a food, it has no flavor. The section element has a bit of flavor—like one grain of sugar. The article element will have a bit more sugar than the section element.

Extending the food analogy, your website has a main course and side dishes. The main course is everything inside the main element (`<main>`). The side dishes are any info inside the header, footer, aside, section, and article elements. Adding the `aria-label` or `aria-labelledby` attribute to the section element or the article element makes them part of the main course. If you serve too many main dishes, your customers will not be able to eat them all.

You may forget about the article and section elements. I do not use them on this website—or even on this article's page.

Meaningless elements are not bad. In fact, those elements make semantic elements meaningful. If all elements have the same importance level, none of them is important. Use the div elements to make your website beautiful. Only use the section or article elements if you label them.

As a side note, I could not notice any comparisons between the section element and the article element in Lawson's article. Can you notice that?
