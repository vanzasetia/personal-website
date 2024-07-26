---
title: The basic guide to run Squoosh locally
description: This guide helps you set up Squoosh on Windows 10—a proprietary operating system with lots of malicious functionalities—and remove Google Analytics.
date: 2024-07-26
tags: guide
copyrightYear: 2024
---

## Motive

Squoosh is released to the public under a free software license which is Apache License, Version 2.0. This means anybody can run, copy, distribute, study, change, and improve it. This also means I am allowed to change it and run it locally.

For privacy, I believe using Squoosh on a local machine is better than using it through squoosh.app. Although uBlock Origin can block Google Analytics, there is probably server logging or server-side tracking.

## Prerequisite

I use Node version 18.18.0 and NPM version 10.5.2. If you use a different version, you may find a problem.

You need to understand about classes, functions, and variables in JavaScript.

## Running Squoosh locally

First, download Squoosh source code from GitHub: [GoogleChromeLabs/squoosh](https://github.com/GoogleChromeLabs/squoosh).

Then, run `npm install`. (I ignore all the `npm audit` commands.)

If you try running `npm run build`, you will get an error about `colors.css`. To fix this issue, follow the instructions on [DEVTomatoCake's comment on "Error: Could not load css," issue number 1204](https://github.com/GoogleChromeLabs/squoosh/issues/1204#issuecomment-1892756576), on GitHub.

Once you fix the issue, execute `npm run build` and `npm run serve`. Now, you should be able to run Squoosh locally.

## Removing Google Analytics

Remove Google Analytics by following these steps:

1. Turn off the local server.
1. Open `src/client/initial-app/index.tsx`.
1. Remove all the analytics code. (The analytics code is below the `main()`.)
1. Open `src/shared/prerendered-app/intro/index.tsx`.
1. Search for `// Send the analytics data` comment.
1. Remove the `gaEventInfo` variable and the `ga` function.
1. Remove the rest of the `ga` functions and the associated variables.
1. Open `src/client/lazy-app/Compress/Results/index.tsx`
1. Remove all the `ga` functions and the associated variables.
1. Remove `private onDownload` property.
1. Search for `onClick={this.onDownload}`.
1. Remove the `onClick` attribute.

## Removing UTM parameters

I also recommend removing all the UTM parameters.

1. Open `src/static-build/index.tsx`.
1. Remove all the UTM parameters. (Do not remove the forward slash. Just remove everything after it.)

## Finishing

Run the local server. If you do not face any problems, great.

Now, you can run Squoosh in the proprietary operating system without being tracked by Google.
