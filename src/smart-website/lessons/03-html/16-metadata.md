---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Crafting metadata
---

Now is the time to learn about the invisible data that exists on the web. Well, that data may seem invisible to the users. But you may need to add those to make your website receive better by bots. In return, your website may get a better search ranking, and then people can find your website easily.

Notice that I use the word "may." I do that because there is no certainty that you will get good results. I am here to tell you so that at least you know that they exist, and you may try using them if you want.

## `/robots.txt`

> Web site owners use the `/robots.txt` file to give instructions about their site to web robots; this is called The Robots Exclusion Protocol.
>
> —[The Web Robots Pages](https://www.robotstxt.org/robotstxt.html)

Simply, `/robots.txt` may allow you to control whether bots can access your website.

If you prefer to disallow bots accessing your content, add `/robots.txt` and write:

```txt
User-agent: *
Disallow: /
```

Notice that I say "prefer." This means `robots.txt` may not be honored by bots. Based on my experience, the Internet Archive robots do not honor `robots.txt`.

Since `robots.txt` is generally ignored, why do you want to add it? In my opinion, it is just a useless text file.

You may not need `/robots.txt`. But you may add it. The choice is yours.

By the way, the name of the file must be `robots.txt` and it must be located at the root of your domain. This means if your domain is `example.com`, the file can be accessed through `example.com/robots.txt`.

You may check the [Seirdy's `/robots.txt`](https://seirdy.one/robots.txt) as an example.

## `/sitemap.xml`

> Sitemaps are an easy way for webmasters to inform search engines about pages on their sites that are available for crawling.
>
> —[sitemaps.org - Home](https://www.sitemaps.org/)

For me, `/sitemap.xml` does not help my website at all. The purpose is to tell bots how often the page is changed. But my experience has taught me that it is useless and does not necessarily reflect the real condition. For instance, take a look at the following Sitemap:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://example.com/</loc>
      <lastmod>2026-03-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1</priority>
   </url>
</urlset>
```

Now, if someone adds that Sitemap to the website, nothing happens to the website, and nothing will happen. Then, if the webmaster wants to satisfy search engine bots that the website has fresh content every day, the webmaster can lie by changing the `<changefreq>` to `daily`.

If the Sitemap has a positive impact, people will totally abuse it.

Additionally, if [Udemy deletes all the Sitemaps](https://www.udemy.com/sitemap.xml), do you think the Udemy website will have bad SEO? Nothing will happen. The Udemy website will still appear at the top and the first page of the search engine result page (SERP) because it has many visitors and people recommend and link to Udemy.

I have no interest in `/sitemap.xml`. You may add it. You may not add it.

## Really Simple Syndication (RSS)

> RSS is a Web content syndication format.
>
> Its name is an acronym for Really Simple Syndication.
>
> —[RSS 2.0 Specification (Current)](https://www.rssboard.org/rss-specification)

The RSS file allows your users to access your content through an RSS feed reader. On Android, you can install [Feeder through F-Droid](https://f-droid.org/en/packages/com.nononsenseapps.feeder/). I use it.

As a user of RSS files, I can subscribe to and access content from different developers. Also, once Feeder fetches the latest RSS files, I can access their content without any internet connection. Very useful!

As a web developer, I can make my content more accessible because my users can read my articles without an internet connection.

I really recommend having an RSS feed if you are a writer or a blogger.

## Social media meta tags

The following HTML code snippet gives you what you need to have a great social media link preview to your website:

```html
<meta property="og:site_name" content="">
<meta property="og:title" content="">
<meta property="og:type" content="website">
<meta property="og:url" content="">
<meta name="twitter:card" content="summary_large_image">
<meta property="og:image" content="">
<meta name="twitter:image" content="">
<meta property="og:image:alt" content="">
<meta name="twitter:image:alt" content="">
<meta name="description" content="">
<meta name="twitter:description" content="">
<meta property="og:description" content="">
```

I use [Meta Tags](https://metatags.io/) to preview each link preview from each major social media platform.
