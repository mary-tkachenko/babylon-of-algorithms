function rowSumOddNumbers(n) {
  var result = 0;
  var count = 1;
  while (count <= n) {
    result = result + (1 + (n * (n-1)));
    count++;
  }
  return result + n * (n - 1);
}



_____________________

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8