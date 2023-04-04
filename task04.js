// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// const array =['a',12,30,'f',6];
// const findEl = "a";
function check(a, x) {
  if (a.includes(x)) {
    return true;
  }
  return false;
}

const array = ["a", 12, 30, "f", 6];
const findEl = 12;
console.log(check(array, findEl));
