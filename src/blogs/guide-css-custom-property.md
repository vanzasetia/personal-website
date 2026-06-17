---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: The ultimate guide to using CSS custom properties easily
description: Using the power of CSS custom properties does not need to be complicated. You can start now by doing the easy and simple things with them. Let me tell you how.
date: 2026-06-17
tags:
 - css
 - a11y
copyright:
  year: 2026
---

CSS custom properties exist to use repeated CSS values in many places. [Before they existed](/blog/advanced-web-design/), we needed to keep assigning the same value over and over again. If we want to use variables, we need to use a non-web-standard tool such as [Sass](https://sass-lang.com/).

Moreover, when we need to [update our sites](/blog/redesigning-proving/), we need to rewrite all the values. With CSS custom properties, we just need to change the value on some properties, and the changes happen automatically. No pain but only gains. Profit!

## Setting default fluid `font-size` properties

Still using media queries to change every `font-size`? Or are you still using the `em` unit for responsive `font-size`? Or [declaring `font-size: 62.5%` on the `html` element](https://fedmentor.dev/posts/rem-html-font-size-hack/)?

I prefer using [Utopia.fyi](https://utopia.fyi/) to generate all different fluid sizes. It is easy to use. You only need to copy-paste the generated code and use it on the entire website. No more [breakpoints](/blog/too-much-media-queries/).

## Setting up consistent `line-height` values

Inspired by the [Tailwind CSS documentation](https://tailwindcss.com/docs/line-height), we can set up consistent and nice options for `line-height` values.

```css
:root {
  --leading: 1.4;
  --leading-short: 1.3;
  --leading-slim: 1.2;
  --leading-fine: 1.1;
  --leading-flat: 1;
  --leading-mini: 0.9;
  --leading-micro: 0.8;
}
```

A rule of thumb to follow is this: the bigger the text, the smaller the `line-height` is.

## Setting up basic colors

Very common! You set up colors with CSS custom properties to prevent yourself from writing the same color values over and over again.

Updating and tracking colors are now easier than ever before.

One thing that probably most developers do not know is that you can use custom properties to set up colors for the `:hover` state. For example, if you want a simple hover effect [that turns a dark button into a light button](https://html.cafe/x558a358d?k=20d9a352de8c3d092f5aa10f8ead349e4790a309), you can do the following:

```css
.button {
  /* Light button styling */
  --button-background-color: #fff;
  --button-text-color: #111;
  --button-border-color: #111;

  /* Light button hover effect with logic */
  --button-hover-text-color: var(--button-background-color);
  --button-hover-background-color: var(--button-text-color);

  background-color: var(--button-background-color);
  color: var(--button-text-color);
  border: 1px solid var(--button-border-color);
  padding-block: 1rem;
  padding-inline: 2rem;
}

.button:hover {
  background-color: var(--button-hover-background-color);
  color: var(--button-hover-text-color);
}
```

## Developing dark and light modes

If your website has two colors only, a dark color and a light color, you can easily have a dark mode and a light mode.

```css
:root {
  --color-dark: #111;
  --color-light: #fff;
  --color-body-background: var(--color-light);
  --color-body-text: var(--color-dark);
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-body-background: var(--color-dark);
    --color-body-text: var(--color-light);
  }
}
```

You can be creative by having many themes on your website. Thanks to CSS custom properties, developing themes is much easier than ever before.

## Setting up font stacks

Again inspired by [Tailwind CSS documentation for `font-family`](https://tailwindcss.com/docs/font-family), setting up font stacks helps us write full options for every type of font. Otherwise, we would just have to write or copy-paste a short value like: `font-family: 'Open Sans', sans-serif;`.

```css
:root {
  --font-serif:
    "Georgia Pro", Georgia, Superclarendon, "Bookman Old Style", "URW Bookman",
    "URW Bookman L", serif;
  --font-sans-serif:
    "Atkinson Hyperlegible Next", "Atkinson Hyperlegible", "San Francisco",
    "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif;
  --font-monospace:
    "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono",
    monospace;
  --font-system:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

If you prefer developing a lightweight website with good fonts, check out [Modern Font Stacks](https://modernfontstacks.com/).

One more thing: avoid using `system-ui` because it is [known to be problematic](https://infinnie.github.io/blog/2017/systemui.html).

## Setting up the container's `max-width`

You do not want your layout to mess up because each section has a different maximum width. You want to ensure that all sections obey one rule so that all the content does not come out of a container.

```css
:root {
  --container-max-width: 1350px; /* or any value */
}
```

## Setting up options for optimal line lengths

> A good rule of thumb for line lengths of long form content like this is something in the region of 65-75 characters.
>
> —[Some simple ways to make content look good, Piccalilli](https://piccalil.li/blog/some-simple-ways-to-make-content-look-good/)

Yes, you do need to set a `max-width` for some HTML elements that can have text. We do not want [our users](https://blogs.oregonstate.edu/calverta/line-width-in-digital-typography-for-accessibility-and-comprehension/) to have trouble while they are reading.

```css
:root {
  --measure-xs: 20ch;
  --measure-s: 35ch;
  --measure-m: 45ch;
  --measure-l: 65ch;
}
```

A good rule of thumb is this: the bigger the text, the smaller the line lengths are. This means paragraphs for articles or blog posts should have around 65-75 characters. Sub-headings should have around 35-45 characters.

You do not want a gigantic headline to have the same line lengths as paragraphs. The headline will be overflowing, and that is an issue.

:::aside For your information
The synonyms for "line length" are line width or measure.
:::

## Documenting consistent and reusable values

If you find yourself using the same value over and over again, you can make a general custom property. You want to make it general so that it can be used in different places regardless of the context. For example, if you often write `1px solid var(--color-dark)`, you can make `--stroke` a custom property. Chances are, if you want to change the value of it, you want it to be applied to the same components that use `--stroke`.

## Developing a customizable component easily

[Andy Bell](https://piccalil.li/blog/how-i-build-a-button-component/), an awesome and experienced web developer, wrote an article telling us how to develop a customizable button component. The component relies heavily on custom properties. It is easy to make variations of it. For example, if I want to make a button with different sizes, I can do the following:

```css
.button {
  --button-padding: 2rem;
  button: var(--button-padding);
}

.button[data-button-size="small"] {
  --button-padding: 1rem;
}

.button[data-button-size="big"] {
  --button-padding: 2.5rem;
}
```

I follow his approach to developing most components on this website. In fact, I also use his approach to control the hover state for different button variations.

## Closing

CSS custom properties are powerful and can be confusing (don't worry). Start playing around with different approaches. Mix different techniques that you have learned. Be creative.

I hope this helps. Share it with others so they can learn. Happy coding!
