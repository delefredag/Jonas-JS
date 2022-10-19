'use strict';
 console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas'
let job = 'teacher';
const year= 1991;

// Functions
/**console.log(addDecl(2,3));  //function
console.log(addExpr(2,3));  //const TDZ error 
console.log(addArrow(2,3)); */


function addDecl(a,b){
  return a+b;
}

const addExpr = function(a,b){
  return a+b;
}

const addArrow = (a,b)=> a+ b;
// var addExpr. addArrow console 해도 not a function (undefined)


// var Example💩
console.log(undefined); // undefined
console.log(numProducts); // undefined
if(!numProducts) deleteShoppingCart();

var numProducts = 10; // 10은 0이 아니고 falsy가 아닌데도 'All products deleted!가 출력됨  - var - undefined 인채로 호이스팅 
function deleteShoppingCart(){
  console.log('All products deleted!');
}


var x =1; //window에서는 x:1 값 찾을 수 있음
let y =2;
const z = 3;
//크롬 윈도우 콘솔창
/**
console.log(x === window.x);   true
console.log(y === window.y);   false
console.log(z === window.z);   false
*/
