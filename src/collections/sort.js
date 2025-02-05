/**
 * MIT License
 *
 * Copyright (c) 2025 Vanza Setia
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

export default function (collection) {
  const allPosts = collection.getFilteredByTags("blog");
  const tagsAndPostTotalNumbers = new Map();
  const excludedTags = ["blog", "best"];

  allPosts.forEach((post) => {
    const tags = post.data.tags || [];

    const removeExcludedTags = (tag) => {
      const isExcludedTagsAdded = excludedTags.includes(tag) === false;
      return isExcludedTagsAdded;
    };
    const countTotalPostForEachTag = (tag) => {
      const count = tagsAndPostTotalNumbers.get(tag) || 0;
      tagsAndPostTotalNumbers.set(tag, count + 1);
    };
    const addTagsAndPostTotalNumbers = (tags) => {
      tags
        .filter((tag) => removeExcludedTags(tag))
        .forEach((tag) => countTotalPostForEachTag(tag));
    };

    addTagsAndPostTotalNumbers(tags);
  });

  const tagsSortedByPostCount = [...tagsAndPostTotalNumbers].sort(
    (a, b) => b[1] - a[1]
  );
  const sortedTags = tagsSortedByPostCount.map(([tag]) => tag);
  return sortedTags;
}
