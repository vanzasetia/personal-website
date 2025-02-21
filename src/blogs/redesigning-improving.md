---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: "Redesigning: improving the initial prototype"
description: The second part shows you how to develop prototype components and compose them into web pages.
date: 2025-01-22
tags: design
copyright:
  year: 2025
---

:::aside Heads up
This is the second part of my redesign process for this website. To understand this part well, [read the first part](/blog/redesigning-proving/).
:::

## Setting another mindset

I decided to redesign this website after I knew the website would look much better with those new components.

At this stage, everything is still disposable. I was still free to do further research. This time the research was about composing components on each type of page or making patterns and prototypes for all possible pages. This was like playing a puzzle.

I tried to see how things would fit with each other. If they did not fit with each other, I made some adjustments.

## Developing from the previous state

I started this stage by copy-pasting the previous working directory and changing the name of it. Then, I moved all the HTML files that have all the possible components to a folder called `prototype-components`.

With the main directory cleaned of the HTML files, I started making HTML files for the possible pages such as `about.html`, `index.html`, and `blog/awesome-blog.html`.

Then, I organized the style guide so that it became easy to read. For example, I initially wrote the following on the `style-guide.txt`:

```txt
max-width: 75ch for text
```

After I rewrote it

```txt
The paragraph text's maximum width is 75 characters.
```

## Writing a priority guide

Enough writing code. Time to write content.

I planned my content by making a priority guide. What is a priority guide?

> Simply put, a priority guide contains content and elements for a mobile screen, sorted by hierarchy from top to bottom and without layout specifications.

—[Priority Guides: A Content-First Alternative to Wireframes](https://alistapart.com/article/priority-guides-a-content-first-alternative-to-wireframes/)

That means you only focus on the content. You do not need to care about the placements and the look of it.

A priority guide has no specific tool or format. In my case, I wrote it in a text file named `content.txt`. I wrote the priority guide for all pages in that file. I got started by asking one question: what is the goal of the page for the users? If I could not answer it well, I would not make the page. If the answer was good, I started writing about the details like the headline, description, and the other necessary content to fulfill the user's goal.

## Making a logo

I made my logo with the [Google Font to SVG Path](https://danmarshall.github.io/google-font-to-svg-path/) website by Dan Marshall. [The source code](https://github.com/danmarshall/google-font-to-svg-path) is available publicly and licensed under the MIT License (Expat License). That means I could run the code on my machine. But I did not do that since I only typed "VanzaSetia" on that website and chose the Merriweather font.

I chose the Merriweather because of my experience reading Dummies books. I like reading them in a public library. My favorite book is Cognitive Behavioural Therapy For Dummies, 1st edition. This book is incredible. I love the self-acceptance chapter and The Parts of Tens. It really helps me understand myself better than ever.

Although my reason has nothing to do with design theories, I am sure that Merriweather is one of the best serif fonts with good [readability](https://fonts.google.com/knowledge/glossary/readability) and [legibility](https://fonts.google.com/knowledge/glossary/legibility).

## Choosing a CSS methodology

I used the [Block Element Modifier (BEM) methodology](http://getbem.com/) for the class naming convention or as a way to write the CSS. At this stage, the class names were just random and would not be taken seriously. For example, I wrote `header__container` and `header__container--inner`. I made the container an element of each block. This gave me a lot of freedom to compose each container and see whether all container elements were consistent.

The methodology was not necessarily the chosen methodology for the real website. This was only for this stage to get a general idea of the HTML and CSS structure.

## Making prototype pages

I started writing the HTML markup for each page. First, I wrote the HTML markup for the home page. I started it there because the home page contains most of the components. This means once I finished the home page, the sub-pages were also almost finished. Then, once the HTML markup for all pages was finished, I could see the repeated HTML structure across all pages.

For the content, it was not "Lorem ipsum" text. I used the content from the priority guide. The English was still broken. I did not care about grammar. All I wanted to get was the visualization of the final product.

I decided to separate the CSS from the HTML. This means all HTML pages would use one external style sheet. I wrote the style sheet badly, with lots of repeated code. At this point, the code quality still did not matter as long as those pages looked good on my browser.

## Key takeaways

- Do not be perfect in anything.
- Write a priority guide.
- Choose a CSS methodology.
- Make a logo.
- Get the visualization of the final design.

:::aside Read the third part
[Redesigning: Making a Design with HTML and CSS](/blog/redesigning-making-design/)
:::
