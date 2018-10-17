function narcissistic( value ) {
  var result = 0;
  var power = value.toString().length;
  var arr = [... value.toString()];
  var roots = arr.map(function(num) {
  result = result + Math.pow(num, power);
  });
  if (result === value) {
    return true;
  }
  return false;
  }