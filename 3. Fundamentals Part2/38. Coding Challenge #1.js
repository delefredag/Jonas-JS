// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// 코알라, 돌핀
// 두팀 평균 두배여야 이긴다. 안그럼 승자는 없어. 
const calcAverage = (a,b,c)=> (a+b+c)/3  //리턴필요없다 값을 갖고있기때문에 
console.log(calcAverage(3,4,5)); // 여기까진 나랑 똑같음 

//data1
const scoreDolphins = calcAverage((44,23,71)); // 다만 scoreDolphins 변수 선언함  💡
const scoreKoalas = calcAverage(65,54,49);

//data2
console.log(calcAverage(85,54,41)); //내가 한 것 
console.log(calcAverage(23,34,27));


function checkWinner(avgDolphins,avgKoalas){
 if(avgDolphins>avgKoalas && avgDolphins>= 2*avgKoalas){
     return (`dolphines win (${avgDolphins} vs ${avgKoalas})`)
 } else if(avgDolphins<avgKoalas && avgKoalas>= 2*avgDolphins) {
    return (`koalas win (${avgDolphins} vs ${avgKoalas})`)
 }else{
    return ('no team wins!')
 }
}
//data1 
console.log(checkWinner(scoreDolphins,scoreKoalas)); //조나스 변수선언 💡
//data2
console.log(checkWinner(60,28)); //내가 한 것 

//콘솔과 변수저장은 똑같단걸 앞에서 공부했던게 떠오른다. 





