---
title: The basic guide to CSS selector
description: "\"Which is the right CSS selector to use?\" This article guides you by giving different criteria to choose the right CSS selector."
date: 2024-07-20
tags:
  - css
  - guide
  - best
copyright:
  year: 2024, 2025
license:
  name: Creative Commons Attribution-ShareAlike 4.0 International License
  url: https://creativecommons.org/licenses/by-sa/4.0/
---

## Low specificity is good

The higher the specificity, the lower the impact will be. That means if you do not want to do a lot of work, use a low-specificity selector most of the time. For instance, if you use an element selector, you make a massive impact with low effort.

## Smart selector is better

The low-specificity selector is good, but the smart one is better.

To ensure only valid anchor tags get styled, use the attribute selector: `[href]`. This way, you can see all invalid links will not apply your CSS.

Another example is to use the `button[type]` selector to set the default styling for all button elements. That selector is better than `button` because you ensure that only the button element with a `type` attribute will get styling. If a button does not have a `type` attribute, you can see it.

One more example is to use the `img[alt]` selector because each image element must have an `alt` attribute.

By doing those, your style sheet becomes your HTML validator during the development process. The production code does need to include those selectors.

You can use [a11y.css](https://ffoodd.github.io/a11y.css/) or [Heydon's REVENGE.CSS](https://github.com/Heydon/REVENGE.CSS) instead. Both use CSS to check flaws in your HTML code.

But if you already know what you are doing, you may not need to do those.

## ID selector is questionable

You may have heard the following suggestion:

> Use ID selectors when you want to style a single element.

That suggestion is bad. Do not use an ID selector to style a single element.

Each page must only have one `main` element. So to style it, do you think you need to use an ID selector? Isn't the `main` selector is enough?

You can use ID selectors temporarily to fix something quickly. Other than that, using ID selectors is a bad decision.

## Class selector is equal to more work

HTML class attribute is an optional attribute. You are not obligated to add a `class` attribute to each HTML element you want to style.

Remember, if you use a class selector, you must do one extra thing: put the class attribute on the HTML element. If you can use an element selector, you are doing way less work.

## Descendant combinator is fine

You must not nest unnecessarily. But nesting is fine.

Selecting a nav element inside a footer element with the following selector is okay: `footer nav`. (Do not use a class selector if that selector is enough.)
