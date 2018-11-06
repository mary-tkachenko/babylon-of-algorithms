function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}


____________________________________________________________

function oddOrEven(array) {
  var result = 0;
  for (el of array) {
    result += el;
  }
  
  if (result % 2 === 0 || result === 0) {
    return true;
  } else {
    return false;
  }
}