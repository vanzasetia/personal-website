---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Windows 10/11 does not show 'UEFI Firmware Settings'
description: You are trying to dual-boot your device, but your device does not support UEFI. What does that mean for you?
date: 2026-07-01
tags: 'windows 10'
copyright:
  year: 2026
---

If you see the following in your **System Information**,

| Item                | Value         |
|-------------------  |-------------  |
| BIOS Mode           | Legacy        |
| Secure Boot State   | Unsupported   |

and you have done **Restart** + [[Shift]], and you have gone to

1. **Troubleshoot**; and then
1. **Advanced options**; and then
1. you do not see **UEFI Firmware Settings**.

All the info means your device does not support UEFI or Unified Extensible Firmware Interface.

What are the impacts if your device does not support UEFI? You can not install GNU/Linux next to your Windows 10/11. Do not try to follow any tutorials to dual-boot your device because your device is not capable of dual-booting.

[Q4OS](https://www.q4os.org/), however, allows you to install GNU/Linux without complicated configurations. Check out [its download page](https://www.q4os.org/downloads1.html) and install the `WinSetup` version.

## Update, 02 July 2026

There are tutorials to change the **BIOS Mode** from **Legacy** to **UEFI** by converting your disk from Master Boot Record (MBR) to GUID Partition Table (GPT). But you need to ensure that your device's motherboard supports GPT, and Legacy, and UEFI. Be careful!
