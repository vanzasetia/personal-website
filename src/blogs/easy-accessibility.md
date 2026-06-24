---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Improve your site's accessibility easily
description: You can make your website accessible easily now. Don't wait.
date: 2026-06-14
tags:
 - a11y
 - html
 - best
copyright:
  year: 2026
---

Here are things you can do *now* without struggle at all:

- Add the `lang` attribute to the `html` element.
- Keep the viewport `meta` element like the following: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- Use only one `h1` element for every page.
- Write alternative text for all informative images.
- Delete alternative text for all decroative images.
- Validate your HTML with [validator.nu](https://validator.nu/) or [The W3C Markup Validation Service](https://validator.w3.org/).
- Every link inside a paragraph must have an underline.
- [Do not remove CSS outlines](https://www.a11yproject.com/posts/never-remove-css-outlines/), unless you have provided an accessible alternative.
- Remove all the f words from your website, unless those words come from quotations.
- Remove [unnecessary stock images](/blog/stock-images/).
- Remove [empty links](/blog/empty-links/).
- Remove all empty elements.
- Replace ["click here" links](/blog/click-here/) with better description.
- Remove all [accessibility overlays](/blog/web-resign/).
- Delete unused code, whether it is CSS or JavaScript or anything.
- Make all heading elements visible for your users.
- Wrap all the main content of every page with the `main` element.
- Use `<button type="submit">` instead of `<input type="submit">` because th submit input is legacy.
- Always add `focusable="false"` to all `svg` elements. `focusable="false"` is used to ensure old browsers will not allow the [[Tab]] key to navigate into the SVG.
- Add `aria-hidden="true"` to hide decorative SVGs from assistive technologies.
- Remove all the `br` elements. Do not use the `br` elements for presentation purposes.
- Optimize images with [Squoosh](https://squoosh.app/).
- Improve your writings with [Hemingway Editor](https://hemingwayapp.com/).

To help you identify accessibility issues, you can disable CSS. See your website without any stylesheet. You may find the following issues:

- Informative images are not showing up because you set them as background images through CSS.
- Your website has too much decorative graphics.
- Headings are not in a chronological order.
- Some texts should be wrapped with the heading elements or otherwise.
- The `input` elements may not have an accessible label.

I hope this helps. Happy coding!
