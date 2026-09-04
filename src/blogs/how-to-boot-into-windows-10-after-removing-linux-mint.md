---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: How to boot into Windows 10 after removing Linux Mint
description: Removing the Linux Mint's partition through Windows 10 Disk Management causes users to get stuck at GRUB. This guide attempts to solve the issue without using any terminal at all.
date: 2026-09-04
tags:
 - "windows 10"
 - linux
copyright:
  year: 2026
banner: false
advert: false
---

## Understanding the issue

The way you remove Linux Mint (or any other Linux distro) is by using **Disk Management** in Windows 10 to delete the volume used by Linux Mint.

You thought that you had completely uninstalled Linux Mint. You shut down your computer. Then you power on your computer again, and you get the following instead of booting to Windows 10:

```text
grub>
```

## Solving the issue

You need a [USB flash drive](https://en.wikipedia.org/wiki/USB_flash_drive) with Linux Mint on it. No internet connection is required.

1. Get into your BIOS.
1. Boot from your USB flash drive.
1. Start Linux Mint.
1. In Linux Mint, press the Windows key and search for "Boot Repair."
1. Open **Boot Repair**.
1. If a pop-up appears asking about an update, choose **No**.
1. Choose **Recommended repair**.
1. If a pop-up appears asking about [PasteBin](https://en.wikipedia.org/wiki/Pastebin), choose **No**.
1. If a pop-up appears asking to show you the log after the repair is done, choose **Yes**. This way, you can understand what was happening.
1. After the repair is done, shut down your computer.
1. If an instruction appears, remove your USB flash drive.
1. Power on your computer again.
1. Congratulations, you have successfully booted into Windows 10.

If you still fail to boot into Windows 10, do more research about any errors that appear on your screen.
