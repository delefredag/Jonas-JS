// Conditional Operator 조건연산자
// Ternary has three parts 3항연산자   <-> 2항 연산자 : 1+2 
// ⬆️expression

const age = 23;
age >=18 ? console.log('I like to drink wine🍷') :
console.log('I like to drink water💧');
//condition : age>=18
// if : console.log 1
// else : console. log2 

//operator is expression because it produces a value

const drink = age>=18 ? 'wine🍷' : 'water💧';
console.log(drink); 
//3항연산자로 if/else 쓰지않고 한 줄로 만들었다 


let drink2;  // drink2 변수를 if/else 블록 밖에서 구한다 
if(age>= 18){
    drink2 = '🍷';
} else{
    drink2 = '💧';
}
console.log(drink2);
// 왜냐면 블록 안에서 변수를 설정하면
// 블록 밖에서는 쓸 수 없다. 


console.log(`Jeg vil drikker ${age>=18 ? 'rødd vin🍷' : 'juice🧃'}`);
//${} 안에 어떤 표현식도 넣을 수 있다. 
//3항 연산자는 표현식이기 때문에 넣을 수 있다. 
// if문(statement)은 안됨 value 없음 

// 터너리 오퍼레이터가 if/else를 완전히 대체하지는 않아. if문은 여전히 필요해
// 하지만 빨리 치기에는 좋지 
