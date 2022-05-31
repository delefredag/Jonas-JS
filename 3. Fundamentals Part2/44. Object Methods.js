//📝연습 필요
 
const ji ={
    firstName : 'Ji',
    lastName : 'Kim',
    birthYear : '1994',
    job : 'Student',
    friends : ['Choi', 'Lee', 'Park'],
    hasDriversLicense : true,
    //1️⃣ calcAge: function(birthYear){ // calcaAge에 할당한 표현식이 필요 
    //     return 2037-birthYear;
    // }

    //2️⃣ calcAge: function(){ 
    //     // console.log(this);
    //     return 2037- this.birthYear; //ji.birthYear이라고 하면 변수에2를 붙였을 때 나머지도 다 붙여줘야하는 번거로움 
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age; //아무것도 리턴하지 않아도 되지만 연습용으로 써준다. this는 프로퍼티도 생성해주지만 여기서 안 써주면 아래 여러번 생성한 콘솔에는 43대신 undefined만 나온다
    },

    //challenge 
    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}years old ${ji.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`//✅ 여기서는 calc()함수로 다르게 쓴 이유 조나스도 어려울거라고 말함, boolean은 3항연산자로 씀 
    }
};

// const calcAge = function(birthYear){
//     return 2037-birthYear;
// }

console.log(ji);
console.log(ji.calcAge()); // = (ji['calcAge'](1994));
//1️⃣ 1994 인자는 객체 안에 있는 birthYear의 밸류 값과 같다 
//직접 쓰면 숫자 하나가 틀릴 수 있으니까 키값 불러오는 연습 해보자
//실수를 안 하더라도 여전히 이상적인 코드는 아니다. cuz we're not keeping the code dry
// so we're violating don't repeat yourself principle 

// 1번 먼저 기존 펑션을 주석처리하고 새로 2번 넣고 아래처럼 불러옴 

console.log(ji.calcAge()); 
console.log(ji.calcAge());
console.log(ji.calcAge());
// 2️⃣함수가 계속 호출되면 시간이 걸린다. 리턴이 호출한 만큼 나오게된다. 
// 이 짧은 식에서는 문제가 안 되지만 무거운 코드에서는 여러 번 불러오는 것은 나쁜 연습이다. 


// 🍋 age를 한 번만 계산하고, 객체에 저장한 뒤에 필요할 때 age를 가져오는게 낫다. 
// calcAge : function() {
//     return 2037 - this.birthYear;
//     this.age에 리턴 이하를 저장하고 리턴과 세미콜론만 따로 빼준다.
// }

console.log(ji.age);
console.log(ji.age);
console.log(ji.age);

// 연습
// "Jonar is 30 year old teacher. and he has a driver's license" 
// add all the data string here 
const getSummery ={
    firstName : "Jonar",
    birthYear : '1993',
    hasDriversLicense : true,
    job : "Architect",
    calcAge2 : function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    }
}
console.log(`${getSummery.firstName} is ${getSummery.age}years old.`);
//✅undefined years old 가 나오고, boolean이 들어간 스트링을 완성하지 못했다.

// 퀴즈에서 원하는 식은 객체 안에 getSummery 키값을 넣는 것이었음 
console.log(ji.getSummary());