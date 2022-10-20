'use strict';
 
console.log(this);

const calcAge = function(birthYear){
  console.log(2037 - birthYear);
  console.log(this); //undefined in strict mode 
}
calcAge(1991);


const calcAgeArrow = birthYear=>{
  console.log(2037 - birthYear);
  console.log(this); //{} arrow function doesn't get its own this keyword. get lexical parents {window} as global scope instead
}
calcAgeArrow(1980);

const jonas ={
  year: 1991,
  calcAge : function() {
    console.log(this);
    console.log(2037-this.year);
  }
}
jonas.calcAge();

const matilda = {
  year :2017,
};
matilda.calcAge = jonas.calcAge;
console.log(matilda);
console.log(jonas);

matilda.calcAge();

const f = jonas.calcAge;
f(); //app crashed