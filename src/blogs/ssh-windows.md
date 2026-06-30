---
# Copyright (c) Vanza Setia
# SPDX-License-Identifier: CC-BY-ND-4.0
title: Manage SSH keys for Windows users
description: GitHub's official tutorials are not clear enough for managing more than one Secure Shell (SSH) key. This article gives you the exact step-by-step on how to handle more than one SSH key.
date: 2026-06-30
tags: git
copyright:
  year: 2026
---

## Check existing SSH keys

1. Open File Explorer.
1. Access your **Local Disk**.
1. Open the `Users` folder.
1. Open your profile folder.
1. Open the `.ssh` folder.

You can also use Git Bash to check existing SSH keys. Run the following command:

```bash
ls -al ~/.ssh
```

If you do not find the `.ssh` folder or do not see any files—like `id_ed25519` and `id_ed25519.pub`—you do not have any keys yet.

## Generate your first SSH key

Follow these steps:

1. Open Git Bash.
1. Type the following command and type your GitHub email address:

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

1. Press [[Enter]] when prompted the following:

   ```bash
   > Enter file in which to save the key (/c/Users/YOU/.ssh/id_ed25519): [Press enter]
   ```

1. To leave the passphrase empty for easy use, press [[Enter]].

   ```bash
   > Enter passphrase (empty for no passphrase): [Press Enter]
   > Enter same passphrase again: [Press Enter]
   ```

## Connect your SSH key to your GitHub account

Follow these steps:

1. Open Git Bash.
1. Copy your SSH public key.

   ```bash
   clip < ~/.ssh/id_ed25519.pub
   ```

1. Open your browser.
1. Open your **[SSH and GPG keys](https://github.com/settings/keys)** page.
1. Add **[new SSH key](https://github.com/settings/ssh/new)**.
1. Fill the title input with **Personal**.
1. Leave the **Key type** to be **Authentication key**.
1. Paste your SSH public key in the **Key** text area.
1. Add your new key.
1. Type your GitHub password.

To test whether you can connect your SSH key with GitHub, follow these steps:

1. Open Git Bash.
1. Run the following command:

   ```bash
   ssh -T git@github.com
   ```

1. After you run it, you get the following:

   ```bash
   Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
   ```

## Generate another SSH key

Follow these steps:

1. Open Git Bash.
1. Type the following command and type your GitHub email address:

   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

1. Change the filename without any extension.

   ```bash
   > Enter file in which to save the key (/c/Users/YOU/.ssh/id_ed25519): [Type custom filename]
   ```

1. To leave the passphrase empty for easy use, press Enter key:

   ```bash
   > Enter passphrase (empty for no passphrase): [Press Enter]
   > Enter same passphrase again: [Press Enter]
   ```

1. Open File Explorer.
1. Go to `C:\Users\YOU\.ssh`.

   Replace `YOU` with your current profile name.
1. Find the custom filename you typed before.

   If your custom filename is `jack`, find `jack` and `jack.pub`.

Repeat the above steps to make as many SSH keys as you like.

## Connect another SSH key

1. Open Git Bash.
1. Copy your new SSH public key.

   ```bash
   clip < ~/.ssh/jack.pub
   ```

1. Open your browser.
1. Open your **[SSH and GPG keys](https://github.com/settings/keys)** page.
1. Add **[new SSH key](https://github.com/settings/ssh/new)**.
1. Fill the title input with **Work**.
1. Leave the **Key type** to be **Authentication key**.
1. Paste your SSH public key in the **Key** text area.
1. Add your new key.
1. Type your GitHub password.

To test whether you can connect your SSH key with GitHub, follow these steps:

1. Open Git Bash.
1. Run the following command:

   ```bash
   ssh -i ~/.ssh/jack -T git@github.com
   ```

   Notice that this command refers to a specific SSH key.
1. After you run it, you get the following:

   ```bash
   Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
   ```

## Connect the local Git repository to a specific SSH key

1. Open a local Git repository.
1. Run the following command:

   ```bash
   git config --local core.sshCommand "ssh -i ~/.ssh/CUSTOM_KEY"
   ```

   Do not add `.pub`.

You can do the same without using the Git command by using your text editor.

1. Open File Explorer.
1. Open a local Git repository.
1. Open the `.git` folder inside your working directory.
1. Open the `config` file with Notepad.
1. Add `sshCommand= "ssh -i ~/.ssh/CUSTOM_KEY"` inside `[core]`.
1. Save the file.

To test this, make local changes and push them to a remote repository.
