// Function expression
const calcAge2 = function(birthYear){ 
    return 2037 - birthYear;
}

// Arrow function
 birthYear => 2037-birthYear; //이렇게 하면 화살표함수 끝나는데
//화살표 함수에 변수할당하면 still 표현식이 된다.
const calcAge3 =  birthYear => 2037-birthYear;
const age3 = calcAge3(1991);
console.log(age3);



//another function, 중괄호와 리턴을 더 써주는 화살표 함수 
const yearsUntilRetirement = birthYear=> { //더 많은 줄의 코드를 쓰기 위해 중괄호
    const age = 2037 - birthYear;
    const retirement = 65 - age; 
    return retirement;  //more than one line of code we need return 
}

console.log(yearsUntilRetirement(1991));


//인자가 2개거나 스트링이 필요할 때, 소괄호로(function, 다른인자firstName)
const longSentence = (birthYear, firstName)=> { //더 많은 줄의 코드를 쓰기 위해 중괄호
    const age = 2022 - birthYear;
    const retirement = 65 - age; 
   return `${firstName} retires in ${retirement}years`;
}

console.log(longSentence(1994, 'Kim'));
console.log(longSentence(1963, 'Mom'));

//식이 복잡해지면 애로우펑션 장점을 잃게 되는데 어떤 걸 쓰는게 장점일까? 답변도 여러가지/ 나중에 더 다뤄보기로 하자. 
