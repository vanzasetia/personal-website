---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Background image vs HTML image? Which one should I use?
description: Beginners often get confused about when to show an image as a background image or as an actual HTML image. This short article gives you a direct answer.
date: 2026-03-22
tags:
  - a11y
  - css
copyright:
  year: 2026
---

Use CSS `background-image` property for decorative images. This means the image

- gives no information at all; and
- makes your website more attractive only; and
- is just a background image.

Use the HTML image element (`<img>`) for meaningful images. This means the image

- needs alternative text; or
- must exist to give users information; or
- is not a [stock image](/blog/stock-images/).

A bonus tip: **optimize the file size of your image.** Do not make your users download 10 Megabytes (MB) of an image when it can be reduced to 1 MB—or even less. Use [Squoosh](https://squoosh.app/) or [run it locally](/blog/squoosh/).
