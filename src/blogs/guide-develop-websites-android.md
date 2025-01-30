---
title: The beginner guide to develop websites on Android
description: Make your web from scratch without a computer. I tell you everything you need to know to develop websites on your Android device.
date: 2024-04-27
tags:
  - guide
  - best
copyright:
  year: 2024, 2025
---

## Introduction

I was making websites on my Android device. I had been doing it for about six months. Here are three projects that I created on my Android device:

- [vanzasetia/clipboard-landing-page](https://github.com/vanzasetia/clipboard-landing-page)
- [vanzasetia/huddle-landing-page-with-alternating-feature-blocks](https://github.com/vanzasetia/huddle-landing-page-with-alternating-feature-blocks)
- [vanzasetia/fylo-dark-theme-landing-page](https://github.com/vanzasetia/fylo-dark-theme-landing-page)

I have proven that making a responsive website on Android is possible. You can now do that as well by following this blog post.

## Note

This blog post focuses on frontend web development. But you can still get some helpful information to get started with other programming journeys.

This blog post is going to cover the basics of using certain tools. To learn more, I have provided links to help you learn about the specific tool.

Keep in mind that coding on Android is an alternative way to code.

## Choose your code editor

I give you two options: Acode and Spck Code Editor.

### My opinions about Acode

Acode was my main code editor. I was always using it to make websites.

Now, I try using Acode again. I use Acode version 1.8.7 by the time I am updating this blog post. I love that the developer still actively develops it.

Here are my experiences when using Acode:

- Acode has plugins. You can install Prettier on Acode. I try installing Prettier on my Acode. But, Prettier does not work. Then, I install *Vscode Dark (Editor Theme)*. It works. I like plugins because they open unlimited possibilities. Just be aware that some plugins may not be working.
- Acode is customizable. You can customize your Acode including text's size, editor's font family, and many more. You can change the app theme and the editor theme. The app theme is the application's color. The editor theme is the code's color. I use *Ocean* for the app theme and *"Tomorrow Night Bright"* for the editor theme.
- Acode provides handy keys. You have [[Ctrl]], [[Shift]], an undo button, and a redo button by default. You can do many things such as having many cursors by activating [[Ctrl]] and then selecting another line. You can paste a text from your clipboard by doing [[Ctrl]] + [[V]].
- Acode does not restrict you. You can create your project anywhere in your Android storage.
- Acode is a free/libre software (a software that respects your freedom). You can find the source code on Github, [deadlyjack/Acode](https://github.com/deadlyjack/Acode).

I wish Acode has a smart auto-complete for JavaScript. Until now, Acode still does not have it.

[Install Acode from F-Droid](https://f-droid.org/en/packages/com.foxdebug.acode/). That way, you get all the features.

Use Acode as your main code editor to get started.

### My opinions about Spck Code Editor

I used Spck Code Editor (or Spck for short) because I wanted to find a code editor with a smart completion for JavaScript like Visual Studio Code (VS Code).

I try Spck version 8.0.8.0 which is the latest version on Google Play Store while I am updating this blog post. I do not have anything to say. It has received updates. But they are not as big as Acode.

I want to mention that you can not create a project outside the `Android/data/io.spck` folder. To delete Spck while keeping your projects, you must save them on a remote git repository such as on [GitHub](https://github.com/) or [Codeberg](https://codeberg.org/).

You can access the `io.spck` folder if you are on Android 10 or lower (like me). If you can access it, you can move your projects somewhere safe before uninstalling Spck.

::: note Storage updates in Android 11
Users can not access the following directories:

- the `Android/data/` directory and all subdirectories; and
- the `Android/obb/` directory and all subdirectories.

[Storage updates in Android 11  |  Android Developers](https://developer.android.com/about/versions/11/privacy/storage#file-access)
:::

You can try Spck without installing it by visiting [spck.io/workspace](https://spck.io/workspace). Then, create a new project and choose a template. If you want an empty project, choose the "No Framework" template.

Do not use Spck as your main code editor.

## Choose Termux as your terminal

You need a terminal to do more interesting things. It allows you to use Git and *npm* (node package manager). Both are great tools to help you develop your website.

The best terminal is Termux.

### Install Termux

[Get Termux APK from F-Droid](https://f-droid.org/en/packages/com.termux/). Do not install Termux from the Google Play Store.

::: note You should install Termux from F-Droid
Termux on Google Play Store has not received updates since 2 November 2020.

You can read the official notice from the [installation page from Termux Wiki](https://wiki.termux.com/wiki/Installation).
:::

### Set up Termux

The first time you open Termux, you will see a notice that it is installing something. Then, you will see a welcome text: "Welcome to Termux!"

To set up Termux, first allow it to access your storage. You only need to do this once. Execute the following command by typing it and enter it:

```bash
termux-setup-storage
```

Second, update the existing packages that already exist on Termux.

```bash
pkg upgrade
```

You will get a question of whether you want to continue. Continue by typing `Y`.

Then, you will get some questions like the following:

```bash
*** motd (Y/I/N/O/D/Z) [default=N] ?
```

Continue with the default answer for all questions.

Now, your Termux is ready to help you.

### Install a package

You can install a package with the following command:

```bash
pkg install PACKAGE
```

To install Git, you can do:

```bash
pkg install git
```

### Uninstall a package

You can find out how to do that by learning the `pkg` command.

You can learn more about it by executing:

```bash
pkg
```

Now, do you know how to uninstall Git?

### Termux basic guides

You are now on Termux, but do you know where you are at on Termux? Unlike in a file manager where you can see a list of folders, in Termux you need to use a command to do that.

You may only know that you are seeing the following:

```bash
~ $
```

Now, to know where you are, execute `pwd` command.

```bash
~ $ pwd
/data/data/com.termux/files/home
~ $
```

That is my output. Yours might be different and that is okay.

Next, let us move to a shared folder. A shared folder is your internal storage. The internal storage may contain folders such as `DCIM` and `Downloads`. Now, to move to a different folder, you need `cd` command.

```bash
cd storage/shared
```

If you try executing `pwd` again, you will see a `shared` as the final path. Give it a try.

Next, you can use `ls` command to see a list of all visible folders and all visible files.

After that, you can use `touch` command to create a file (or more) and `mkdir` command to create a folder (or more).

Create a folder named "test":

```bash
mkdir test
```

Now, get inside the `test` folder.

Then, create an `index.html` file:

```bash
touch index.html
```

You can create a folder named "test," get inside it, and create an `index.html` at the same by using an *and* operator (`&&`).

```bash
mkdir test && cd test && touch index.html
```

Next, you may want to delete that folder.

You can use `rm` command. But before deleting that folder, make sure you are not inside it. You can go outside the `test` folder by executing:

```bash
cd ..
```

Then, you can delete `test` folder with the following command:

```bash
rm -r test
```

The `-r` flag is asking Termux to remove all files and all subdirectories in the `test` folder.

You can find more information on those commands by typing the command with the `--help` flag:

```bash
touch --help
```

The last command that I am going to tell you is `clear`. You can use that command to clear all Termux output.

[Learn more commands on the Linux Journey website](https://linuxjourney.com/lesson/the-shell).

### Install the packages that you need to do web development

You need to have Git (to track your project history) and Node.js (to use live-server, Prettier, and other tools).

You can install both of them at the same time by executing:

```bash
pkg install git node
```

Keep in mind Git on Termux is the same as Git on any other desktop device. Knowing that you can learn using Git by following any tutorials on the internet. You do not need to specifically search for *"Git tutorials for Termux users."*

When a tutor talks about Microsoft Windows users, Mac users, and GNU/Linux users, remember the following things:

- You are similar to GNU/Linux users.
- You are less similar to Mac users.
- You are different from Microsoft Windows users.

Knowing that can help you decide if a tutor says different settings or ways for each type of user's device.

These video tutorials can help you to learn more about Git.

- [Git Tutorial for Beginners: Learn Git in 1 Hour from Programming with Mosh](https://redirect.invidious.io/watch?v=8JJ101D3knE)
- [How to Undo Mistakes With Git Using the Command Line from freeCodeCamp.org](https://redirect.invidious.io/watch?v=lX9hsdsAeTk)
- [Git Branches Tutorial from freeCodeCamp.org](https://redirect.invidious.io/watch?v=e2IbNHi4uCI)
- [Advanced Git Tutorial - Interactive Rebase, Cherry-Picking, Reflog, Submodules and more](https://redirect.invidious.io/watch?v=qsTthZi23VE)
- [Git for Professionals Tutorial - Tools & Concepts for Mastering Version Control with Git](https://redirect.invidious.io/watch?v=Uszj_k0DGsg)

I find two issues that those tutorials are not going to cover. I am going to give you the solutions to those issues.

First, after you execute `git init` command without setting up a default branch, you will get a long output. It is going to tell you that your default branch name is `master`. You can change your default branch name to `main` if you want.

```bash
git config --global init.defaultBranch main
```

Second, after you execute any Git command *except* `git init`, you will get a message:

```bash
fatal: detected dubious ownership in repository at 'FILE-PATH'
```

You can prevent the issue from appearing again by telling Git that your folder is safe. In my case, I can execute:

```bash
git config --global --add safe.directory /storage/emulated/0/html-website
```

After you do that, try again to execute the Git command.

About Node.js, you do not need to learn it to use npm packages. You can get started by knowing how to install and uninstall packages.

If you want to install a package, let us say live-server, you can execute the following command:

```bash
npm install --global live-server
```

You have to install the package globally. That means you must add `--global` flag. Otherwise, you can not install it.

You can uninstall live-server with the following command:

```bash
npm uninstall --global live-server
```

A video tutorial to learn a bit about npm: [What is NPM, and why do we need it? | Tutorial for beginners from Coder Coder](https://redirect.invidious.io/watch?v=P3aKRdUyr0s)

### Know your workflow

Your workflow to make a website with Acode and Termux is the following:

1. Create a project on Acode: Make a folder. Create files. Write some code.
1. View what you have done on Acode with live-server: Open Termux. Move to the folder of your *working directory* (a folder with an `index.html` file). Execute `live-server .` (with a dot at the end).
1. Make your working directory a git repository: Open Termux. Execute `git init`.
1. Keep writing code until you are done.
1. Upload your project to a remote repository (online Git repository): Open Termux. Stage all the changes that you have made. Create your first commit. Add a Git remote URL (Uniform Resource Locator). Push all the changes and files to your remote repository.

Here are all the Git commands to do the above tasks:

- Stage all changes: `git add .`
- Create a commit: `git commit -m "Initial commit"`
- Add a Git remote URL (connect your local repository with your remote repository): `git remote add origin URL`
- Push all the changes and files to the remote repository: `git push -u origin BRANCH`

You can execute `git branch` to know the branch name of your local repository.

You can get the remote repository URL on the empty repository page.

### Install a code editor in your terminal

Vim can be your code editor in your terminal to do more with Git and solve Git conflicts.

You may find it helpful to not worry about Vim. Vim may overwhelm you because you need to learn how to use it before you can start writing code.

Install Vim:

```bash
pkg install vim
```

Vim only works with a keyboard. You can not touch or swipe to do anything with the keyboard. You must use your keyboard.

Visit [Vim Cheat Sheet](https://vim.rtorr.com/) to see all the lists of keys.

I am going to tell you what you need to know to use Vim to add a description for your commit message. After you execute `git commit`, Git will open a Vim window.

You can add your commit message by entering an insert mode. To do that, tap the [[I]] key (lowercase *i*). Then, you can start typing your Git message and its description. After that, you need to do the following:

1. Enter command line mode: Tap [[ESC]] key that is provided by Termux.
1. Safe your commit message: Type `:w` and execute it by tapping an enter key.
1. Close Vim: Type `:q` and execute it.

You can save your commit message and close Vim at the same time by executing `:wq`.

### Tips to be safe when using Termux

Follow these tips:

- Always create a file or a folder on the shared directory. That way you can delete that file and folder with your file manager. The file and folder above the shared folder can not be accessed with your file manager.
- Update installed packages regularly.
- Always read the Termux output.
- Execute commands that you understand. If you do not understand a command, learn about it first. Make sure the command is safe to be executed.
- [Learn the `alias` command](https://linuxjourney.com/lesson/alias-command).
- Read the [Termux Wiki FAQ](https://wiki.termux.com/wiki/FAQ).
- Read the [`README` on Termux's official GitHub repo](https://github.com/termux/termux-app).

## Choose one or more browsers

Use both Brave and Firefox.

### The way to use Brave

Brave is an alternative to Google Chrome. Brave helps you disable JavaScript by using a simple toggle when you are developing a website.

You can find the toggle by tapping the Brave icon. Then, you open the **Advanced Controls** panel. After that, you can toggle the **Block Scripts** menu to disable JavaScript.

To set up Brave for web development, you need to set 50% for the **Text Scaling** level. The default text scaling setting is 100% which makes the text bigger than how it should be. That is why you need to reduce it to 50%.

Follow these steps to reduce the **Text Scaling**:

1. Tap three vertical dots (The location is horizontally the same as the address bar).
1. Tap **Settings** option.
1. Scroll and tap the **Accessibility** menu.
1. Reduce the **Text Scaling** down to 50%.

Your Brave browser is now ready for web development.

### The way to use Firefox

Firefox can help you view your website in different screen sizes. This technique is a hack. That means what you see may not be the same as what other users see. Also, it can be confusing.

Now, whether you are going to use the technique, you need to set up Firefox. By default, Firefox makes the text's size bigger than it should—the same as Brave.

Follow these steps:

1. Tap three vertical dots (The location is horizontally the same as the address bar).
1. Tap **Settings** option.
1. Scroll and tap the **Accessibility** menu.
1. Disable **Automatic Font Sizing**.

Now, the technique to see your website on different resolutions is the following:

- Play around with the **Text Scaling**.
- Toggle **Desktop Site** option.
- View your website in landscape mode.

For example, you can view your website on a wide screen by doing the following:

- Set the **Text Scaling** to 50%; and
- Enable desktop mode; and
- View your website in landscape mode.

## Choose Eruda as your developer tool

Eruda is an embedded developer tool for your mobile browsers. You can use it in your local host and on any websites that do not block it.

To use it, you need to create a bookmarklet. Now, what is a bookmarklet?

> A bookmarklet is a bookmark stored in a web browser with JavaScript commands that add new features to the browser.

—[Bookmarklet - Wikipedia](https://en.wikipedia.org/wiki/Bookmarklet)

Follow these steps to create a bookmarklet:

1. Bookmark a new tab.
1. Edit the new bookmark.
1. Fill the URL input with `javascript:alert("Bookmarklet is working")`.
1. (Optional) Change the bookmark name to `Test Bookmarklet`.

Next, you can try using it by following these steps:

1. Stay on this website on a browser.
1. Tap the address bar.
1. Type the bookmarklet's name.
1. Tap the bookmarklet.

If you successfully run the bookmarklet, you will see a pop-up that says, "Bookmarklet is working."

Going back to Eruda, you can create a bookmarklet for Eruda to run on this website by following the same steps. The only different thing is the JavaScript code.

You can find the JavaScript code for the Eruda bookmarklet on GitHub, [liriliri/eruda](https://github.com/liriliri/eruda).

## View your website on different resolutions

I offer you two options: an easy and a hard way.

### The easy way to check your website's responsiveness

The great thing about developing your website on your phone is you can make sure your website is looking good on mobile devices. You start with the mobile-first approach which is the best approach when writing CSS.

Now, you need to be aware that you already have the following three resolutions: portrait mode, landscape mode, and desktop mode.

You do not have to do the Firefox's trick if you are satisfied with those three resolutions.

You can have two breakpoints in your CSS if they are needed. Use the `min-width` media query with the `em` unit.

### The hard way to check your website's responsiveness

You can check your website on other screen sizes. It may be worth a try.

Follow these steps:

1. Open a private or incognito tab in your browser.
1. Upload your working directory to [Netlify Drop](https://app.netlify.com/drop/).
1. Copy the URL.
1. Visit [MultiGlancer](https://imvenx.github.io/multiglancer/#/) and paste the URL.
1. Make changes.
1. Repeat from the first step to the fifth step until you are done.

## Have fun

You are not in an ideal situation to write code. But you can start your web development journey with your phone now. The sooner, the better.

You may also feel overwhelmed at some point as your willpower keeps decreasing. That is okay. Take a rest. You can continue later.

Just do everything you can within your limits right now.

Have fun!
