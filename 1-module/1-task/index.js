function factorial(n) {
  let number = 1;
    
  if (n === 0) {
    return 1;
  }
  
  for (let i = 1; i <= n; i++) {
    number = number * i;
  }
  
  return number;
}
