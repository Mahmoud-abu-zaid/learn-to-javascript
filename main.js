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
  if (StudentGrade >= 85) {
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
studint(85);
//******************************
console.log("***********************");

function timesFive(number) {
  return number * 5;
}
let value = timesFive(5);
console.log(value);
console.log(--value);
console.log(++value);
console.log(++value);
console.log(Math.sqrt(value));
console.log(Math.pow(value, 2));

//-----------------************------------------
console.log("-----------------************------------------");
/*function details(name, age, boolean) {
  let A ,B ,C;
if(typeof name==String){
 name=A;
}else if(typeof name==String){
name==B;
}else{
  name==C
}
if(typeof age==Number){
age=A;
}else if(typeof age==Number){
  age==B;
}else{
  age==C
}
  boolean === true ? console.log("Available for Hire") : console.log("Not Available For Hire");
  console.log(`hellow ${name} and your Age Is ${age} your Are ${boolean}`);
}
details("mahmoud", 22, true);
details(22, "mahmoud", true);
details(true, 22, "mahmoud");
details(false, "mahmoud", 22);

*/
function showDetails(a, b, c) {
  let Name, Age, Status;
  if (typeof a === "string") {
    Name = a;
  } else if (typeof b === "string") {
    Name = b;
  } else {
    Name = c;
  }
  if (typeof a === "number") {
    Age = a;
  } else if (typeof b === "number") {
    Age = b;
  } else {
    Age = c;
  }
  if (typeof a === "boolean") {
    Status = a;
  } else if (typeof b === "boolean") {
    Status = b;
  } else {
    Status = c;
  }
  return `"Hello ${Name}, Your Age Is ${Age}, You Are ${Status ? "" : "Not"} Available For Hire"`;
}
console.log(showDetails("Osama", 38, true));
console.log(showDetails(38, "Osama", true));
console.log(showDetails(true, 38, "Osama"));
console.log(showDetails(false, "Osama", 38));

