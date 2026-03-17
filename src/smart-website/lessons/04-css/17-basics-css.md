---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Learn the basics of CSS
---

CSS stands for Cascading Style Sheet. The word "cascading" shows the way CSS works. The bottom declaration will overwrite the earlier one. This is not a bug. This is a feature that shows CSS can solve the conflict by itself, unlike JavaScript.

The CSS cascading starts from the user-agent stylesheet, down to the developer's stylesheet, down to the CSS code inside the HTML head element (internal stylesheet), and down to the last stop, which is the CSS code beside the HTML element itself (inline styling). For the complete order of specificity, you can visit the official [CSS documentation](https://drafts.csswg.org/css-cascade/#cascade-order).

The cascade in CSS makes specificity. Specificity is a way for CSS to decide which code should take priority. This means—again—CSS can automatically solve conflicts if the same element has different styling or repeated properties.

Cascade is also the nature of CSS in inheritance. CSS inheritance means the styling of elements receives **some styling** from the parent elements. An example of CSS inheritance is that the paragraph elements receive some styling from the HTML body element. For example, if the `<body>` element has the `font-family: Arial`, the paragraph elements use that font family. But when the `<body>` has the `background-color: #111`, the paragraph elements do not inherit the styling. Just like children inherit some things from their parents, so do HTML elements.

CSS inheritance is the result of the user-agent stylesheet. The inheritance from the previous example happens because the user-agent stylesheet defines that `p` inherits the font family of the parent element. Then, if the parent element does not define any `font-family`, the search will continue until it finds an ancestor element that defines the `font-family`. Otherwise, all elements, including the invisible HTML elements, will appear as plain text. You can remove all styling by selecting all elements using the CSS universal selector (`*`) and writing `all: unset`. If you apply that styling, you will see an HTML page without any stylesheet at all.
