function CheckifproperNumber (val, valName){
    if (typeof val !== "number"){
        throw `${valName || "provided varible"} is not a numer`;
    }

    if (isNaN(val)){
        throw `${valName || "provided varible"} is NaN`;
    }
}

module.exports = {
   
// add part
AddTwoNumber: (num1, num2) => {
    CheckifproperNumber(num1, "first number");
    CheckifproperNumber(num2, "second number");
    
    return num1 + num2;
    },
    
    // divide part
    DivideTwoNumber: (num1, num2) => {
    CheckifproperNumber(num1, "numerator");
    CheckifproperNumber(num2, "denominator");
     if (num2 === 0){
         throw "denominator cant be 0";
     }
    return num1 / num2;
    },
    
    // multiply part
    MultiplyTwoNumber: (num1, num2) =>{
    CheckifproperNumber(num1, "first");
    CheckifproperNumber(num2, "second");
    
    return num1 * num2;
    },
    
    //subtract part
    SubtractTwoNumber: (num1, num2) =>{
        CheckifproperNumber(num1, "first");
        CheckifproperNumber(num2, "second");
    
        return num1 - num2;
    }


}