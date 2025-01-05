/**
 * MIT License
 *
 * Copyright (c) 2024, 2025 Vanza Setia
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

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItKbd from "markdown-it-kbd";
import markdownItContainer from "markdown-it-container";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import markdownItVideo from "./markdown-it-video.js";
import slugify from "@sindresorhus/slugify";

const image =
  markdownIt().renderer.rules.image ||
  ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));

const rules = {
  image: (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    const altText = token.content;
    const isAltTextEmpty = altText === "";

    if (isAltTextEmpty) {
      token.attrSet("aria-hidden", "true");
    }

    token.attrSet("loading", "lazy");

    return image(tokens, idx, options, env, slf);
  },
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
    '<h2 id ="footnotes">Footnotes</h2>\n' +
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
      <aside class="blog-aside box" aria-labelledby="${anchor}">
        <p class="blog-aside__title" id="${anchor}" aria-hidden="true">
          <em class="blog-aside__label">Note:</em> ${titleText}
        </p>
      <div class="flow">`;
    } else {
      // Closing tag
      return `</div></aside>`;
    }
  }
};

const asideStructure = {
  validate: (params) => {
    return params.trim().match(/^aside\s+(.*)$/);
  },
  render: (tokens, idx) => {
    const title = tokens[idx].info.trim().match(/^aside\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      const titleText = title[1];
      const anchor = slugify(titleText);
      // Opening tag
      return `
      <aside class="blog-aside box" aria-labelledby="${anchor}">
        <p class="blog-aside__title" id="${anchor}" aria-hidden="true">
          <em class="blog-aside__label">${titleText}</em>
        </p>
      <div class="flow">`;
    } else {
      // Closing tag
      return `</div></aside>`;
    }
  }
};

const markdownItAttrsOptions = {
  allowedAttributes: ["width", "height"]
};

const markdown = markdownIt()
  .use(markdownItAnchor)
  .use(markdownItKbd)
  .use(markdownItFootnote)
  .use(markdownItVideo, markdownIt)
  .use(markdownItAttrs, markdownItAttrsOptions)
  .use(markdownItContainer, "note", noteStructure)
  .use(markdownItContainer, "aside", asideStructure);

markdown.renderer.rules = { ...markdown.renderer.rules, ...rules };

export default markdown;
