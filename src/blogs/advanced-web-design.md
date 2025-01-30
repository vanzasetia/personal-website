---
title: Advanced web design in 2003
description: This book gives me a glimpse of how a person built an advanced web design in the year around 2003. In a nutshell, it was complicated.
date: 2025-01-05
tags:
  - history
  - html
  - css
  - javascript
copyright:
  year: 2025
---

I read a book called Advanced Web Design by Fred T. Hofstetter. It was published in 2003.

This book gives me a glimpse of how **a person** built an advanced web design around 2003. In a nutshell, it was complicated.

:::note Web design
Web design is not only about designing the user interface (UI) of a website. It is also about designing the navigation links, user experience, content, HTML, CSS, and JavaScript. Simply, it is designing all aspects of the website.
:::

The book uses Microsoft FrontPage Extensions to build a web that can work with a database. I never use that. But I know that it is only available on the Windows operating system and is proprietary software. Also, before you can use it—please do not use it—you need to install Internet Information Services (IIS).

## How about HTML?

This book highlights Extensible HyperText Markup Language (XHTML). The author argues that XHTML is better than HTML because HTML has "such loose encoding, however, does not lead itself to the kind of structure needed to transition the web into an application model, in which servers exchange data in a more disciplined manner." The "loose encoding" that the author mentions is about the optional closing tag and the order of the closing tag.

In case you do not know, HTML allows you to omit the closing tag of any elements. For example, you can write the following:

```html
<em>Hello world!
```

The browser will give you an italic text. Then, if you inspect it with a developer tool, you will see that the closing tag is there.

But, XHTML requires you to write the closing tag of all elements, including the self-closing tag elements.

Not only that, the closing tag must be in order.

In HTML, you can write the following and the browser will still render italic and bold text.

```html
<b><i>Hello world!</b></i>
```

The author says the law of XHTML really well: "Every beginning tag must have an ending and the order in which the tags close must follow the structure of the document's definition."

I do not know what will happen if I write the above code snippets in an XHTML file. I do not want to try it.

## How about CSS?

Here is a code snippet from the book:

```css
body
{
  font-family: Garamond, Times New Roman, Times;
}

table
{
 table-border-color-light: rgb(152,255,204);
 table-border-color-dark: rgb(0,0,51);
}
```

I know `font-family` property, but what is `table-border-color-light`?

Also, I am not a fan of writing CSS with an opening curly bracket below the selector.

## How about JavaScript?

There are three ways to write a script: JScript, VBScript, and JavaScript.

To write a script with JavaScript in the HTML (internal script), you write a script tag (`<script>`). Then, you can write your JavaScript inside it. It is the same as today.

To write with JScript, you need to first write `<%@language=jscript%>` inside the HTML html element (`<html>`).

To write with VBScript, you need to first write `<%@language=vbscript%>` in the html element.

Here is the code snippet to write JScript in an HTML file, located above the ending body tag (`</body>`).

```jscript
<%
Response.Write("Hello World!");
%>
```

In VBScript

```vbscript
<%
Response.Write("Hello World!")
%>
```

JScript is like JavaScript. But you use `Response` instead of `document`.

Then, VBScript is less like JavaScript because VBScript

- uses `Response` instead of `document`; and
- does not use curly brackets (`{}`) to write functions; and
- does not use semicolons (`;`).

I am sure there are more differences among those three. But I do not need to know them and do not want to know them because **today is 2025**.

## How about I stop?

I am grateful that now learning HTML, CSS, and JavaScript is not as complicated as in 2003. There are lots of resources and free software. Internet connection is way easier to get.

I can even [make a website on an Android phone](/blog/guide-develop-websites-android/), which is another level of the mobile-first approach.

## What are the lessons?

- Do not argue with a person who insists on using XHTML instead of HTML.
- Forget about JScript and VBScript.
- Do not waste your time on developing a website with old technologies.
- Never write `document.write("Hello world!")` on a real website unless you are making a six-hour video of JavaScript course with lots of dummy projects for ignorant people.
- Do not tell those highly motivated beginners to learn about dead technologies if you want them to keep learning web development.
- Do not buy books about web development from the ancient time.
