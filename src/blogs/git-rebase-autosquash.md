---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Git rebase autosquash
date: 2025-05-18
tags: git
copyright:
  year: 2025
---

## Problem

You have the following local commits:

```bash
edf23a5 (HEAD -> main) Make a legal page
88c90a5 Make a contact page
70d0caa Make an about page
eecd26c Make a homepage
```

The problem is you find a typo on the contact page, and you do not want to make a new commit.

## Solution

You can solve it with `git rebase`.

```bash
git commit --fixup COMMIT_HASH
git rebase -i --autosquash COMMIT_HASH
```

**Steps:**

1. Copy the commit hash that you want to fix.
1. Execute `git commit --fixup 88c90a5`.
1. Copy the commit hash before the commit that you want to fix.
1. Execute `git rebase -i --autosquash 70d0caa`.
1. Close the editor.

Once you are done, you get a new commit hash for the targeted commit and the commit above it.

```bash
2a37136 (HEAD -> main) Make a legal page
608b1eb Make a contact page
70d0caa Make an about page
eecd26c Make a homepage
```
