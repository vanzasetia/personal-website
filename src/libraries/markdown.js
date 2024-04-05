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

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItKbd = require("markdown-it-kbd");
const markdownItContainer = require("markdown-it-container");
const slugify = require("@sindresorhus/slugify");

const rules = {
  table_close: () => "</table>\n</div>",
  table_open: () => '<div class="table-wrapper">\n<table>\n'
};

const noteStructure = {
  validate: (params) => {
    return params.trim().match(/^note\s+(.*)$/);
  },
  render: (tokens, idx) => {
    const title = tokens[idx].info.trim().match(/^note\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      const titleText = title[1];
      const anchor = slugify(titleText);
      // Opening tag
      return `
      <aside class="note flow" aria-labelledby="${anchor}">
        <p class="note__title" id="${anchor}" aria-hidden="true">
          <em>Note:</em> ${titleText}
        </p>
      <div class="flow">`;
    } else {
      // Closing tag
      return `</div></aside>`;
    }
  }
};

const blockquoteBoxStructure = {
  render: (tokens, idx) => {
    if (tokens[idx].nesting === 1) {
      // Opening tag
      return `<blockquote class="flow box">`;
    } else {
      // Closing tag
      return `</blockquote>`;
    }
  }
};

const markdown = markdownIt()
  .use(markdownItAnchor)
  .use(markdownItKbd)
  .use(markdownItContainer, "note", noteStructure)
  .use(markdownItContainer, "blockquote-box", blockquoteBoxStructure);

markdown.renderer.rules = { ...markdown.renderer.rules, ...rules };

module.exports = markdown;
