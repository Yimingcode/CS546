const questionOne = function questionOne(arr) {
  let sum=0;
    arr.map((item)=>{
        sum+=Math.pow(item,2);
    })
    return sum;
}
const questionTwo = function questionTwo(num) { 
    var n1 = 1,
        n2 = 1,
        sum = 1;
    for(let i = 3; i <= num; i += 1) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return sum;
}

const questionThree = function questionThree(text) {
    let num=0;
    let arr = text.split(" ");
    arr = arr.filter((item)=>item!='');
    arr.map((item)=>{
        for(let i=0;i<item.length;i++){
            if(item[i]=='a'||item[i]=='e'||item[i]=='i'||item[i]=='o'||item[i]=='u'||item[i]=='A'||item[i]=='E'||item[i]=='I'||item[i]=='O'||item[i]=='U'){
                    num++;
             }
         }
    })
    return num;
}

const questionFour = function questionFour(num) {
    if(num<0) return NaN;
    if(num==0&&num==1) return 1;
    var sum=1;
    while(num>0){
            sum*=num;
            num--;
    }
    return sum;
}
       


module.exports = {
    firstName: "Yiming", 
    lastName: "Xu", 
    studentId: "10438422",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};