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

// let day = "Sunday";
// let hour = 12;

// if ((day === "Monday" ||
//      day === "Tuesday" ||
//      day === "Wednesday" ||
//      day === "Thursday" ||
//      day === "Friday") && (hour >= 8 && hour <= 17)){
//         console.log("Office is Open");
//      } else {
//         console.log("Office is not Open");
//      }

// ACIVITY 6

// let studentName = "Javie Eresmas";
// let grade = 97;

// console.log(" Student: " + studentName);
// console.log(" Grade: " + grade);

// if (grade >= 90 && grade <= 100){
//     console.log(" Result: Excellent keep it up!");
// } else if (grade >= 80 && grade <= 90){
//     console.log(" Result: Very Good! You are Doing Well");
// } else if (grade >= 75 && grade <= 79){
//     console.log(" Result: Passed! Keep Improving!");
// } else if (grade >= 1 && grade <= 74){
//     console.log(" Result: You Fail! Improve and Put more Effort");
// } else {
//     console.log("Invalid");
// }

// What is wrong with this code

// let password = "hello";

// if (password = "haiiii") {
//     console.log("Correct");
// }

// From CLAUDE AI

// SCENARIO 1

// let username = "";
// let password = "secret123";

// if (username === 'Javie' || password && 'secret123'){
//     console.log("Pls fill in all Fields");
// } else{
//     console.log("Logging in......")
// }

// SCENARIO 2

// let totalamount = 10000;

// if (totalamount >= 5000){
//     console.log("20% off...");
// } else if(totalamount >= 2000 && totalamount <= 4999){
//     console.log("10% off...");
// } else {
//     console.log("No Discount...");
// }

// SCENARIO 3

// let userage = 56;
// let agreedToTerms = true;

// if (userage >= 18 && agreedToTerms === true){
//     console.log("Sign up Allowed");
// } else{
//     console.log("Signup Blocked");
// }

// SCENARIO 4

// let orderTotal = 800;
// let location = "Bukidnon";

// if (orderTotal >= 1500){
//     console.log("Free Shipping");
// } else if (location === "Metro Manila"){
//     console.log("Free Shipping");
// } else {
//     console.log(orderTotal + 120);
// }

// SCENARIO 5

// My own code for Scenario 5

// let password = "asdfasdf";
// let hasnumber = false;  

// if (password.length < 6){
//     console.log("Password was too short");
// } else if (password.length > 8) {
//     console.log("Password was too long");
// } else if (password && !hasnumber){
//     console.log("Inlcude Numbers in Password");
// } else{
//     console.log("Logging in.......");
// }

// Wala nako kabalo so nagpatudlo nalng kong Uncle Claude

// let password = "1234asdf";
// let hasNumber = true;

// if (password < 6){
//     console.log("Too Short");
// } else if ( password >= 6 && !hasNumber){
//     console.log("Add Numbers");
// } else {
//     console.log("Strong Password....");
// }

// Practice lang 

// let name = "Javie";
// let grade = 75;

// if (grade >= 95){
//     console.log("Wow " + name + " Got A+ Grade");
// } else if (grade >= 90){
//     console.log("Wow " + name + " Got A Grade");
// } else if (grade >= 85){
//     console.log("Wow " + name + " Got B Grade");
// } else if (grade >= 80){
//     console.log("Wow " + name + " Got B+ Grade");
// } else if (grade >= 75){
//     console.log("Wow " + name + " Got C Grade");
// } else {
//     console.log("Hey! " + name + " You should study More!!");
// }


// let name = "JavieJadeEresmas"
// console.log(name.length);

// this checks the minimum lenght of the password
// let password = "abc123abc";
// let isLongEnough = password.length >= 8;
// console.log(isLongEnough);

// Using .match(); to identify the Password if it has number included
// let password = "Javie";
// let hasNumber = password.match(/[0-9]/);

// console.log(hasNumber);
// console.log(hasNumber !== null);

// I use password.length and password.match considering for strong password #JustPractice
// let password = "Javie123";
// let mimimumLength = password.length >= 8; 
// let hasNumber = password.match(/[0-9]/);

// if(mimimumLength && hasNumber){
//     console.log("Strong Password");
// } else if (mimimumLength || password || hasNumber || password){
//     console.log("Password needs 8 characters, and number.");
// } 

// i try .test to determined if password had numbers
// let password = "javie"
// let hasNumber = /\d/.test(password);

// if (password && hasNumber){
//     console.log("It has number");
// } else {
//     console.log("should have number");
// }

// testing my curiosity if it workssssss #itdoes
// let password = "Javie123";
// let confirmPassword = "Lyza123";
// let passwordLength = password.length >= 8 ;
// let hasNumber = /\d/.test(password);
// let samePassword = password.match(confirmPassword);

// if(password && samePassword){
//     console.log("yow");
// } else {
//     console.log("nahhhhh")
// }

// Testing
// let password = "Javieee1";

// let passwordLength = password.length >= 8 ;
// let hasNumber = /\d/.test(password);

// if(password && passwordLength && password && hasNumber){
//     console.log("You have a strong password");
// } else {
//     console.log("Weak Password");
// }

// ACTIVITIES TO PRCTICE

// #1 Easy - Medium
// let oddOreven = 1;

// if (oddOreven % 2 === 0){
//     console.log("Even");
// } else{
//     console.log("Odd");
// }

// #2 Easy - Medium
// let myGrade = "56";

// if (myGrade >= 90 && myGrade <= 100){
//     console.log("A");
// } else if(myGrade >= 80 && myGrade <= 89){
//     console.log("B");
// } else if (myGrade >= 80 && myGrade <= 79){
//     console.log("C");
// } else{
//     console.log("F")
// }

// #2 Easy - Medium

// Wrong Answer
// let userName = "Javie"
// let password = "Javie123"
// let isAccountLocked = false;

// let passwordLength = password.leng qth >= 6;
// let hasUserName = userName.match(userName);

// if (hasUserName && userName && password && passwordLength && !isAccountLocked){
//     console.log("Access Granted");
// } else if(password.length > 6 || password){
//     console.log("Password should have atleast 8 Characters");
// }

// Correct Answer i just added that if the password has number on it

// let userName = "Javie123";
// let password = "Javiess"
// let isAccountLocked = false;

// let hasUserName = userName.length > 0;
// let passwordLength = password.length > 6;
// let hasNumber = /\d/.test(password);

// if (!hasUserName){
//     console.log("No Username");
// } else if(!passwordLength){
//     console.log("Password should have atleast 8 Characters");
// } else if(!hasNumber){
//     console.log("Password should have NUMBER");
// } else {
//     console.log("Access Granted");
// }

// #4 

//MyCode
// let userName = "Javiegwapo123";

// let userNameLength = userName.length >=5 && userName.length <= 15;
// let hasNumbers = /\d/.test(userName);
// let noSpace = /\s/.test(userName);

// if(userNameLength){
//     console.log("UserName should have atleast 5 to 15 Characters");
// } else if(hasNumbers){
//     console.log("UserName should Have Numbers");
// } else if(noSpace){
//     console.log("Username should have no Space");
// } else{
//     console.log("Correct UserName")
// }

// From Claude

let userName = "Javiegwapo"

let validlength = userName.length >=5 && userName.length <= 15;
let hasNumber = /\d/.test(userName);
let noSpace = /\s/.test(userName);

let isValid = true;

if(!validlength){
    console.log("Username must contain 8 to 15 characters");
    isValid = false;
}

if(!hasNumber){
    console.log("Username must contain Numbers");
    isValid = false;
}

if(noSpace){
    console.log("Username must have ");
    isValid = false;
}

if(isValid){
    console.log("UserName Valid");
}