function solution(A) {
  const mapOfNumbers = {};
  for (const number of A) {
    if (!(mapOfNumbers[number])) {
      mapOfNumbers[number] = 1;
    } else {
      mapOfNumbers[number]++;
    }
  }

  for (const key of Object.keys(mapOfNumbers)) {
    if (mapOfNumbers[key] % 2 != 0) {
      return parseInt(key);
    }
  }

}

solution([9, 3, 9, 3, 9, 7, 9]);
