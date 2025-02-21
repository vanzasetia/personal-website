---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: "Redesigning: applying the new web design"
description: In this final part of this website redesign series, I tell you my process of updating the existing website with my unique web design.
date: 2025-01-26
tags: design
copyright:
  year: 2025
---

:::aside Heads up
{{ description }} To understand this part well, [start reading from the first part](/blog/redesigning-proving/).
:::

## Moving without a plan

I thought I only needed to copy-paste code and write a bit of Nunjucks code. But that was a wrong thinking. In the end, I did what developers do when they mess up with their code: start over.

```bash
git restore .
git clean -f -d
```

The first command reverts all the changes from the tracked files. The second command deletes all untracked files and folders.

This was a mistake. I should have listened to my instinct that told me to make a plan so the updating process went smoothly.

## Setting up a plan

After thinking for around 15 minutes or probably less, I came up with the following plan:

1. Delete unnecessary things from the existing website.
1. Update [Eleventy](https://www.11ty.dev/) to the third major version.
1. Update the metadata.
1. Disable the style sheet.
1. Replace the old CSS with the new one.
1. Update the HTML markup with content from the design.
1. Write some Nunjucks code to generate content from the website.
1. Separate code with the same HTML structure.
1. Repeat the last three steps for each page until everything is done.
1. Enable the style sheet to see the result.

## Updating from Eleventy v2.0.1 to v3.0.0

I updated the Eleventy to version 3.0.0 with Node Package Manager (`npm`). Then, I changed all CommonJS to ECMAScript Module (ESM). I did that manually. After that, Eleventy produced an error.

```txt
[11ty] Unhandled rejection in promise:
[11ty] Tried to use templateContent on unrendered template
```

I fixed it by setting up `eleventyImport` in the `feed.njk`.

## Updating metadata

Front Matter or metadata is the foundation. I must first set up the necessary metadata so that Eleventy would not throw any error.

Updating metadata was time-consuming, but easy to do.

## Updating the website with HTML view only

I disabled the style sheet. I was updating the HTML markup without CSS.

Everything went well at this point. I started updating the HTML from the base layout until each specific page.

## Polishing the new website

Once I finished, I made small improvements to some articles. I polished the repository to ensure everything was fine. I added a license notice on each new non-trivial file. I edited the `README` file a bit.

*Voilà*! The update was done.

## Sharing this website with people

I shared this website with people by making it [join many web clubs](https://foreverliketh.is/blog/exploring-the-personal-web/).

Web clubs are awesome for me because I do not have any public social media accounts. They allow this website to get views from lots of people. They are good for people who want to find inspiration or motivation from other personal websites. They are also good for people to find another person to interact with. [I like them](/people/exploring-personal-web/).

## Understanding the pros and cons of this unusual redesign approach

The redesigning process was a success.

Now, I want to reflect and understand the pros and cons of this redesign approach. I ask myself two questions:

- What are the pros?
- What are the cons?

Here is my answer.

Pros

- You have freedom to make mistakes in the early stages.
- Fancy tools are not needed.
- The first three steps make applying the new design almost effortless.

Cons

- This redesign process is messy, especially at the early stages.
- Rewriting code many times is time-consuming and may not be necessary.

## Key takeaways

- Make a plan before writing any code.
- Remember to update the documentation.
- Share your website with other people through web clubs.
- Understand the pros and cons of this unusual redesign process.
