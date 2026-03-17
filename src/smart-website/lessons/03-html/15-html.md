---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Learning HTML
---

This section will cover only the most-used HTML elements. Like information on the internet, where you do not need to know all of them, you do not need to know all HTML elements.

You do not need to memorize anything. You will remember all essential elements as time goes on, including their syntax.

## Exploring the most-used HTML elements

I divide HTML elements into two categories: invisible elements and visible elements.

Invisible elements are all elements inside the HTML head element. They are used to allowing robots like search engine crawlers to understand information beyond the visible information on a website.

These are some guidelines about the most-used invisible elements:

- The HTML html element (`<html>`) needs a `lang` attribute. If your page is in English, add `lang="en"` to the `<html>` element. Remember, the `lang` attribute is about the language inside the webpage, not your native language.
- Do not add `user-scalable=no` or `maximum-scale=1` in the meta viewport tag.
- The meta charset tag is optional.

According to Harry Roberts, an independent Consultant Web Performance Engineer from the United Kingdom (UK), in his talk *[Get Your Head Straight](https://redirect.invidious.io/watch?v=MHyAOZ45vnU)*, there is the best order of the elements inside the head tag for a fast-loading website. Here is the order derived from the original one:

1. meta viewport tag (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`);
1. title tag;
1. link tag for the style sheet (`<link rel="stylesheet" href="FILE-PATH">`); and
1. Search Engine Optimization (SEO) meta tags.

The complete original list is available on *[Get Your Head Straight - Speaker Deck (slide number 39)](https://speakerdeck.com/csswizardry/get-your-head-straight?slide=39).*

Now, visible elements are all elements with a user-agent style sheet inside the HTML body element.

These are some guidelines about the most-used visible elements:

- Heading elements must be in chronological order. Each page must have one heading one.
- Avoid using the heading four through heading six whenever possible. Keep your page structure as simple as possible.
- [The paragraph element](/blog/paragraph/) can wrap a sentence or even a word. The "paragraph" element does not necessarily mean a paragraph only.
- The anchor element should not be used to spam links. Do not use an anchor element to link to a website that you do not even want to visit. Be ethical.
- Do not use uniform resource locator (URL) shortener dis-services. Be direct. Mark affiliate link.
- The `<main>` element must exist on a page once.
- [The blockquote element should not have the attribution](https://html.spec.whatwg.org/multipage/grouping-content.html#the-blockquote-element). Put the attribution below it.
- The image element needs the HTML `width` and `height` attributes so that the browser creates a space that prevents the layout from jumping. Then, add `loading="lazy"` and `decoding="async"` to all image elements that will most likely not be visible when the users first visit the website. For example: `<img loading="lazy" decoding="async" src="/decorative.jpg" width="128" height="128" alt="">`. Learn more at *[Optimize Cumulative Layout Shift](https://web.dev/articles/optimize-cls)*.
- The picture element should be used with care. The order of the source element must start from the largest image with the `min-width` `media` attribute (for example, `media="(min-width: 56.25em)"`). Then, move on to the smallest resolution image. Then, the fallback image uses the most supported file extension, such as PNG or JPG, and the lightest file size.
- The `<div>` element is meaningless, but a useful element for presentation purposes. Do not adopt the "never use the div element" principle. That principle presumes that writing semantic HTML is equal to boycotting the `<div>` element. If all elements must have meaning, the page will be noisy for the screen reader users. Use the `<div>` element and the `<span>` element for presentation purposes.
- The `<article>` and `<section>` elements are useless. They do not give any semantic meaning at all. They are almost the same as the `<div>` element. But if you use them for layout instead of `<div>` (like deep nesting), they probably make unnecessary noises for screen reader users. So do not use them at all.
- Prevent your user from zooming on a mobile device. Do not add `user-scalable=no` or `maximum-scale=1` in the meta viewport tag.
- Do not write "Image fails to load" for the image alternative text. Pay attention. The term "alternative text" means an alternative way to understand the image. The users know that the image fails to load because the browser will tell them. Do not repeat that information in the alternative text. Instead, describe the image if it contains information. Otherwise, leave it empty.

Check the *[HTML Semantics and Accessibility Cheat Sheet](https://webaim.org/resources/htmlcheatsheet/)* on the WebAIM (Web Accessibility in Mind) website to understand the most common HTML elements.
