---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: CSS text-decoration is deceiving
description: What will happen when we think an underline on every link is just a decoration? I bet you never think about this.
date: 2026-03-21
tags:
  - a11y
  - css
  - mind
copyright:
  year: 2026
---

Decorative elements, such as decorative images, are not essential. This means that without those elements, the website can still function properly for all users. This is why every `<img>` element with an empty `alt` attribute will not be read by a screen reader. But the [CSS `text-decoration` property](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-decoration) for links is not merely a decoration.

Every inline text link without an underline is [problematic](/blog/hover-effect-confuse/). Users who browse the web visually need a way to identify links in a paragraph. If web developers decide to do the following, they need to provide an alternative way for the users to identify inline text links:

```css
a {
  text-decoration: none;
}
```

Web developers can decide to use color to differentiate links and plain text. But we understand very well that [people with color blindness](https://en.wikipedia.org/wiki/Color_blindness) exist. We also know that [Success Criterion (SC) 1.4.1 Use of Color (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) from [Web Content Accessibility Guidelines version (WCAG) 2.2](https://www.w3.org/TR/WCAG22/), mentions, "Color is not the only way of distinguishing information." Simply, **color is not enough**.

By the way, the default style of the `<a>` element is blue text color with an underline. The default styling passes SC 1.4.1 Use of Color. It is also widely recognized by all internet users as a link.

Going back, web developers still need to provide a way. They can be [creative](/blog/web-resign/). They can use the `border` property, for example.

But, personally, I prefer simplicity to style inline text links. I prefer *enhancing the default styling* rather than making my own unique inline text link styling.

If you make a button with "Discover more ways to learn science," and you use the `<a>` element, go for it. You can even argue that removing the underline is a legitimate solution. But I disagree with setting `text-decoration: none` because

- the `<button>` element should be different from the link with a button appearance;
- the `<button>` element does not have an underline; and
- in Windows High Contrast Mode, every link does not have an underline.

Again, **color is not enough**. If links do not have an underline, they fail to pass SC 1.4.1 Use of Color.

Instead, I do the following:

```css
.button {
  text-decoration-color: transparent;
}
```

That is much better because:

- all links with button appearance will not have a visible underline;
- in Windows High Contrast Mode, every link will have an underline; and
- in Windows High Contrast Mode, the `<button>` and the link with button appearance are different from each other—the *real* buttons do not have an underline, while the link buttons have an underline.

To learn more about Windows High Contrast Mode, check out *[The Guide To Windows High Contrast Mode](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/)* by Cristian Diaz.

Now we know that the CSS `text-decoration` plays a crucial role in web accessibility. We have the right mindset that **an underline for every link is not just a decoration**. It is an important property for [links](/blog/empty-links/), especially for inline text links.
