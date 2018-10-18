function filter_list(l) {
  let result = [];
  for (let element of l) {
    if (typeof element === 'number') {
      result.push(element);
    }
  }
  return result;
}