// Source: https://github.com/11ty/eleventy-base-blog/blob/main/eleventy.config.js
/**
 * MIT License
 *
 * Copyright (c) 2019–2025 Zach Leatherman
 * Copyright (c) 2026 Vanza Setia
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

const randomizeArray = (arr) => {
  let a = arr.slice(0);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Thanks to https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
export default function (collection, currentArticle, limitation) {
  if (Array.isArray(collection)) {
    // Prevent recommending the article that readers
    // are currently on.
    const filteredCollection = collection.filter(
      (article) => article.url !== currentArticle.url
    );

    if (!limitation) {
      return randomizeArray(filteredCollection);
    }

    return randomizeArray(filteredCollection).slice(0, limitation);
  }
}
