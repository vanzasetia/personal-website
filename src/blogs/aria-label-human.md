---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: The content inside the aria-label is for humans
date: 2026-03-22
tags: a11y
copyright:
  year: 2026
---

You do not write the following:

```html
<nav aria-label="primary-navigation">
  <!-- a list of internal links -->
</nav>
```

Do not do that. The value of the `aria-label` is for humans. Instead, write the following:

```html
<nav aria-label="Primary">
  <!-- a list of internal links -->
</nav>
```

Explanations:

- Remove the "-navigation" because the `<nav>` element already has the semantic meaning as the navigation landmark.
- No code is written there. This means we do not want screen readers or other assistive technologies to say something like, "primary dash navigation, navigation landmark." We want those tools to say, "primary, navigation landmark."
