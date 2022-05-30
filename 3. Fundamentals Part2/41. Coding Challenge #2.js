// Steven Is Building His Tip Calculator, Using The Same Rules As Before: Tip 15% Of The Bill If The Bill Value Is Between 50 And 300, And If The Value Is Different, The Tip Is 20%.1. Write A Function 'CalcTip' That Takes Any Bill Value As An Input And Returns The Corresponding Tip, Calculated Based On The Rules Above (You Can Check Out The Code From First Tip

//     Steven is building his tip calculator, using the same rules as before: 
//     Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
    
//     1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
//     2. And now let's use arrays! So create an array 'bills' containing the test data below.
//     3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
//     4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
    
//     TEST DATA: 125, 555 and 44


// 50~300   15%
// or       20%
// 1. clacTip 계산된 해당 팁을 반환하는 함수,  청구서 값 100 사용 
// 2. bills  testDataArray
// 3. tips  array adding tips
//bo. total 총 값 팁을 포함하는 합계 배열 


const calcTip = function gimme(money){
    if(money >=50 && money <=300){
        return money * 0.15;
    } else {
        return money * 0.20;
    }
}

//1. test ✅
console.log(calcTip(100));

//2. bills✅
const bills = [125, 555, 44]

//3. tips
// const tips = function tipArray(dex){
//  for([i]=0 , i>=tipArray.length-1, i++){
//     return calcTip(i);
//  }
// }


// 조나스
//1.  gimme 안 써도 된다. 변수 저장했으니
// 3항 연산자
const jonasTip = function(bill){
    return bill >=50 && bill<=300 ? bill *0.15 : bill * 0.2;
}
// arrow function
// const jonaTip = bill=>
//     bill >=50 && bill<=300 ? bill *0.15 : bill * 0.2;

//3. 💡
//const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
//[배열안에 calcTip펑션안에 (배열[인덱스]])]

//const totals = bills + tips ;  //not gonna work / 125,555,4418.75,111,8.8 이렇게 나옴 
//bonus 💡
const totals = [bills[0]+ tips[0], bills[1] + tips[1], bills[2] + tips[2]];  
console.log(totals);
