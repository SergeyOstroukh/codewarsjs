function retName(name) {
  if (name[0] === "R" || name[0] === "r") {
    return name + " plays banjo";
  }
  return name + " does not play banjo";
}
let myname = "Sembo";
console.log(retName(myname));
