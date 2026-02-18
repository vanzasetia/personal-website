---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: The HTML paragraph element is not always for a paragraph
description: What is the right semantic HTML for a chat bubble? Should I wrap the text "Hi" with an HTML paragraph element? If yes, is "Hi" a paragraph?
date: 2026-02-18
tags:
 - html
 - a11y
copyright:
  year: 2026
---

The `<p>` element is for paragraphs only, at least for some developers. You may get confused when you need to wrap a sentence or even a phrase with the `<p>` element. Is it the right element for such content? I say, "Yes, it is."

In a formal education, we learn that a paragraph consists of one main idea. A composition of a paragraph can be different, depending on the type of text. In my case, I learned that a paragraph should be at least five sentences, generally: one topic sentence, three sentences that expand the topic, and one conclusion sentence.

In the World Wide Web, we are free. A five-sentence-at-least rule for a paragraph does not exist. We can write a paragraph with just one sentence as a way to highlight our message, as an example.

How about an error message? Although an error message is not a paragraph, the HTML paragraph element can be used to wrap an error message. We can use the element to wrap an error or even a warning message.

You can also use the `<p>` element to wrap a copyright notice. We know a copyright notice is not a paragraph. But you and I can use the paragraph element, and we are not doing anything illegal by doing that.

For sure, we can not allow any text content exist without any HTML element.

```html
<h1>Hello world?</h1>

Hello everyone! I am here to make an accessible website.
```

What is the problem with the above code snippet? The problem is that the text does not have any structure or semantic meaning. The type of information is not programmatically defined. You also fail to meet the [Success Criterion (SC) 1.3.1 Info and Relationships (Level A)](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) in [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).

For a brief moment, I thought the above example was not wrong. The Chromium browser still assigns the text as `StaticText` in [the accessibility tree](https://developer.chrome.com/blog/full-accessibility-tree/). It is not hidden. This means the text is still recognized as the web content.

But when we want to have a specific style for the text without any HTML element, we can not select it. In a dev tool, we can not style it because it does not have a selector.

The text without any HTML elements will also mean that it can not be changed through [`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) and [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).

In short, although text without an HTML element is potentially accessible for users, it fails to meet the SC 1.3.1 Info and Relationships (Level A) and is not accessible for a developer to adjust the styling.

Folks, in the end, we can use the `<p>` element to make the content accessible for non-paragraph content.
