// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// function repeatStr(n, s) {
//   return n*s.length;
// }
function repeatStr(n, s) {
  return s.repeat(n);
}
let nn = 3;
let ss = "abra";
console.log(repeatStr(nn, ss));
