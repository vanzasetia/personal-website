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
