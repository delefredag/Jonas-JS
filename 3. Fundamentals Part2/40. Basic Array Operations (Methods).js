//useful methods
//🍋 앞뒤 추가 메소드 Add elements
const friends = ["Choi", "Lee", "Park"];
friends.push("Uji"); // .push 기존을 바꿈? 
console.log(friends);
console.log(friends.length);
const newLength = friends.push('Back') // 추가한 다음에 바로 길이를 구하는게 흔한건 아니지만 이렇게도 할 수 있음

//push, unshift 배열의 새로운 길이 반환 (they return the length of the new array)
friends.unshift('Front');
console.log(friends);

//🍋 앞뒤 제거 메소드 Remove elements
friends.pop() // Last
friends.pop() // 쓸 수록 날아감 
console.log(friends);
friends.shift() //First 
friends.shift() //First 
console.log(friends);

//🍋 몇번째 인덱스? .indexOf
console.log(friends.indexOf('Park')); //Park는 [1]인덱스에 위치 
console.log(friends.indexOf('주디')); //주디는 없으니 -1 결과 나옴 

//🍋 includes true/false   ES6
console.log(friends.includes('주디')); //false 
// strict equality for this check. it doesn't type coercion.
friends.push(23); //넘버 23 푸쉬 
console.log(friends.includes('23')); //문자열 '23' 있니? false 
console.log(friends.includes(23)); //넘버 '23' 있니? true

if  (friends.includes('Park')){
    console.log('You have a friend called Park');
} else {
    console.log(`Who's that?`);
}

