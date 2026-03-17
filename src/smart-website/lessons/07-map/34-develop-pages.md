---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Develop pages
---

## Developing a homepage

In the [previous lesson](/smart-website/lessons/design/), we discussed how you may develop the very first page of your website. That is just one way to do it.

The rule of thumb is to make sure that your homepage is the main source for your users to get to another page of your website.

## Developing an about page

The `/about` can have the following information:

- Where are you coming from?
- What is your hobby?
- What is your uniqueness?
- What is your background? (It can be any story you are comfortable sharing with the public.)

The about page is about you generally. Be creative and add more content.

## Developing other pages

You can write articles. You can share images. You can develop any pages you like.

When developing lots of pages, you may want to choose either to use HTML only or to use a tool to help you develop more pages.

If you choose to use HTML files with a stylesheet only, you will have a hard time when you want to redesign your entire website. For example, the footer is consistent across the entire website. Then, you decide to add a new social media link to the footer of your website. If you have 30 HTML files, you need to change each HTML file one by one.

A smart way is to have one HTML file, and everything will be there. Remember that we are here talking only about developing a personal website. You do not have to follow traditional conventions to have a separate page for different content. Just use the `<h2>` element to label each content, and you are good to go.

However, if you want to expand your skillset, you can use a static site generator (SSG). This website, by the time I am writing this, is using [Eleventy](https://www.11ty.dev/). I use it because it generates clean and beautiful HTML and CSS files. It does not add its own markup, and it does not inject any JavaScript by default. You can search for another SSG. But I recommend using Eleventy. At least, give it a try.
