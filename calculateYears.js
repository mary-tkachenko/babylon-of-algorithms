function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) {
    return 0;
  }

  counter = 0;
  while (principal <= desired) {
    principal = principal + (principal * interest) * (1 - tax);
    console.log(principal);
    counter ++; 
  }
  return counter;
}
// calculateYears(1000, 0.05, 0.18, 1100);
calculateYears(1000,0.01625,0.18,1200)