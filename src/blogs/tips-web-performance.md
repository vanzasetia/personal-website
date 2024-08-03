---
title: Tips for improving website performance
date: 2024-07-22
tags: tips
copyrightYear: 2024
license:
  name: Creative Commons Attribution-ShareAlike 4.0 International License
  url: https://creativecommons.org/licenses/by-sa/4.0/
---

## Default

Use text whenever possible. Text is the fastest thing to render.

Avoid images whenever possible. If you need to use images, make sure you optimize them by reducing the size of them. Squoosh can help you to optimize your images.

::: note Run Squoosh locally
Download the source code through GitHub: [GoogleChromeLabs/squoosh](https://github.com/GoogleChromeLabs/squoosh). Then, remove Google Analytics to prevent Google from tracking you. Then, run it locally.
:::

Avoid third-party code whenever possible. The production code is 100% your code. Third-party may contain a lot of stuff that your website does not use.

Avoid using frameworks. You should start a project without a framework. Use a framework when you have good reasons to do so.

Avoid animations whenever possible. Animations can cause lags on low-end devices. My device is a low-end device. So, when I go to a website with many animations, my device freezes immediately.

Delete all code that your website does not use. If you use a CSS framework, do not just copy the code and use it as is. Delete the code that does not contribute anything to your website.

## Extreme

Do not use JavaScript. If your website needs JavaScript, make sure it is not completely broken without it.

Write as little CSS as possible. Keep your design as simple as possible. For a personal website, aim for a style sheet under 20 Kilobytes (KB) uncompressed and non-minified size.

Do not use decorative images. They are the reasons why a website can have a heavy page weight. They are also practically useless.

Do not use custom fonts. They can be heavier than a page on your website. You should not use them if you want to have a light website. Visit the "[Modern Font Stacks](https://modernfontstacks.com/)" to see a list of local fonts. Another option is not to set any `font-family`. Let the users choose the fonts.

Do not add animations and transitions. Do not add a hover effect. Transitions and animations can cause lags. They can also create unnecessary delays. When a user needs to wait for the animation before the text appears, it is a waste of time.
