---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Design your personal website
---

Write the draft for your content first. I have these questions to help you get started:

- Who are you?
- What is your mission?
- Why do you do what you are doing?
- How do you help your target audience?

For example, if I am now just starting out, I would write the following in a `draft.txt` file:

```txt
Hi everyone! I am Vanza Setia. Welcome to my website.

I am here to help new web developers understand web development without paying any money.

I want to help you because I understand really well that beginner web developers can get easily overwhelmed. Think about this: first, we learn HTML, but that is not enough, and then we learn CSS, but that is still not enough, and then we learn JavaScript, but that is not enough, and then we still need to learn a lot of other things.

I am going to help you through my articles and my posts on social media. I use plain language and tell my experience with honesty—no politically correct.

Follow me on social media, and let's conquer web development together!
```

Once we have the text, we can manually convert `draft.txt` into `index.html`. Then, add a simple stylesheet like the following:

```css
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background-color: #111;
  color: #fff;
  line-height: 1.5;
  font-family: sans-serif;

  /* Responsive font-size without any
     media queries */
  font-size: calc(1rem + 0.5vw);
}

a {
  color: currentColor;
}

h1,
h2,
h3 {
  line-height: 1.2;
}

main {
  max-width: 70ch;
  margin-inline: auto;
}
```

Make sure you wrap your content with the `<main>` element.

To develop your current design, you can repeat the following two steps:

1. Write content.
1. Write code.

When you are writing code,

1. write HTML without any CSS; and
1. write CSS and add the necessary `<div>` or `<span>` elements to get the layout that you want.

You want to write content first without thinking about the code. If you write content while you are writing code, you are doing two things at the same time. Doing those will confuse you and overwhelm you.

As you are getting better, you can add more repeatable steps as you wish.

There are things that you only need to do once, such as

- making the tiny icons for your website's tab browser (favicons);
- making a logo; and
- choosing one or two font families.

Keep learning and designing.
