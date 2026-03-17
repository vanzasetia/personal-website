---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: The more work your users require to do, the more work you must do
---

I understand that when people simplify things, they have done a lot of work to achieve such simplicity. For example, a web browser is easy to use. Users do not need to know how it is made. They just need to know how to use it.

But I argue that *sometimes*, the more work the users require to do, the more work the developers must do. For example, a password input can be as simple as requiring the users to input a number of characters. But a web developer can go [crazy](https://blog.codinghorror.com/password-rules-are-bullshit/) by adding more requirements, such as the password must have a special character, must have one number, must have a lowercase letter, must have an uppercase letter, and must not be longer than 20 characters. [Those requirements are unnecessary](https://passwordshamer.com/) and are also making the web developers work hard to set up those requirements.

Whoever is in charge of preventing users from making a bad password should just check the length of the password. If I were in charge, I would set it to at least 12 characters and nothing else.

Another example is a hamburger menu with fewer than five links. I do not understand when web developers decide to make a hamburger menu to hide three links: `/about`, `/contact`, and `/blog`. Can they just show the three links on the header horizontally? I mean, if they plan to have more pages, that is fine. But even if they have more pages, is the hamburger menu the only choice?

I do not reject a hamburger menu. But I hate it when it is used without any good reason. Having a hamburger menu for just three links is not helping anybody. The web developer needs to write some code to make it work and accessible. It requires JavaScript to function. This means that if the JavaScript fails to load, the users can not access those links.

By the way, if you think JavaScript is guaranteed to arrive at your user's browser, [think again](https://www.kryogenix.org/code/browser/everyonehasjs.html).

On the other side, the users need at least two actions: open the hamburger menu and interact with the link. Regardless of the time consumed, [one action](/blog/one-action/) is much easier than two actions. How about the users of assistive technologies? How about the extensions that they have installed?

I am not telling you to stop making great websites. I want you to be aware of the fact: the more work your users require to do, the more work you must also do.
