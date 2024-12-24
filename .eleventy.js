/**
 * MIT License
 *
 * Copyright (c) 2024 Vanza Setia
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import pluginRss from "@11ty/eleventy-plugin-rss";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

import markdownLibrary from "./src/libraries/markdown.js";

import cleanCSSFilter from "./src/filters/clean-css.js";
import titleCaseFilter from "./src/filters/title-case.js";
import blogDateFilter from "./src/filters/blog-date.js";
import htmlDateFilter from "./src/filters/html-date.js";
import blogSliceFilter from "./src/filters/blog-slice.js";
import tagListFilter from "./src/filters/tag-list.js";
import filteredTagFilter from "./src/filters/filtered-tag.js";
import markdownItFilter from "./src/filters/markdown-it.js";

import minifyHTML from "./src/transformers/minify-html.js";

export default async function (config) {
  config.addPassthroughCopy("./src/favicons");
  config.addPassthroughCopy("./src/manifest.json");
  config.addPassthroughCopy("./src/vanzasetia-public-key.txt");

  config.addWatchTarget("./src/css/style.css");

  config.addPlugin(pluginRss);
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(eleventyNavigationPlugin);

  config.setLibrary("md", markdownLibrary);

  config.addFilter("cleanCSSFilter", cleanCSSFilter);
  config.addFilter("titleCaseFilter", titleCaseFilter);
  config.addFilter("blogDateFilter", blogDateFilter);
  config.addFilter("htmlDateFilter", htmlDateFilter);
  config.addFilter("blogSliceFilter", blogSliceFilter);
  config.addFilter("tagListFilter", tagListFilter);
  config.addFilter("filteredTagFilter", filteredTagFilter);
  config.addFilter("markdownItFilter", markdownItFilter);

  config.addTransform("minifyHTML", minifyHTML);
}

export const config = {
  templateFormats: ["md", "njk", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "./src",
    includes: "_includes",
    data: "_data",
    output: "_site"
  }
};
