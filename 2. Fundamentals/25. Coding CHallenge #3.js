// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK �

// 두팀 평균 점수 비교, 동점도 있음 
// 보너스 1 최소점수 100 
// 보너스 2 최소점수는 동점에도 영향. 100 
// 돌핀 97 112 101 
// 코알 109 95 123
// 
// 돌핀 97 112 101
// 코알 109 95 106


// 데이터 1
const averageDolphins = (97 + 112 + 101)/3
const averageKoalas = (109 + 95 + 123)/3

if(averageDolphins>averageKoalas){
    return console.log('Dolphins wins the trophy');
} else if(averageDolphins<averageKoalas){
    return console.log('Koalas wins the trophy')
} else{
    return console.log(`they're draw`);
}


// 데이터 2
const averageDolphins = (97 + 112 + 101)/3
const averageKoalas = (109 + 95 + 106)/3

if(averageDolphins>averageKoalas){
    return console.log('Dolphins wins the trophy');
} else if(averageDolphins<averageKoalas){
    return console.log('Koalas wins the trophy')
} else{
    return console.log(`they're draw`);
}



// Jonas 
const averageDolphins = (97 + 112 + 101)/3
const averageKoalas = (109 + 95 + 106)/3

if(averageDolphins>averageKoalas && averageDolphins>=100){
    return console.log('Dolphins wins the trophy🏆');
} else if(averageDolphins<averageKoalas && averageKoalas>=100){
    return console.log('Koalas wins the trophy🏆')
} else if(averageDolphins === averageKoalas
    &&averageDolphins>=100
    &&averageKoalas>=100){
    return console.log(`they're draw!`);
} else {
    console.log('No one wins the trophy🥲');
}
// 점수를 100 이하로 하면 아무도 이기지 않는 결과가 도출