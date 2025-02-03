const isAnagram = (str1, str2) => {
  const obj1 = {};
  const obj2 = {};
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i++) {
      //   if (!obj1[str1[i]] && !obj2[str2[i]]) {
      //     obj1[str1[i]] = 0;
      //     obj2[str2[i]] = 0;
      //   }
      obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
      obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }
  }
  for (let key in obj1) {
    if (obj1[key] != obj2[key]) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("cat", "act")); // true
console.log(isAnagram("cat", "dog")); // false
console.log(isAnagram("hello", "oellh")); // true
console.log(isAnagram("aabbcc", "abcabc")); // true
console.log(isAnagram("listen", "silent")); // true
