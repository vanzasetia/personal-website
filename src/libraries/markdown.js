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
const markdownItFootnote = require("markdown-it-footnote");
const slugify = require("@sindresorhus/slugify");

const rules = {
  table_close: () => "</table>\n</div>",
  table_open: () => '<div class="table-wrapper">\n<table>\n',
  footnote_caption: (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) n += `:${tokens[idx].meta.subId}`;

    return `note ${n}`;
  },
  footnote_ref: (tokens, idx, options, env, slf) => {
    const id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);
    const caption = slf.rules.footnote_caption(tokens, idx, options, env, slf);
    let refid = id;

    if (tokens[idx].meta.subId > 0) refid += `:${tokens[idx].meta.subId}`;

    return `<sup><a href="#fn${id}" id="fnref${refid}" role="doc-noteref">${caption}</a></sup>`;
  },
  footnote_block_open: () =>
    "<hr>\n" +
    '<section aria-labelledby="footnotes">\n' +
    /* Prevent the "Footnotes" from appearing in the table of contents. */
    '<p id ="footnotes" role="heading" aria-level="2">Footnotes</p>\n' +
    "<ol>\n",
  footnote_block_close: () => "</section></ol>",
  footnote_anchor: (tokens, idx, options, env, slf) => {
    let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) refid += `:${tokens[idx].meta.subId}`;

    return ` <a href="#fnref${id}">Back to reference ${id}</a>`;
  },
  footnote_open: (tokens, idx, options, env, slf) => {
    let id = slf.rules.footnote_anchor_name(tokens, idx, options, env, slf);

    if (tokens[idx].meta.subId > 0) refid += `:${tokens[idx].meta.subId}`;

    return `<li id="fn${id}" tabindex="-1">`;
  }
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
  .use(markdownItFootnote)
  .use(markdownItContainer, "note", noteStructure)
  .use(markdownItContainer, "blockquote-box", blockquoteBoxStructure);

markdown.renderer.rules = { ...markdown.renderer.rules, ...rules };

module.exports = markdown;
