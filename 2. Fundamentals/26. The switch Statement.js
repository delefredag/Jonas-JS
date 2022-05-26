// 계속 else 쓸 필요가 없다 
// const day = 'sunday';   //여기를 바꾸면 결과 출력 가능 

switch(day) {
    case 'monday': // day === 'monday' 이게 먼데이면 아래들이 출력된다
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; 
    case 'tuesday' :
        console.log('Prepare theory videos');
        break;
    case 'wednesday' :
    case 'thursday' :
        console.log('Write code examples');
    case 'friday' :
        console.log('Record videos');
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}


// Ji ver 
const jiDay = 'wednesday'; 

switch(jiDay){
    case 'monday':
        console.log('I study coding👩🏻‍💻');
        break;
    case 'tuesday':
        console.log('I study English🇺🇸');
        break;
    case 'wednesday':
        console.log('I study Norwegian🇳🇴');
        break;
    case 'thursday':
        console.log('I do yoga🧘🏻‍♀️');
        break;
    case 'friday':
        console.log('I go running🏃🏻‍♀️💨');
        break;
    case 'saturday':
    case 'sunday':
        console.log('I meet you finally!');
        break;
    default:
        console.log('Not a valid day');
}


// Jonar ver 

const jonarDay = 'thursday';

switch(jonarDay){
    case 'monday':
        console.log('Jonar buys a car🚙');
        break;
    case 'tuesday':
        console.log('Jonar drives to pant🥫');
        break;
    case 'wednesday':
        console.log('Jonar plays a drum🥁');
    case 'thursday':
    case 'friday':
    case 'saturday':
    case 'sunday':
        console.log('fun juicy helg!✨');
        break;
}

// 💡break; 안 넣으면 monday를 전달받아도 
// 다음 요일인 화요일까지 출력된다. 
// 💡switch()에서 case 'tuesday'||'wednesday' 안되고 if/else로 표현
// 두가지 다른 syntax로 같은걸 표현했지만 switch는 가독성이 좋다. 

if (day === 'monday'){
    console.log('JavaScript');    
} else if (day === 'tuesday'){
    console.log('HTML');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('CSS');
} else if (day === 'friday'){
    console.log('Algorithms');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('Project');
} else {
    console.log('Not a valid day');
}