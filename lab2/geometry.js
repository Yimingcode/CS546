function checkIsProperNumber(val, valName){
    if (val == null){
        throw valName + " cannot be empty";
    }
    if (typeof val !== "number"){
        throw valName + "is not a number";
    }
    if (isNaN(val)){
        throw valName + " cannot be NaN"
    }
    if (val <= 0 ){
        throw valName + " cannot be 0 or less than 0";
    }
    if (typeof val == undefined){
        throw valName + "cannot be undefined";
    }
}
function volumeOfRectangularPrism(l, w, h) {
    checkIsProperNumber(l, "l");
    checkIsProperNumber(w, "w");
    checkIsProperNumber(h, "h");
    if(arguments.length !== 3){
        throw "you should input three arguments";
    }
    return l * w * h;    
    }


function surfaceAreaOfRectangularPrism(l, w, h) {
    checkIsProperNumber(l, "l");
    checkIsProperNumber(w, "w");
    checkIsProperNumber(h, "h");
    if(arguments.length !== 3){
        throw "you should input three arguments";
    }
    return 2 * l * w + 2 * w * h + 2 * l * h;
}

function volumeOfSphere(r) {
    checkIsProperNumber(r, "r");
    return 4 * Math.PI * Math.pow(r, 3) / 3;
     }


function surfaceAreaOfSphere(r) {
    checkIsProperNumber(r, "r");
    return Math.PI * 4 * Math.pow(r, 2);   
}

module.exports = {
    volumeOfRectangularPrism,
    surfaceAreaOfRectangularPrism,
    volumeOfSphere,
    surfaceAreaOfSphere
}
