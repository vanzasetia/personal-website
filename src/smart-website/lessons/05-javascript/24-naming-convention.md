---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-NC-ND-4.0
title: Get your naming convention straight
---

When you write a name for anything in JavaScript, use `camelCase` because JavaScript uses it too. This way, your code will have a consistent style.

Moreover, you want to start a function's name with a verb.

```js
const sendUserEmail = (user, emailBody) => { /* some code */ }
```

If you find it hard to name a function, you may make a function to do more than one job. Keep your function small enough so that you can separate each task and name each function easily.

For example, we need to develop a JavaScript program to validate all the input fields. We can make a function called `validateUserInputs` and inside the function, we can have more functions to do a series of steps to validate each type of input. I come up with the following code structure:

```js
const validateUserInputs = (event) => {
  clearAlertMessages();
  const areAllUserInputsValid = checkAllUserInputs();
  if (!areAllUserInputsValid) {
    event.preventDefault();
 }
};

form.addEventListener("submit", validateUserInputs);

/* Source: https://github.com/vanzasetia/intro-component-with-sign-up-form/blob/main/js/app.js */
/* Copyright (c) 2023 Vanza Setia - MIT License */
```

Since we are here learning about naming convention, notice that `validateUserInputs()`, `clearAlertMessages()`, and `checkAllUserInputs()`, all start with a verb or an action word. Consistency is the key to writing good code.

Then, for each variable with a Boolean value, we use a simple question with a yes or no answer. We ask, "Are all user inputs valid?" If the answer is "yes," this equals `true`. This makes our code easy to understand even after we forget about it.

Additionally, for every variable with a consistent value, use uppercase letters only. For example, we want to make a countdown timer. JavaScript counts from milliseconds. But we do not need to count the milliseconds. We can simply do the following:

```js
const ONE_SECOND = 1000;
```

Every time we use the variable, we can write the following:

```js
const ONE_MINUTE = ONE_SECOND * 60;
```

This way, we can easily understand that we are getting one second by using `ONE_SECOND`. If you want to count up 10 years, you can keep going without getting confused with too many abstract numbers.
