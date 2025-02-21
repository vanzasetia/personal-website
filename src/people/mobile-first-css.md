---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: "Mobile-First CSS: Is It Time for a Rethink?"
description: Is there a better approach than mobile-first CSS? Let us evaluate an article that tries to answer it.
date: 2025-01-09
author:
  name: Patrick Clancey
  url: https://alistapart.com/article/mobile-first-css-is-it-time-for-a-rethink/
copyright:
  year: 2025
---

A List Apart (ALA) has two great articles: "[Priority Guides: A Content-First Alternative to Wireframes](https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/)" and "[The Core Model: Designing Inside Out for Better Results](https://alistapart.com/article/the-core-model-designing-inside-out-for-better-results/)." Both articles tell how to plan and design the content of a website. I like them.

But there is one article that gets my attention: [Mobile-First CSS: Is It Time for a Rethink?](https://alistapart.com/article/mobile-first-css-is-it-time-for-a-rethink/)

## Rethinking CSS mobile-first approach

I always write CSS with the mobile-first approach. The reason is that the browser's default styling is usually enough for mobile layout design. The mobile layout is usually one column, and the default layout is also one column. I do not need to write lots of CSS to make the mobile layout.

The title of that article makes me ask myself, "Is the mobile-first CSS not the best approach?" I know that the desktop-first approach is worse than the mobile-first approach because most of the time, you need to write lots of media queries to revert almost everything to the default layout. With the mobile-first approach, you write a more complex layout within the `min-width` media query and do not need to revert anything.

I expect that the article offers a new and better approach. Is the author going to do that?

Let us analyze the article together to find the answer.

## Giving false expectations

The author says the following about writing CSS with the mobile-first approach:

> But all those exceptions [overwriting style declarations with `min-width` media queries] create complexity and inefficiency, which can lead to an increased testing effort and a code base that’s harder to maintain.

First, I do not know the "inefficiency" part. What does the author mean by "inefficiency"? Is it about code readability? Is it about the maintainability? I do not know.

Second, I do not know how overwriting style declarations can "lead to an increased testing effort." Third, to make it worse, the author adds another outcome: the code base becomes harder to maintain.

But isn't that how CSS is designed? The "C" in CSS stands for cascade. This means overwriting style declarations is how it works. If that is an issue, the author does not understand about CSS.

An analogy for the author's logic is that drinking water will make you go to the bathroom. Then, going to the bathroom wastes your time. That suddenly becomes an issue when in fact, you have to pee. Why? It is just how the human body works. That should not be a problem.

Anyway, my expectation that the author's proposed approach

- focuses on simplicity and efficiency; and
- does not lead to an increased testing effort; and
- makes the code base easier to maintain.

Okay. This must be a serious article. Let us see if the author can prove those points—at least one of them.

## Understanding the disadvantages of the CSS mobile-first approach

The author gives four disadvantages of the CSS mobile-first approach.

The first disadvantage is that the CSS mobile-first approach adds more complexity.

> The farther up the breakpoint hierarchy you go, the more unnecessary code you inherit from lower breakpoints.

I do not understand the author's statement. I assume that unnecessary inheritance here means overwriting style declarations. That means you need to overwrite the code from lower breakpoints. Why does the author think that it is unnecessary? I want to know the author's version of the "necessary" one.

The second disadvantage is higher CSS specificity. This has nothing to do with the CSS mobile-first approach. The level of CSS specificity depends on the author's methodology to write CSS. If the author uses Block Element Modifier (BEM) or Composition Utility Block Exception (CUBE) CSS methodology, then having high specificity is almost impossible. Both encourage you to use class selectors. None of those uses CSS ID selectors.

The third disadvantage is more regression testing. In this case, I can think of text alignment. Let us say the mobile design uses the default text alignment (`text-align: left`). If you change the text alignment from left to center, then on the higher breakpoints, `text-align` to `center` may not be the desired outcome. This is true. But it is only true in the text alignment context.

:::note Regression testing
Regression testing means testing that requires you to see the other breakpoints due to changes from the default styling. In this case, the default styling is the CSS for the mobile layout. For example, if you change the mobile styling from `text-align: left` to `text-align: center`, that means the higher breakpoints need to be checked to ensure everything is fine.
:::

The fourth disadvantage is that the CSS mobile-first approach makes the browser unable to prioritize CSS downloads. Well, I discuss this one later.

## Using the closed media query ranges approach

I find the proposed solution (better than the CSS mobile-first approach?).

> I concentrate on finding common styles and isolating the specific exceptions in closed media query ranges (that is, any range with a `max-width` set).

Wait. Isn't that using media query equal to overwriting style declarations? Maybe, the approach is a helpful and efficient overwriting. Okay. Let us continue.

The author gives us two examples of "isolating the specific exceptions in closed media query ranges." Here is one of them:

```css
.my-block {
  padding: 20px;
 @media (min-width: 768px) and (max-width: 1023.98px) {
    padding: 40px;
 }
}
```

The example is implicitly forcing you to agree with the author. For me, that is a sign of complex design. Why does the `padding` need to be decreased above the `1023.98px`? How is that likely to happen? Is it something very common? There is no answer.

Next, let us focus on the media query and ignore the idea of using pixel (`px`) unit for `padding` and the overly specific `max-width: 1023.98px`. The media query is complex. It combines `min-width` and `max-width`. That means you will have many breakpoints to track. Also, if the design is not consistent, you will end up with many breakpoints.

To make this approach worse, here is another example:

```css
.my-block {
 @media (max-width: 767.98px) {
    padding: 20px;
 }
 @media (min-width: 768px) and (max-width: 1023.98px) {
 padding: 40px;
 }
}
```

Now, I understand the purpose of the strange decimal breakpoints. It is to make sure that the first media query does not conflict with the next media query. Otherwise, based on the above example, if the first media query is `max-width: 768px`, then on the dev tool, you can not just click the bars to see both in action. The decimal breakpoints really save the day—in the short term.

:::note Showing media queries on the dev tool
In Chromium-based browser

- Open the dev tool.
- Click the three vertical dots that are aligned horizontally with "Dimensions."
- Choose "Show media queries."

If you find it hard to follow, visit the [official documentation](https://developer.chrome.com/docs/devtools/device-mode/).
:::

## Separating style sheet

To destroy the entire idea, the author proposes to separate the style sheet. The example that the author gives is using the `min-width` with the `media` attribute. That proves the CSS mobile-first approach allows us to separate the CSS files. In fact, if the `link` element has already the `media` attribute, you do not need to wrap the code inside the style sheet with `min-width` media queries.

Anyway, does this have something to do with the closed media query ranges approach? No, it does not. It is a completely different topic from the CSS mobile-first approach.

## Rethinking again

> I don’t think anyone wants to return to that development model [mobile-first CSS] again.

Think again! The reality is that nobody wants to follow this approach.

- It adds unnecessary complexity. If you can just simply use `min-width`, why do you need to use both `min-width` and `max-width`?
- It is not efficient. If you use this approach, that means you need to write two breakpoints for every media query. For example, if you have a breakpoint of `768px`, you need to have `767.98px`.
- It makes your code base harder to maintain. You have more breakpoint values to track which makes your style sheet harder to maintain in the long run.

I would say that this approach has a place, like for text alignment, but it *should* be extremely rare to use—or never. If you find using this approach works, that is a sign of bad and complex web design.

Now is the time for you to think. Then, tell me what you think.
