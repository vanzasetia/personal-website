---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: JavaScript tends to make your website inaccessible
---

Be careful not to add too much JavaScript to your users' browsers. If your JavaScript program is too large and your page needs it to function, your page is slow on a slow internet connection. It can also cause lag on low-end devices.

Your JavaScript is not accessible for users of the IceCat browser or any users who use [LibreJS](https://www.gnu.org/software/librejs/index.html) if your JavaScript is a non-free program. If your JavaScript is released under a free license, [tell LibreJS that your JavaScript is free](https://www.gnu.org/software/librejs/free-your-javascript.html).

Users of LibreJS or IceCat browsers are never my main concerns. But if your target audience is free software activists, you need to mark your JavaScript as a free program.

Do not inject JavaScript code to make your website accessible by using a web accessibility overlay. [Overlay Fact Sheet](https://overlayfactsheet.com/en/) and [Overlay False Claims](https://overlayfalseclaims.com/) tell you the reasons. Also, they are injecting non-free JavaScript programs into your website, which will be blocked by the LibreJS extension.

JavaScript is good for accessibility if you use it correctly and responsibly. Otherwise, you are now making problems for your future self and other people.
