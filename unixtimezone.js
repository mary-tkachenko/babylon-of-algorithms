function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  var unixTimeCurrent = Date.parse(currentDate);
  var unixTimeExpiration = Date.parse(expirationDate);

  if (enteredCode === correctCode  && unixTimeCurrent <= unixTimeExpiration) {
    return true;
  }
  return false;
}