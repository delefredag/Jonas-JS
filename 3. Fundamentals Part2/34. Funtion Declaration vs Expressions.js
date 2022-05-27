//CALL
const age1 = calcAge1(1994); //변수 선언 age1에 함수에 인자를 받은 값을 넣음 
console.log(age1); 


//DEFINE  선언식에서는, 위에서처럼 call부터하고 뒤에서 define해도 콘솔이 나온다. 
// Function declaration 📣
function calcAge1(birthYear) {
    //const age = 2037 - birthYear;
    //return age; 

    //위 두 줄 변수 치우면 결국 한 줄 
    return 2037 - birthYear;
}




// Function expression 🖌 
 //함수 표현식 전체를 긁어서⬆️ 새로운 변수calcAge2에 저장했다. 
const calcAge2 = function(birthYear){ //함수에 이름이 없으므로 `익명함수` anonymous function
    return 2037 - birthYear;
}
const age2 = calcAge2(1994); //변수 선언 age2에 익명함수에 인자를 받은 값을 넣음 
console.log(age1,age2);
//24번째 줄 CALL 
//표현식에서는 CALL이 먼저 오면 안된다. 
//calc2가 이니시 전에 접근할 수 없기 때문에 ✅호이스팅의 이유, 나중에 배움. 

//expression은 value를 갖고 있다
//선언된 변수는 함수 value를 갖고 있다 
//함수들은 사실 그냥 값들이다. functions are actually just values.
// just as a number or a string or a boolean value.  function !== type
// 결국 변수에 선언 할 수 있다는 말

//개발자마다 어떤 포맷을 좋아하는지 다 다름, Jonas는 표현식을 좋아함 
// declaration vs expression ✅
//함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
//함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.
//‘함수 표현식이 호이스팅에 영향을 받지 않는다’ 는 특징 이외에도 함수 선언식보다 유용하게 쓰이는 경우는 다음과 같다.
//1. 클로져로 사용
//2. 콜백으로 사용 (다른 함수의 인자로 넘길 수 있음)

//표현식? 값으로 평가될 수 있는 문. 자바스크립트 모던 딥다이브 52p
//함수 선언문 -159p , 함수 표현식 -163p
//변수선언과 함수 정의
//변수는 선언(declaration)한다고 했지만 함수는 정의(definition)한다고 표기했다. 
//함수 선언문이 평가되면 식별자가 암묵적으로 생성되고 함수 객체가 할당된다. 
//따라서 ECMAScript 사양에서도
//변수는 선언 variable declaration, 함수에는 정의 function definition라고 표현한다.

//함수 정의 방식 to define function
// 1. 선언문  함수만 정의 
function add(x,y){
    return x+y;
}
// 2. 표현식  함수를 변수에 선언  "함수 표현식 전체를 긁어서⬆️ 새로운 변수calcAge2에 저장했다. "
var add = function(x,y){
    return x+y;
}
// 3. Function 생성자 함수 
var add=new Function('x', 'y', 'return x+y');
// 4. 화살표 함수 (ES6)
var add = (x , y)=> x+y;
