---
title: One action
description: One action is better than two actions. The more actions your users are required to do, the more code you need to write too—think about that.
date: 2025-02-11
tags:
 - a11y
 - design
copyright:
  year: 2025
---

{{ description }}

A hamburger menu requires users to

- open the menu; and
- select the menu.

What is on the menu? Navigation links.

To justify making a hamburger menu on a website, you must make sure that two actions are better than one action. For example, a long list of links or a long table of contents with plain HTML only is bad for your website. Then, a hamburger menu with a sticky position can be your solution. This way, users do not have to scroll up and down to jump from one section to another. But this does not mean a long list of links or a long table of contents must be kept inside a hamburger menu. That is a wrong thinking. It actually means a website with the hamburger menu **may** have a better user experience than one that just shows the table of contents with plain HTML without any JavaScript.

But a hamburger menu, the accessible one, depends on JavaScript. You must update the state of the button, whether it is expanded or collapsed. One way to do that is to use `aria-expanded`. If the JavaScript is blocked or fails to reach the user's browser, you should provide a fallback or an alternative way to allow the user to jump from one section to another. The alternative way does not need to be the same or similar to the hamburger menu. But it should at least work well for non-JavaScript users.

There are [other considerations](https://btxx.org/posts/hamburgers/) when you build a hamburger menu on your website.

- Keyboard users
- Screen reader users

You do not have to make it perfect. But you must make it work well.

I prefer to avoid making a hamburger menu. I prefer writing and maintaining as little amount of code as possible. I want my users to perform one action instead of two actions to navigate this website. If I have a very good reason, I will build it. But I know that "a very good reason" is rarely the case.

"There are many roads to Rome." This means there are many ways to achieve a goal. In this case, as a web designer, we should provide the best way that allow our users to achieve their goals.

Fewer actions mean a better user experience. If one action is possible, then why not?
