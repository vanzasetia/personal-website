---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: The ultimate guide to HTML image elements
description: Many people do not know that writing an image element is more than just using an `alt` attribute and a `src` attribute. There are other attributes to enhance the images progressively.
date: 2025-04-18
tags:
  - guide
  - a11y
  - html
copyright:
  year: 2025
---

{{ description }}

Here is the complete code snippet:

```html
<img alt="John Doe" loading="lazy" decoding="async" src="/john.jpg" width="768" height="1024" fetchpriority="low">
```

Here are my explanations.

## Writing alternative text

To keep this section simple, there are two categories of an image: decorative image and informative image. An image can be either decorative or informative only. It can not be both at the same time.

:::note The term "image"
"Image" here refers to anything that can be displayed in the `src` attribute, which includes SVG.
:::

Decorative images do not have information. It is purely to make a webpage beautiful. A stock image—an image that is heavy and yet has nothing to do with the real content—is one of the examples of decorative images.

Decorative images also can be removed from the webpage, and the webpage does not lose any information. Besides stock images, an icon with text next to it is also a decorative image (or a decorative icon).

Every informative image needs an alternative text. If you write a post with an image, most likely you will need to write an alternative text. For example, if you post something with the text "Hey, look at this sleepy face!" and a picture of Joe Biden, you need to write "Joe Biden" as the alternative text.

Informative image must be available to make your message to be understandable. Going back to the previous example, if the picture of Joe Biden does not appear, people will not know whose person's face you are referring to.

Do not think alternative text as a way to tell users that the image fails to load. Let the browser does the job by showing a tiny image icon or showing nothing.

Do not add alternative text to decorative images. But, you must always include alternative text for informative images. Remember these.

## Having the `alt` attribute

All images, whether decorative or informative, must have an `alt` attribute.

The only difference is that decorative images will have an empty `alt` (`alt=""`). While informative images will have alternative text.

## Using the `src` attribute

The `src` attribute must exist and must be filled with the location of the image. This means the `src` attribute and the `alt` attribute will always be available every time you use an HTML image element.

Do not link images from others' websites. This action is called hotlinking or bandwidth theft. Also, you do not have control over them. If they decide to delete the image or change the image into something bad, you may suffer anxiety.

Whenever possible, self-host your images. Not only do you have control over your images, but this approach is also the fastest way for your image to get rendered. If your website domain is `example.com`, your image is located at the same domain, such as `example.com/images/image.png`. That is the meaning of "self-host."

As a side note, you should not include the domain name in the `src` attribute. You can just write `/images/image.png`. This way, if you change your domain name, you do not need to worry about changing every file path in the `src` attribute.

You can use third-party services—such as [Cloudinary](https://cloudinary.com/)—if you do not want your website's bandwidth quota to run out quickly.

## Using the `width` and `height` attribute

These two attributes tell the size of the loading image. This prevents your users from experiencing [a jumping screen](https://web.dev/static/articles/cls/video/web-dev-assets/layout-instability-api/layout-instability2.webm)—a *schadenfreude*—when the image is loaded. That phenomenon is called [layout shifts](https://web.dev/articles/optimize-cls). If you use Lighthouse, you can see a number for [Cumulative Layout Shift (CLS)](https://web.dev/articles/cls). The bigger the number means the worse your website is.

To use these two attributes, you need to know the size of your image in pixel values. Then, you write the values without any unit (unitless). If the image's width is `1600px` and its height is `1200px`, you can write `width="1600"` and `height="1200"`. But if your image renders on your webpage only in the size of `800px` times `600px` (rendered size), you can use those two values for the width and height respectively.

## Using the `loading` attribute

The `loading` attribute tells the browser whether the image should be loaded immediately or later when the user starts scrolling to the image.

If you want the image to be loaded immediately, do not add `loading="eager"` because that is already the default browser's behavior. If you want the image to load when the user's viewport is near the image, add `loading="lazy"`.

If you have an image at the top of your page, you should not make it lazy-loaded. You should only make images lazy-loaded if they are in the middle or at the bottom of your page. This is not a rule, by the way. This is only a guideline.

## Using the `decoding` attribute

This attribute is often used together with `loading="lazy"`. The attribute accepts two values: `async` and `sync`. I believe `decoding="sync"` is the default behavior of most browsers. We should only use `decoding="async"` to tell the browser to show the image in the loading process. This means the users will see a waterfall effect—the image loads from top to bottom.

I think `decoding="async"` works well on comic websites or galleries because the users will at least start seeing something as the image gets loaded progressively. This is a better experience than not showing anything until the image is fully loaded.

## Adding the `fetchpriority` attribute

I have never used this attribute. Based on my understanding, adding `fetchpriority="high"` to images on the top of your page can improve the loading speed of those images. But I am not sure how much improvement this attribute gives.

I have read [an article from web.dev](https://web.dev/articles/fetch-priority). It explains that `fetchpriority="high"` can be used for images to optimize the [Largest Contentful Paint (LCP)](https://web.dev/articles/optimize-lcp). LCP is the time taken for the largest element to appear when the users first visit your website. Here, "largest" does not refer to file sizes such as 1 Megabyte (MB) or 4 MB. In this case, that can be the biggest image in size—such as a 3200-pixel-times-2400-pixel image. With `fetchpriority="high"` and `<link rel="preload">`, the image can appear faster compared to the one without the attribute. That is because images are not categorized as high priority by default.

## Summary

- Decorative images do not need alternative text.
- Informative images must have alternative text.
- An `alt` attribute and a `src` attribute must always exist in every HTML image element.
- Always add a `width` and a `height` attribute to all `<img>`.
- Use `loading="lazy"` with `decoding="async"` for images at the bottom of your webpage.
- Use `fetchpriority="high"` with `<link rel="preload">` to make the largest image at the top of your webpage to be loaded as fast as possible and to reduce LCP.
