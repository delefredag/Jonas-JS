// not that fun repeating like this  ---> Hurra Array! 
const friend1 = 'Choi';
const friend2 = 'Lee';
const friend3 = 'Park';

const friends = ['Choi', 'Lee', 'Park']; // 브라켓을 이용해서 
console.log(friends);


const yearsIlove = new Array(1991, 1984, 2008, 2020); // 어레이 펑션을 이용해서 
console.log(yearsIlove);

console.log(friends[0]) //인덱스 첫번째? Choi 
console.log(friends.length)// 배열의 갯수? 3 
console.log(friends[friends.length - 1]); // 마지막 배열 Park
//[] 안에는 expression을 넣을 수 있다. statement 안됨 

friends[2] = 'Yui';
console.log(friends);
//위에서 friends를 const로 선언했지만 여기서 바꿀 수 있다. ✅
// 원시타입만 불변성을 가진다. only primitive values are immutable
// 배열은 원시 데이터가 아니다. Array is not a primitive value

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 -1991, 'teacher', friends];

console.log(jonas);
console.log(jonas.length);


//Array exercise
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
//console.log(calcAge(years)); //NaN
//it's not illegal but not gonna work. (years) is an array, hard to be an argument.


const age1 = calcAge(years[0]); 
const age2 = calcAge(years[1]); 
const age3 = calcAge(years[years.length-1]); 
console.log(age1, age2, age3); // 47, 70, 19 

const ages = [calcAge(years[0]), calcAge(years[1]), 
calcAge(years[years.length-1])];
console.log(ages); // [ 47, 70, 19 ]

