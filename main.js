// if condition
/*
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
  */

//function
function myName(name) {
  console.log((name = "Mahmoud abu zaid"));
}
myName();

console.log("***********************");

//*******************************

function data(name, age, email, password) {
  console.log(`my name is ${name}`);
  console.log(`my age is ${age}`);
  console.log(`my email is ${email}`);
  console.log(`my password is ${password}`);
}
console.log("enter your data");
data("mahmoud", 22, "mahmoud@gmail******", 123456789);

//******************************
console.log("***********************");
//if condition and function
function studint(StudentGrade) {
  if (StudentGrade >= 85 ) {
    console.log("Excellent");
  } else if (StudentGrade >= 75) {
    console.log("very good");
  } else if (StudentGrade >= 65) {
    console.log("good");
  } else if (StudentGrade >= 50) {
    console.log("Acceptable");
  } else {
    console.log("Please enter the correct score");
  }
}
studint(85)
//******************************
console.log("***********************");

function timesFive(number){
  return number *5
}
let value=timesFive(5)
console.log(value)
console.log(--value)
console.log(++value)
console.log(++value)
console.log(Math.sqrt(value))
console.log(Math.pow(value,2))

