function binaryGap(number) {
  const log = Math.floor(Math.log2(number));
  const decaArray = [1];
  for (let i = 0; i < log; i++) {
    let counter = decaArray[i] * 2;
    decaArray.push(counter);
  }

  console.log(decaArray);

  const binaryArray = [];
  for (let j = decaArray.length - 1; j >= 0; j--) {
    // console.log(decaArray[j]);
    let rest = number - decaArray[j];
    if (rest >= 0) {
      binaryArray.push(1);
       number = rest;
    } else {
      binaryArray.push(0);
    }
  }
     console.log(binaryArray)

  let zeroCounter = 0;
  let temporaryCounter = 0;
  for (let i = 0; i < binaryArray.length; i ++) {
    if (binaryArray[i] === 1) {
      if (temporaryCounter >= zeroCounter) {
        zeroCounter = temporaryCounter;
        temporaryCounter = 0;
      };
    } else {
      temporaryCounter++;
    }

  }
  return zeroCounter;

}
