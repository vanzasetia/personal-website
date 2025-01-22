---
title: "Redesigning: proving redesign is a good and right decision"
description: This is the first part of a new article series that gives you a look at the behind-the-scenes of this website redesign process. Be ready. It is a very unusual way to redesign a website.
date: 2025-01-20
tags: design
copyright:
  year: 2025
---

{{ description }}

## Introduction

When I redesigned this website, I did not use Figma or any similar apps. I drew the initial look of new designs on a piece of paper. I approached the user interface design with HTML and CSS. Do you know anybody else doing that? I believe only me do this.

Based on that, you may be wondering how I redesigned this website.

So I decided to make a series on my redesign process.

I hope you learn something from this series.

## Setting a mindset first

Everything at this point is disposable. No final decisions need to be made.

I was free to play around and change things up. I also did not care about writing good code. The HTML was garbage. The CSS was strange. At this stage, I tried as many ideas as possible.

This stage also made sure that updating the current website's design was possible and the right decision. If I could not come up with something better than the current design, I would postpone the update and do more research, or I would not update the website.

## Finding websites to imitate

The best websites I can follow are from experts in the web dev industry who do designing and programming. Their code quality is extremely high.

I looked for **real websites** with **good and right web designs**. I found Heydon Pickering's websites and Andy Bell's websites to be good references for web designs.

For Heydon's websites, I chose [his personal website](https://heydonworks.com/), [Inclusive Components](https://inclusive-components.design/), and [Inclusive Design Principles](https://inclusivedesignprinciples.info/).

For Andy Bell's websites, I chose [his old personal website](https://archive.hankchizljaw.com/notes/122/), [Build Excellent Websites](https://buildexcellentwebsit.es/), and [Piccalilli](https://piccalil.li/).

From both, I chose the [Every Layout](https://every-layout.dev/) website. I mainly learned from its incredible style sheet.

Then, I decided to use Piccalilli as my main design reference. I wrote notes as I inspected the Piccalilli website. For example,

- using the `@supports` query when using `:focus-visible` selector;
- using logical properties;
- using the HTML use tag (`<use>`) to display icons by using `<svg>` and putting all the sprites inside a hidden `<div>`; and
- categorizing articles based on their topics.

## Sketching the future's look

I sketched the visual design of this website on a piece of paper.

I am not good at drawing. But to give you a rough idea, I drew only the layout of the homepage. The reason was that I knew the homepage would be the main page. That means it would be the main layout of this website and would have lots of components. The rest of the pages would be like the homepage and reuse most of the components from the homepage. That means I would not need to make the rest of the pages from scratch.

The drawing was only about layout. It did not contain any real content. I drew a block of text as horizontal lines.

In the drawing, I made sure that it contained repeated components or patterns. For example, I made sure the "Best articles" and the "Latest articles" sections used the same pattern. This made sure that the website would be consistent, and I would write less code as a result.

:::note What is a component?
A component is a chunk of HTML and CSS that can be reused many times. It can also have JavaScript. One example is a button component.
:::

:::note What is a pattern?
A pattern is a set of components that can be reused many times. For example, a hero pattern has one heading component and two button components.
:::

:::note What is a layout?
A layout is a set of patterns that can be reused many times. It is usually used to make one type of page of a website. For example, a main layout has a header pattern, a hero pattern, two card patterns, and a footer pattern.
:::

## Finding icons

Then, I picked all the possible icons that I would use from [IcoMoon](https://icomoon.io/). For example, I wanted to make a note component with an "i" icon. So I grabbed the "i" icon. [This does not get implemented in the end.] For another example, I took some arrow-up right icons to make a button icon component. [This one gets implemented.]

## Making disposable components

I made all possible components that I would use, such as different types of buttons, an inline link, and header navigation. Then, I made each component in an HTML file. I did not use anything fancy to make them. I used an HTML file with an internal style sheet—the style tag (`<style>`) within the HTML head element (`<head>`)—for each component.

As I made the components, new ideas for the upcoming articles came to me. Then, I wrote them in a text file. [One of them was to write this.]

Then, I wrote a style guide in a text file. It has possible font stacks, colors, a container's maximum width, `clamp` functions for fluid type scale, and fluid space.

I used [Utopia](https://utopia.fyi/) to generate the fluid type scale and fluid space.

## Key takeaways

- Imitate real websites.
- Use the dev tool to learn from real websites from good and right experts.
- Let yourself be free to make any components you want.
- Pick lots of icons with a free license to experiment.
- Expect this process to be messy.
- Forget about quality and best practices.

:::aside Read the second part
[Redesigning: Improving the Initial Prototype](/blog/redesigning-improving/)
:::
