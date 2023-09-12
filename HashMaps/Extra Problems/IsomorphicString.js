/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

function checkIf(s1, s2) {
  let s = new Map();
  let t = new Map();

  for (let i = 0; i < s1.length; i++) {
    charS = s1[i];
    charT = s2[i];
    
    if (!s.has(charS) && !t.has(charT)) {
      s.set(charS, charT);
      t.set(charT, charS);
    } else if (s.get(charS) !== charT || t.get(charT) !== charS) {
      return false;
    }
  }

  return true;
}

console.log(checkIf("aaabba", "aaabab"));
