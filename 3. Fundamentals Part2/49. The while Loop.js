// for (let rep = 1; rep <= 10; rep++ ){
//     console.log(`Lifting weight repetition ${rep}π§ββοΈ`); 
// }

let rep = 1; //μ΄κΈ°ν outside 
while (rep <= 10) { //while μ‘°κ±΄μμ΄ true~
    //console.log(`WHILE: Lifting weight repetition ${rep}π§ββοΈ`);
    rep++; //μ¦κ°μ
}

//rolling dice
let dice = Math.trunc(Math.random() * 6) + 1; // λ§€μ°λλ€μ΄ λ°μλ© -> μ μλ‘ λ°κΏμ€ βλμ€μ λ λ°°μ
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`); // infinite loop crash the browser. need to reassign  
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end...`); //π€©
}
//μΌλ§λ λ§μ μ£Όμ¬μλ₯Ό λμ§ μ§ λͺ¨λ₯Ό λ while loop <--> for loopμ κ·Έ λ°λ