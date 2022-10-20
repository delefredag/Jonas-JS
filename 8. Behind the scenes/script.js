'use strict';



const jonas ={ //not global, it's just block
  firstName: 'Jonas',
  year: 1991,
  calcAge : function() {
    console.log(this);
    console.log(2037-this.year);

    /** Solution 1
    const self = this; // self or that
    const isMillenial = function(){
      console.log(self.year >= 1981 && self.year <= 1996); //
      //console.log(this.year >= 1981 && this.year <= 1996); //year undefined
    };
    */

    // Solution 2 arrow function
    const isMillenial = ()=>{
      console.log(this); //A function uses this keyword in the parent scope (inherited)
      console.log(this.year >= 1981 && this.year <= 1996);
    };


    isMillenial();
  },
  greet: ()=> { //undefined
    console.log(`Hey ${this.firstName}`); //arrow function doesn't get its own this keyword
 },

 /** Use regular function instead
 greet : function(){
  console.log(this);
  console.log(`Hey ${this.firstName}`);
 }
 */
}

jonas.greet(); //Hey undefined
console.log(this.firstName); //undefined :Window Object /there's no first name

jonas.calcAge(); //year undefined, so add const self


// Arguments keyword
const addExpr = function (a,b){
  console.log(arguments);
  return a + b;
};
addExpr(2,5);
addExpr(2,5, 8, 12);

var addArrow = (a,b) => {
  console.log(arguments);
  return a+b;
};
addArrow(2, 5, 8);