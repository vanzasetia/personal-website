// Source: https://github.com/photogabble/website/blob/main/lib/filters.js
// License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
// Copyright © 2025 Simon Dann

import readingTime from "reading-time";

export default function (collection) {
  const numberFormatter = new Intl.NumberFormat("en-GB", {
    maximumSignificantDigits: 3
  });

  const stats = collection.reduce(
    (stats, item) => {
      stats.totalItems++;
      if (stats.firstItem === null) stats.firstItem = item;

      const itemStats = readingTime(item.templateContent);
      const wordCount = itemStats.words;

      if (wordCount > stats.longestItem.wordCount) {
        stats.longestItem.wordCount = wordCount;
        stats.longestItem.item = item;
      }

      stats.totalWords += wordCount;

      // Year stats
      const year = item.date.getFullYear();
      const yearStats = stats.byYear.get(year) ?? {
        year,
        totalWords: 0,
        totalItems: 0
      };

      yearStats.totalItems++;
      yearStats.totalWords += wordCount;

      stats.byYear.set(year, yearStats);

      return stats;
    },
    {
      totalWords: 0,
      totalItems: 0,
      firstItem: null,
      longestItem: {
        wordCount: 0,
        item: null
      },
      byYear: new Map()
    }
  );

  // Number formatting

  stats.avgWords =
    stats.totalItems > 0
      ? numberFormatter.format(stats.totalWords / stats.totalItems)
      : 0;

  stats.totalWords = numberFormatter.format(stats.totalWords);
  stats.totalItems = numberFormatter.format(stats.totalItems);
  stats.longestItem.wordCount = numberFormatter.format(
    stats.longestItem.wordCount
  );

  stats.byYear = Array.from(stats.byYear.values())
    .map((year) => {
      return {
        ...year,
        totalWords: numberFormatter.format(year.totalWords),
        totalItems: numberFormatter.format(year.totalItems),
        avgWords:
          year.totalItems > 0
            ? numberFormatter.format(year.totalWords / year.totalItems)
            : 0
      };
    })
    .sort((a, b) => a.year - b.year);

  return stats;
}
