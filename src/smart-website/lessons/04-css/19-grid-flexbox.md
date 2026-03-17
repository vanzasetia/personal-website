---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Use CSS Grid and CSS Flexbox
---

You do not need a media query or a breakpoint to create a responsive flex or grid layout. Your job is to give a guide for the browser. Let the browser decide the layout. See [buildexcellentwebsit.es](https://buildexcellentwebsit.es/) and play around to learn how to write a good guide for browsers.

In CSS Grid, the RAM (Repeat, Auto, Minmax) creates a responsive layout without using a media query. For example, `grid-template-columns: repeat(auto-fit, minmax(min(21.875rem, 100%), 1fr));`. The `min` function in the `minmax` function makes the grid item in a one-column layout responsive instead of fixed width.

Visit [1-Line Layouts](https://1linelayouts.glitch.me/) for more modern techniques when using CSS Flexbox and CSS Grid. Also, play [Grid Garden](https://cssgridgarden.com/) and [Flexbox Froggy](https://flexboxfroggy.com/) to understand how the modern layout system works interactively.
