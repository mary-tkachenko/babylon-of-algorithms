function solution(str, ending){
  var lengthOfEnding = ending.length;
  if (ending === str.slice(-lengthOfEnding)) {
    return true;
  } else {
    return false;
  }
}


___________________
function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}