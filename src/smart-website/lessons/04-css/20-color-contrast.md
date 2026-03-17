---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Understand good color contrast ratio
---

The problem occurs when two essential elements do not have enough contrast ratio. Why do I use the term "two essential elements"? Because color contrast is only about the essential elements. Background images and other decorative elements do not matter at all. Remember, color contrast is always about two elements interacting with each other.

Color contrast can be complicated. The basic one starts from the color contrast between the background color and the text color. Make sure the contrast ratio is at least 3:1 according to [Success Criterion (SC) 1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum), [Web Content Accessibility Guidelines (WCAG) version 2.2](https://www.w3.org/TR/WCAG22/).

A complex relation of color contrast can come from a button element. The button's text color and the button's background color need to have enough contrast ratio. Then, the button's background color and the page background color need to have enough contrast, too. We have three layers (starting from the top): the button's text color, the button's background color, and the page background color.

If you aim for simplicity, use two colors only and have two themes—light and dark mode. For example, if you have a light color and a dark color, there are only three possible states:

- a dark text and light page background; or
- a light text and dark page background; or
- a dark text behind a light background and dark page background; or
- a light text behind a dark background and a light page background.

Another benefit is that you need to do a color contrast test once. You do not need to bother yourself to test different combinations.

The bad thing about this approach with two colors is that your website looks plain. But this should not be bad if your aim is simplicity.

Whatever your color choice,

- make sure the text has enough contrast with the background; and
- make sure the essential element's background color has enough contrast with the parent's background color.
