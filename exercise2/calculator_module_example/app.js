const calculator = require("./calculator");

let answer1 = calculator.AddTwoNumber(200, 500);

let answer2 = calculator.DivideTwoNumber(899, 9);

let answer3 = calculator.MultiplyTwoNumber(9, 100);

let answer4 = calculator.SubtractTwoNumber(99, 10);

console.log("The result is: " + answer1);

if(answer1 !== 700){
    throw "The two numbers have broken";
}else{
    console.log("Add successfully");
}

try {
    let addmoreNumber = calculator.AddTwoNumber(1, undefined);
} catch(e){
    console.log("Only get one number and cant finish add work");
}

console.log("The result is: " + answer2);

console.log("The result is: " + answer3);

console.log("The result is: " + answer4);