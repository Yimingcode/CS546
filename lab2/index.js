const geometry = require("./geometry");
console.log("Geometry:");
console.log("Function 1: This method will calculate the volume of rectangular prism");
var arr = require('./geometry');
/* for( let i = 0; i < arr.length; i++){
    try {
        console.log("input radius : " + arr[i][3])
        let volumePrism = geometry.volumeOfRectangularPrism(arr[i][3]);
        console.log(volumePrism);
    }
    catch(error){
        console.log(error);
    }
    console.log("\n");   
} */
let VOR = geometry.volumeOfRectangularPrism(4,2,3);
console.log(`The volume of rectangular prism is: ${VOR}`);
console.log("\n");
console.log("Function 2: This method will calculate the surface area of rectangular prism");
let SOR = geometry.surfaceAreaOfRectangularPrism(1,2,3);
console.log(`The surface area of rectangular prism is: ${SOR}`);
console.log("\n");
console.log("Function 3: This method will calculate the volume of sphere");
let VOS = geometry.volumeOfSphere(2);
console.log(`The volume of sphere is: ${VOS}`);
console.log("\n");
console.log("Function 4: This method will calculate the volume of sphere");
let SOS = geometry.surfaceAreaOfSphere(2);
console.log(`The surface area of sphere is: ${SOS}`);
console.log("\n")
const util = require('./utilities');
console.log("Utilities:")
const first = {a: 2, b: 3};
const second = {a: 2, b: 4};
const third = {a: 2, b: 3};
console.log("Function 1 for deepEquality:");
console.log(util.deepEquality(first, second)); // false
console.log(util.deepEquality(first, third)); 
console.log("\n");
const testArr = ["a", "a", "b", "a", "b", "c"];
console.log("Function 2 for uniqueElements:");
console.log(util.uniqueElements(testArr));
console.log("\n");
const test = "Hello, the pie is in the oven";
console.log("Function 3 for countingCharacters:")
const charMap = util.countOfEachCharacterInString(test); 
console.log(charMap);
