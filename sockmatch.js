// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

let readLine = (n, arr) => {
  // Base case.
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }

  const drawer = {};
  let result = 0;
  for (const value of arr) {
    if (drawer[value] === undefined) {
      drawer[value] = 1;
    } else {
      drawer[value]++;
    }  
  }
    console.log(drawer)

  for (let value in drawer) {
    if (drawer[value] > 1) {
      if (drawer[value] % 2 === 0) {
        result += drawer[value]/2;
        console.log(result);
      } else {
        result += (drawer[value] - (drawer[value] % 2)) / 2;
        console.log(result);
      } 
    }  
  }
  return result;
}

readLine(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

