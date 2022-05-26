//expressions(표현식): produces value 
3+4
1991 
true && false && !false

//statements(문): full sentences that translates actions (if, switch etc)
if (23>10){
    const str = '23 is bigger';  //statement; (value X)
}

// 차이점 
// 템플릿 리터럴에서 표현식expression만 넣을 수 있고 statement 못 넣는다

console.log(`i'm ${2037-1991} years old`);
// 숫자식은 Expression. 
// 중괄호 안에 if문을 넣을 수 없다. Unexpected token'if'

const me = 'Jonas';
//me는 넣을 수 있다 
//변수도 문자열로 치환되기 때문에 