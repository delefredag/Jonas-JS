// to use over and over again

function logger() {
 console.log('My name is Ji');
}

// calling / running / invoking function  (means same)
logger();

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

// fruitProcessor(5,0); 변수없이 그냥 함수만 쓰면❓ 콘솔결과로  5 0 만 나온다. 
const appleJuice = fruitProcessor(5,0); //💾변수에 함수를 저장후 아래 콘솔을 찍으니 문자열과 함께 나온다 
console.log((appleJuice)); //변수를 💾콘솔안에
console.log(fruitProcessor(5,0)); // 변수에저장된 함수를 💾콘솔안에

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

//코드들은 Dry해야하고 repeat 하면 안된다. => 클린코드의 길
//reusable 재사용성이 좋은 게 클린코드 

const num = Number('23');
console.log(num);


// My note 
function thisWay(){
    console.log('This is unusual loading');
}
thisWay();

// case 1 of split way 
function parameters (en, to){
    console.log(en, to);
}
parameters(1,2);  // 1 2 

// case 2 of split way : 변수 선언하고 리턴까지함 
function moreProcess(en, to){
    const declare = `I declare ${en}times and store ${to}times.`
    return declare;
}
moreProcess(1,2); // 함수만 쓰면❓여전히 숫자 1 2 만 나온다 
console.log(moreProcess(3,4)); // 함수를 콘솔로그 안에 넣으면 💾 문자열도 출력

//case 3 of split way : 함수를 다른 변수에 저장한다 
const store = moreProcess(1,2); 
console.log(store); //변수 store에  함수를 저장하고 콘솔로그 안에 저장한 변수를 넣으면 💾 문자열과 함께 나온다 




