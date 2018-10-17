function GetSum( a,b ) {
  var min;
  var max;
  var result = 0;

  if (a > b) {
    min = b;
    max = a;
  } else if (a < b) {
    min = a;
    max = b;
  } else {
    return a;
  }

  while (min < max) {
    result = result + min;
    min ++;
  }
  return result + max;
}
GetSum(0, 2);

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}