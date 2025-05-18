---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Git reflog
date: 2025-05-18
tags: git
copyright:
  year: 2025
---

## Problem

You have done a [`git rebase`](/blog/git-rebase-autosquash/). Then, you do not like that decision. You want to undo that.

## Solution

You solve the problem with `git reflog`.

You have the following reflog:

```bash
2a37136 (HEAD -> main) HEAD@{0}: rebase (finish): returning to refs/heads/main
2a37136 (HEAD -> main) HEAD@{1}: rebase (pick): Make a legal page
608b1eb HEAD@{2}: rebase (fixup): Make a contact page
88c90a5 HEAD@{3}: rebase (start): checkout 70d0caa
90ca0c5 HEAD@{4}: commit: fixup! Make a contact page
edf23a5 HEAD@{5}: reset: moving to HEAD~1
d785b41 HEAD@{6}: rebase (finish): returning to refs/heads/main
d785b41 HEAD@{7}: rebase (start): checkout eecd26c
d785b41 HEAD@{8}: commit: fixup! Make a homepage
edf23a5 HEAD@{9}: commit: Make a legal page
88c90a5 HEAD@{10}: commit: Make a contact page
70d0caa HEAD@{11}: commit: Make an about page
eecd26c HEAD@{12}: commit (initial): Make a homepage
```

You want to go back to the state where you have not made a `fixup!` commit for the contact page. You also do not want to lose any local changes.

**Steps**:

1. Execute `git reflog` to get the above output.
1. Copy the state hash that you want to go back to.
1. Execute `git reset --mixed edf23a5`.
