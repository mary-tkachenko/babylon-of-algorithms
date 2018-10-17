function divisibleByThree(str){
    return str.split('').reduce((a,b) => parseInt(a) + parseInt(b)) % 3 === 0
  }

  OR

  function divisibleByThree(str){
  var result = 0;
  var arr = str.toString();
  for (var value of arr) {
    result += parseInt(value);
  }
  if (result % 3 === 0) {
    return true;
  }
  return false;

}
divisibleByThree(18752);