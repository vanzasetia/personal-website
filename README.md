<!--
MIT License

Copyright (c) 2024 Vanza Setia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
-->

# Vanza Setia's Website

I develop a website to help others fighting ignorance.

I use Windows Terminal with Command Prompt in Windows 10 to develop the website. The source code works well on that setup. Different setup means you may need to adjust something. (I am neither endorsing Windows Terminal nor Command Prompt nor Windows 10.)

## Setup

First, install [Node.js](https://nodejs.org/) version 18.18.0 or higher on your machine.

Second, install all the packages.

```bash
npm install
```

Third, setup Husky to [lint](https://en.wikipedia.org/wiki/Lint_(software)) the code before making a Git commit.

```bash
npm prepare
```

Fourth, run a local host on your machine.

```bash
npm start
```

## Deployment

If you deploy the website to Netlify—assuming that you do not change the [`output` option on the Eleventy's config file](./.eleventy.js)—you just need to do the following steps:

1. Upload the source code to a remote repository on GitHub.
1. Connect the remote repository with Netlify.
1. Deploy the website.

Do not set a build command because it has been already set in the [.netlify.toml](./netlify.toml) file.

You can use any other services to host the source code and the website.

(I am neither endorsing GitHub nor Netlify.)

## Contributing

If you want to contribute, please contact me through **[write \"Vanza Setia\" in lowercase and without space][at]proton[dot]me**.

## Acknowledgment

[Eleventy](https://11ty.dev/) is good.

## License

Except where otherwise stated, the blog posts and publications are licensed under a [Creative Commons Attribution NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nd/4.0/). All code samples are licensed under [the MIT No Attribution License (MIT-0)](./LICENSE-SAMPLECODE).

The underlying source code used to format and display all those blog posts and publications is licensed under [the MIT License (Expat License)](./LICENSE).

Copyright years on the source files and the license files may be listed using range notation—for example 2021–2024—indicating that every year in the range, inclusive, is a copyrightable year that could otherwise be listed individually.
