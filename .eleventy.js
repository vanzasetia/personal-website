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

const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const tocPlugin = require("eleventy-plugin-toc");

const markdownLibrary = require("./src/libraries/markdown.js");

const cleanCSSFilter = require("./src/filters/clean-css.js");
const titleCaseFilter = require("./src/filters/title-case.js");
const blogDateFilter = require("./src/filters/blog-date.js");
const htmlDateFilter = require("./src/filters/html-date.js");
const blogSliceFilter = require("./src/filters/blog-slice.js");
const tagListFilter = require("./src/filters/tag-list.js");
const filteredTagFilter = require("./src/filters/filtered-tag.js");
const moreThanThreeSubTopicsFilter = require("./src/filters/more-than-three-sub-topics.js");
const markdownItFilter = require("./src/filters/markdown-it.js");

const minifyHTML = require("./src/transformers/minify-html.js");

const tocSettings = {
  wrapper: false,
  tags: ["h2", "h3"]
};

module.exports = (config) => {
  config.addPassthroughCopy("./src/favicons");
  config.addPassthroughCopy("./src/manifest.json");
  config.addPassthroughCopy("./src/vanzasetia-public-key.txt");

  config.addWatchTarget("./src/css/style.css");

  config.addPlugin(pluginRss);
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(eleventyNavigationPlugin);
  config.addPlugin(tocPlugin, tocSettings);

  config.setLibrary("md", markdownLibrary);

  config.addFilter("cleanCSSFilter", cleanCSSFilter);
  config.addFilter("titleCaseFilter", titleCaseFilter);
  config.addFilter("blogDateFilter", blogDateFilter);
  config.addFilter("htmlDateFilter", htmlDateFilter);
  config.addFilter("blogSliceFilter", blogSliceFilter);
  config.addFilter("tagListFilter", tagListFilter);
  config.addFilter("filteredTagFilter", filteredTagFilter);
  config.addFilter(
    "moreThanThreeSubTopicsFilter",
    moreThanThreeSubTopicsFilter
  );
  config.addFilter("markdownItFilter", markdownItFilter);

  config.addTransform("minifyHTML", minifyHTML);

  return {
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
};
