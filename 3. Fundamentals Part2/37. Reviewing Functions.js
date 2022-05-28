//① 35. 예시에서 가져온 화살표함수 -> 함수 표현식 바꾸기  

const calcAge = function (birthYear){ //local variable to each function //4
    return 2037 - birthYear; //여기 변수 두 개를 다른 걸로 바꿔도 되지만 개념 구분하기//5
}

//매개변수가 birthYear로 같지만 둘이 아무 관련 없다 
//함수 밖에서 저 매개변수를 가질 수 있다 

const yearUntilRetirement = function(birthYear, firstName){ //2 
    const age = calcAge(birthYear); //3 
    const retirement = 65 - age; 

    if(retirement>0){
        return retirement; //이 결과 나오면 함수는 종료 
        console.log(`${firstName} already ${birthYear}`); //이미 위에 리턴결과가 나와서 콘솔은 무시 
    }else{
        return -1;
        console.log(`${firstName} executed`); //option+D⬆️ 리턴 위로 옮기면 콘솔결과도 뜬다. 
    }
}
console.log(yearUntilRetirement(1991, 'Jonas')); //1 
console.log(yearUntilRetirement(1970, 'Mike')); // 음수는 이미 은퇴한거라 -2를 -1로 바꿔주기


//⓶ review again. 3types of functions
// Declaration : it can be used before it's declared 
function myAge (birthYear){
    return 2023 - birthYear;
}

// Expressions :  a function value stored in a variable💾
const yourAge = function (birthYear) {
    return 2023 - birthYear;
}

// Arrow function : Great for a quick one-line functions. has no this keyword (more later...)
const ourAge = birthYear => 2023 - birthYear;

//③ Anatomy of a function
function functionName(parameter1, para2){ //parameters : placeholders to receive input vales. like local variables of a function 
    const variable = 2030 - parameter1; //42~44 function body : block of code that we want to reuse. Process the function's input data
    console.log(`${para2} is ${parameters1} years old`); 
    return variable;  //return statement to output a value from the function and terminate execution
}

const variable = functionName(1994, 'Ji')// calling, running or invoking the function, using ()
// the function has parameters

1994, 'Ji'
//arguments : actual values of function parameters, to input data