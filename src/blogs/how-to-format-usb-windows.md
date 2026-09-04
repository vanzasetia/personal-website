---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: How to format a USB using Command Prompt in Windows 10/11
date: 2026-09-04
tags: "windows 10"
copyright:
  year: 2026
banner: false
advert: false
---

1. Open **Command Prompt as an administrator**.
1. Run `diskpart`.
1. Run `list disk`.
1. See the **Size** column and find your disk. It can be `Disk 1` or `Disk 2`, for example.
1. Run `select disk N`, where `N` is the number of your disk.
1. Run `clean`.
1. Run `create partition primary`.
1. Run `active`.
1. Run `select partition N`. You may not need to run this since you only have one partition, unless you create more than one.
1. Run `format override quick`.
1. Run `exit` to quit diskpart.

For more information, visit [the official documentation for `diskpart`](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart).
