var longestCommonPrefix = function (strs) {
  if (strs && strs.length === 0) {
    return "";
  }

  let sortedArray = strs.sort((a, b) => a.length - b.length);

  let sortestString = sortedArray[0];

  let len = sortestString && sortestString.length;

  if (!len) {
    return "";
  }

  for (let i = len; i > 0; i--) {
    const searchString = sortestString.substr(0, i);
    flag = strs.every(
      (item) => item && item.startsWith && item.startsWith(searchString)
    );
    if (flag) {
      return searchString;
      break;
    }
  }
  return "";
};

console.log(longestCommonPrefix(["dog", "dog", "dog"]));
