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
// Β§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Β§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// Β§ To calculate average of 3 values, add them all together and divide by 3
// Β§ To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores π

// μ½μλΌ, λν
// λν νκ·  λλ°°μ¬μΌ μ΄κΈ΄λ€. μκ·ΈλΌ μΉμλ μμ΄. 
const calcAverage = (a,b,c)=> (a+b+c)/3  //λ¦¬ν΄νμμλ€ κ°μ κ°κ³ μκΈ°λλ¬Έμ 
console.log(calcAverage(3,4,5)); // μ¬κΈ°κΉμ§ λλ λκ°μ 

//data1
const scoreDolphins = calcAverage((44,23,71)); // λ€λ§ scoreDolphins λ³μ μ μΈν¨  π‘
const scoreKoalas = calcAverage(65,54,49);

//data2
console.log(calcAverage(85,54,41)); //λ΄κ° ν κ² 
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
console.log(checkWinner(scoreDolphins,scoreKoalas)); //μ‘°λμ€ λ³μμ μΈ π‘
//data2
console.log(checkWinner(60,28)); //λ΄κ° ν κ² 

//μ½μκ³Ό λ³μμ μ₯μ λκ°λ¨κ±Έ μμμ κ³΅λΆνλκ² λ μ€λ₯Έλ€. 





