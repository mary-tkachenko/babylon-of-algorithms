var sumAndMultiply = function(sum, multiply) {
  for (var n = 0; n <= sum; n ++) {
    if (n + (sum - n) === sum && n * (sum - n) === multiply) {
      var x = n;
      var y = sum - x;
      return [x, y];
    }
  }
  return null;
}