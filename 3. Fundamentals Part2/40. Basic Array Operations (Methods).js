//useful methods
//π μλ€ μΆκ° λ©μλ Add elements
const friends = ["Choi", "Lee", "Park"];
friends.push("Uji"); // .push κΈ°μ‘΄μ λ°κΏ? 
console.log(friends);
console.log(friends.length);
const newLength = friends.push('Back') // μΆκ°ν λ€μμ λ°λ‘ κΈΈμ΄λ₯Ό κ΅¬νλκ² ννκ±΄ μλμ§λ§ μ΄λ κ²λ ν  μ μμ

//push, unshift λ°°μ΄μ μλ‘μ΄ κΈΈμ΄ λ°ν (they return the length of the new array)
friends.unshift('Front');
console.log(friends);

//π μλ€ μ κ±° λ©μλ Remove elements
friends.pop() // Last
friends.pop() // μΈ μλ‘ λ μκ° 
console.log(friends);
friends.shift() //First 
friends.shift() //First 
console.log(friends);

//π λͺλ²μ§Έ μΈλ±μ€? .indexOf
console.log(friends.indexOf('Park')); //Parkλ [1]μΈλ±μ€μ μμΉ 
console.log(friends.indexOf('μ£Όλ')); //μ£Όλλ μμΌλ -1 κ²°κ³Ό λμ΄ 

//π includes true/false   ES6
console.log(friends.includes('μ£Όλ')); //false 
// strict equality for this check. it doesn't type coercion.
friends.push(23); //λλ² 23 νΈμ¬ 
console.log(friends.includes('23')); //λ¬Έμμ΄ '23' μλ? false 
console.log(friends.includes(23)); //λλ² '23' μλ? true

if  (friends.includes('Park')){
    console.log('You have a friend called Park');
} else {
    console.log(`Who's that?`);
}

