function sumTriangularNumbers(n) {
  if (n <= 0) {
    return 0;
  }
   newN = 0;
   result = 0;
  for ( var i = 1; i <= n; i++) {
    newN = newN + i;
    console.log(newN);
    result = result + newN;
  }
  return result;
}

____________________

function sumTriangularNumbers(n) {
  return n < 0 ? 0 : n * (n + 1) * (n + 2) / 6;
}