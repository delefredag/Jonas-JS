//๐์ฐ์ต ํ์
 
const ji ={
    firstName : 'Ji',
    lastName : 'Kim',
    birthYear : '1994',
    job : 'Student',
    friends : ['Choi', 'Lee', 'Park'],
    hasDriversLicense : true,
    //1๏ธโฃ calcAge: function(birthYear){ // calcaAge์ ํ ๋นํ ํํ์์ด ํ์ 
    //     return 2037-birthYear;
    // }

    //2๏ธโฃ calcAge: function(){ 
    //     // console.log(this);
    //     return 2037- this.birthYear; //ji.birthYear์ด๋ผ๊ณ  ํ๋ฉด ๋ณ์์2๋ฅผ ๋ถ์์ ๋ ๋๋จธ์ง๋ ๋ค ๋ถ์ฌ์ค์ผํ๋ ๋ฒ๊ฑฐ๋ก์ 
    // }

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age; //์๋ฌด๊ฒ๋ ๋ฆฌํดํ์ง ์์๋ ๋์ง๋ง ์ฐ์ต์ฉ์ผ๋ก ์จ์ค๋ค. this๋ ํ๋กํผํฐ๋ ์์ฑํด์ฃผ์ง๋ง ์ฌ๊ธฐ์ ์ ์จ์ฃผ๋ฉด ์๋ ์ฌ๋ฌ๋ฒ ์์ฑํ ์ฝ์์๋ 43๋์  undefined๋ง ๋์จ๋ค
    },

    //challenge 
    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()}years old ${ji.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`//โ ์ฌ๊ธฐ์๋ calc()ํจ์๋ก ๋ค๋ฅด๊ฒ ์ด ์ด์  ์กฐ๋์ค๋ ์ด๋ ค์ธ๊ฑฐ๋ผ๊ณ  ๋งํจ, boolean์ 3ํญ์ฐ์ฐ์๋ก ์ 
    }
};

// const calcAge = function(birthYear){
//     return 2037-birthYear;
// }

console.log(ji);
console.log(ji.calcAge()); // = (ji['calcAge'](1994));
//1๏ธโฃ 1994 ์ธ์๋ ๊ฐ์ฒด ์์ ์๋ birthYear์ ๋ฐธ๋ฅ ๊ฐ๊ณผ ๊ฐ๋ค 
//์ง์  ์ฐ๋ฉด ์ซ์ ํ๋๊ฐ ํ๋ฆด ์ ์์ผ๋๊น ํค๊ฐ ๋ถ๋ฌ์ค๋ ์ฐ์ต ํด๋ณด์
//์ค์๋ฅผ ์ ํ๋๋ผ๋ ์ฌ์ ํ ์ด์์ ์ธ ์ฝ๋๋ ์๋๋ค. cuz we're not keeping the code dry
// so we're violating don't repeat yourself principle 

// 1๋ฒ ๋จผ์  ๊ธฐ์กด ํ์์ ์ฃผ์์ฒ๋ฆฌํ๊ณ  ์๋ก 2๋ฒ ๋ฃ๊ณ  ์๋์ฒ๋ผ ๋ถ๋ฌ์ด 

console.log(ji.calcAge()); 
console.log(ji.calcAge());
console.log(ji.calcAge());
// 2๏ธโฃํจ์๊ฐ ๊ณ์ ํธ์ถ๋๋ฉด ์๊ฐ์ด ๊ฑธ๋ฆฐ๋ค. ๋ฆฌํด์ด ํธ์ถํ ๋งํผ ๋์ค๊ฒ๋๋ค. 
// ์ด ์งง์ ์์์๋ ๋ฌธ์ ๊ฐ ์ ๋์ง๋ง ๋ฌด๊ฑฐ์ด ์ฝ๋์์๋ ์ฌ๋ฌ ๋ฒ ๋ถ๋ฌ์ค๋ ๊ฒ์ ๋์ ์ฐ์ต์ด๋ค. 


// ๐ age๋ฅผ ํ ๋ฒ๋ง ๊ณ์ฐํ๊ณ , ๊ฐ์ฒด์ ์ ์ฅํ ๋ค์ ํ์ํ  ๋ age๋ฅผ ๊ฐ์ ธ์ค๋๊ฒ ๋ซ๋ค. 
// calcAge : function() {
//     return 2037 - this.birthYear;
//     this.age์ ๋ฆฌํด ์ดํ๋ฅผ ์ ์ฅํ๊ณ  ๋ฆฌํด๊ณผ ์ธ๋ฏธ์ฝ๋ก ๋ง ๋ฐ๋ก ๋นผ์ค๋ค.
// }

console.log(ji.age);
console.log(ji.age);
console.log(ji.age);

// ์ฐ์ต
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
//โundefined years old ๊ฐ ๋์ค๊ณ , boolean์ด ๋ค์ด๊ฐ ์คํธ๋ง์ ์์ฑํ์ง ๋ชปํ๋ค.

// ํด์ฆ์์ ์ํ๋ ์์ ๊ฐ์ฒด ์์ getSummery ํค๊ฐ์ ๋ฃ๋ ๊ฒ์ด์์ 
console.log(ji.getSummary());



//์ฐ์ต 

// const ji = {
//     firstName : 'Ji',
//     lastName : 'Kim',
//     birthYear : 1994,
//     job : 'teacher',
//     friends : ['Choi', 'Lee', 'Park'],
//     hasDriversLicense : true,

//     // calcAge : function(){
//     //    // console.log(this); //obj ji ํค ๋ฐธ๋ฅ๋ค์ด ๋์ด
//     //     return 2037- this.birthYear;
//     // }
//     calcAge : function () {
//         this.age = 2037 - this. birthYear; //to create new property ".age"
//         return this.age; //return;๋ง ํ๋ฉด Undefined 
//     }, //ํจ์๋ ์ฝค๋ง ํ์, ๋ฉ์๋๋ง๋ค,

//     getSummary : function(){
//         return `${this.firstName} is a ${this.calcAge()}-year old ${ji.job}, and she has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }
// };

// console.log(ji.calcAge()); //1994๊ฐ ์ด๋ฏธ Ji object์ ์๋ค 
// //console.log(ji['calcAge'](1994));// ์ซ์๋ฅผ 1993์ผ๋ก ์๋ชป ์ธ ์ ์์ผ๋ ์ด๋ ๊ฒ ์ง์  ์ซ์๋ฅผ ์ฐ๋ฉด ์๋๋ค
// //don't repeat yourself , keep code dry
// //this๋ฅผ ์ด์ฉํด์ ์ ๊ทผํ๊ธฐ

// console.log(ji.age); //result is same as above (ji.calcAge())
// console.log(ji.age);
// console.log(ji.age);

// //ex Challenge 
// //'Ji is a 46-year old teacher. and she has a/no driver's license' 
// console.log(ji.getSummary());
