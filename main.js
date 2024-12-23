// if condition
let grade = "110";
if (grade < 50) {
  console.log("Z");
} else if (grade <= 65) {
  console.log("V");
} else if (grade <= 75) {
  console.log("C");
} else if (grade <= 85) {
  console.log("B");
} else if (grade <= 100) {
  console.log("A");
} else {
  console.log("Re-enter the number");
}
//----------------------------------------------------
let student = "a";
if (student >= 90 && student <= 100) {
  console.log("A");
} else if (student >= 75 && student <= 89) {
  console.log("B");
} else if (student >= 50 && student <= 74) {
  console.log("c");
} else if (student < 50) {
  console.log("z");
} else {
  console.log("Re-enter the number");
}
//----------------------------------------------------
let age = 20;
if(age<=18){
  console.log("You are an adult")
}
else{
  console.log("You are a minor")
}