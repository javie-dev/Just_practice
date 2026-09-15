// let age = 18;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// ACTIVITY 1

// let age = 15;

// if (age >= 18){
//     console.log("Eligible for Admission");
// } else {
//     console.log("Not Eligible for Admisiion");
// }

// ACTIVITY 2

// let grade = 70;

// if (grade >= 90){
//     console.log("Excellent");
// } else if (grade >= 80){
//     console.log("Very Good");
// } else if (grade >= 75){
//     console.log("Passed");
// } else {
//     console.log("Failed");
// }

// ACITIVTY 3

// let totalprice = 1000;

// if (totalprice >= 5000){
//     console.log("You have 20% Discount");
// } else if (totalprice >= 3000){
//     console.log("You have 10% Discount");
// } else {
//     console.log("No Discount");
// }

// ACTIVITY 4

// let correctUsername = "admin";
// let correctPassword = "12345";

// let enteredUsername = "admin";
// let enteredPassword = "54321";

// if (correctUsername === enteredUsername && correctPassword === enteredPassword){
//     console.log("Login Succesfull");
// } else {
//     console.log("Invalid Username or Password");
// }

// ACTIVITY 5

// let day ="Monday";
// let hour = 7;

// let weekday = (day !== "Saturday" && day !== "Sunday");
// let workinghour = (hour >= 8 && hour <= 17);

// if (weekday && workinghour){
//     console.log("Office is Open");
// } else {
//     console.log("Office is not Open");
// }

// other example of ACTIVITY 5

let day = "Sunday";
let hour = 12;

if ((day === "Monday" ||
     day === "Tuesday" ||
     day === "Wednesday" ||
     day === "Thursday" ||
     day === "Friday") && (hour >= 8 && hour <= 17)){
        console.log("Office is Open");
     } else {
        console.log("Office is not Open");
     }