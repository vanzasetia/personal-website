---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: "Redesigning: making a design with HTML and CSS"
description: This is the third part that shows you how to develop a web design with HTML and CSS without any fancy tools.
date: 2025-01-24
tags: design
copyright:
  year: 2025
---

:::aside Heads up
{{ description }} To understand this part well, [start reading from the first part](/blog/redesigning-proving/).
:::

## Setting up a new mindset

I must make a web design like a wireframe or a visual guide with HTML and CSS. It would become a guide to updating the actual website.

Also, I must write the HTML and the CSS with web accessibility in mind. I wrote a note to remind myself that I must write code with progressive enhancement. That means if something does not work, this website will not be totally broken. To achieve that, the HTML must be good and correct.

In short, I could not write the code carelessly—like before. This time, quality matters. I must write the code with great care and effort.

## Deciding the purpose of this website

Now for the content, I decided to go with "Advance your practical and thinking skills" as the headline because I want to help people stop being beginners or dummies. I saw lots of great beginner tutorials and courses, but I never saw great tutorials for the advanced level. Also, beginner tutorials tend to compromise quality to make things easy to understand. But those tutorials ignore the real purpose of tutorials: **make people smarter**.

Having a hard time is essential to learn a new skill. Telling the truth is essential to set a correct mindset. I do want people to use the knowledge on this website as a stepping stone to advance their practical and thinking skills.

Another reason to use that phrase is that I want to cover various topics. I do not want to limit this website to only discuss writing code. Web development is also about copywriting, long-term planning, sharing knowledge and ideas, socializing on the Internet, doing business, learning, and much more. Besides, I also want to share my knowledge about many other aspects in life.

## Writing HTML first

I wrote the HTML markup first without thinking about CSS at all. That means I wrote the HTML markup for all types of pages without using any `<div>` and `<span>`.

I started focusing on writing HTML with accessibility in mind. In the previous stage, I wrote all SVG elements without `aria-hidden="true"` and `focusable="false"`. Now, at this stage, I added the `focusable` attribute to all SVG tags. Then, I only added `aria-hidden` to all decorative icons.

I really focused only on the HTML structure of the page because I understood that HTML markup is very important to make an accessible website. No matter how good the user interface, if the HTML is bad and wrong, an accessible website is just a dream. So I made sure the HTML markup was good and correct.

## Choosing a CSS methodology again

Once the HTML was ready and correct, time to write CSS.

But before writing any lines of CSS, I needed to choose a CSS methodology to guide me in writing consistent CSS.

In the previous stage, I chose the [Block Element Modifier (BEM) methodology](http://getbem.com/). Then, I remembered about Composition Utility Block Element (CUBE) CSS—I had heard about this before. I decided to give it a try by learning it from [cube.fyi](https://cube.fyi/).

As I was learning it, I learned that Andy Bell—who is the author of CUBE CSS—uses the naming convention of BEM methodology with CUBE CSS. I thought that was great because I am already used to BEM too. So, I was sure that CUBE CSS would work for me.

After learning CUBE CSS, I decided to use the CUBE CSS methodology with the BEM naming convention.

## Choosing font stacks

The font stack was initially coming from the [Modern Font Stack](https://modernfontstacks.com/).

Then, I picked a custom serif and sans serif font. For the sans serif font, I decided to use the Open Sans. Then, I chose the Merrieweather for the serif. But I do not force those on the users. That means the users who do not have those fonts installed on their machines will not use those font families. They use the fallback fonts, which are the default installed font families based on each user's operating system.

In short, users do not have to install the Open Sans and Merrieweather font family. Users who have installed those font families will get the best experience, the same as me. The users that do not have them will still get a good experience—or their version of the best experience—by using the fallback fonts.

## Choosing a theme

For the colors, I decided to use a black-and-white color theme. I tried using accent colors, like red or yellow or blue, but maintaining those colors is complicated. Since colors are not essential anyway, I kept the color palette as simple as possible.

A black-and-white theme is easy to maintain. I can make a light theme and a dark theme effortlessly.

A black-and-white theme is also easy to meet the Web Content Accessibility Guidelines (WCAG) 2.2. This website straightly surpasses the [Success Criterion (SC) 1.4.3 Contrast (Minimum) (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) and [SC 1.4.6 Contrast (Enhanced) (Level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced).

## Choosing a CSS reset

The CSS reset that I used was from Piccalilli: [A (more) modern CSS reset](https://piccalil.li/blog/a-more-modern-css-reset/). This CSS reset became the foundation for the style sheet. Then, I changed it to fit with the website's needs.

## Writing a great style sheet

I started following the CUBE CSS methodology. When writing CSS, I did not just write CSS. I also wrote HTML by adding necessary `<div>` elements to help me make the layout.

As I was writing the global styling, I saw the website progressively getting better. That was the greatest experience to see this website get better and cooler. I saw the website with just plain HTML and the user-agent style sheet. Then, as I added new global styling, I could feel that I made progress. That was an amazing view.

Then, as I was in the Composition until the Exception in the CUBE CSS, I started going back and forth between HTML and CSS. The CUBE CSS was helping me to write CSS and add only the necessary `<div>` elements. I believe nobody talks about this: **the CUBE CSS** can help you to **write decorative HTML elements**, `<div>` and `<span>`.

I need to highlight that I did not group classes because I worked alone on this website. That means the benefit of communication among developers and user interface (UI) designers does not matter. Another reason is that the classes are not a lot. There are not a lot of things going on in the `class` attribute. So, to keep the HTML class attribute simple, I did not group classes.

## Key takeaways

- Make a web design with HTML and CSS.
- Choose a general headline to have the freedom to write any topic you want.
- Write HTML without caring about CSS.
- Use the CUBE CSS methodology with the BEM naming convention.
- Add custom fonts to your font stacks.
- Do not install custom fonts in your user's browser.
- Choose a black-and-white theme for easy color management.
- Use modern CSS reset.
- Use the CUBE CSS methodology to guide you in writing decorative HTML elements.
- Do not group classes if you work alone and your website is simple.

:::aside Read the final part
[Redesigning: Applying the New Web Design](/blog/redesigning-applying/)
:::
