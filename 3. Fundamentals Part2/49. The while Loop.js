// for (let rep = 1; rep <= 10; rep++ ){
//     console.log(`Lifting weight repetition ${rep}🧛‍♀️`); 
// }

let rep = 1; //초기화 outside 
while (rep <= 10) { //while 조건식이 true~
    //console.log(`WHILE: Lifting weight repetition ${rep}🧛‍♀️`);
    rep++; //증감식
}

//rolling dice
let dice = Math.trunc(Math.random() * 6) + 1; // 매쓰랜덤이 데시멀 -> 정수로 바꿔줌 ✅나중에 더 배움
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`); // infinite loop crash the browser. need to reassign  
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`); //🤩
}
//얼마나 많은 주사위를 던질 지 모를 때 while loop <--> for loop은 그 반대