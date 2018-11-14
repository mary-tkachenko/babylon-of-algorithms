var isAnagram = function(test, original) {
var originalMap = new Map();
var testMap = new Map();

for (const char of original) {
  if (!originalMap.has(char)) {
    originalMap.set(char.toLowerCase(), 1);
  } else {
    originalMap.set(char.toLowerCase(), originalMap.get(char) + 1) ;
  }
  // console.log(originalMap);
}

for (charTest of test) {
  if (!testMap.has(charTest)) {
    testMap.set(charTest.toLowerCase(), 1);
  } else {
    testMap.set(charTest.toLowerCase(), testMap.get(charTest) + 1) ;
  }
  // console.log(testMap);
}
 console.log(originalMap.entries())
for (const [k, v] of testMap.entries()) {
  console.log(k, v);
  if (originalMap.get(k) !== testMap.get(k) || originalMap.size !== testMap.size ) {
    return false;
  }
}
return true;
};