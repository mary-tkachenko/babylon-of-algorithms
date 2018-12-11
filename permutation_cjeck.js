function permutation(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  for (var i = 0; i < str1.length; i++) {
    if (!str2.includes(str1.charAt(i))) {
      return false;
    }
  };
  return true;
}
permutation('masha', 'shvama');