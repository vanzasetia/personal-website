---
title: Learn web development in a better way
description: There are many ways for you to go to Rome. That is true. But some ways are better than others. I will tell you some of the better ways to learn web development.
date: 2026-06-17
tags:
 - mind
 - html
 - css
 - javascript
copyright:
  year: 2026
---

## You need to pay your debt

**Technical debt** refers to the need to maintain your codebase so that it remains functional and up-to-date with the latest version. If you use React, Vue, Svelte, or any other JavaScript frameworks, you need to update your codebase with the latest syntax and features. Otherwise, you will be left behind because the new version is much better and faster—usually.

Technical debt can also be about plain HTML and CSS. For HTML, you will not find yourself updating your codebase with new syntax because it has been stable. But, in the past, when CSS did not even exist, you had to write the styling inside the HTML file, too, such as using the `<font>` markup, the `<b>` markup, and the `<i>` markup. Now we have CSS. So if your codebase comes from an ancient time, you need to update it to use CSS to pay your technical debt.

I was writing HTML using the ancient technique without CSS. Let me tell you that I did not update the codebase and will never do that.

## You do not want to make people suffer

Web accessibility means you make your website work for *most* people on the internet. It also means you make your website accessible to search engine bots and probably AI crawlers, but this is **optional**. The most important thing is that **your website is accessible to humans.**

The aim of learning web accessibility is to know what is right and wrong. Otherwise, you only have the code syntax as valid code. Valid code is for the computer, and an accessible web interface is for humans.

There are HTML ARIA attributes. They can make you confused at first. But you do not need to learn all of them to be a good web developer. Learn the following at first:

- `aria-expanded` is usually used for [accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/) in a frequently asked questions (FAQs) section to tell assistive technologies whether the focused accordion is expanded or collapsed.
- `aria-hidden` is used to hide decorative elements for assistive technologies such as [the `svg` elements](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html).

Moreover, [the first rule of using ARIA attributes](https://www.w3.org/TR/using-aria/#rule1) is that you should not use them. But that is not right. You should only use them rarely. Rely on the HTML semantic elements most of the time.

## When in Rome, do as the Romans do

When you are writing in a programming language, you should follow the naming convention.

If you make a custom HTML element, follow the existing HTML for the name. For example, you should write `<my-container>`. You should not write `<MyContainer>` or `<My-Container>`. HTML allows inconsistency throughout your codebase—such as having `<p>` (a lowercase "p") and `<P>` (an uppercase "P"). But you must be consistent. I have never known a web developer who gets hired by writing an inconsistent code style.

For CSS, your custom properties—or informally known as *variables*—follow the existing CSS custom properties naming convention. It uses snake-case. For example, write `--color-primary`. Do not write `--colorPrimary`. But you can argue that CSS itself is not consistent because it allows keywords such as `currentColor`. But you should not follow it. Be consistent. Also, those camelCase keywords are for the values, not the CSS properties.

For JavaScript, your variable names, function names, and all other names should follow the existing JavaScript naming conventions. For example, you should write `makeAmericaGreatAgain()`. You should not have `MAKEAMERICAGREATAGAIN()` because JavaScript functions are based on camelCase, such as `querySelector()` and `addEventListener()`. But using camelCase is limited to a certain extent. For JavaScript `class` names, use PascalCase. For JavaScript constant variables, use uppercase letters. Just follow JavaScript ways to write JavaScript.

Unless you know what you are doing, you are better off following the existing naming convention of the language that you are using.

## Guidelines are not laws

Your code does not need to follow any guidelines strictly. For sure, if you work on a team, your team guidelines should be followed. But the guidelines exist to accommodate most cases. They do not cover everything. If you have doubts, ask your seniors.

If you have not worked yet or do not have guidelines, you are better off having a guideline that you can follow. This way, your code is consistent throughout your entire project. You are learning right now, so you are fine to try different guidelines on each project. See what guideline works for you. It can be following a guideline. You may change it to adjust to your needs. You may mix different guidelines. You can even make your own guidelines. The choice is up to you.

Whatever you do with your guidelines, be consistent. But be flexible. Remember, guidelines are not laws.

## Optimizing your CSS selectors is useless

If you think replacing CSS element selectors with CSS class selectors is genius work, you are ignorant.

Sure, the `.container` selector is faster for the browser to work with than the `div` selector. But you need to ask yourself: how much faster is a class selector compared to an element selector? It does not matter.

Sometimes there are things that do not matter, even though they give you benefits. If the benefits are too small, although measurable, you should not do those actions.

## Pseudocode is not real code, but it is useful

Most beginner developers write real code as quickly as the fake teachers on YouTube or Udemy. Those fake teachers do not tell you the simple truth: writing code is already 50% of the work. The rest of the work is the "hidden" work. Although it is not that hidden, most fake teachers hide it from you as if they are like ChatGPT, which can generate code perfectly.

I am not saying that all those so-called expert web developers have bad intentions. They might not even know about pseudocode. But if they know, they are certainly telling you half of the truth. Simply, they lie to you.

Pseudocode is fake code. You can write it however you like. I watched a YouTube video, [*Introduction to Programming and Computer Science - Full Course*](https://www.youtube.com/watch?v=zOjov-2OZ0E). It clearly explains the basics of programming principles. It also explains pseudocode.

The purpose of pseudocode is to give you a guideline on what real code will look like. Of course, small projects do not get lots of benefits. But if you work on a big project, you are better off having a structure of your code in your mind and writing it in a way that you can understand. You can even make a mind map to have a big picture of how your code will look.

Writing pseudocode gives you lots of freedom because

- you do not need to care about syntax errors; and
- you feel relaxed because there will be no errors; and
- you reduce logical errors in your upcoming program; and
- you work on the documentation of your program.

Write pseudocode first if you plan to write a big project. You can practice writing pseudocode in a small project first.

## Thinking about code is part of web development

Do not just start with making a user interface. Remember, your Figma or Sketch file is not a real website. It is not even a website. It is just a design or just a static image. A design file is just a guideline, and your code is the real deal.

If you have the freedom to design a website, think about how you or other web developers will make the real website. Web developers struggle a lot when writing CSS because of the odd positions of decorative elements. Do not make web developers suffer unnecessarily. Be creative. But do not go crazy.

## You are developing

Beginners often make a project. Then, they forget about it. They rarely develop it. They think that making lots of projects makes them a web developer.

Well, the name of the profession is "web developer." It is not "web builder." A web developer's job is to ensure that the website can be *developed further.* If your mindset is to build a website and forget about it, you will certainly forget about it. Then, when you want to develop it again, you feel strange. Your code is hard to understand even by yourself—the original author. Even worse, if someone else takes the project, they will not be happy with your code.

Have the right mindset. You are *developing*. You *develop* a website. The website may not always be maintained by you. Make sure you are doing your best to make it easy for the next developer to study your codebase.

Prefer verbosity for clarity over brevity. For example, I prefer reading an `if...else` statement over using the [conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator).

```javascript
/* I like this */

if (hasMoney) {
  useMoneyWisely();
} else {
  work();
}

/* I do not like this */

hasMoney ? useMoneyWisely() : work();
```

The first chunk of the code is much easier to understand compared to the second chunk of the code. The first one can be read like a human language. The second is just a question mark and a colon that tells nothing.

I am not saying that the second chunk is wrong. I am just saying that the first one is easier to understand.

Remember, you want to develop a project and make it easy for another person to develop it.

## We must depend on others, but only selectively

We can not trust anybody, especially on the internet. You should not trust me, either. You should be skeptical of what I write. I am nobody. But I do not care about that. You trust me or not, that is not my problem.

I often see beginners trust everybody they see on YouTube. If someone writes their code in a certain way, beginners will immediately believe what they saw on YouTube is good and correct. But that is rarely the case.

In my opinion, developers on YouTube are not really great web developers. Some are really bad. Some are somewhat good. The really great web developers often give talks. But not all talks are great anyway.

Great web developers for me are the following:

- [Heydon Pickering](https://heydonworks.com/) is good for learning simplicity, web accessibility, and web performance. Remember, he is a web developer, not a priest. Do not listen to him when he talks about religion. He is ignorant about it.
- [Andy Bell](https://bell.bz/) is good for learning web accessibility, CSS, and web performance. He is also a good web designer. I like him because he designs and writes code too. More importantly, he does both well.
- [Scott O'Hara](https://www.scottohara.me/) is a web accessibility expert. I like most of his articles. They are simple and valuable. Who says that an expert needs to use complex language?

## You have an amazing brain

Be smart. Do not let people on the internet fool you into stealing your money through beginner courses. You can do whatever you want with your money. But I do not suggest you buy beginner-level courses because you can learn those for free from a simple search with any search engine.

Follow the right web developers. Be critical.
