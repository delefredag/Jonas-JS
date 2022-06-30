'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1; // this logic supposed to be hidden behind question mark
let score = 20; //let : decrease , state variable 아래 또 써줌 state of our application
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) { //숫자 안 넣고 Check! 버튼 누르면 0,  'number'나온다 0은 falsy value
        //document.querySelector('.message').textContent = '⛔️No number!';
        displayMessage('⛔️No number!');
    
    // When player wins
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉Correct Number!';
        displayMessage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber; // BAAM 

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'; //'string'

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is wrong
        } else if (guess !== secretNumber) {
            if(score > 1){
                //document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📈Too low!';
                displayMessage(guess > secretNumber ? '📈Too high!' : '📈Too low!');
                score = score - 1;xw
                document.querySelector('.score').textContent = score;
            } else {
                //document.querySelector('.message').textContent = '💥 You lost the game!'; 
                displayMessage('💥 You lost the game!');
            }
        }

    
        
    //     // when guess is too high
    //     }else if (guess > secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈Too high!';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'; 
    //     }
        
    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈Too low!';
    //         score = score - 1;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game!'; 
    //     }
    //     document.querySelector('.score').textContent = score;
    // }
});

document.querySelector('.again')/* class*/ .addEventListener('click',function(){
    // initial score, quiz number, message
    score = 20; 
    let secretNumber = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.message').textContent = 'Start guessing...'; //copy initial message from html
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ''; //empty string is basically the absence of any value here. value anything 

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; //'string'
})

