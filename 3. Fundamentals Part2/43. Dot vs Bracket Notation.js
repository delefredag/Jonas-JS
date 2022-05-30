const ji = { 
    firstName : 'Ji',
    lastName : 'Kim',
    age : 2023- 1994,
    job : 'Student',
    learning : ['array', 'inside', 'array2'],
    friends : ['Choi', 'Lee', 'Park']
};
console.log(ji); //properties are ordered alphabetically. it doesn't matter 

//프로퍼티명으로 소환되는 객체 프로퍼티들 2ways : dot vs bracket notation
console.log(ji.lastName); //dot notation operator : it'll go to ji object and then retrieve the property with the name that we specified here
console.log(ji['lastName']); //브라켓 안에 '' 필요. expression도 가능한 브라켓✨ 

// 💡프로퍼티를 객체에 저장?
const nameKey = 'Name' ; 

//👏브라켓 노테이션 문자열+프로퍼티 컨캣 와우 (꽤 흔하게 쓰인다고 함) 💡닷노테이션은 안 되는 것 
console.log(ji['first' + nameKey]); //헐 ! ! ! 👁 O 👁  //Ji fra firstName
console.log(ji['last' + nameKey]); //헐 ! ! ! 👁 O 👁  //Ji fra firstName

// dot : cleaner, easier to use 
// [] : even more clear and fun 


//prompt() 메소드는 노드몬보다 콘솔창이 더 좋다🖥 창에서 프로퍼티명(키)을 입력하면 밸류 반환 
//const interestedIn = prompt('what do you want to know about Ji? Choose between firstName, lastName, age, job and friends');
//console.log(interestedIn);
//console.log(ji. 없는 프로퍼티명 닷노테이션하면 Undefined 나옴)
//console.log(ji.interestedIn);// undefined 
//console.log(ji[interested])  interestedIn이 prompt니까 콘솔창에 job 치면 Student 출력 👏브라켓 노테이션이 가져온 메소드 
// if(ji[interestedIn]){
//     console.log(ji[interestedIn]);
// } else {
//    console.log('Wrong request! Choose between lists i suggested')
//}

ji.location = 'South Korea';
ji['twitter'] = '@delefredag';
console.log(ji);


//challenge to dynamic way
// 'Ji has 3 friends, and her bf is called Choi'  first friends
const myFriends = {
    myName : 'Ji',
    friends : 3,
    bf : 'Choi'
}
console.log(myFriends.myName);

// answer : The data fra above, ikke hard coding 
console.log(`${myFriends.myName} has ${myFriends.friends}friends, and her bf is called ${myFriends.bf}` )

console.log(`${ji.firstName} has ${ji.friends.length}friends, and her bf is called ${ji.friends[0]}`)
//ji.friends 어레이호출  이 배열의 길이는 .length 다시 붙이면 됨✅

//MDN operator Table에서 
//[...] : Computed Member Access 라고 정의함 
// compute property name to access