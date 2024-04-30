

function calculate(num1,num2,){
function operation(num1,num2,callback){
  let result =callback(num1,num2);
  return result;
}

function multiplication(num1,num2){
   
    return num1*num2;
}

function addition(num1,num2){
    return num1+num2;
}

 const add = operation(num1,num2,addition);
 console.log('sum is',add);

 const mul = operation(num1,num2,multiplication);
 console.log('multiply is',mul);
}
calculate(5,3);