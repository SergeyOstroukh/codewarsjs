function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  }
  return n * m;
}
let num1 = 5;
let num2 = 5;
console.log(paperwork(num1, num2));
