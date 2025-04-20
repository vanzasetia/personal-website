---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-SA-4.0
title: Dangerous CSS ideas
description: Do you like to play with fire? I hope you do not.
date: 2025-04-20
tags:
  - css
  - a11y
copyright:
  year: 2025
license:
  name: Creative Commons Attribution-ShareAlike 4.0 International License
  url: https://creativecommons.org/licenses/by-sa/4.0/
---

## Using absolute positioning to center elements

If you use absolute positioning (`position: absolute`) to put an element in the middle of the page vertically and horizontally, you are using an ancient technique.

In 2025, you should prefer using flexbox or grid. They are simpler and shorter compared to the absolute positioning approach. Using either of them make you a modern web developer.

## Setting the `width` and `height` of the body element

By default, the web is responsive. Your CSS can make it better or worse. One of the ways to make the web's responsiveness worse is to set the `width` and `height` of the HTML body element (`<body>`).

You must not do that. Let the page adjust.

## Changing the `display` value of semantic HTML elements

Not all HTML elements' semantic meaning gets affected when you change the default `display` value.

HTML list elements—the unordered (`<ul>`) and the ordered list (`<ol>`)—will lose their semantic meaning if you change the `display` value. That happens for [VoiceOver on the Safari browser](https://bugs.webkit.org/show_bug.cgi?id=170179).

If you know more examples, please do let me know.

## Changing the background color of an element

If you change the background color of an element, you must also set the right text color to it. Otherwise, if the users have plugins or extensions that can change the color theme of your website, the text color or the background color may not match.

As a side note, I found this advice on [The HTML Hell Page](http://www.catb.org/~esr/html-hell.html) by [Eric S. Raymond](/people/html-hell/).

## Using the `min-width` and `max-width` properties

Think like a browser. What is the result of the following code snippet?

```css
.box {
  min-width: 70rem;
  max-width: 60rem;
}
```

If you think the box is `60rem` long, you are wrong. The correct length is `70rem`.

Remember `min-width` always beats `max-width`—the same goes for the `min-height` and `max-height`.

## Making the HTML anchor elements block elements

By default, anchor tags (`<a>`) are inline elements. If you make them block elements, the users will be able to interact with the links unexpectedly.

## Removing outline on focusable elements

Doing this is the same as [removing an underline from links](/blog/web-resign/). You should not remove the `outline` from all focusable elements. You should not also remove underlines from links.

There is an exception for this. If you provide another focus indicator, you may remove the outline. But you need to make sure that your focus indicator is clear and visible to the users.

I prefer to use outline whenever possible. It is the default browser's focus indicator. It is easy to make it accessible. If I need to remove the outline, I make the color of the outline to be transparent (`outline-color: transparent`). The purpose is to a focus indicator for Windows users in high-contrast mode.

## Hiding overflow elements

By default, if any HTML elements are outside the browser window's, the browser will provide a scrollbar. For example, you can read this section because you can scroll vertically. The browser gives a scrollbar and allows you to scroll.

When the HTML elements have horizontal overflows, the browser will provide a horizontal scrollbar so that you can see them.

But some developers do not like horizontal scrollbar, they often add `overflow-x: hidden` to the `body` to prevent that from happening. The problem with that approach is the developers make the overflow content inaccessible. Unless they have a good reason, or they ensure doing that does not cause any issues, they should not set `overflow-x: hidden` to the `body` element.

For this personal website, I set `overflow-x: hidden` to prevent horizontal scrollbar. So far, there are no issues and no overflowing elements.

## Using shorthand properties

You may have heard, "Do not repeat yourself." You may translate that into the following in CSS:

```css
/* You write the following */
.box {
  border: 1px solid #000;
}

/* Instead of writing the following */
.box {
  border-style: solid;
  border-width: 1px;
  border-color: #000;
}
```

Abstraction is not the same as repeating yourself. When the righteous programmers say "Do not repeat yourself," they do not mean to ask you writing shorter code. They ask you to avoid repetition of information.

In the above code snippet, there is no repeated information whether you write it the long way or the short way.

Shorthand properties shift your focus from what is possible with a CSS property. A good example is the `font` property. According to MDN, it is [a shorthand property for up to seven CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/font): `font-family`, `font-size`, `font-stretch`, `font-style`, `font-variant`, `font-weight`, and `line-height`. If you use it only to set a custom font family, text size, and line height, you actually also set the other properties behind the scenes.

If someone writes the following code snippet, how do you interpret it?

```css
body {
  font-weight: 700;
  font: 1.2rem/1.5 serif;
}
```

What is the `font-weight` of the text? Is it 700? It is not 700. Your answer is correct if you can interpret the default assigned values for the rest of the properties—I can not.

In Chromium-based browsers, if you write the above code snippet, the browser interprets it as the following:

```css
body {
  font-weight: 700;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-variant-east-asian: normal;
  font-variant-alternates: normal;
  font-kerning: auto;
  font-optical-sizing: auto;
  font-feature-settings: normal;
  font-variation-settings: normal;
  font-variant-position: normal;
  font-weight: normal;
  font-stretch: normal;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: serif;
}
```

The result is that `font-weight: normal` gets applied and `font-weight: 700` gets ignored.

Be very careful when you use shorthand properties.

## Using ID selectors (`#`)

These selectors are super dangerous because they destroy the harmony of your style sheet due to their high specificity. Be ready to use `!important` flag or refactor the selectors.

If you find yourself using ID selectors, you need to [change your mindset](/blog/basic-guide-css-selector/) to choose the right CSS selectors.

The HTML id attribute is used to programmatically connect two HTML elements. For example, to connect a label element with the right input element, you need to add an id attribute to the input element. Then, you add the `for` attribute to the label element.

```html
<label for="email">
<input id="email" type="email" name="email" autocapitalize="off" autocorrect="off" required>
```

You should not write `#email` to select the HTML input element in your CSS. Chances are the email input has the same styling as the other text input elements.
