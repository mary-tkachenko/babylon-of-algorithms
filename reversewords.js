function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}

___________________________

function reverseWords(str) {
  var splited = str.split(" ");
  // console.log(splited);
  var result = '';

for (word of splited) {
  let piece = word.split('').reverse();
  console.log(piece.join(''));
  let yay = piece.join('');
  console.log(result =  result + ' '+ yay);
}
return result.trim();



}

___________________________

function reverseWords(str) {
 return str.split("").reverse().join("").split(" ").reverse().join(" ");
}