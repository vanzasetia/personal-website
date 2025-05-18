---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Git stash
date: 2025-05-18
tags: git
copyright:
  year: 2025
---

## Problem

You want to run `git rebase` command, but you still have unstaged changes. You get the following error after executing `git rebase -i 70d0caa`:

```bash
error: cannot rebase: You have unstaged changes.
error: Please commit or stash them.
```

You do not want to commit the changes yet. How can you solve this?

## Solution

You solve the problem with `git stash`.

Excute `git stash`. This command will stash all your unstaged changes. Then, you can run [`git rebase`](/blog/git-rebase-autosquash/). After the rebase is done, execute `git stash pop` to get back all the unstaged changes.
